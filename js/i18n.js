// Dil kaynakları
const resources = {
  tr: {
    translation: {
      "app_name": "CalorieSnap",
      "nav": {
        "home": "Ana Sayfa",
        "about": "Hakkında",
        "blog": "Beslenme Rehberi"
      },
      "calculator": {
        "title": "Günlük Kalori İhtiyacınızı Hesaplayın",
        "description": "Boy, kilo, yaş ve aktivite seviyenize göre günlük kalori ihtiyacınızı hesaplayın.",
        "gender": {
          "label": "Cinsiyet",
          "male": "Erkek",
          "female": "Kadın"
        },
        "age": "Yaş",
        "height": "Boy (cm)",
        "weight": "Kilo (kg)",
        "activity": "Aktivite Seviyesi",
        "calculate": "Hesapla",
        "result": "Günlük Kalori İhtiyacınız",
        "common": {
          "select": "Seçiniz",
          "activity_level": {
            "sedentary": "Sedanter (Hareketsiz yaşam)",
            "light": "Hafif Aktif (Haftada 1-3 gün egzersiz)",
            "moderate": "Orta Aktif (Haftada 3-5 gün egzersiz)",
            "very": "Çok Aktif (Haftada 6-7 gün egzersiz)",
            "extra": "Ekstra Aktif (Günde 2 kez egzersiz)"
          }
        },
        "macro": {
          "title": "Makro Besin Hesaplayıcı",
          "description": "Hedeflerinize göre günlük protein, karbonhidrat ve yağ ihtiyacınızı hesaplayın.",
          "goals": {
            "lose": "Kilo Vermek",
            "maintain": "Kiloyu Korumak",
            "gain": "Kas Kazanmak"
          },
          "protein": "Protein",
          "carbs": "Karbonhidrat",
          "fat": "Yağ"
        }
      },
      "food_recognition": {
        "title": "Yemek Tanıma",
        "description": "Yemek fotoğrafı yükleyerek besin değerlerini öğrenin.",
        "upload": "Fotoğraf Yükle",
        "take_photo": "Fotoğraf Çek",
        "analyzing": "Fotoğraf analiz ediliyor...",
        "results": "Sonuçlar",
        "calories": "Tahmini Kalori",
        "food_type": "Yemek Türü",
        "error": "Yemek tanıma başarısız oldu. Lütfen tekrar deneyin."
      },
      "weight_tracker": {
        "title": "Kilo Takibi",
        "description": "Kilo değişiminizi takip edin ve ilerlemenizi görün.",
        "current_weight": "Mevcut Kilo",
        "target_weight": "Hedef Kilo",
        "date": "Tarih",
        "add": "Ekle",
        "history": "Kilo Geçmişi",
        "progress": "İlerleme",
        "kg": "kg"
      },
      "user_profile": {
        "title": "Profil",
        "name": "Ad",
        "email": "E-posta",
        "goal": "Hedef",
        "language": "Tercih Edilen Dil",
        "save": "Kaydet",
        "logout": "Çıkış Yap"
      },
      "auth": {
        "login": "Giriş Yap",
        "register": "Kayıt Ol",
        "email": "E-posta",
        "password": "Şifre",
        "confirm_password": "Şifreyi Onayla",
        "forgot_password": "Şifremi Unuttum",
        "reset_password": "Şifreyi Sıfırla",
        "errors": {
          "invalid_email": "Geçersiz e-posta adresi",
          "weak_password": "Şifre en az 6 karakter olmalıdır",
          "passwords_dont_match": "Şifreler eşleşmiyor",
          "user_not_found": "Kullanıcı bulunamadı",
          "wrong_password": "Yanlış şifre",
          "email_already_in_use": "Bu e-posta adresi zaten kullanımda"
        }
      },
      "success": "İşlem başarılı"
    }
  },
  en: {
    translation: {
      "app_name": "CalorieSnap",
      "nav": {
        "home": "Home",
        "about": "About",
        "blog": "Nutrition Guide"
      },
      "calculator": {
        "title": "Calculate Your Daily Calorie Needs",
        "description": "Calculate your daily calorie needs based on your height, weight, age, and activity level.",
        "gender": {
          "label": "Gender",
          "male": "Male",
          "female": "Female"
        },
        "age": "Age",
        "height": "Height (cm)",
        "weight": "Weight (kg)",
        "activity": "Activity Level",
        "calculate": "Calculate",
        "result": "Your Daily Calorie Needs",
        "common": {
          "select": "Select",
          "activity_level": {
            "sedentary": "Sedentary (Little to no exercise)",
            "light": "Lightly Active (1-3 days/week)",
            "moderate": "Moderately Active (3-5 days/week)",
            "very": "Very Active (6-7 days/week)",
            "extra": "Extra Active (Twice daily)"
          }
        },
        "macro": {
          "title": "Macro Nutrient Calculator",
          "description": "Calculate your daily protein, carbohydrate, and fat needs based on your goals.",
          "goals": {
            "lose": "Lose Weight",
            "maintain": "Maintain Weight",
            "gain": "Gain Muscle"
          },
          "protein": "Protein",
          "carbs": "Carbohydrates",
          "fat": "Fat"
        }
      },
      "food_recognition": {
        "title": "Food Recognition",
        "description": "Upload a food photo to learn about its nutritional values.",
        "upload": "Upload Photo",
        "take_photo": "Take Photo",
        "analyzing": "Analyzing photo...",
        "results": "Results",
        "calories": "Estimated Calories",
        "food_type": "Food Type",
        "error": "Food recognition failed. Please try again."
      },
      "weight_tracker": {
        "title": "Weight Tracker",
        "description": "Track your weight changes and see your progress.",
        "current_weight": "Current Weight",
        "target_weight": "Target Weight",
        "date": "Date",
        "add": "Add",
        "history": "Weight History",
        "progress": "Progress",
        "kg": "kg"
      },
      "user_profile": {
        "title": "Profile",
        "name": "Name",
        "email": "Email",
        "goal": "Goal",
        "language": "Preferred Language",
        "save": "Save",
        "logout": "Logout"
      },
      "auth": {
        "login": "Login",
        "register": "Register",
        "email": "Email",
        "password": "Password",
        "confirm_password": "Confirm Password",
        "forgot_password": "Forgot Password",
        "reset_password": "Reset Password",
        "errors": {
          "invalid_email": "Invalid email address",
          "weak_password": "Password should be at least 6 characters",
          "passwords_dont_match": "Passwords don't match",
          "user_not_found": "User not found",
          "wrong_password": "Wrong password",
          "email_already_in_use": "This email is already in use"
        }
      },
      "success": "Operation successful"
    }
  },
  ru: {
    translation: {
      "app_name": "CalorieSnap",
      "nav": {
        "home": "Главная",
        "about": "О нас",
        "blog": "Руководство по питанию"
      },
      "calculator": {
        "title": "Рассчитайте свои ежедневные потребности в калориях",
        "description": "Рассчитайте свои ежедневные потребности в калориях на основе вашего роста, веса, возраста и уровня активности.",
        "gender": {
          "label": "Пол",
          "male": "Мужской",
          "female": "Женский"
        },
        "age": "Возраст",
        "height": "Рост (см)",
        "weight": "Вес (кг)",
        "activity": "Уровень активности",
        "calculate": "Рассчитать",
        "result": "Ваши ежедневные потребности в калориях",
        "common": {
          "select": "Выбрать",
          "activity_level": {
            "sedentary": "Сидячий (Мало или совсем нет упражнений)",
            "light": "Легкая активность (1-3 дня в неделю)",
            "moderate": "Умеренная активность (3-5 дней в неделю)",
            "very": "Очень активный (6-7 дней в неделю)",
            "extra": "Экстра активный (Дважды в день)"
          }
        },
        "macro": {
          "title": "Калькулятор макроэлементов",
          "description": "Рассчитайте свои ежедневные потребности в белках, углеводах и жирах в зависимости от ваших целей.",
          "goals": {
            "lose": "Похудеть",
            "maintain": "Поддерживать вес",
            "gain": "Набрать мышечную массу"
          },
          "protein": "Белок",
          "carbs": "Углеводы",
          "fat": "Жир"
        }
      },
      "food_recognition": {
        "title": "Распознавание пищи",
        "description": "Загрузите фото еды, чтобы узнать о ее пищевой ценности.",
        "upload": "Загрузить фото",
        "take_photo": "Сделать фото",
        "analyzing": "Анализ фото...",
        "results": "Результаты",
        "calories": "Примерные калории",
        "food_type": "Тип пищи",
        "error": "Распознавание пищи не удалось. Пожалуйста, попробуйте еще раз."
      },
      "weight_tracker": {
        "title": "Отслеживание веса",
        "description": "Отслеживайте изменения веса и смотрите свой прогресс.",
        "current_weight": "Текущий вес",
        "target_weight": "Целевой вес",
        "date": "Дата",
        "add": "Добавить",
        "history": "История веса",
        "progress": "Прогресс",
        "kg": "кг"
      },
      "user_profile": {
        "title": "Профиль",
        "name": "Имя",
        "email": "Электронная почта",
        "goal": "Цель",
        "language": "Предпочитаемый язык",
        "save": "Сохранить",
        "logout": "Выйти"
      },
      "auth": {
        "login": "Вход",
        "register": "Регистрация",
        "email": "Электронная почта",
        "password": "Пароль",
        "confirm_password": "Подтвердите пароль",
        "forgot_password": "Забыли пароль",
        "reset_password": "Сбросить пароль",
        "errors": {
          "invalid_email": "Неверный адрес электронной почты",
          "weak_password": "Пароль должен содержать не менее 6 символов",
          "passwords_dont_match": "Пароли не совпадают",
          "user_not_found": "Пользователь не найден",
          "wrong_password": "Неверный пароль",
          "email_already_in_use": "Этот адрес электронной почты уже используется"
        }
      },
      "success": "Операция успешна"
    }
  },
  es: {
    translation: {
      "app_name": "CalorieSnap",
      "nav": {
        "home": "Inicio",
        "about": "Acerca de",
        "blog": "Guía de Nutrición"
      },
      "calculator": {
        "title": "Calcule sus necesidades calóricas diarias",
        "description": "Calcule sus necesidades calóricas diarias según su altura, peso, edad y nivel de actividad.",
        "gender": {
          "label": "Género",
          "male": "Masculino",
          "female": "Femenino"
        },
        "age": "Edad",
        "height": "Altura (cm)",
        "weight": "Peso (kg)",
        "activity": "Nivel de actividad",
        "calculate": "Calcular",
        "result": "Sus necesidades calóricas diarias",
        "common": {
          "select": "Seleccionar",
          "activity_level": {
            "sedentary": "Sedentario (Poco o nada de ejercicio)",
            "light": "Ligeramente activo (1-3 días/semana)",
            "moderate": "Moderadamente activo (3-5 días/semana)",
            "very": "Muy activo (6-7 días/semana)",
            "extra": "Extra activo (Dos veces al día)"
          }
        },
        "macro": {
          "title": "Calculadora de macronutrientes",
          "description": "Calcule sus necesidades diarias de proteínas, carbohidratos y grasas según sus objetivos.",
          "goals": {
            "lose": "Perder peso",
            "maintain": "Mantener peso",
            "gain": "Ganar músculo"
          },
          "protein": "Proteína",
          "carbs": "Carbohidratos",
          "fat": "Grasa"
        }
      },
      "food_recognition": {
        "title": "Reconocimiento de alimentos",
        "description": "Suba una foto de comida para conocer sus valores nutricionales.",
        "upload": "Subir foto",
        "take_photo": "Tomar foto",
        "analyzing": "Analizando foto...",
        "results": "Resultados",
        "calories": "Calorías estimadas",
        "food_type": "Tipo de comida",
        "error": "El reconocimiento de alimentos falló. Por favor, inténtelo de nuevo."
      },
      "weight_tracker": {
        "title": "Seguimiento de peso",
        "description": "Haga un seguimiento de sus cambios de peso y vea su progreso.",
        "current_weight": "Peso actual",
        "target_weight": "Peso objetivo",
        "date": "Fecha",
        "add": "Añadir",
        "history": "Historial de peso",
        "progress": "Progreso",
        "kg": "kg"
      },
      "user_profile": {
        "title": "Perfil",
        "name": "Nombre",
        "email": "Correo electrónico",
        "goal": "Objetivo",
        "language": "Idioma preferido",
        "save": "Guardar",
        "logout": "Cerrar sesión"
      },
      "auth": {
        "login": "Iniciar sesión",
        "register": "Registrarse",
        "email": "Correo electrónico",
        "password": "Contraseña",
        "confirm_password": "Confirmar contraseña",
        "forgot_password": "Olvidé mi contraseña",
        "reset_password": "Restablecer contraseña",
        "errors": {
          "invalid_email": "Dirección de correo electrónico inválida",
          "weak_password": "La contraseña debe tener al menos 6 caracteres",
          "passwords_dont_match": "Las contraseñas no coinciden",
          "user_not_found": "Usuario no encontrado",
          "wrong_password": "Contraseña incorrecta",
          "email_already_in_use": "Este correo electrónico ya está en uso"
        }
      },
      "success": "Operación exitosa"
    }
  },
  de: {
    translation: {
      "app_name": "CalorieSnap",
      "nav": {
        "home": "Startseite",
        "about": "Über uns",
        "blog": "Ernährungsratgeber"
      },
      "calculator": {
        "title": "Berechnen Sie Ihren täglichen Kalorienbedarf",
        "description": "Berechnen Sie Ihren täglichen Kalorienbedarf basierend auf Ihrer Größe, Gewicht, Alter und Aktivitätsniveau.",
        "gender": {
          "label": "Geschlecht",
          "male": "Männlich",
          "female": "Weiblich"
        },
        "age": "Alter",
        "height": "Größe (cm)",
        "weight": "Gewicht (kg)",
        "activity": "Aktivitätsniveau",
        "calculate": "Berechnen",
        "result": "Ihr täglicher Kalorienbedarf",
        "common": {
          "select": "Auswählen",
          "activity_level": {
            "sedentary": "Sitzend (Wenig oder keine Bewegung)",
            "light": "Leicht aktiv (1-3 Tage/Woche)",
            "moderate": "Mäßig aktiv (3-5 Tage/Woche)",
            "very": "Sehr aktiv (6-7 Tage/Woche)",
            "extra": "Extra aktiv (Zweimal täglich)"
          }
        },
        "macro": {
          "title": "Makronährstoffrechner",
          "description": "Berechnen Sie Ihren täglichen Bedarf an Proteinen, Kohlenhydraten und Fetten basierend auf Ihren Zielen.",
          "goals": {
            "lose": "Gewicht verlieren",
            "maintain": "Gewicht halten",
            "gain": "Muskelaufbau"
          },
          "protein": "Protein",
          "carbs": "Kohlenhydrate",
          "fat": "Fett"
        }
      },
      "food_recognition": {
        "title": "Lebensmittelerkennung",
        "description": "Laden Sie ein Foto von Lebensmitteln hoch, um deren Nährwerte zu erfahren.",
        "upload": "Foto hochladen",
        "take_photo": "Foto aufnehmen",
        "analyzing": "Foto wird analysiert...",
        "results": "Ergebnisse",
        "calories": "Geschätzte Kalorien",
        "food_type": "Lebensmitteltyp",
        "error": "Lebensmittelerkennung fehlgeschlagen. Bitte versuchen Sie es erneut."
      },
      "weight_tracker": {
        "title": "Gewichtstracker",
        "description": "Verfolgen Sie Ihre Gewichtsveränderungen und sehen Sie Ihren Fortschritt.",
        "current_weight": "Aktuelles Gewicht",
        "target_weight": "Zielgewicht",
        "date": "Datum",
        "add": "Hinzufügen",
        "history": "Gewichtsverlauf",
        "progress": "Fortschritt",
        "kg": "kg"
      },
      "user_profile": {
        "title": "Profil",
        "name": "Name",
        "email": "E-Mail",
        "goal": "Ziel",
        "language": "Bevorzugte Sprache",
        "save": "Speichern",
        "logout": "Abmelden"
      },
      "auth": {
        "login": "Anmelden",
        "register": "Registrieren",
        "email": "E-Mail",
        "password": "Passwort",
        "confirm_password": "Passwort bestätigen",
        "forgot_password": "Passwort vergessen",
        "reset_password": "Passwort zurücksetzen",
        "errors": {
          "invalid_email": "Ungültige E-Mail-Adresse",
          "weak_password": "Das Passwort sollte mindestens 6 Zeichen lang sein",
          "passwords_dont_match": "Passwörter stimmen nicht überein",
          "user_not_found": "Benutzer nicht gefunden",
          "wrong_password": "Falsches Passwort",
          "email_already_in_use": "Diese E-Mail wird bereits verwendet"
        }
      },
      "success": "Vorgang erfolgreich"
    }
  }
};

