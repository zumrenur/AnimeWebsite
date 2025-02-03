//loading
window.addEventListener("load", function () {
    setTimeout(() => {
      const loader = document.querySelector(".loader-container");
      loader.classList.add("fade-out"); 
    }, 3000); 
    });

//scroll
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

//hero
document.addEventListener("DOMContentLoaded", function () {
    let index = 0; 
    const slides = document.querySelectorAll('.slider');
    const titles = ["Naruto", "Demon Slayer", "One Piece"];
    const descriptions = [
        "Naruto, Hokage olma hayali kuran genç bir ninja hakkında bir hikayedir.",
        "İblis Keserler ve iblislerin inanılmaz savaşını anlatır.",
        "Luffy ve tayfasının efsanevi hazine One Piece’i arayışını konu alır.",
    ];

    function changeSlide() {
        // Önce tüm slaytları görünmez yap
        slides.forEach((slide, i) => {
            slide.style.opacity = '0';
        });

        // Sıradaki slaytı görünür yap
        slides[index].style.opacity = '1';

        // Başlığı ve açıklamayı değiştir
        document.getElementById('film-title').textContent = titles[index];
        document.getElementById('film-description').textContent = descriptions[index];

        // Sonraki slayta geç
        index = (index + 1) % slides.length;
    }

    // Sayfa yüklendiğinde hemen bir kez çalıştır
    changeSlide();

    // 3 saniyede bir çalıştırmak için setInterval kullan
    setInterval(changeSlide, 3000);
});

// takvim
 const animeSchedule = [
    { animeAdi: "One Piece", bolumNo: 1092, yayınTarihi: "2025-02-04", saat: "10:00", image: "images/one.jpeg" },
    { animeAdi: "Jujutsu Kaisen", bolumNo: 38, yayınTarihi: "2025-02-09", saat: "22:00", image: "images/juju.jpeg" },
    { animeAdi: "Attack on Titan", bolumNo: "Final", yayınTarihi: "2025-03-01", saat: "20:30", image: "images/aks.jpeg" },
    { animeAdi: "Demon Slayer", bolumNo: 50, yayınTarihi: "2025-04-10", saat: "19:00", image: "images/demon.jpg" },
    { animeAdi: "Demon Slayer", bolumNo: 50, yayınTarihi: "2025-04-10", saat: "19:00", image: "images/demon.jpg" }
];

function displayAnimeSchedule() {
    const scheduleList = document.getElementById("schedule-list");
    scheduleList.innerHTML = "";

    animeSchedule.forEach(anime => {
        const card = document.createElement("div");
        card.classList.add("schedule-card");

        card.innerHTML = `
            <img src="${anime.image}" alt="${anime.animeAdi}">
            <div class="schedule-info">
                <div class="anime-title">${anime.animeAdi}</div>
                <div class="anime-details">
                    <i class="fas fa-calendar"></i> ${anime.yayınTarihi} | <i class="fas fa-clock"></i> ${anime.saat}
                </div>
                <div class="release-date">Yeni Bölüm!</div>
            </div>
        `;

        scheduleList.appendChild(card);
    });
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", displayAnimeSchedule);

