
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

let index = 0; 
const slides = document.querySelectorAll('.slider');
const titles = ["Naruto","Demon Slayer", "One Piece"];
const descriptions = [
    "Naruto, Hokage olma hayali kuran genç bir ninja hakkında bir hikayedir.",
    "İblis Keserler ve iblislerin inanılmaz savaşını anlatır.",
    "Luffy ve tayfasının efsanevi hazine One Piece’i arayışını konu alır.",
];

function changeSlide() {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0';
    });
    document.getElementById('film-title').textContent = titles[index];
    document.getElementById('film-description').textContent = descriptions[index];
    index = (index + 1) % slides.length;
}

// Sayfa yüklendiğinde changeSlide fonksiyonunu hemen çağır
window.onload = function() {
    changeSlide();
    setInterval(changeSlide, 3000);
};

  /* Navbar */
AOS.init();
gsap.from("#navbar", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".hero-content", { duration: 1, x: -100, opacity: 0, ease: "power2.out", delay: 0.5 });
gsap.from(".anime-card", { duration: 1, scale: 0.8, opacity: 0, stagger: 0.3, ease: "power2.out" });

window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "black";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});

window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});