// i18next yapılandırması
function initializeI18n() {
  console.log('initializeI18n çağrıldı');
  const savedLang = getSavedLanguage();
  console.log('Kaydedilmiş dil:', savedLang || 'yok (varsayılan: tr)');
  
  try {
    return i18next.init({
      lng: savedLang || 'tr', // Varsayılan dil
      resources: resources,
      fallbackLng: 'tr',
      interpolation: {
        escapeValue: false
      },
      debug: true // Hata ayıklama modunu etkinleştir
    }).then(() => {
      console.log('i18next başarıyla başlatıldı, dil:', i18next.language);
      return i18next;
    }).catch(error => {
      console.error('i18next başlatma hatası:', error);
      throw error;
    });
  } catch (error) {
    console.error('i18next yapılandırma hatası:', error);
    throw error;
  }
}

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
  console.log('changeLanguage çağrıldı:', lang);
  
  try {
    i18next.changeLanguage(lang, (err) => {
      if (err) {
        console.error('Dil değiştirme hatası:', err);
        return;
      }
      
      console.log('Dil başarıyla değiştirildi:', lang);
      saveLanguagePreference(lang);
      updateContent();
      
      // Dil seçicilerin değerini güncelle
      const languageSelects = document.querySelectorAll('#language-select');
      languageSelects.forEach(select => {
        select.value = lang;
        console.log('Dil seçici değeri güncellendi:', lang);
      });
    });
  } catch (error) {
    console.error('Dil değiştirme işleminde hata:', error);
  }
}

