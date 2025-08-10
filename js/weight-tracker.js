/**
 * Kalori Hesaplama Uygulaması - Kilo Takip ve Grafik Modülü
 * Firebase kullanarak kullanıcı kilo takibi ve Chart.js ile grafik gösterimi
 */

// Firebase yapılandırması ve fonksiyonları
import { 
  auth, 
  db, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  deleteDoc,
  collection,
  query,
  where,
  orderBy,
  getDocs,
  addDoc,
  Timestamp,
  serverTimestamp
} from './firebase-config.js';

/**
 * Kullanıcı kilo girişi ekler
 * @param {string} userId - Kullanıcı ID'si
 * @param {number} weight - Kilo (kg)
 * @param {Date} date - Tarih
 * @param {string} note - Not (opsiyonel)
 * @returns {Promise} - İşlem sonucu
 */
async function addWeightEntry(userId, weight, date = new Date(), note = "") {
  try {
    // Kilo girişi için yeni bir belge oluştur
    const weightEntryRef = collection(db, "users", userId, "weightEntries");
    
    // Kilo girişi verisini hazırla
    const weightData = {
      weight: parseFloat(weight),
      date: Timestamp.fromDate(date),
      note: note,
      createdAt: serverTimestamp()
    };
    
    // Veriyi Firestore'a ekle
    const docRef = await addDoc(weightEntryRef, weightData);
    
    return {
      success: true,
      id: docRef.id,
      message: "Kilo girişi başarıyla eklendi."
    };
  } catch (error) {
    console.error("Kilo girişi eklenirken hata oluştu:", error);
    return {
      success: false,
      error: error.message || "Kilo girişi eklenirken bir hata oluştu."
    };
  }
}

/**
 * Kullanıcının kilo girişlerini getirir
 * @param {string} userId - Kullanıcı ID'si
 * @param {number} limit - Maksimum giriş sayısı (varsayılan: 100)
 * @returns {Promise} - Kilo girişleri listesi
 */
async function getWeightEntries(userId, limit = 100) {
  try {
    // Kilo girişleri koleksiyonunu sorgula
    const weightEntriesRef = collection(db, "users", userId, "weightEntries");
    const q = query(weightEntriesRef, orderBy("date", "desc"), limit(limit));
    
    // Sorguyu çalıştır
    const querySnapshot = await getDocs(q);
    
    // Sonuçları işle
    const entries = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      entries.push({
        id: doc.id,
        weight: data.weight,
        date: data.date.toDate(),
        note: data.note || "",
        createdAt: data.createdAt ? data.createdAt.toDate() : new Date()
      });
    });
    
    // Tarihe göre sırala (eskiden yeniye)
    entries.sort((a, b) => a.date - b.date);
    
    return {
      success: true,
      entries: entries
    };
  } catch (error) {
    console.error("Kilo girişleri getirilirken hata oluştu:", error);
    return {
      success: false,
      error: error.message || "Kilo girişleri getirilirken bir hata oluştu."
    };
  }
}

/**
 * Belirli bir kilo girişini günceller
 * @param {string} userId - Kullanıcı ID'si
 * @param {string} entryId - Kilo girişi ID'si
 * @param {Object} updateData - Güncellenecek veriler
 * @returns {Promise} - İşlem sonucu
 */
async function updateWeightEntry(userId, entryId, updateData) {
  try {
    // Güncellenecek belgeyi referans al
    const entryRef = doc(db, "users", userId, "weightEntries", entryId);
    
    // Güncellenecek verileri hazırla
    const updates = {};
    
    if (updateData.weight !== undefined) {
      updates.weight = parseFloat(updateData.weight);
    }
    
    if (updateData.date !== undefined) {
      updates.date = Timestamp.fromDate(updateData.date);
    }
    
    if (updateData.note !== undefined) {
      updates.note = updateData.note;
    }
    
    // Belgeyi güncelle
    await updateDoc(entryRef, updates);
    
    return {
      success: true,
      message: "Kilo girişi başarıyla güncellendi."
    };
  } catch (error) {
    console.error("Kilo girişi güncellenirken hata oluştu:", error);
    return {
      success: false,
      error: error.message || "Kilo girişi güncellenirken bir hata oluştu."
    };
  }
}

/**
 * Belirli bir kilo girişini siler
 * @param {string} userId - Kullanıcı ID'si
 * @param {string} entryId - Kilo girişi ID'si
 * @returns {Promise} - İşlem sonucu
 */
async function deleteWeightEntry(userId, entryId) {
  try {
    // Silinecek belgeyi referans al
    const entryRef = doc(db, "users", userId, "weightEntries", entryId);
    
    // Belgeyi sil
    await deleteDoc(entryRef);
    
    return {
      success: true,
      message: "Kilo girişi başarıyla silindi."
    };
  } catch (error) {
    console.error("Kilo girişi silinirken hata oluştu:", error);
    return {
      success: false,
      error: error.message || "Kilo girişi silinirken bir hata oluştu."
    };
  }
}

