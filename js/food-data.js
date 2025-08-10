/**
 * Kalori Hesaplama Uygulaması - Yemek Kalori Veritabanı
 * 100+ yiyecek ve içecek için kalori ve besin değeri bilgileri
 */

// Yemek kategorileri ve besin değerleri
const foodData = {
  // Kategoriler ve çevirileri
  categories: {
    "tr": {
      "fruits": "Meyveler",
      "vegetables": "Sebzeler",
      "grains": "Tahıllar ve Ekmekler",
      "proteins": "Protein Kaynakları",
      "dairy": "Süt Ürünleri",
      "snacks": "Atıştırmalıklar",
      "beverages": "İçecekler",
      "fastfood": "Fast Food",
      "desserts": "Tatlılar",
      "oils": "Yağlar ve Soslar"
    },
    "en": {
      "fruits": "Fruits",
      "vegetables": "Vegetables",
      "grains": "Grains and Breads",
      "proteins": "Protein Sources",
      "dairy": "Dairy Products",
      "snacks": "Snacks",
      "beverages": "Beverages",
      "fastfood": "Fast Food",
      "desserts": "Desserts",
      "oils": "Oils and Sauces"
    },
    "ru": {
      "fruits": "Фрукты",
      "vegetables": "Овощи",
      "grains": "Зерновые и Хлеб",
      "proteins": "Источники Белка",
      "dairy": "Молочные Продукты",
      "snacks": "Закуски",
      "beverages": "Напитки",
      "fastfood": "Фастфуд",
      "desserts": "Десерты",
      "oils": "Масла и Соусы"
    },
    "es": {
      "fruits": "Frutas",
      "vegetables": "Verduras",
      "grains": "Granos y Panes",
      "proteins": "Fuentes de Proteína",
      "dairy": "Productos Lácteos",
      "snacks": "Aperitivos",
      "beverages": "Bebidas",
      "fastfood": "Comida Rápida",
      "desserts": "Postres",
      "oils": "Aceites y Salsas"
    },
    "de": {
      "fruits": "Obst",
      "vegetables": "Gemüse",
      "grains": "Getreide und Brot",
      "proteins": "Proteinquellen",
      "dairy": "Milchprodukte",
      "snacks": "Snacks",
      "beverages": "Getränke",
      "fastfood": "Fast Food",
      "desserts": "Desserts",
      "oils": "Öle und Saucen"
    }
  },
  
  // Yemek adları ve çevirileri
  names: {
    "tr": {
      // Meyveler
      "apple": "Elma",
      "banana": "Muz",
      "orange": "Portakal",
      "grapes": "Üzüm",
      "strawberry": "Çilek",
      "watermelon": "Karpuz",
      "pineapple": "Ananas",
      "peach": "Şeftali",
      "pear": "Armut",
      "kiwi": "Kivi",
      "mango": "Mango",
      "avocado": "Avokado",
      
      // Sebzeler
      "carrot": "Havuç",
      "broccoli": "Brokoli",
      "spinach": "Ispanak",
      "tomato": "Domates",
      "cucumber": "Salatalık",
      "lettuce": "Marul",
      "potato": "Patates",
      "onion": "Soğan",
      "bell-pepper": "Biber",
      "mushroom": "Mantar",
      "corn": "Mısır",
      "eggplant": "Patlıcan",
      
      // Tahıllar ve Ekmekler
      "white-bread": "Beyaz Ekmek",
      "whole-wheat-bread": "Tam Buğday Ekmeği",
      "rice": "Pirinç",
      "pasta": "Makarna",
      "oats": "Yulaf",
      "cereal": "Kahvaltılık Gevrek",
      "quinoa": "Kinoa",
      "bulgur": "Bulgur",
      "corn-tortilla": "Mısır Tortilla",
      "bagel": "Simit",
      "croissant": "Kruvasan",
      "pita-bread": "Pide Ekmeği",
      
      // Protein Kaynakları
      "chicken-breast": "Tavuk Göğsü",
      "beef": "Dana Eti",
      "salmon": "Somon",
      "tuna": "Ton Balığı",
      "eggs": "Yumurta",
      "tofu": "Tofu",
      "beans": "Fasulye",
      "lentils": "Mercimek",
      "chickpeas": "Nohut",
      "pork": "Domuz Eti",
      "turkey": "Hindi Eti",
      "shrimp": "Karides",
      
      // Süt Ürünleri
      "milk": "Süt",
      "cheese": "Peynir",
      "yogurt": "Yoğurt",
      "butter": "Tereyağı",
      "cream": "Krema",
      "cottage-cheese": "Lor Peyniri",
      "ice-cream": "Dondurma",
      "greek-yogurt": "Süzme Yoğurt",
      "sour-cream": "Ekşi Krema",
      "cream-cheese": "Krem Peynir",
      "mozzarella": "Mozzarella",
      "cheddar": "Cheddar Peyniri",
      
      // Atıştırmalıklar
      "potato-chips": "Patates Cipsi",
      "popcorn": "Patlamış Mısır",
      "nuts": "Kuruyemiş",
      "almonds": "Badem",
      "walnuts": "Ceviz",
      "peanuts": "Yer Fıstığı",
      "chocolate": "Çikolata",
      "granola-bar": "Granola Bar",
      "crackers": "Kraker",
      "pretzels": "Pretzel",
      "trail-mix": "Kuruyemiş Karışımı",
      "dried-fruits": "Kuru Meyve",
      
      // İçecekler
      "water": "Su",
      "coffee": "Kahve",
      "tea": "Çay",
      "orange-juice": "Portakal Suyu",
      "apple-juice": "Elma Suyu",
      "soda": "Gazlı İçecek",
      "cola": "Kola",
      "beer": "Bira",
      "wine": "Şarap",
      "milk-shake": "Milkshake",
      "smoothie": "Smoothie",
      "energy-drink": "Enerji İçeceği",
      
      // Fast Food
      "hamburger": "Hamburger",
      "cheeseburger": "Cheeseburger",
      "pizza": "Pizza",
      "hot-dog": "Hot Dog",
      "french-fries": "Patates Kızartması",
      "chicken-nuggets": "Tavuk Nugget",
      "taco": "Tako",
      "burrito": "Burrito",
      "fried-chicken": "Kızarmış Tavuk",
      "sandwich": "Sandviç",
      "doner-kebab": "Döner Kebap",
      "falafel": "Falafel",
      
      // Tatlılar
      "chocolate-cake": "Çikolatalı Pasta",
      "cheesecake": "Cheesecake",
      "cookie": "Kurabiye",
      "brownie": "Brownie",
      "muffin": "Muffin",
      "donut": "Donut",
      "apple-pie": "Elmalı Turta",
      "pudding": "Puding",
      "baklava": "Baklava",
      "tiramisu": "Tiramisu",
      "cupcake": "Cupcake",
      "pancake": "Krep",
      
      // Yağlar ve Soslar
      "olive-oil": "Zeytinyağı",
      "vegetable-oil": "Bitkisel Yağ",
      "mayonnaise": "Mayonez",
      "ketchup": "Ketçap",
      "mustard": "Hardal",
      "soy-sauce": "Soya Sosu",
      "salad-dressing": "Salata Sosu",
      "honey": "Bal",
      "maple-syrup": "Akçaağaç Şurubu",
      "peanut-butter": "Fıstık Ezmesi",
      "hummus": "Humus",
      "guacamole": "Guacamole"
    },
    
    // İngilizce yemek adları (anahtar olarak kullanıldığı için tekrar tanımlanmadı)
    "en": {
      // Fruits
      "apple": "Apple",
      "banana": "Banana",
      "orange": "Orange",
      "grapes": "Grapes",
      "strawberry": "Strawberry",
      "watermelon": "Watermelon",
      "pineapple": "Pineapple",
      "peach": "Peach",
      "pear": "Pear",
      "kiwi": "Kiwi",
      "mango": "Mango",
      "avocado": "Avocado",
      
      // Vegetables
      "carrot": "Carrot",
      "broccoli": "Broccoli",
      "spinach": "Spinach",
      "tomato": "Tomato",
      "cucumber": "Cucumber",
      "lettuce": "Lettuce",
      "potato": "Potato",
      "onion": "Onion",
      "bell-pepper": "Bell Pepper",
      "mushroom": "Mushroom",
      "corn": "Corn",
      "eggplant": "Eggplant",
      
      // Grains and Breads
      "white-bread": "White Bread",
      "whole-wheat-bread": "Whole Wheat Bread",
      "rice": "Rice",
      "pasta": "Pasta",
      "oats": "Oats",
      "cereal": "Cereal",
      "quinoa": "Quinoa",
      "bulgur": "Bulgur",
      "corn-tortilla": "Corn Tortilla",
      "bagel": "Bagel",
      "croissant": "Croissant",
      "pita-bread": "Pita Bread",
      
      // Protein Sources
      "chicken-breast": "Chicken Breast",
      "beef": "Beef",
      "salmon": "Salmon",
      "tuna": "Tuna",
      "eggs": "Eggs",
      "tofu": "Tofu",
      "beans": "Beans",
      "lentils": "Lentils",
      "chickpeas": "Chickpeas",
      "pork": "Pork",
      "turkey": "Turkey",
      "shrimp": "Shrimp",
      
      // Dairy Products
      "milk": "Milk",
      "cheese": "Cheese",
      "yogurt": "Yogurt",
      "butter": "Butter",
      "cream": "Cream",
      "cottage-cheese": "Cottage Cheese",
      "ice-cream": "Ice Cream",
      "greek-yogurt": "Greek Yogurt",
      "sour-cream": "Sour Cream",
      "cream-cheese": "Cream Cheese",
      "mozzarella": "Mozzarella",
      "cheddar": "Cheddar Cheese",
      
      // Snacks
      "potato-chips": "Potato Chips",
      "popcorn": "Popcorn",
      "nuts": "Nuts",
      "almonds": "Almonds",
      "walnuts": "Walnuts",
      "peanuts": "Peanuts",
      "chocolate": "Chocolate",
      "granola-bar": "Granola Bar",
      "crackers": "Crackers",
      "pretzels": "Pretzels",
      "trail-mix": "Trail Mix",
      "dried-fruits": "Dried Fruits",
      
      // Beverages
      "water": "Water",
      "coffee": "Coffee",
      "tea": "Tea",
      "orange-juice": "Orange Juice",
      "apple-juice": "Apple Juice",
      "soda": "Soda",
      "cola": "Cola",
      "beer": "Beer",
      "wine": "Wine",
      "milk-shake": "Milk Shake",
      "smoothie": "Smoothie",
      "energy-drink": "Energy Drink",
      
      // Fast Food
      "hamburger": "Hamburger",
      "cheeseburger": "Cheeseburger",
      "pizza": "Pizza",
      "hot-dog": "Hot Dog",
      "french-fries": "French Fries",
      "chicken-nuggets": "Chicken Nuggets",
      "taco": "Taco",
      "burrito": "Burrito",
      "fried-chicken": "Fried Chicken",
      "sandwich": "Sandwich",
      "doner-kebab": "Doner Kebab",
      "falafel": "Falafel",
      
      // Desserts
      "chocolate-cake": "Chocolate Cake",
      "cheesecake": "Cheesecake",
      "cookie": "Cookie",
      "brownie": "Brownie",
      "muffin": "Muffin",
      "donut": "Donut",
      "apple-pie": "Apple Pie",
      "pudding": "Pudding",
      "baklava": "Baklava",
      "tiramisu": "Tiramisu",
      "cupcake": "Cupcake",
      "pancake": "Pancake",
      
      // Oils and Sauces
      "olive-oil": "Olive Oil",
      "vegetable-oil": "Vegetable Oil",
      "mayonnaise": "Mayonnaise",
      "ketchup": "Ketchup",
      "mustard": "Mustard",
      "soy-sauce": "Soy Sauce",
      "salad-dressing": "Salad Dressing",
      "honey": "Honey",
      "maple-syrup": "Maple Syrup",
      "peanut-butter": "Peanut Butter",
      "hummus": "Hummus",
      "guacamole": "Guacamole"
    },
    
    // Rusça yemek adları
    "ru": {
      // Фрукты
      "apple": "Яблоко",
      "banana": "Банан",
      "orange": "Апельсин",
      "grapes": "Виноград",
      "strawberry": "Клубника",
      "watermelon": "Арбуз",
      "pineapple": "Ананас",
      "peach": "Персик",
      "pear": "Груша",
      "kiwi": "Киви",
      "mango": "Манго",
      "avocado": "Авокадо",
      
      // Овощи
      "carrot": "Морковь",
      "broccoli": "Брокколи",
      "spinach": "Шпинат",
      "tomato": "Помидор",
      "cucumber": "Огурец",
      "lettuce": "Салат",
      "potato": "Картофель",
      "onion": "Лук",
      "bell-pepper": "Болгарский перец",
      "mushroom": "Грибы",
      "corn": "Кукуруза",
      "eggplant": "Баклажан",
      
      // Зерновые и Хлеб
      "white-bread": "Белый хлеб",
      "whole-wheat-bread": "Цельнозерновой хлеб",
      "rice": "Рис",
      "pasta": "Макароны",
      "oats": "Овсянка",
      "cereal": "Хлопья",
      "quinoa": "Киноа",
      "bulgur": "Булгур",
      "corn-tortilla": "Кукурузная тортилья",
      "bagel": "Бублик",
      "croissant": "Круассан",
      "pita-bread": "Пита",
      
      // Источники Белка
      "chicken-breast": "Куриная грудка",
      "beef": "Говядина",
      "salmon": "Лосось",
      "tuna": "Тунец",
      "eggs": "Яйца",
      "tofu": "Тофу",
      "beans": "Фасоль",
      "lentils": "Чечевица",
      "chickpeas": "Нут",
      "pork": "Свинина",
      "turkey": "Индейка",
      "shrimp": "Креветки",
      
      // Молочные Продукты
      "milk": "Молоко",
      "cheese": "Сыр",
      "yogurt": "Йогурт",
      "butter": "Масло",
      "cream": "Сливки",
      "cottage-cheese": "Творог",
      "ice-cream": "Мороженое",
      "greek-yogurt": "Греческий йогурт",
      "sour-cream": "Сметана",
      "cream-cheese": "Сливочный сыр",
      "mozzarella": "Моцарелла",
      "cheddar": "Чеддер",
      
      // Закуски
      "potato-chips": "Картофельные чипсы",
      "popcorn": "Попкорн",
      "nuts": "Орехи",
      "almonds": "Миндаль",
      "walnuts": "Грецкие орехи",
      "peanuts": "Арахис",
      "chocolate": "Шоколад",
      "granola-bar": "Гранола-батончик",
      "crackers": "Крекеры",
      "pretzels": "Крендели",
      "trail-mix": "Смесь орехов и сухофруктов",
      "dried-fruits": "Сухофрукты",
      
      // Напитки
      "water": "Вода",
      "coffee": "Кофе",
      "tea": "Чай",
      "orange-juice": "Апельсиновый сок",
      "apple-juice": "Яблочный сок",
      "soda": "Газировка",
      "cola": "Кола",
      "beer": "Пиво",
      "wine": "Вино",
      "milk-shake": "Молочный коктейль",
      "smoothie": "Смузи",
      "energy-drink": "Энергетический напиток",
      
      // Фастфуд
      "hamburger": "Гамбургер",
      "cheeseburger": "Чизбургер",
      "pizza": "Пицца",
      "hot-dog": "Хот-дог",
      "french-fries": "Картофель фри",
      "chicken-nuggets": "Куриные наггетсы",
      "taco": "Тако",
      "burrito": "Буррито",
      "fried-chicken": "Жареная курица",
      "sandwich": "Сэндвич",
      "doner-kebab": "Донер-кебаб",
      "falafel": "Фалафель",
      
      // Десерты
      "chocolate-cake": "Шоколадный торт",
      "cheesecake": "Чизкейк",
      "cookie": "Печенье",
      "brownie": "Брауни",
      "muffin": "Маффин",
      "donut": "Пончик",
      "apple-pie": "Яблочный пирог",
      "pudding": "Пудинг",
      "baklava": "Пахлава",
      "tiramisu": "Тирамису",
      "cupcake": "Кекс",
      "pancake": "Блины",
      
      // Масла и Соусы
      "olive-oil": "Оливковое масло",
      "vegetable-oil": "Растительное масло",
      "mayonnaise": "Майонез",
      "ketchup": "Кетчуп",
      "mustard": "Горчица",
      "soy-sauce": "Соевый соус",
      "salad-dressing": "Заправка для салата",
      "honey": "Мед",
      "maple-syrup": "Кленовый сироп",
      "peanut-butter": "Арахисовая паста",
      "hummus": "Хумус",
      "guacamole": "Гуакамоле"
    },
    
    // İspanyolca yemek adları
    "es": {
      // Frutas
      "apple": "Manzana",
      "banana": "Plátano",
      "orange": "Naranja",
      "grapes": "Uvas",
      "strawberry": "Fresa",
      "watermelon": "Sandía",
      "pineapple": "Piña",
      "peach": "Melocotón",
      "pear": "Pera",
      "kiwi": "Kiwi",
      "mango": "Mango",
      "avocado": "Aguacate",
      
      // Verduras
      "carrot": "Zanahoria",
      "broccoli": "Brócoli",
      "spinach": "Espinaca",
      "tomato": "Tomate",
      "cucumber": "Pepino",
      "lettuce": "Lechuga",
      "potato": "Patata",
      "onion": "Cebolla",
      "bell-pepper": "Pimiento",
      "mushroom": "Champiñón",
      "corn": "Maíz",
      "eggplant": "Berenjena",
      
      // Granos y Panes
      "white-bread": "Pan Blanco",
      "whole-wheat-bread": "Pan Integral",
      "rice": "Arroz",
      "pasta": "Pasta",
      "oats": "Avena",
      "cereal": "Cereal",
      "quinoa": "Quinoa",
      "bulgur": "Bulgur",
      "corn-tortilla": "Tortilla de Maíz",
      "bagel": "Bagel",
      "croissant": "Croissant",
      "pita-bread": "Pan de Pita",
      
      // Fuentes de Proteína
      "chicken-breast": "Pechuga de Pollo",
      "beef": "Carne de Res",
      "salmon": "Salmón",
      "tuna": "Atún",
      "eggs": "Huevos",
      "tofu": "Tofu",
      "beans": "Frijoles",
      "lentils": "Lentejas",
      "chickpeas": "Garbanzos",
      "pork": "Cerdo",
      "turkey": "Pavo",
      "shrimp": "Camarones",
      
      // Productos Lácteos
      "milk": "Leche",
      "cheese": "Queso",
      "yogurt": "Yogur",
      "butter": "Mantequilla",
      "cream": "Crema",
      "cottage-cheese": "Queso Cottage",
      "ice-cream": "Helado",
      "greek-yogurt": "Yogur Griego",
      "sour-cream": "Crema Agria",
      "cream-cheese": "Queso Crema",
      "mozzarella": "Mozzarella",
      "cheddar": "Queso Cheddar",
      
      // Aperitivos
      "potato-chips": "Patatas Fritas",
      "popcorn": "Palomitas de Maíz",
      "nuts": "Frutos Secos",
      "almonds": "Almendras",
      "walnuts": "Nueces",
      "peanuts": "Cacahuetes",
      "chocolate": "Chocolate",
      "granola-bar": "Barra de Granola",
      "crackers": "Galletas Saladas",
      "pretzels": "Pretzels",
      "trail-mix": "Mezcla de Frutos Secos",
      "dried-fruits": "Frutas Secas",
      
      // Bebidas
      "water": "Agua",
      "coffee": "Café",
      "tea": "Té",
      "orange-juice": "Zumo de Naranja",
      "apple-juice": "Zumo de Manzana",
      "soda": "Refresco",
      "cola": "Cola",
      "beer": "Cerveza",
      "wine": "Vino",
      "milk-shake": "Batido",
      "smoothie": "Smoothie",
      "energy-drink": "Bebida Energética",
      
      // Comida Rápida
      "hamburger": "Hamburguesa",
      "cheeseburger": "Hamburguesa con Queso",
      "pizza": "Pizza",
      "hot-dog": "Perrito Caliente",
      "french-fries": "Patatas Fritas",
      "chicken-nuggets": "Nuggets de Pollo",
      "taco": "Taco",
      "burrito": "Burrito",
      "fried-chicken": "Pollo Frito",
      "sandwich": "Sándwich",
      "doner-kebab": "Kebab",
      "falafel": "Falafel",
      
      // Postres
      "chocolate-cake": "Tarta de Chocolate",
      "cheesecake": "Tarta de Queso",
      "cookie": "Galleta",
      "brownie": "Brownie",
      "muffin": "Magdalena",
      "donut": "Donut",
      "apple-pie": "Tarta de Manzana",
      "pudding": "Pudín",
      "baklava": "Baklava",
      "tiramisu": "Tiramisú",
      "cupcake": "Cupcake",
      "pancake": "Crepe",
      
      // Aceites y Salsas
      "olive-oil": "Aceite de Oliva",
      "vegetable-oil": "Aceite Vegetal",
      "mayonnaise": "Mayonesa",
      "ketchup": "Ketchup",
      "mustard": "Mostaza",
      "soy-sauce": "Salsa de Soja",
      "salad-dressing": "Aliño para Ensalada",
      "honey": "Miel",
      "maple-syrup": "Sirope de Arce",
      "peanut-butter": "Mantequilla de Cacahuete",
      "hummus": "Hummus",
      "guacamole": "Guacamole"
    },
    
    // Almanca yemek adları
    "de": {
      // Obst
      "apple": "Apfel",
      "banana": "Banane",
      "orange": "Orange",
      "grapes": "Weintrauben",
      "strawberry": "Erdbeere",
      "watermelon": "Wassermelone",
      "pineapple": "Ananas",
      "peach": "Pfirsich",
      "pear": "Birne",
      "kiwi": "Kiwi",
      "mango": "Mango",
      "avocado": "Avocado",
      
      // Gemüse
      "carrot": "Karotte",
      "broccoli": "Brokkoli",
      "spinach": "Spinat",
      "tomato": "Tomate",
      "cucumber": "Gurke",
      "lettuce": "Salat",
      "potato": "Kartoffel",
      "onion": "Zwiebel",
      "bell-pepper": "Paprika",
      "mushroom": "Pilz",
      "corn": "Mais",
      "eggplant": "Aubergine",
      
      // Getreide und Brot
      "white-bread": "Weißbrot",
      "whole-wheat-bread": "Vollkornbrot",
      "rice": "Reis",
      "pasta": "Nudeln",
      "oats": "Haferflocken",
      "cereal": "Müsli",
      "quinoa": "Quinoa",
      "bulgur": "Bulgur",
      "corn-tortilla": "Maistortilla",
      "bagel": "Bagel",
      "croissant": "Croissant",
      "pita-bread": "Pitabrot",
      
      // Proteinquellen
      "chicken-breast": "Hähnchenbrust",
      "beef": "Rindfleisch",
      "salmon": "Lachs",
      "tuna": "Thunfisch",
      "eggs": "Eier",
      "tofu": "Tofu",
      "beans": "Bohnen",
      "lentils": "Linsen",
      "chickpeas": "Kichererbsen",
      "pork": "Schweinefleisch",
      "turkey": "Truthahn",
      "shrimp": "Garnelen",
      
      // Milchprodukte
      "milk": "Milch",
      "cheese": "Käse",
      "yogurt": "Joghurt",
      "butter": "Butter",
      "cream": "Sahne",
      "cottage-cheese": "Hüttenkäse",
      "ice-cream": "Eiscreme",
      "greek-yogurt": "Griechischer Joghurt",
      "sour-cream": "Saure Sahne",
      "cream-cheese": "Frischkäse",
      "mozzarella": "Mozzarella",
      "cheddar": "Cheddar",
      
      // Snacks
      "potato-chips": "Kartoffelchips",
      "popcorn": "Popcorn",
      "nuts": "Nüsse",
      "almonds": "Mandeln",
      "walnuts": "Walnüsse",
      "peanuts": "Erdnüsse",
      "chocolate": "Schokolade",
      "granola-bar": "Müsliriegel",
      "crackers": "Cracker",
      "pretzels": "Brezeln",
      "trail-mix": "Studentenfutter",
      "dried-fruits": "Trockenfrüchte",
      
      // Getränke
      "water": "Wasser",
      "coffee": "Kaffee",
      "tea": "Tee",
      "orange-juice": "Orangensaft",
      "apple-juice": "Apfelsaft",
      "soda": "Limonade",
      "cola": "Cola",
      "beer": "Bier",
      "wine": "Wein",
      "milk-shake": "Milchshake",
      "smoothie": "Smoothie",
      "energy-drink": "Energydrink",
      
      // Fast Food
      "hamburger": "Hamburger",
      "cheeseburger": "Cheeseburger",
      "pizza": "Pizza",
      "hot-dog": "Hot Dog",
      "french-fries": "Pommes Frites",
      "chicken-nuggets": "Chicken Nuggets",
      "taco": "Taco",
      "burrito": "Burrito",
      "fried-chicken": "Brathähnchen",
      "sandwich": "Sandwich",
      "doner-kebab": "Döner Kebab",
      "falafel": "Falafel",
      
      // Desserts
      "chocolate-cake": "Schokoladenkuchen",
      "cheesecake": "Käsekuchen",
      "cookie": "Keks",
      "brownie": "Brownie",
      "muffin": "Muffin",
      "donut": "Donut",
      "apple-pie": "Apfelkuchen",
      "pudding": "Pudding",
      "baklava": "Baklava",
      "tiramisu": "Tiramisu",
      "cupcake": "Cupcake",
      "pancake": "Pfannkuchen",
      
      // Öle und Saucen
      "olive-oil": "Olivenöl",
      "vegetable-oil": "Pflanzenöl",
      "mayonnaise": "Mayonnaise",
      "ketchup": "Ketchup",
      "mustard": "Senf",
      "soy-sauce": "Sojasauce",
      "salad-dressing": "Salatdressing",
      "honey": "Honig",
      "maple-syrup": "Ahornsirup",
      "peanut-butter": "Erdnussbutter",
      "hummus": "Hummus",
      "guacamole": "Guacamole"
    }
  },
  
  // Yemek besin değerleri (100g başına)
  nutrients: {
    // Meyveler
    "fruits": {
      "apple": { calories: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4, serving: "1 orta boy (182g)" },
      "banana": { calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3, fiber: 2.6, serving: "1 orta boy (118g)" },
      "orange": { calories: 47, protein: 0.9, carbs: 11.8, fat: 0.1, fiber: 2.4, serving: "1 orta boy (131g)" },
      "grapes": { calories: 69, protein: 0.7, carbs: 18.1, fat: 0.2, fiber: 0.9, serving: "1 porsiyon (92g)" },
      "strawberry": { calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, fiber: 2.0, serving: "1 porsiyon (152g)" },
      "watermelon": { calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2, fiber: 0.4, serving: "1 dilim (286g)" },
      "pineapple": { calories: 50, protein: 0.5, carbs: 13.1, fat: 0.1, fiber: 1.4, serving: "1 dilim (84g)" },
      "peach": { calories: 39, protein: 0.9, carbs: 9.5, fat: 0.3, fiber: 1.5, serving: "1 orta boy (150g)" },
      "pear": { calories: 57, protein: 0.4, carbs: 15.2, fat: 0.1, fiber: 3.1, serving: "1 orta boy (178g)" },
      "kiwi": { calories: 61, protein: 1.1, carbs: 14.7, fat: 0.5, fiber: 3.0, serving: "1 orta boy (76g)" },
      "mango": { calories: 60, protein: 0.8, carbs: 15.0, fat: 0.4, fiber: 1.6, serving: "1 porsiyon (165g)" },
      "avocado": { calories: 160, protein: 2.0, carbs: 8.5, fat: 14.7, fiber: 6.7, serving: "1/2 avokado (68g)" }
    },
    
    // Sebzeler
    "vegetables": {
      "carrot": { calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, fiber: 2.8, serving: "1 orta boy (61g)" },
      "broccoli": { calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4, fiber: 2.6, serving: "1 porsiyon (91g)" },
      "spinach": { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, serving: "1 porsiyon (30g)" },
      "tomato": { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, serving: "1 orta boy (123g)" },
      "cucumber": { calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, fiber: 0.5, serving: "1/2 salatalık (151g)" },
      "lettuce": { calories: 15, protein: 1.4, carbs: 2.9, fat: 0.2, fiber: 1.3, serving: "1 porsiyon (36g)" },
      "potato": { calories: 77, protein: 2.0, carbs: 17.5, fat: 0.1, fiber: 2.2, serving: "1 orta boy (173g)" },
      "onion": { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1, fiber: 1.7, serving: "1 orta boy (110g)" },
      "bell-pepper": { calories: 31, protein: 1.0, carbs: 6.0, fat: 0.3, fiber: 2.1, serving: "1 orta boy (119g)" },
      "mushroom": { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, fiber: 1.0, serving: "1 porsiyon (96g)" },
      "corn": { calories: 86, protein: 3.2, carbs: 19.0, fat: 1.2, fiber: 2.7, serving: "1 porsiyon (77g)" },
      "eggplant": { calories: 25, protein: 1.0, carbs: 6.0, fat: 0.2, fiber: 3.0, serving: "1 porsiyon (82g)" }
    },
    
    // Tahıllar ve Ekmekler
    "grains": {
      "white-bread": { calories: 265, protein: 9.0, carbs: 49.0, fat: 3.2, fiber: 2.7, serving: "1 dilim (30g)" },
      "whole-wheat-bread": { calories: 247, protein: 13.0, carbs: 43.0, fat: 3.4, fiber: 7.0, serving: "1 dilim (30g)" },
      "rice": { calories: 130, protein: 2.7, carbs: 28.2, fat: 0.3, fiber: 0.4, serving: "1/2 su bardağı (100g)" },
      "pasta": { calories: 158, protein: 5.8, carbs: 31.0, fat: 0.9, fiber: 1.8, serving: "1 porsiyon (100g)" },
      "oats": { calories: 389, protein: 16.9, carbs: 66.3, fat: 6.9, fiber: 10.6, serving: "1/2 su bardağı (40g)" },
      "cereal": { calories: 380, protein: 8.0, carbs: 85.0, fat: 0.5, fiber: 5.0, serving: "1 porsiyon (30g)" },
      "quinoa": { calories: 120, protein: 4.4, carbs: 21.3, fat: 1.9, fiber: 2.8, serving: "1/2 su bardağı (100g)" },
      "bulgur": { calories: 83, protein: 3.1, carbs: 18.6, fat: 0.2, fiber: 4.5, serving: "1/2 su bardağı (100g)" },
      "corn-tortilla": { calories: 218, protein: 5.7, carbs: 46.1, fat: 2.5, fiber: 5.4, serving: "1 adet (30g)" },
      "bagel": { calories: 245, protein: 9.6, carbs: 47.5, fat: 1.7, fiber: 2.1, serving: "1 adet (105g)" },
      "croissant": { calories: 406, protein: 8.2, carbs: 45.8, fat: 21.1, fiber: 2.6, serving: "1 adet (57g)" },
      "pita-bread": { calories: 275, protein: 9.1, carbs: 55.7, fat: 1.7, fiber: 2.3, serving: "1 adet (60g)" }
    },
    
    // Protein Kaynakları
    "proteins": {
      "chicken-breast": { calories: 165, protein: 31.0, carbs: 0.0, fat: 3.6, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "beef": { calories: 250, protein: 26.0, carbs: 0.0, fat: 17.0, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "salmon": { calories: 208, protein: 20.0, carbs: 0.0, fat: 13.0, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "tuna": { calories: 130, protein: 29.0, carbs: 0.0, fat: 1.0, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "eggs": { calories: 155, protein: 13.0, carbs: 1.1, fat: 11.0, fiber: 0.0, serving: "1 büyük boy (50g)" },
      "tofu": { calories: 76, protein: 8.0, carbs: 2.0, fat: 4.0, fiber: 0.3, serving: "1 porsiyon (100g)" },
      "beans": { calories: 347, protein: 21.0, carbs: 63.0, fat: 1.2, fiber: 15.0, serving: "1 porsiyon (100g)" },
      "lentils": { calories: 116, protein: 9.0, carbs: 20.0, fat: 0.4, fiber: 8.0, serving: "1 porsiyon (100g)" },
      "chickpeas": { calories: 364, protein: 19.0, carbs: 61.0, fat: 6.0, fiber: 17.0, serving: "1 porsiyon (100g)" },
      "pork": { calories: 242, protein: 26.0, carbs: 0.0, fat: 14.0, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "turkey": { calories: 189, protein: 29.0, carbs: 0.0, fat: 7.0, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "shrimp": { calories: 99, protein: 24.0, carbs: 0.0, fat: 0.3, fiber: 0.0, serving: "1 porsiyon (100g)" }
    },
    
    // Süt Ürünleri
    "dairy": {
      "milk": { calories: 42, protein: 3.4, carbs: 5.0, fat: 1.0, fiber: 0.0, serving: "1 su bardağı (240ml)" },
      "cheese": { calories: 402, protein: 25.0, carbs: 1.3, fat: 33.0, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "yogurt": { calories: 59, protein: 3.5, carbs: 5.0, fat: 3.3, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "butter": { calories: 717, protein: 0.9, carbs: 0.1, fat: 81.0, fiber: 0.0, serving: "1 yemek kaşığı (14g)" },
      "cream": { calories: 340, protein: 2.1, carbs: 2.8, fat: 37.0, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "cottage-cheese": { calories: 98, protein: 11.0, carbs: 3.4, fat: 4.3, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "ice-cream": { calories: 207, protein: 3.5, carbs: 24.0, fat: 11.0, fiber: 0.7, serving: "1 porsiyon (100g)" },
      "greek-yogurt": { calories: 59, protein: 10.0, carbs: 3.6, fat: 0.4, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "sour-cream": { calories: 198, protein: 2.1, carbs: 4.6, fat: 19.0, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "cream-cheese": { calories: 342, protein: 6.2, carbs: 3.7, fat: 34.0, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "mozzarella": { calories: 280, protein: 28.0, carbs: 3.1, fat: 17.0, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "cheddar": { calories: 403, protein: 25.0, carbs: 1.3, fat: 33.0, fiber: 0.0, serving: "1 porsiyon (100g)" }
    },
    
    // Atıştırmalıklar
    "snacks": {
      "potato-chips": { calories: 536, protein: 7.0, carbs: 53.0, fat: 35.0, fiber: 4.8, serving: "1 porsiyon (100g)" },
      "popcorn": { calories: 375, protein: 11.0, carbs: 74.0, fat: 4.3, fiber: 14.5, serving: "1 porsiyon (100g)" },
      "nuts": { calories: 607, protein: 21.0, carbs: 20.0, fat: 54.0, fiber: 8.4, serving: "1 avuç (30g)" },
      "almonds": { calories: 579, protein: 21.0, carbs: 22.0, fat: 49.0, fiber: 12.5, serving: "1 avuç (30g)" },
      "walnuts": { calories: 654, protein: 15.0, carbs: 14.0, fat: 65.0, fiber: 6.7, serving: "1 avuç (30g)" },
      "peanuts": { calories: 567, protein: 26.0, carbs: 16.0, fat: 49.0, fiber: 8.5, serving: "1 avuç (30g)" },
      "chocolate": { calories: 546, protein: 4.9, carbs: 61.0, fat: 31.0, fiber: 7.0, serving: "1 porsiyon (100g)" },
      "granola-bar": { calories: 471, protein: 8.2, carbs: 64.0, fat: 20.0, fiber: 6.8, serving: "1 adet (40g)" },
      "crackers": { calories: 502, protein: 9.0, carbs: 67.0, fat: 23.0, fiber: 2.8, serving: "1 porsiyon (100g)" },
      "pretzels": { calories: 380, protein: 10.0, carbs: 80.0, fat: 3.1, fiber: 3.5, serving: "1 porsiyon (100g)" },
      "trail-mix": { calories: 462, protein: 15.0, carbs: 44.0, fat: 28.0, fiber: 6.3, serving: "1 avuç (40g)" },
      "dried-fruits": { calories: 359, protein: 3.9, carbs: 89.0, fat: 0.5, fiber: 9.8, serving: "1 porsiyon (100g)" }
    },
    
    // İçecekler
    "beverages": {
      "water": { calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0.0, serving: "1 bardak (240ml)" },
      "coffee": { calories: 2, protein: 0.3, carbs: 0.0, fat: 0.0, fiber: 0.0, serving: "1 fincan (240ml)" },
      "tea": { calories: 2, protein: 0.0, carbs: 0.7, fat: 0.0, fiber: 0.0, serving: "1 fincan (240ml)" },
      "orange-juice": { calories: 45, protein: 0.7, carbs: 10.4, fat: 0.2, fiber: 0.2, serving: "1 bardak (240ml)" },
      "apple-juice": { calories: 46, protein: 0.1, carbs: 11.3, fat: 0.1, fiber: 0.1, serving: "1 bardak (240ml)" },
      "soda": { calories: 41, protein: 0.0, carbs: 10.6, fat: 0.0, fiber: 0.0, serving: "1 bardak (240ml)" },
      "cola": { calories: 42, protein: 0.0, carbs: 10.6, fat: 0.0, fiber: 0.0, serving: "1 bardak (240ml)" },
      "beer": { calories: 43, protein: 0.5, carbs: 3.6, fat: 0.0, fiber: 0.0, serving: "1 bardak (240ml)" },
      "wine": { calories: 83, protein: 0.1, carbs: 2.7, fat: 0.0, fiber: 0.0, serving: "1 kadeh (150ml)" },
      "milk-shake": { calories: 112, protein: 3.9, carbs: 17.0, fat: 3.3, fiber: 0.4, serving: "1 bardak (240ml)" },
      "smoothie": { calories: 130, protein: 2.5, carbs: 28.0, fat: 1.5, fiber: 3.0, serving: "1 bardak (240ml)" },
      "energy-drink": { calories: 45, protein: 0.0, carbs: 11.0, fat: 0.0, fiber: 0.0, serving: "1 kutu (250ml)" }
    },
    
    // Fast Food
    "fastfood": {
      "hamburger": { calories: 254, protein: 12.0, carbs: 30.0, fat: 10.0, fiber: 1.0, serving: "1 adet (100g)" },
      "cheeseburger": { calories: 303, protein: 15.0, carbs: 30.0, fat: 14.0, fiber: 1.0, serving: "1 adet (120g)" },
      "pizza": { calories: 266, protein: 11.0, carbs: 33.0, fat: 10.0, fiber: 2.3, serving: "1 dilim (100g)" },
      "hot-dog": { calories: 290, protein: 10.0, carbs: 23.0, fat: 17.0, fiber: 1.0, serving: "1 adet (100g)" },
      "french-fries": { calories: 312, protein: 3.4, carbs: 41.0, fat: 15.0, fiber: 3.8, serving: "1 porsiyon (100g)" },
      "chicken-nuggets": { calories: 296, protein: 15.0, carbs: 15.0, fat: 18.0, fiber: 0.9, serving: "6 adet (100g)" },
      "taco": { calories: 210, protein: 9.0, carbs: 21.0, fat: 10.0, fiber: 3.0, serving: "1 adet (100g)" },
      "burrito": { calories: 326, protein: 14.0, carbs: 50.0, fat: 8.0, fiber: 7.0, serving: "1 adet (200g)" },
      "fried-chicken": { calories: 246, protein: 24.0, carbs: 8.0, fat: 13.0, fiber: 0.5, serving: "1 parça (100g)" },
      "sandwich": { calories: 290, protein: 15.0, carbs: 35.0, fat: 9.0, fiber: 2.0, serving: "1 adet (150g)" },
      "doner-kebab": { calories: 215, protein: 19.0, carbs: 17.0, fat: 8.0, fiber: 1.5, serving: "1 porsiyon (100g)" },
      "falafel": { calories: 333, protein: 13.0, carbs: 31.0, fat: 18.0, fiber: 4.0, serving: "1 porsiyon (100g)" }
    },
    
    // Tatlılar
    "desserts": {
      "chocolate-cake": { calories: 371, protein: 5.0, carbs: 47.0, fat: 19.0, fiber: 2.0, serving: "1 dilim (100g)" },
      "cheesecake": { calories: 321, protein: 6.0, carbs: 26.0, fat: 22.0, fiber: 0.3, serving: "1 dilim (100g)" },
      "cookie": { calories: 488, protein: 5.0, carbs: 64.0, fat: 24.0, fiber: 1.0, serving: "1 adet (30g)" },
      "brownie": { calories: 466, protein: 4.0, carbs: 61.0, fat: 24.0, fiber: 2.0, serving: "1 adet (50g)" },
      "muffin": { calories: 377, protein: 6.0, carbs: 55.0, fat: 16.0, fiber: 2.0, serving: "1 adet (100g)" },
      "donut": { calories: 452, protein: 5.0, carbs: 51.0, fat: 25.0, fiber: 1.0, serving: "1 adet (60g)" },
      "apple-pie": { calories: 237, protein: 2.0, carbs: 34.0, fat: 11.0, fiber: 1.5, serving: "1 dilim (100g)" },
      "pudding": { calories: 160, protein: 3.0, carbs: 30.0, fat: 3.0, fiber: 0.0, serving: "1 porsiyon (100g)" },
      "baklava": { calories: 334, protein: 6.0, carbs: 40.0, fat: 17.0, fiber: 2.0, serving: "1 adet (40g)" },
      "tiramisu": { calories: 283, protein: 5.0, carbs: 25.0, fat: 18.0, fiber: 0.5, serving: "1 dilim (100g)" },
      "cupcake": { calories: 305, protein: 3.0, carbs: 45.0, fat: 13.0, fiber: 0.5, serving: "1 adet (50g)" },
      "pancake": { calories: 227, protein: 6.0, carbs: 38.0, fat: 6.0, fiber: 1.0, serving: "1 adet (100g)" }
    },
    
    // Yağlar ve Soslar
    "oils": {
      "olive-oil": { calories: 884, protein: 0.0, carbs: 0.0, fat: 100.0, fiber: 0.0, serving: "1 yemek kaşığı (14g)" },
      "vegetable-oil": { calories: 884, protein: 0.0, carbs: 0.0, fat: 100.0, fiber: 0.0, serving: "1 yemek kaşığı (14g)" },
      "mayonnaise": { calories: 680, protein: 1.0, carbs: 1.5, fat: 75.0, fiber: 0.0, serving: "1 yemek kaşığı (14g)" },
      "ketchup": { calories: 112, protein: 1.7, carbs: 26.0, fat: 0.5, fiber: 0.8, serving: "1 yemek kaşığı (15g)" },
      "mustard": { calories: 66, protein: 4.0, carbs: 6.0, fat: 4.0, fiber: 1.5, serving: "1 yemek kaşığı (15g)" },
      "soy-sauce": { calories: 53, protein: 5.0, carbs: 5.0, fat: 0.0, fiber: 0.0, serving: "1 yemek kaşığı (15g)" },
      "salad-dressing": { calories: 449, protein: 0.7, carbs: 7.0, fat: 45.0, fiber: 0.0, serving: "1 yemek kaşığı (15g)" },
      "honey": { calories: 304, protein: 0.3, carbs: 82.0, fat: 0.0, fiber: 0.2, serving: "1 yemek kaşığı (21g)" },
      "maple-syrup": { calories: 260, protein: 0.0, carbs: 67.0, fat: 0.0, fiber: 0.0, serving: "1 yemek kaşığı (20g)" },
      "peanut-butter": { calories: 588, protein: 25.0, carbs: 20.0, fat: 50.0, fiber: 6.0, serving: "1 yemek kaşığı (16g)" },
      "hummus": { calories: 166, protein: 7.9, carbs: 14.0, fat: 9.6, fiber: 6.0, serving: "1 porsiyon (100g)" },
      "guacamole": { calories: 160, protein: 2.0, carbs: 8.0, fat: 14.7, fiber: 6.7, serving: "1 porsiyon (100g)" }
    }
  }
};

/**
 * Belirli bir dilde yemek kategorilerini döndürür
 * @param {string} language - Dil kodu ("tr", "en", "ru", "es", "de")
 * @returns {Object} - Kategori adları
 */
function getFoodCategories(language = "tr") {
  // Seçilen dil yoksa varsayılan olarak İngilizce kullan
  const selectedLanguage = foodData.categories[language] ? language : "en";
  return foodData.categories[selectedLanguage];
}

/**
 * Belirli bir dilde yemek adlarını döndürür
 * @param {string} language - Dil kodu ("tr", "en", "ru", "es", "de")
 * @returns {Object} - Yemek adları
 */
function getFoodNames(language = "tr") {
  // Seçilen dil yoksa varsayılan olarak İngilizce kullan
  const selectedLanguage = foodData.names[language] ? language : "en";
  return foodData.names[selectedLanguage];
}

/**
 * Belirli bir kategorideki yemekleri döndürür
 * @param {string} category - Kategori adı ("fruits", "vegetables", vb.)
 * @param {string} language - Dil kodu ("tr", "en", "ru", "es", "de")
 * @returns {Array} - Yemek listesi
 */
function getFoodsByCategory(category, language = "tr") {
  // Kategori yoksa boş dizi döndür
  if (!foodData.nutrients[category]) {
    return [];
  }
  
  // Seçilen dil yoksa varsayılan olarak İngilizce kullan
  const selectedLanguage = foodData.names[language] ? language : "en";
  
  // Kategori içindeki yemekleri dil seçeneğine göre döndür
  return Object.keys(foodData.nutrients[category]).map(foodKey => {
    const nutrients = foodData.nutrients[category][foodKey];
    return {
      id: foodKey,
      name: foodData.names[selectedLanguage][foodKey] || foodData.names["en"][foodKey],
      calories: nutrients.calories,
      protein: nutrients.protein,
      carbs: nutrients.carbs,
      fat: nutrients.fat,
      fiber: nutrients.fiber,
      serving: nutrients.serving
    };
  });
}

/**
 * Belirli bir yemeğin besin değerlerini döndürür
 * @param {string} foodId - Yemek ID'si ("apple", "chicken-breast", vb.)
 * @param {string} language - Dil kodu ("tr", "en", "ru", "es", "de")
 * @returns {Object|null} - Yemek besin değerleri veya null
 */
function getFoodNutrients(foodId, language = "tr") {
  // Tüm kategorileri kontrol et
  for (const category in foodData.nutrients) {
    if (foodData.nutrients[category][foodId]) {
      // Seçilen dil yoksa varsayılan olarak İngilizce kullan
      const selectedLanguage = foodData.names[language] ? language : "en";
      
      const nutrients = foodData.nutrients[category][foodId];
      return {
        id: foodId,
        name: foodData.names[selectedLanguage][foodId] || foodData.names["en"][foodId],
        category: foodData.categories[selectedLanguage][category] || foodData.categories["en"][category],
        calories: nutrients.calories,
        protein: nutrients.protein,
        carbs: nutrients.carbs,
        fat: nutrients.fat,
        fiber: nutrients.fiber,
        serving: nutrients.serving
      };
    }
  }
  
  // Yemek bulunamadıysa null döndür
  return null;
}

/**
 * Yemek adına göre arama yapar
 * @param {string} query - Arama sorgusu
 * @param {string} language - Dil kodu ("tr", "en", "ru", "es", "de")
 * @returns {Array} - Eşleşen yemeklerin listesi
 */
function searchFoods(query, language = "tr") {
  // Seçilen dil yoksa varsayılan olarak İngilizce kullan
  const selectedLanguage = foodData.names[language] ? language : "en";
  
  // Arama sorgusunu küçük harfe çevir
  const searchQuery = query.toLowerCase();
  
  // Eşleşen yemekleri bul
  const results = [];
  
  // Tüm kategorileri ve yemekleri kontrol et
  for (const category in foodData.nutrients) {
    for (const foodId in foodData.nutrients[category]) {
      const foodName = foodData.names[selectedLanguage][foodId] || foodData.names["en"][foodId];
      
      // Yemek adı arama sorgusunu içeriyorsa listeye ekle
      if (foodName.toLowerCase().includes(searchQuery)) {
        const nutrients = foodData.nutrients[category][foodId];
        results.push({
          id: foodId,
          name: foodName,
          category: foodData.categories[selectedLanguage][category] || foodData.categories["en"][category],
          calories: nutrients.calories,
          protein: nutrients.protein,
          carbs: nutrients.carbs,
          fat: nutrients.fat,
          fiber: nutrients.fiber,
          serving: nutrients.serving
        });
      }
    }
  }
  
  return results;
}

// Dışa aktarılan fonksiyonlar
export { 
  foodData,
  getFoodCategories,
  getFoodNames,
  getFoodsByCategory,
  getFoodNutrients,
  searchFoods
};