// Dil tercihini kaydetme
function saveLanguagePreference(lang) {
  localStorage.setItem('preferredLanguage', lang);
}

// Kaydedilmiş dil tercihini alma
function getSavedLanguage() {
  return localStorage.getItem('preferredLanguage');
}

// Sayfa içeriğini güncelleme
function updateContent() {
  console.log('updateContent çağrıldı, mevcut dil:', i18next.language);
  
  try {
    // Sayfa başlığını güncelle
    document.title = i18next.t('app_name') + ' | CalorieSnap';
    console.log('Sayfa başlığı güncellendi:', document.title);
    
    // Başlık elementini güncelle
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
      headerTitle.textContent = 'CalorieSnap';
      console.log('Başlık elementi güncellendi');
    } else {
      console.warn('Başlık elementi bulunamadı');
    }
    
    // data-i18n özniteliği olan tüm elementleri güncelle
    const i18nElements = document.querySelectorAll('[data-i18n]');
    console.log(`${i18nElements.length} adet data-i18n elementi bulundu`);
    
    if (i18nElements.length === 0) {
      console.warn('Çevrilecek öğe bulunamadı! Sayfa yapısını kontrol edin.');
    }
    
    i18nElements.forEach((element, index) => {
      const key = element.getAttribute('data-i18n');
      
      if (!key) {
        console.warn(`Öğe #${index+1} için data-i18n değeri boş!`);
        return;
      }
      
      try {
        const translation = i18next.t(key);
        
        if (translation === key) {
          console.warn(`'${key}' için çeviri bulunamadı!`);
        }
        
        element.textContent = translation;
        console.log(`Element güncellendi: [${key}] = "${translation}"`);
      } catch (err) {
        console.error(`'${key}' çevirisi sırasında hata:`, err);
      }
    });
    
    // Placeholder ve title gibi öznitelikleri güncelleme
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    console.log(`${placeholderElements.length} adet placeholder elementi bulundu`);
    
    placeholderElements.forEach((element, index) => {
      const key = element.getAttribute('data-i18n-placeholder');
      
      if (!key) {
        console.warn(`Placeholder öğesi #${index+1} için data-i18n-placeholder değeri boş!`);
        return;
      }
      
      try {
        const translation = i18next.t(key);
        element.setAttribute('placeholder', translation);
        console.log(`Placeholder güncellendi: [${key}] = "${translation}"`);
      } catch (err) {
        console.error(`'${key}' placeholder çevirisi sırasında hata:`, err);
      }
    });
    
    const titleElements = document.querySelectorAll('[data-i18n-title]');
    console.log(`${titleElements.length} adet title elementi bulundu`);
    
    titleElements.forEach((element, index) => {
      const key = element.getAttribute('data-i18n-title');
      
      if (!key) {
        console.warn(`Title öğesi #${index+1} için data-i18n-title değeri boş!`);
        return;
      }
      
      try {
        const translation = i18next.t(key);
        element.setAttribute('title', translation);
        console.log(`Title güncellendi: [${key}] = "${translation}"`);
      } catch (err) {
        console.error(`'${key}' title çevirisi sırasında hata:`, err);
      }
    });
    
    // Dil seçici görünümünü güncelle
    updateLanguageSelectorStyle();
    console.log('Dil seçici stili güncellendi');
    
    // Özel içerik güncellemeleri (örneğin dinamik oluşturulan içerikler)
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: i18next.language } }));
    console.log('languageChanged olayı tetiklendi');
  } catch (error) {
    console.error('İçerik güncelleme hatası:', error);
  }
}

