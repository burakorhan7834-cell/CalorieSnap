/**
 * Kalori Hesaplama Uygulaması - Kullanıcı Profili ve Tema Ayarları
 * Kullanıcı profil yönetimi, tema tercihleri ve ayarlar
 */

// Firebase yapılandırması ve fonksiyonları
import { 
  auth, 
  db, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc,
  serverTimestamp
} from './firebase-config.js';

// Tema ayarları için sabitler
const THEME_KEY = 'kalorihesaplama_theme';
const DEFAULT_THEME = 'light';

/**
 * Kullanıcı profil bilgilerini kaydeder
 * @param {string} userId - Kullanıcı ID'si
 * @param {Object} profileData - Profil verileri
 * @returns {Promise} - İşlem sonucu
 */
async function saveUserProfile(userId, profileData) {
  try {
    // Kullanıcı belgesini referans al
    const userRef = doc(db, "users", userId);
    
    // Mevcut profil bilgilerini kontrol et
    const userDoc = await getDoc(userRef);
    
    // Kaydedilecek verileri hazırla
    const dataToSave = {
      updatedAt: serverTimestamp()
    };
    
    // Profil verilerini ekle
    if (profileData.displayName) dataToSave.displayName = profileData.displayName;
    if (profileData.gender) dataToSave.gender = profileData.gender;
    if (profileData.birthdate) dataToSave.birthdate = profileData.birthdate;
    if (profileData.height) dataToSave.height = parseFloat(profileData.height);
    if (profileData.initialWeight) dataToSave.initialWeight = parseFloat(profileData.initialWeight);
    if (profileData.targetWeight) dataToSave.targetWeight = parseFloat(profileData.targetWeight);
    if (profileData.activityLevel) dataToSave.activityLevel = profileData.activityLevel;
    if (profileData.goal) dataToSave.goal = profileData.goal;
    if (profileData.preferredLanguage) dataToSave.preferredLanguage = profileData.preferredLanguage;
    
    // Kullanıcı belgesi yoksa oluştur, varsa güncelle
    if (!userDoc.exists()) {
      dataToSave.createdAt = serverTimestamp();
      await setDoc(userRef, dataToSave);
    } else {
      await updateDoc(userRef, dataToSave);
    }
    
    return {
      success: true,
      message: "Profil bilgileri başarıyla kaydedildi."
    };
  } catch (error) {
    console.error("Profil bilgileri kaydedilirken hata oluştu:", error);
    return {
      success: false,
      error: error.message || "Profil bilgileri kaydedilirken bir hata oluştu."
    };
  }
}

/**
 * Kullanıcı profil bilgilerini getirir
 * @param {string} userId - Kullanıcı ID'si
 * @returns {Promise} - Profil bilgileri
 */
async function getUserProfile(userId) {
  try {
    // Kullanıcı belgesini referans al
    const userRef = doc(db, "users", userId);
    
    // Belgeyi getir
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      return {
        success: false,
        error: "Kullanıcı profili bulunamadı."
      };
    }
    
    // Profil verilerini al
    const userData = userDoc.data();
    
    return {
      success: true,
      profile: {
        displayName: userData.displayName || "",
        gender: userData.gender || "",
        birthdate: userData.birthdate || "",
        height: userData.height || 0,
        initialWeight: userData.initialWeight || 0,
        targetWeight: userData.targetWeight || 0,
        activityLevel: userData.activityLevel || "",
        goal: userData.goal || "",
        preferredLanguage: userData.preferredLanguage || "",
        createdAt: userData.createdAt ? userData.createdAt.toDate() : null,
        updatedAt: userData.updatedAt ? userData.updatedAt.toDate() : null
      }
    };
  } catch (error) {
    console.error("Profil bilgileri getirilirken hata oluştu:", error);
    return {
      success: false,
      error: error.message || "Profil bilgileri getirilirken bir hata oluştu."
    };
  }
}

/**
 * Kullanıcının tercih ettiği temayı kaydeder
 * @param {string} theme - Tema ('light' veya 'dark')
 */
function saveThemePreference(theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

/**
 * Kullanıcının tercih ettiği temayı getirir
 * @returns {string} - Tema ('light' veya 'dark')
 */
function getThemePreference() {
  // LocalStorage'dan tema tercihini al
  const savedTheme = localStorage.getItem(THEME_KEY);
  
  // Kaydedilmiş tema yoksa sistem tercihini kontrol et
  if (!savedTheme) {
    // Sistem karanlık modu tercih ediyorsa 'dark' temasını kullan
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // Varsayılan tema
    return DEFAULT_THEME;
  }
  
  return savedTheme;
}

/**
 * Temayı uygular
 * @param {string} theme - Tema ('light' veya 'dark')
 */
function applyTheme(theme) {
  // HTML elementine tema sınıfını ekle/çıkar
  if (theme === 'dark') {
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('light-theme');
  } else {
    document.documentElement.classList.add('light-theme');
    document.documentElement.classList.remove('dark-theme');
  }
  
  // Meta tema rengini güncelle
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'dark' ? '#1a1a1a' : '#ffffff');
  }
}

/**
 * Tema değiştirme düğmesini başlat
 * @param {string} toggleButtonId - Tema değiştirme düğmesi ID'si
 */
function initThemeToggle(toggleButtonId) {
  const toggleButton = document.getElementById(toggleButtonId);
  if (!toggleButton) return;
  
  // Mevcut temayı al ve uygula
  const currentTheme = getThemePreference();
  applyTheme(currentTheme);
  
  // Düğme durumunu güncelle
  updateThemeToggleButton(toggleButton, currentTheme);
  
  // Tema değiştirme olayını dinle
  toggleButton.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    saveThemePreference(newTheme);
    updateThemeToggleButton(toggleButton, newTheme);
  });
}

/**
 * Tema değiştirme düğmesini günceller
 * @param {HTMLElement} button - Düğme elementi
 * @param {string} theme - Mevcut tema
 */
function updateThemeToggleButton(button, theme) {
  // Düğme içeriğini güncelle (ikon veya metin)
  if (theme === 'dark') {
    button.innerHTML = '<i class="fas fa-sun"></i>';
    button.setAttribute('title', 'Açık Temaya Geç');
  } else {
    button.innerHTML = '<i class="fas fa-moon"></i>';
    button.setAttribute('title', 'Koyu Temaya Geç');
  }
}

/**
 * Kullanıcı tercihlerini başlat
 */
function initUserPreferences() {
  // Tema tercihini uygula
  const currentTheme = getThemePreference();
  applyTheme(currentTheme);
  
  // Tema değiştirme düğmesini başlat
  initThemeToggle('themeToggle');
  
  // Oturum durumunu dinle
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      // Kullanıcı oturum açmışsa profil bilgilerini getir
      const profileResult = await getUserProfile(user.uid);
      
      if (profileResult.success && profileResult.profile.preferredLanguage) {
        // Kullanıcının tercih ettiği dili uygula
        if (typeof changeLanguage === 'function') {
          changeLanguage(profileResult.profile.preferredLanguage);
        }
      }
    }
  });
}

// Dışa aktarılan fonksiyonlar
export {
  saveUserProfile,
  getUserProfile,
  saveThemePreference,
  getThemePreference,
  applyTheme,
  initThemeToggle,
  initUserPreferences
};