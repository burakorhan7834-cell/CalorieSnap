/**
 * Kalori Hesaplama Uygulaması - Ek Hesaplayıcılar
 * Makro besin, yağ oranı, su tüketimi ve kalori yakma hesaplayıcıları
 */

/**
 * Makro besin hesaplayıcı
 * @param {number} calories - Günlük kalori ihtiyacı
 * @param {string} goal - Hedef ("weight-loss", "maintenance", "muscle-gain")
 * @param {string} preference - Beslenme tercihi ("balanced", "low-carb", "high-protein")
 * @returns {Object} - Protein, karbonhidrat ve yağ miktarları (gram)
 */
function calculateMacros(calories, goal, preference) {
  // Varsayılan makro oranları (protein/karbonhidrat/yağ)
  let proteinRatio, carbRatio, fatRatio;
  
  // Hedef ve tercihe göre makro oranlarını ayarla
  switch (goal) {
    case "weight-loss":
      if (preference === "low-carb") {
        proteinRatio = 0.40; // %40 protein
        carbRatio = 0.20;     // %20 karbonhidrat
        fatRatio = 0.40;      // %40 yağ
      } else if (preference === "high-protein") {
        proteinRatio = 0.45; // %45 protein
        carbRatio = 0.30;     // %30 karbonhidrat
        fatRatio = 0.25;      // %25 yağ
      } else { // balanced
        proteinRatio = 0.35; // %35 protein
        carbRatio = 0.35;    // %35 karbonhidrat
        fatRatio = 0.30;     // %30 yağ
      }
      break;
      
    case "muscle-gain":
      if (preference === "low-carb") {
        proteinRatio = 0.35; // %35 protein
        carbRatio = 0.30;    // %30 karbonhidrat
        fatRatio = 0.35;     // %35 yağ
      } else if (preference === "high-protein") {
        proteinRatio = 0.40; // %40 protein
        carbRatio = 0.40;    // %40 karbonhidrat
        fatRatio = 0.20;     // %20 yağ
      } else { // balanced
        proteinRatio = 0.30; // %30 protein
        carbRatio = 0.45;    // %45 karbonhidrat
        fatRatio = 0.25;     // %25 yağ
      }
      break;
      
    default: // maintenance
      if (preference === "low-carb") {
        proteinRatio = 0.30; // %30 protein
        carbRatio = 0.30;    // %30 karbonhidrat
        fatRatio = 0.40;     // %40 yağ
      } else if (preference === "high-protein") {
        proteinRatio = 0.35; // %35 protein
        carbRatio = 0.35;    // %35 karbonhidrat
        fatRatio = 0.30;     // %30 yağ
      } else { // balanced
        proteinRatio = 0.25; // %25 protein
        carbRatio = 0.50;    // %50 karbonhidrat
        fatRatio = 0.25;     // %25 yağ
      }
      break;
  }
  
  // Kalori değerlerini gram cinsine çevir
  // 1g protein = 4 kalori, 1g karbonhidrat = 4 kalori, 1g yağ = 9 kalori
  const proteinCalories = calories * proteinRatio;
  const carbCalories = calories * carbRatio;
  const fatCalories = calories * fatRatio;
  
  const proteinGrams = Math.round(proteinCalories / 4);
  const carbGrams = Math.round(carbCalories / 4);
  const fatGrams = Math.round(fatCalories / 9);
  
  return {
    protein: proteinGrams,
    carbs: carbGrams,
    fat: fatGrams,
    ratios: {
      protein: Math.round(proteinRatio * 100),
      carbs: Math.round(carbRatio * 100),
      fat: Math.round(fatRatio * 100)
    }
  };
}

/**
 * Vücut yağ oranı hesaplayıcı (U.S. Navy Method)
 * @param {string} gender - Cinsiyet ("male" veya "female")
 * @param {number} weight - Kilo (kg)
 * @param {number} height - Boy (cm)
 * @param {number} waist - Bel çevresi (cm)
 * @param {number} neck - Boyun çevresi (cm)
 * @param {number} hip - Kalça çevresi (cm, sadece kadınlar için)
 * @returns {number} - Vücut yağ oranı (yüzde)
 */
