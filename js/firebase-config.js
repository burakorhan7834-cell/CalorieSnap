/**
 * Firebase yapılandırma dosyası
 * Kullanıcı kimlik doğrulama ve veritabanı işlemleri için gerekli yapılandırma
 */

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: process.env.FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.FIREBASE_APP_ID || "YOUR_APP_ID",
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || "YOUR_MEASUREMENT_ID"
};

// Firebase uygulamasını başlatma
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Kullanıcı kimlik doğrulama işlemleri
const userAuth = {
  // Kullanıcı kaydı
  register: async (email, password) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      console.error("Kayıt hatası:", error);
      return { success: false, error: error.message };
    }
  },
  
  // Kullanıcı girişi
  login: async (email, password) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      console.error("Giriş hatası:", error);
      return { success: false, error: error.message };
    }
  },
  
  // Kullanıcı çıkışı
  logout: async () => {
    try {
      await auth.signOut();
      return { success: true };
    } catch (error) {
      console.error("Çıkış hatası:", error);
      return { success: false, error: error.message };
    }
  },
  
  // Şifre sıfırlama
  resetPassword: async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      return { success: true };
    } catch (error) {
      console.error("Şifre sıfırlama hatası:", error);
      return { success: false, error: error.message };
    }
  },
  
  // Kullanıcı durumu değişikliği izleme
  onAuthStateChanged: (callback) => {
    return auth.onAuthStateChanged(callback);
  },
  
  // Mevcut kullanıcıyı alma
  getCurrentUser: () => {
    return auth.currentUser;
  }
};

// Kilo takibi işlemleri
const weightTracking = {
  // Kilo verisi ekleme
  addWeightEntry: async (userId, date, weight, notes = "") => {
    try {
      const weightData = {
        date: date,
        weight: parseFloat(weight),
        notes: notes,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };
      
      await db.collection("users").doc(userId).collection("weightEntries").add(weightData);
      return { success: true };
    } catch (error) {
      console.error("Kilo verisi ekleme hatası:", error);
      return { success: false, error: error.message };
    }
  },
  
  // Kilo verilerini getirme
  getWeightEntries: async (userId) => {
    try {
      const snapshot = await db.collection("users").doc(userId).collection("weightEntries")
        .orderBy("date", "asc")
        .get();
      
      const entries = [];
      snapshot.forEach(doc => {
        entries.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return { success: true, entries };
    } catch (error) {
      console.error("Kilo verilerini getirme hatası:", error);
      return { success: false, error: error.message };
    }
  },
  
  // Kilo verisi güncelleme
  updateWeightEntry: async (userId, entryId, data) => {
    try {
      await db.collection("users").doc(userId).collection("weightEntries").doc(entryId).update(data);
      return { success: true };
    } catch (error) {
      console.error("Kilo verisi güncelleme hatası:", error);
      return { success: false, error: error.message };
    }
  },
  
  // Kilo verisi silme
  deleteWeightEntry: async (userId, entryId) => {
    try {
      await db.collection("users").doc(userId).collection("weightEntries").doc(entryId).delete();
      return { success: true };
    } catch (error) {
      console.error("Kilo verisi silme hatası:", error);
      return { success: false, error: error.message };
    }
  },
  
  // Kullanıcı profil bilgilerini kaydetme
  saveUserProfile: async (userId, profileData) => {
    try {
      await db.collection("users").doc(userId).set(profileData, { merge: true });
      return { success: true };
    } catch (error) {
      console.error("Profil kaydetme hatası:", error);
      return { success: false, error: error.message };
    }
  },
  
  // Kullanıcı profil bilgilerini getirme
  getUserProfile: async (userId) => {
    try {
      const doc = await db.collection("users").doc(userId).get();
      if (doc.exists) {
        return { success: true, profile: doc.data() };
      } else {
        return { success: true, profile: null };
      }
    } catch (error) {
      console.error("Profil getirme hatası:", error);
      return { success: false, error: error.message };
    }
  }
};

// Yemek fotoğrafı yükleme ve işleme
const foodPhotoProcessing = {
  // Fotoğraf yükleme
  uploadFoodPhoto: async (userId, file) => {
    try {
      const fileExtension = file.name.split('.').pop();
      const fileName = `${userId}_${Date.now()}.${fileExtension}`;
      const storageRef = storage.ref(`food_photos/${userId}/${fileName}`);
      
      await storageRef.put(file);
      const downloadURL = await storageRef.getDownloadURL();
      
      return { success: true, url: downloadURL, fileName };
    } catch (error) {
      console.error("Fotoğraf yükleme hatası:", error);
      return { success: false, error: error.message };
    }
  },
  
  // Yemek günlüğüne kaydetme
  saveFoodEntry: async (userId, foodData) => {
    try {
      const entry = {
        ...foodData,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };
      
      await db.collection("users").doc(userId).collection("foodEntries").add(entry);
      return { success: true };
    } catch (error) {
      console.error("Yemek verisi kaydetme hatası:", error);
      return { success: false, error: error.message };
    }
  },
  
  // Yemek günlüğü verilerini getirme
  getFoodEntries: async (userId, date) => {
    try {
      let query = db.collection("users").doc(userId).collection("foodEntries");
      
      if (date) {
        // Belirli bir tarihe ait verileri getir
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);
        
        query = query.where("date", ">=", startOfDay).where("date", "<=", endOfDay);
      }
      
      const snapshot = await query.orderBy("timestamp", "desc").get();
      
      const entries = [];
      snapshot.forEach(doc => {
        entries.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return { success: true, entries };
    } catch (error) {
      console.error("Yemek verilerini getirme hatası:", error);
      return { success: false, error: error.message };
    }
  }
};

export { app, auth, db, storage, userAuth, weightTracking, foodPhotoProcessing };