// Dil seçim menüsünü oluşturma
function createLanguageSelector(containerId) {
  console.log('createLanguageSelector çağrıldı, container:', containerId);
  
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Dil seçici container bulunamadı (#${containerId})`);
    return;
  }
  
  const languages = [
    { code: 'tr', name: 'Türkçe', flag: 'img/flags/tr.svg' },
    { code: 'en', name: 'English', flag: 'img/flags/en.svg' },
    { code: 'ru', name: 'Русский', flag: 'img/flags/ru.svg' },
    { code: 'es', name: 'Español', flag: 'img/flags/es.svg' },
    { code: 'de', name: 'Deutsch', flag: 'img/flags/de.svg' }
  ];
  
  console.log('Dil seçenekleri:', languages.map(l => l.code).join(', '));
  
  const currentLang = i18next.language;
  console.log('Mevcut dil:', currentLang);
  
  // Mevcut seçiciyi temizle
  container.innerHTML = '';
  console.log('Container temizlendi');
  
  // Dil seçim menüsünü oluştur
  const select = document.createElement('select');
  select.id = 'language-selector';
  select.className = 'language-selector';
  
  languages.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang.code;
    option.textContent = lang.name;
    option.selected = lang.code === currentLang;
    option.setAttribute('data-flag', lang.flag);
    select.appendChild(option);
    console.log(`Dil seçeneği eklendi: ${lang.code} (${lang.name}), bayrak: ${lang.flag}, seçili: ${option.selected}`);
  });
  
  select.addEventListener('change', (e) => {
    console.log(`Dil seçici değişti: ${e.target.value}`);
    changeLanguage(e.target.value);
  });
  
  container.appendChild(select);
  console.log('Dil seçici container\'a eklendi');
  
  // Seçili dil için bayrak göster
  updateLanguageSelectorStyle();
  return select;
}

