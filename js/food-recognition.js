/**
 * Yemek Fotoğrafı Tanıma ve Kalori Tahmini API Entegrasyonu
 * Clarifai ve Nutritionix API'lerini kullanarak yemek tanıma ve kalori hesaplama
 */

// API anahtarları (gerçek uygulamada .env dosyasından alınmalıdır)
const CLARIFAI_API_KEY = process.env.CLARIFAI_API_KEY || "YOUR_CLARIFAI_API_KEY";
const NUTRITIONIX_APP_ID = process.env.NUTRITIONIX_APP_ID || "YOUR_NUTRITIONIX_APP_ID";
const NUTRITIONIX_API_KEY = process.env.NUTRITIONIX_API_KEY || "YOUR_NUTRITIONIX_API_KEY";

// Clarifai API için yapılandırma
const clarifai = new Clarifai.App({
  apiKey: CLARIFAI_API_KEY
});

/**
 * Yemek fotoğrafını Clarifai API ile analiz eder
 * @param {string} imageUrl - Analiz edilecek fotoğrafın URL'si veya base64 kodlanmış veri
 * @param {boolean} isUrl - Verinin URL mi yoksa base64 mi olduğunu belirtir
 * @returns {Promise} - Tanımlanan yemekler ve güven skorları
 */
async function recognizeFood(imageUrl, isUrl = true) {
  try {
    let response;
    
    if (isUrl) {
      response = await clarifai.models.predict(
        Clarifai.FOOD_MODEL,
        imageUrl
      );
    } else {
      // Base64 kodlanmış veri için
      response = await clarifai.models.predict(
        Clarifai.FOOD_MODEL,
        { base64: imageUrl }
      );
    }
    
    // Sonuçları işle
    const concepts = response.outputs[0].data.concepts;
    
    // En yüksek güven skoruna sahip yemekleri döndür (ilk 5)
    const recognizedFoods = concepts
      .filter(concept => concept.value > 0.5) // %50'den fazla güven skoru olanlar
      .slice(0, 5) // İlk 5 sonuç
      .map(concept => ({
        name: concept.name,
        confidence: concept.value
      }));
    
    return {
      success: true,
      foods: recognizedFoods,
      rawResponse: response
    };
  } catch (error) {
    console.error("Yemek tanıma hatası:", error);
    return {
      success: false,
      error: error.message || "Yemek tanıma işlemi başarısız oldu."
    };
  }
}

/**
 * Nutritionix API ile yemek adına göre kalori ve besin değeri bilgilerini alır
 * @param {string} foodName - Kalori bilgisi alınacak yemek adı
 * @param {number} quantity - Porsiyon miktarı (varsayılan: 1)
 * @returns {Promise} - Yemek kalori ve besin değeri bilgileri
 */
async function getNutritionInfo(foodName, quantity = 1) {
  try {
    const response = await fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": NUTRITIONIX_APP_ID,
        "x-app-key": NUTRITIONIX_API_KEY
      },
      body: JSON.stringify({
        query: `${quantity} ${foodName}`
      })
    });
    
    if (!response.ok) {
      throw new Error(`API yanıt hatası: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Sonuçları işle
    if (data.foods && data.foods.length > 0) {
      const foodInfo = data.foods[0];
      
      return {
        success: true,
        food: {
          name: foodInfo.food_name,
          calories: foodInfo.nf_calories,
          serving_qty: foodInfo.serving_qty,
          serving_unit: foodInfo.serving_unit,
          serving_weight_grams: foodInfo.serving_weight_grams,
          protein: foodInfo.nf_protein,
          carbs: foodInfo.nf_total_carbohydrate,
          fat: foodInfo.nf_total_fat,
          photo: foodInfo.photo,
          full_nutrients: foodInfo.full_nutrients
        },
        rawResponse: data
      };
    } else {
      return {
        success: false,
        error: "Yemek için besin değeri bilgisi bulunamadı."
      };
    }
  } catch (error) {
    console.error("Besin değeri bilgisi alma hatası:", error);
    return {
      success: false,
      error: error.message || "Besin değeri bilgisi alınamadı."
    };
  }
}

/**
 * Yemek fotoğrafını analiz eder ve kalori bilgilerini döndürür
 * @param {string} imageData - Fotoğraf URL'si veya base64 verisi
 * @param {boolean} isUrl - Verinin URL mi yoksa base64 mi olduğunu belirtir
 * @returns {Promise} - Tanımlanan yemek ve kalori bilgileri
 */
async function analyzeFoodImage(imageData, isUrl = true) {
  try {
    // 1. Yemek tanıma
    const recognitionResult = await recognizeFood(imageData, isUrl);
    
    if (!recognitionResult.success || recognitionResult.foods.length === 0) {
      return {
        success: false,
        error: "Yemek tanınamadı veya tanıma başarısız oldu."
      };
    }
    
    // 2. En yüksek güven skoruna sahip yemeği seç
    const topFood = recognitionResult.foods[0];
    
    // 3. Besin değeri bilgilerini al
    const nutritionResult = await getNutritionInfo(topFood.name);
    
    if (!nutritionResult.success) {
      return {
        success: false,
        recognizedFood: topFood.name,
        confidence: topFood.confidence,
        error: nutritionResult.error || "Besin değeri bilgisi alınamadı."
      };
    }
    
    // 4. Sonuçları birleştir
    return {
      success: true,
      recognizedFood: topFood.name,
      confidence: topFood.confidence,
      nutritionInfo: nutritionResult.food,
      alternativeFoods: recognitionResult.foods.slice(1) // İlk yemek dışındaki alternatifler
    };
  } catch (error) {
    console.error("Yemek analizi hatası:", error);
    return {
      success: false,
      error: error.message || "Yemek analizi başarısız oldu."
    };
  }
}

/**
 * Yemek fotoğrafını dosyadan okur ve analiz eder
 * @param {File} file - Yüklenen dosya nesnesi
 * @returns {Promise} - Analiz sonuçları
 */
async function analyzeFoodFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = async (event) => {
      try {
        const base64Data = event.target.result.split(',')[1]; // Base64 kısmını al
        const result = await analyzeFoodImage(base64Data, false);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = (error) => {
      reject(error);
    };
    
    reader.readAsDataURL(file);
  });
}

// Dışa aktarılan fonksiyonlar
export { recognizeFood, getNutritionInfo, analyzeFoodImage, analyzeFoodFromFile };