function calculateBodyFat(gender, weight, height, waist, neck, hip = 0) {
  // U.S. Navy formülü
  let bodyFatPercentage;
  
  if (gender.toLowerCase() === "male") {
    // Erkekler için formül
    bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  } else {
    // Kadınlar için formül (kalça ölçüsü gerekli)
    bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
  }
  
  // Sonucu 1 ondalık basamağa yuvarla
  return Math.round(bodyFatPercentage * 10) / 10;
}

/**
 * Alternatif vücut yağ oranı hesaplayıcı (BMI tabanlı)
 * @param {string} gender - Cinsiyet ("male" veya "female")
 * @param {number} weight - Kilo (kg)
 * @param {number} height - Boy (cm)
 * @param {number} age - Yaş
 * @returns {number} - Tahmini vücut yağ oranı (yüzde)
 */
function calculateBodyFatBMI(gender, weight, height, age) {
  // BMI hesapla
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  
  // Deurenberg formülü
  let bodyFatPercentage;
  
  if (gender.toLowerCase() === "male") {
    bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - (10.8 * 1) - 5.4;
  } else {
    bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - (10.8 * 0) - 5.4;
  }
  
  // Sonucu 1 ondalık basamağa yuvarla
  return Math.round(bodyFatPercentage * 10) / 10;
}

/**
 * Su tüketim hesaplayıcı
 * @param {number} weight - Kilo (kg)
 * @param {number} activityLevel - Aktivite seviyesi (1-5)
 * @param {boolean} isPregnant - Hamilelik durumu
 * @param {boolean} isBreastfeeding - Emzirme durumu
 * @param {number} temperature - Ortam sıcaklığı (°C)
 * @returns {number} - Günlük tavsiye edilen su miktarı (ml)
 */
function calculateWaterIntake(weight, activityLevel, isPregnant = false, isBreastfeeding = false, temperature = 25) {
  // Temel hesaplama: Kilo başına 30-35 ml
  let waterIntake = weight * 33;
  
  // Aktivite seviyesine göre ayarlama
  const activityMultiplier = {
    1: 1.0,  // Sedanter
    2: 1.1,  // Hafif aktif
    3: 1.2,  // Orta aktif
    4: 1.3,  // Çok aktif
    5: 1.4   // Ekstra aktif
  };
  
  waterIntake *= activityMultiplier[activityLevel] || 1.0;
  
  // Hamilelik veya emzirme durumuna göre ayarlama
  if (isPregnant) {
    waterIntake += 300; // Hamilelik için ek 300 ml
  }
  
  if (isBreastfeeding) {
    waterIntake += 700; // Emzirme için ek 700 ml
  }
  
  // Sıcaklık ayarlaması (25°C üzerindeki her derece için %10 artış)
  if (temperature > 25) {
    const tempMultiplier = 1 + ((temperature - 25) * 0.02);
    waterIntake *= tempMultiplier;
  }
  
  // En az 1500 ml, en fazla 4000 ml olacak şekilde sınırla
  waterIntake = Math.max(1500, Math.min(4000, waterIntake));
  
  // 100 ml'ye yuvarla
  return Math.round(waterIntake / 100) * 100;
}

/**
 * Kalori yakma hesaplayıcı
 * @param {number} weight - Kilo (kg)
 * @param {number} duration - Aktivite süresi (dakika)
 * @param {string} activity - Aktivite türü
 * @returns {number} - Yakılan tahmini kalori miktarı
 */