// Dil seçici stilini güncelleme
function updateLanguageSelectorStyle() {
  console.log('updateLanguageSelectorStyle çağrıldı');
  
  try {
    // Dil seçicileri
    const selectors = document.querySelectorAll('#language-select, #language-selector');
    console.log(`${selectors.length} adet dil seçici bulundu`);
    
    selectors.forEach(select => {
      // Seçili dil için bayrak
      const selectedOption = select.options[select.selectedIndex];
      console.log('Seçili seçenek:', selectedOption ? selectedOption.value : 'bulunamadı');
      
      const flagUrl = selectedOption?.getAttribute('data-flag');
      console.log('Bayrak URL:', flagUrl || 'bulunamadı');
      
      // Seçiciye bayrak stili ekle
      if (flagUrl) {
        select.style.backgroundImage = `url(${flagUrl})`;
        select.style.backgroundRepeat = 'no-repeat';
        select.style.backgroundSize = '20px';
        select.style.backgroundPosition = '5px center';
        select.style.paddingLeft = '30px';
        console.log('Bayrak stili uygulandı:', flagUrl);
      } else {
        console.warn('Bayrak URL bulunamadı, stil uygulanamadı');
      }
    });
  } catch (error) {
    console.error('Dil seçici stili güncelleme hatası:', error);
  }
}

