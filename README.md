# Kalori Hesaplama Sitesi

Bu proje, kullanıcıların günlük kalori ihtiyaçlarını hesaplayabilecekleri, sağlıklı beslenme ve diyet planları hakkında bilgi edinebilecekleri bir web sitesidir. Site, HTML, CSS ve JavaScript kullanılarak oluşturulmuştur ve herhangi bir sunucu gerektirmeden çalışabilir.

## Özellikler

- **Kalori Hesaplayıcı:** Cinsiyet, yaş, boy, kilo ve aktivite seviyesine göre günlük kalori ihtiyacını hesaplar
- **Beslenme Rehberi:** Sağlıklı beslenme, kalori yönetimi ve diyet planları hakkında bilgilendirici makaleler
- **Mobil Uyumlu Tasarım:** Tüm cihazlarda sorunsuz çalışan responsive tasarım
- **Modern Arayüz:** Kullanıcı dostu ve estetik bir arayüz

## Dosya Yapısı

```
/
├── index.html          # Ana sayfa ve kalori hesaplayıcı
├── hakkinda.html      # Kalori, BMR ve TDEE kavramları hakkında bilgiler
├── blog.html          # Beslenme rehberi makaleleri
├── style.css          # Tüm sayfalar için stil dosyası
├── script.js          # JavaScript fonksiyonları
└── images/            # SVG formatında görseller
    ├── hero-image.svg
    ├── weight-control.svg
    ├── nutrition.svg
    ├── fitness.svg
    ├── calorie-deficit.svg
    ├── metabolism.svg
    └── muscle.svg
```

## Kurulum

Bu site statik HTML dosyalarından oluştuğu için kurulum gerektirmez. Dosyaları bilgisayarınıza indirdikten sonra `index.html` dosyasını herhangi bir web tarayıcısında açarak siteyi kullanabilirsiniz.

### GitHub Pages ile Yayınlama

Siteyi ücretsiz olarak GitHub Pages üzerinde yayınlamak için:

1. GitHub'da yeni bir repository oluşturun
2. Bu projedeki tüm dosyaları repository'ye yükleyin
3. Repository ayarlarından GitHub Pages bölümüne gidin
4. Source olarak "main" branch'i seçin
5. Save butonuna tıklayın

Birkaç dakika içinde siteniz `https://kullaniciadi.github.io/repository-adi/` adresinde yayınlanacaktır.

## Kalori Hesaplama Formülü

Site, kalori hesaplamak için Mifflin-St Jeor formülünü kullanmaktadır:

### BMR (Bazal Metabolizma Hızı)

- **Erkek:** BMR = 10 × kilo(kg) + 6.25 × boy(cm) - 5 × yaş + 5
- **Kadın:** BMR = 10 × kilo(kg) + 6.25 × boy(cm) - 5 × yaş - 161

### TDEE (Toplam Günlük Enerji Harcaması)

TDEE = BMR × Aktivite Faktörü

- Sedanter (Hareketsiz yaşam): BMR × 1.2
- Hafif Aktif (Haftada 1-3 gün egzersiz): BMR × 1.375
- Orta Aktif (Haftada 3-5 gün egzersiz): BMR × 1.55
- Çok Aktif (Haftada 6-7 gün egzersiz): BMR × 1.725
- Ekstra Aktif (Günde 2 kez egzersiz): BMR × 1.9

## Özelleştirme

Siteyi kendi ihtiyaçlarınıza göre özelleştirmek için:

- `style.css` dosyasındaki renk değişkenlerini değiştirebilirsiniz
- SVG görselleri metin editörü ile açarak renklerini değiştirebilirsiniz
- Blog içeriklerini kendi bilgilerinizle güncelleyebilirsiniz
- Google Analytics veya AdSense kodlarını ekleyebilirsiniz

## Gelir Potansiyeli

Site, aşağıdaki yöntemlerle gelir elde etmek için kullanılabilir:

- **Google AdSense:** Sağlık/fitness kategorisi CPM değeri Türkiye'de 1-3 USD, yurtdışında 6-12 USD
- **Affiliate Pazarlama:** Beslenme takviyeleri, fitness ekipmanları veya diyet programları için affiliate linkler
- **Özel İçerik:** Premium diyet planları veya kişiselleştirilmiş beslenme tavsiyeleri

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakınız.

## İletişim

Sorularınız veya önerileriniz için [e-posta adresiniz] adresine e-posta gönderebilirsiniz.