function calculateCaloriesBurned(weight, duration, activity) {
  // MET (Metabolic Equivalent of Task) değerleri
  const metValues = {
    // Düşük yoğunluklu aktiviteler
    "walking-slow": 2.5,      // Yavaş yürüyüş (3 km/saat)
    "walking-moderate": 3.5,  // Normal yürüyüş (5 km/saat)
    "walking-fast": 5.0,      // Hızlı yürüyüş (6.5 km/saat)
    "cycling-light": 4.0,     // Hafif bisiklet
    "cycling-moderate": 8.0,  // Orta yoğunluklu bisiklet
    "swimming-light": 6.0,    // Hafif yüzme
    "swimming-moderate": 8.0, // Orta yoğunluklu yüzme
    "yoga": 3.0,              // Yoga
    "pilates": 3.5,           // Pilates
    "stretching": 2.5,        // Esneme
    
    // Orta yoğunluklu aktiviteler
    "jogging": 7.0,           // Hafif koşu
    "running-moderate": 10.0, // Orta yoğunluklu koşu
    "running-fast": 12.5,     // Hızlı koşu
    "aerobics": 7.0,          // Aerobik
    "dancing": 5.0,           // Dans
    "hiking": 6.0,            // Doğa yürüyüşü
    "tennis": 7.0,            // Tenis
    "basketball": 8.0,        // Basketbol
    "soccer": 7.0,            // Futbol
    "volleyball": 4.0,        // Voleybol
    
    // Yüksek yoğunluklu aktiviteler
    "hiit": 10.0,             // Yüksek yoğunluklu interval antrenman
    "crossfit": 12.0,         // CrossFit
    "weightlifting": 6.0,     // Ağırlık kaldırma
    "circuit-training": 8.0,  // Devre antrenmanı
    "boxing": 9.0,            // Boks
    "martial-arts": 10.0,     // Dövüş sanatları
    "rowing": 7.0,            // Kürek
    "stair-climbing": 9.0,    // Merdiven çıkma
    "elliptical": 5.0,        // Eliptik bisiklet
    
    // Günlük aktiviteler
    "housework": 3.5,         // Ev işleri
    "gardening": 4.0,         // Bahçe işleri
    "shopping": 2.5,          // Alışveriş
    "cooking": 2.5,           // Yemek pişirme
    "office-work": 1.5,       // Ofis işi
    "sleeping": 1.0,          // Uyuma
    "standing": 1.5,          // Ayakta durma
    "sitting": 1.0            // Oturma
  };
  
  // Aktivite MET değerini al, yoksa varsayılan olarak 3.0 kullan
  const met = metValues[activity] || 3.0;
  
  // Kalori hesaplama formülü: MET * Ağırlık (kg) * Süre (saat)
  // 1 MET = 1 kcal/kg/saat
  const durationInHours = duration / 60;
  const caloriesBurned = met * weight * durationInHours;
  
  // Sonucu tam sayıya yuvarla
  return Math.round(caloriesBurned);
}

/**
 * Aktivite listesi döndürür
 * @param {string} language - Dil kodu ("tr", "en", "ru", "es", "de")
 * @returns {Array} - Aktivite listesi
 */