// Sayfa yüklendiğinde i18next'i başlat
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded olayı tetiklendi');
  
  // Mevcut dil seçicileri kontrol et
  const existingSelectors = document.querySelectorAll('#language-select, #language-selector');
  console.log(`Mevcut dil seçicileri: ${existingSelectors.length} adet`);
  
  // i18next'i başlat
  initializeI18n()
    .then(() => {
      console.log('i18next başlatıldı, şimdi içerik güncelleniyor');
      
      // İçeriği güncelle
      updateContent();
      
      // Dil seçicileri
      const selectors = document.querySelectorAll('#language-select, #language-selector');
      console.log(`Dil seçicileri bulundu: ${selectors.length} adet`);
      
      // Dil seçicileri varsa
      if (selectors.length > 0) {
        console.log('Mevcut dil seçicileri güncelleniyor');
        
        // Dil seçicilerin değerini ayarla
        selectors.forEach((select, index) => {
          console.log(`Dil seçici #${index+1} güncelleniyor, mevcut değer: ${select.value}, yeni değer: ${i18next.language}`);
          select.value = i18next.language;
          
          // Bayrak özniteliklerini ekle
          Array.from(select.options).forEach(option => {
            const lang = option.value;
            let flagPath;
            
            // Dil için bayrak yolunu belirle
             switch (lang) {
               case 'tr':
                 flagPath = 'img/flags/tr.svg';
                 break;
               case 'en':
                 flagPath = 'img/flags/en.svg';
                 break;
               case 'ru':
                 flagPath = 'img/flags/ru.svg';
                 break;
               case 'es':
                 flagPath = 'img/flags/es.svg';
                 break;
               case 'de':
                 flagPath = 'img/flags/de.svg';
                 break;
               default:
                 flagPath = '';
             }
            
            // Bayrak özniteliğini ekle
            if (flagPath) {
              option.setAttribute('data-flag', flagPath);
              console.log(`Seçenek '${lang}' için bayrak ayarlandı: ${flagPath}`);
            }
          });
          
          // Dil değişikliği olayı
          // Önce eski olay dinleyicilerini kaldır
          const newSelect = select.cloneNode(true);
          select.parentNode.replaceChild(newSelect, select);
          
          // Yeni olay dinleyicisi ekle
          newSelect.addEventListener('change', function() {
            console.log(`Dil seçici değişti: ${this.value}`);
            changeLanguage(this.value);
          });
          
          console.log(`Dil seçici #${index+1} için olay dinleyicisi eklendi`);
        });
        
        // Dil seçici stilini güncelle
        updateLanguageSelectorStyle();
      } else {
        console.log('Dil seçici bulunamadı, yeni bir tane oluşturuluyor');
        
        // Dil seçici yoksa oluştur
        // Önce container'ı kontrol et
        const container = document.querySelector('#language-selector-container');
        if (container) {
          console.log('Dil seçici container bulundu, seçici oluşturuluyor');
          createLanguageSelector('language-selector-container');
        } else {
          console.warn('Dil seçici container bulunamadı (#language-selector-container)');
          
          // Alternatif olarak nav-item içine ekle
          const navItem = document.querySelector('.nav-item');
          if (navItem) {
            console.log('Nav item bulundu, içine dil seçici ekleniyor');
            const container = document.createElement('div');
            container.id = 'language-selector-container';
            navItem.appendChild(container);
            createLanguageSelector('language-selector-container');
          } else {
            console.error('Dil seçici için uygun bir container bulunamadı');
          }
        }
      }
    })
    .catch(error => {
      console.error('i18next başlatma hatası:', error);
    });
});

// Sayfa yüklendiğinde konsola bilgi yazdır
console.log('i18n.js yüklendi');