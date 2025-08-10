// Kalori Hesaplama Fonksiyonu
function hesaplaKalori() {
    // Form elemanlarını al
    const cinsiyet = document.getElementById("cinsiyet").value;
    const yas = parseInt(document.getElementById("yas").value);
    const boy = parseFloat(document.getElementById("boy").value);
    const kilo = parseFloat(document.getElementById("kilo").value);
    const aktivite = parseFloat(document.getElementById("aktivite").value);
    
    // Form validasyonu
    if (!cinsiyet || isNaN(yas) || isNaN(boy) || isNaN(kilo) || isNaN(aktivite)) {
        alert("Lütfen tüm alanları doğru şekilde doldurun.");
        return;
    }
    
    // BMR hesaplama (Mifflin-St Jeor formülü)
    let bmr;
    if (cinsiyet === "erkek") {
        bmr = 10 * kilo + 6.25 * boy - 5 * yas + 5;
    } else {
        bmr = 10 * kilo + 6.25 * boy - 5 * yas - 161;
    }
    
    // TDEE hesaplama (Toplam Günlük Enerji Harcaması)
    const tdee = bmr * aktivite;
    
    // Sonuçları göster
    document.getElementById("sonuc").innerHTML = `Günlük Kalori İhtiyacınız: <span>${Math.round(tdee)} kcal</span>`;
    document.getElementById("sonuc-container").classList.remove("hidden");
    
    // Ek bilgiler
    const aciklama = document.getElementById("aciklama");
    aciklama.innerHTML = `
        <p>Bu değer, vücut fonksiyonlarınızı sürdürmek ve günlük aktivitelerinizi gerçekleştirmek için ihtiyaç duyduğunuz tahmini kalori miktarıdır.</p>
        <p>Bazal Metabolizma Hızınız (BMR): <strong>${Math.round(bmr)} kcal</strong></p>
        <p><a href="hakkinda.html">BMR ve TDEE hakkında daha fazla bilgi alın</a></p>
    `;
    
    // Sonuca kaydır
    document.getElementById("sonuc-container").scrollIntoView({ behavior: "smooth" });
}

// Form validasyonu için event listener'lar
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#kaloriForm input, #kaloriForm select');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });
    
    // Enter tuşu ile hesaplama
    document.getElementById('kaloriForm').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            hesaplaKalori();
        }
    });
});

// Mobil menü için hamburger menü (gelecekte eklenebilir)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}