function getActivityList(language = "tr") {
  // Aktivite kategorileri ve çevirileri
  const categories = {
    "tr": {
      "low": "Düşük Yoğunluklu Aktiviteler",
      "medium": "Orta Yoğunluklu Aktiviteler",
      "high": "Yüksek Yoğunluklu Aktiviteler",
      "daily": "Günlük Aktiviteler"
    },
    "en": {
      "low": "Low Intensity Activities",
      "medium": "Medium Intensity Activities",
      "high": "High Intensity Activities",
      "daily": "Daily Activities"
    },
    "ru": {
      "low": "Активности низкой интенсивности",
      "medium": "Активности средней интенсивности",
      "high": "Активности высокой интенсивности",
      "daily": "Повседневная активность"
    },
    "es": {
      "low": "Actividades de baja intensidad",
      "medium": "Actividades de intensidad media",
      "high": "Actividades de alta intensidad",
      "daily": "Actividades diarias"
    },
    "de": {
      "low": "Aktivitäten mit niedriger Intensität",
      "medium": "Aktivitäten mit mittlerer Intensität",
      "high": "Aktivitäten mit hoher Intensität",
      "daily": "Tägliche Aktivitäten"
    }
  };
  
  // Aktivite adları ve çevirileri
  const activities = {
    "tr": {
      "walking-slow": "Yavaş Yürüyüş",
      "walking-moderate": "Normal Yürüyüş",
      "walking-fast": "Hızlı Yürüyüş",
      "cycling-light": "Hafif Bisiklet",
      "cycling-moderate": "Orta Yoğunluklu Bisiklet",
      "swimming-light": "Hafif Yüzme",
      "swimming-moderate": "Orta Yoğunluklu Yüzme",
      "yoga": "Yoga",
      "pilates": "Pilates",
      "stretching": "Esneme",
      "jogging": "Hafif Koşu",
      "running-moderate": "Orta Yoğunluklu Koşu",
      "running-fast": "Hızlı Koşu",
      "aerobics": "Aerobik",
      "dancing": "Dans",
      "hiking": "Doğa Yürüyüşü",
      "tennis": "Tenis",
      "basketball": "Basketbol",
      "soccer": "Futbol",
      "volleyball": "Voleybol",
      "hiit": "Yüksek Yoğunluklu Interval Antrenman",
      "crossfit": "CrossFit",
      "weightlifting": "Ağırlık Kaldırma",
      "circuit-training": "Devre Antrenmanı",
      "boxing": "Boks",
      "martial-arts": "Dövüş Sanatları",
      "rowing": "Kürek",
      "stair-climbing": "Merdiven Çıkma",
      "elliptical": "Eliptik Bisiklet",
      "housework": "Ev İşleri",
      "gardening": "Bahçe İşleri",
      "shopping": "Alışveriş",
      "cooking": "Yemek Pişirme",
      "office-work": "Ofis İşi",
      "sleeping": "Uyuma",
      "standing": "Ayakta Durma",
      "sitting": "Oturma"
    },
    "en": {
      "walking-slow": "Slow Walking",
      "walking-moderate": "Moderate Walking",
      "walking-fast": "Fast Walking",
      "cycling-light": "Light Cycling",
      "cycling-moderate": "Moderate Cycling",
      "swimming-light": "Light Swimming",
      "swimming-moderate": "Moderate Swimming",
      "yoga": "Yoga",
      "pilates": "Pilates",
      "stretching": "Stretching",
      "jogging": "Jogging",
      "running-moderate": "Moderate Running",
      "running-fast": "Fast Running",
      "aerobics": "Aerobics",
      "dancing": "Dancing",
      "hiking": "Hiking",
      "tennis": "Tennis",
      "basketball": "Basketball",
      "soccer": "Soccer",
      "volleyball": "Volleyball",
      "hiit": "High Intensity Interval Training",
      "crossfit": "CrossFit",
      "weightlifting": "Weightlifting",
      "circuit-training": "Circuit Training",
      "boxing": "Boxing",
      "martial-arts": "Martial Arts",
      "rowing": "Rowing",
      "stair-climbing": "Stair Climbing",
      "elliptical": "Elliptical",
      "housework": "Housework",
      "gardening": "Gardening",
      "shopping": "Shopping",
      "cooking": "Cooking",
      "office-work": "Office Work",
      "sleeping": "Sleeping",
      "standing": "Standing",
      "sitting": "Sitting"
    },
    "ru": {
      "walking-slow": "Медленная ходьба",
      "walking-moderate": "Умеренная ходьба",
      "walking-fast": "Быстрая ходьба",
      "cycling-light": "Легкая езда на велосипеде",
      "cycling-moderate": "Умеренная езда на велосипеде",
      "swimming-light": "Легкое плавание",
      "swimming-moderate": "Умеренное плавание",
      "yoga": "Йога",
      "pilates": "Пилатес",
      "stretching": "Растяжка",
      "jogging": "Легкий бег",
      "running-moderate": "Умеренный бег",
      "running-fast": "Быстрый бег",
      "aerobics": "Аэробика",
      "dancing": "Танцы",
      "hiking": "Пеший туризм",
      "tennis": "Теннис",
      "basketball": "Баскетбол",
      "soccer": "Футбол",
      "volleyball": "Волейбол",
      "hiit": "Высокоинтенсивная интервальная тренировка",
      "crossfit": "Кроссфит",
      "weightlifting": "Поднятие тяжестей",
      "circuit-training": "Круговая тренировка",
      "boxing": "Бокс",
      "martial-arts": "Боевые искусства",
      "rowing": "Гребля",
      "stair-climbing": "Подъем по лестнице",
      "elliptical": "Эллиптический тренажер",
      "housework": "Домашняя работа",
      "gardening": "Садоводство",
      "shopping": "Покупки",
      "cooking": "Приготовление пищи",
      "office-work": "Офисная работа",
      "sleeping": "Сон",
      "standing": "Стояние",
      "sitting": "Сидение"
    },
    "es": {
      "walking-slow": "Caminata lenta",
      "walking-moderate": "Caminata moderada",
      "walking-fast": "Caminata rápida",
      "cycling-light": "Ciclismo ligero",
      "cycling-moderate": "Ciclismo moderado",
      "swimming-light": "Natación ligera",
      "swimming-moderate": "Natación moderada",
      "yoga": "Yoga",
      "pilates": "Pilates",
      "stretching": "Estiramientos",
      "jogging": "Trote",
      "running-moderate": "Carrera moderada",
      "running-fast": "Carrera rápida",
      "aerobics": "Aeróbicos",
      "dancing": "Baile",
      "hiking": "Senderismo",
      "tennis": "Tenis",
      "basketball": "Baloncesto",
      "soccer": "Fútbol",
      "volleyball": "Voleibol",
      "hiit": "Entrenamiento de intervalos de alta intensidad",
      "crossfit": "CrossFit",
      "weightlifting": "Levantamiento de pesas",
      "circuit-training": "Entrenamiento en circuito",
      "boxing": "Boxeo",
      "martial-arts": "Artes marciales",
      "rowing": "Remo",
      "stair-climbing": "Subir escaleras",
      "elliptical": "Elíptica",
      "housework": "Tareas domésticas",
      "gardening": "Jardinería",
      "shopping": "Compras",
      "cooking": "Cocinar",
      "office-work": "Trabajo de oficina",
      "sleeping": "Dormir",
      "standing": "Estar de pie",
      "sitting": "Estar sentado"
    },
    "de": {
      "walking-slow": "Langsames Gehen",
      "walking-moderate": "Moderates Gehen",
      "walking-fast": "Schnelles Gehen",
      "cycling-light": "Leichtes Radfahren",
      "cycling-moderate": "Moderates Radfahren",
      "swimming-light": "Leichtes Schwimmen",
      "swimming-moderate": "Moderates Schwimmen",
      "yoga": "Yoga",
      "pilates": "Pilates",
      "stretching": "Dehnen",
      "jogging": "Joggen",
      "running-moderate": "Moderates Laufen",
      "running-fast": "Schnelles Laufen",
      "aerobics": "Aerobic",
      "dancing": "Tanzen",
      "hiking": "Wandern",
      "tennis": "Tennis",
      "basketball": "Basketball",
      "soccer": "Fußball",
      "volleyball": "Volleyball",
      "hiit": "Hochintensives Intervalltraining",
      "crossfit": "CrossFit",
      "weightlifting": "Gewichtheben",
      "circuit-training": "Zirkeltraining",
      "boxing": "Boxen",
      "martial-arts": "Kampfkunst",
      "rowing": "Rudern",
      "stair-climbing": "Treppensteigen",
      "elliptical": "Ellipsentrainer",
      "housework": "Hausarbeit",
      "gardening": "Gartenarbeit",
      "shopping": "Einkaufen",
      "cooking": "Kochen",
      "office-work": "Büroarbeit",
      "sleeping": "Schlafen",
      "standing": "Stehen",
      "sitting": "Sitzen"
    }
  };
  
  // Seçilen dil yoksa varsayılan olarak İngilizce kullan
  const selectedLanguage = categories[language] ? language : "en";
  
  // Aktivite listesini kategorilere göre oluştur
  return [
    {
      category: categories[selectedLanguage].low,
      activities: [
        { id: "walking-slow", name: activities[selectedLanguage]["walking-slow"] },
        { id: "walking-moderate", name: activities[selectedLanguage]["walking-moderate"] },
        { id: "walking-fast", name: activities[selectedLanguage]["walking-fast"] },
        { id: "cycling-light", name: activities[selectedLanguage]["cycling-light"] },
        { id: "cycling-moderate", name: activities[selectedLanguage]["cycling-moderate"] },
        { id: "swimming-light", name: activities[selectedLanguage]["swimming-light"] },
        { id: "swimming-moderate", name: activities[selectedLanguage]["swimming-moderate"] },
        { id: "yoga", name: activities[selectedLanguage]["yoga"] },
        { id: "pilates", name: activities[selectedLanguage]["pilates"] },
        { id: "stretching", name: activities[selectedLanguage]["stretching"] }
      ]
    },
    {
      category: categories[selectedLanguage].medium,
      activities: [
        { id: "jogging", name: activities[selectedLanguage]["jogging"] },
        { id: "running-moderate", name: activities[selectedLanguage]["running-moderate"] },
        { id: "running-fast", name: activities[selectedLanguage]["running-fast"] },
        { id: "aerobics", name: activities[selectedLanguage]["aerobics"] },
        { id: "dancing", name: activities[selectedLanguage]["dancing"] },
        { id: "hiking", name: activities[selectedLanguage]["hiking"] },
        { id: "tennis", name: activities[selectedLanguage]["tennis"] },
        { id: "basketball", name: activities[selectedLanguage]["basketball"] },
        { id: "soccer", name: activities[selectedLanguage]["soccer"] },
        { id: "volleyball", name: activities[selectedLanguage]["volleyball"] }
      ]
    },
    {
      category: categories[selectedLanguage].high,
      activities: [
        { id: "hiit", name: activities[selectedLanguage]["hiit"] },
        { id: "crossfit", name: activities[selectedLanguage]["crossfit"] },
        { id: "weightlifting", name: activities[selectedLanguage]["weightlifting"] },
        { id: "circuit-training", name: activities[selectedLanguage]["circuit-training"] },
        { id: "boxing", name: activities[selectedLanguage]["boxing"] },
        { id: "martial-arts", name: activities[selectedLanguage]["martial-arts"] },
        { id: "rowing", name: activities[selectedLanguage]["rowing"] },
        { id: "stair-climbing", name: activities[selectedLanguage]["stair-climbing"] },
        { id: "elliptical", name: activities[selectedLanguage]["elliptical"] }
      ]
    },
    {
      category: categories[selectedLanguage].daily,
      activities: [
        { id: "housework", name: activities[selectedLanguage]["housework"] },
        { id: "gardening", name: activities[selectedLanguage]["gardening"] },
        { id: "shopping", name: activities[selectedLanguage]["shopping"] },
        { id: "cooking", name: activities[selectedLanguage]["cooking"] },
        { id: "office-work", name: activities[selectedLanguage]["office-work"] },
        { id: "sleeping", name: activities[selectedLanguage]["sleeping"] },
        { id: "standing", name: activities[selectedLanguage]["standing"] },
        { id: "sitting", name: activities[selectedLanguage]["sitting"] }
      ]
    }
  ];
}

// Dışa aktarılan fonksiyonlar
export { 
  calculateMacros, 
  calculateBodyFat, 
  calculateBodyFatBMI, 
  calculateWaterIntake, 
  calculateCaloriesBurned, 
  getActivityList 
};