/**
 * Kullanıcının kilo değişim istatistiklerini hesaplar
 * @param {Array} entries - Kilo girişleri listesi
 * @returns {Object} - Kilo değişim istatistikleri
 */
function calculateWeightStats(entries) {
  if (!entries || entries.length === 0) {
    return {
      initialWeight: 0,
      currentWeight: 0,
      weightChange: 0,
      percentChange: 0,
      avgWeeklyChange: 0,
      timeSpan: 0
    };
  }
  
  // Tarihe göre sırala (eskiden yeniye)
  const sortedEntries = [...entries].sort((a, b) => a.date - b.date);
  
  const initialWeight = sortedEntries[0].weight;
  const currentWeight = sortedEntries[sortedEntries.length - 1].weight;
  const weightChange = currentWeight - initialWeight;
  const percentChange = (weightChange / initialWeight) * 100;
  
  // Zaman aralığını hesapla (gün cinsinden)
  const firstDate = sortedEntries[0].date;
  const lastDate = sortedEntries[sortedEntries.length - 1].date;
  const timeSpanDays = Math.round((lastDate - firstDate) / (1000 * 60 * 60 * 24));
  
  // Haftalık ortalama değişim
  const weeklyChange = timeSpanDays > 0 ? (weightChange / timeSpanDays) * 7 : 0;
  
  return {
    initialWeight: initialWeight,
    currentWeight: currentWeight,
    weightChange: weightChange,
    percentChange: percentChange,
    avgWeeklyChange: weeklyChange,
    timeSpan: timeSpanDays
  };
}

/**
 * Chart.js ile kilo takip grafiği oluşturur
 * @param {string} canvasId - Canvas elementi ID'si
 * @param {Array} entries - Kilo girişleri listesi
 * @param {string} language - Dil kodu ("tr", "en", "ru", "es", "de")
 * @returns {Object} - Chart.js grafik nesnesi
 */
function createWeightChart(canvasId, entries, language = "tr") {
  // Canvas elementini al
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.error(`'${canvasId}' ID'li canvas elementi bulunamadı.`);
    return null;
  }
  
  // Dil çevirileri
  const translations = {
    "tr": {
      title: "Kilo Takip Grafiği",
      yAxisLabel: "Kilo (kg)",
      xAxisLabel: "Tarih",
      tooltip: "Kilo"
    },
    "en": {
      title: "Weight Tracking Chart",
      yAxisLabel: "Weight (kg)",
      xAxisLabel: "Date",
      tooltip: "Weight"
    },
    "ru": {
      title: "График отслеживания веса",
      yAxisLabel: "Вес (кг)",
      xAxisLabel: "Дата",
      tooltip: "Вес"
    },
    "es": {
      title: "Gráfico de seguimiento de peso",
      yAxisLabel: "Peso (kg)",
      xAxisLabel: "Fecha",
      tooltip: "Peso"
    },
    "de": {
      title: "Gewichtsverfolgungsdiagramm",
      yAxisLabel: "Gewicht (kg)",
      xAxisLabel: "Datum",
      tooltip: "Gewicht"
    }
  };
  
  // Seçilen dil yoksa varsayılan olarak İngilizce kullan
  const selectedLanguage = translations[language] ? language : "en";
  const labels = translations[selectedLanguage];
  
  // Tarihe göre sırala (eskiden yeniye)
  const sortedEntries = [...entries].sort((a, b) => a.date - b.date);
  
  // Grafik verilerini hazırla
  const dates = sortedEntries.map(entry => entry.date);
  const weights = sortedEntries.map(entry => entry.weight);
  
  // Tarih formatını ayarla
  const dateFormatter = new Intl.DateTimeFormat(selectedLanguage, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  const formattedDates = dates.map(date => dateFormatter.format(date));
  
  // Grafik oluştur
  const ctx = canvas.getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: formattedDates,
      datasets: [{
        label: labels.tooltip,
        data: weights,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: labels.title,
          font: {
            size: 18
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${labels.tooltip}: ${context.parsed.y} kg`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: labels.yAxisLabel
          },
          ticks: {
            callback: function(value) {
              return value + ' kg';
            }
          }
        },
        x: {
          title: {
            display: true,
            text: labels.xAxisLabel
          }
        }
      }
    }
  });
  
  return chart;
}

// Dışa aktarılan fonksiyonlar
export {
  addWeightEntry,
  getWeightEntries,
  updateWeightEntry,
  deleteWeightEntry,
  calculateWeightStats,
  createWeightChart
};