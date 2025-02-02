/*Kategori */
document.getElementById("prev-btn").addEventListener("click", function() {
    document.querySelector(".category-list").scrollBy({ left: -200, behavior: "smooth" });
});

document.getElementById("next-btn").addEventListener("click", function() {
    document.querySelector(".category-list").scrollBy({ left: 200, behavior: "smooth" });
});

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

/* Hero */

const hero = document.querySelector('.hero');
const images = [
    'url("images/demon.jpeg")',
    'url("images/gojo.jpeg")',
    'url("images/naruto.jpeg")'
];
let currentImageIndex = 0;

function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    hero.style.backgroundImage = images[currentImageIndex];
}

setInterval(changeBackground, 5000); // Her 5 saniyede bir değişecek

/* Comment */
const comments = [
    "Harika bir site! En sevdiğim animeleri buldum. - Ahmet",
    "İzleme deneyimi mükemmel! - Elif",
    "Daha fazla anime eklenmeli ama yine de harika! - Burak"
];
let currentCommentIndex = 0;

function showNextComment() {
    currentCommentIndex = (currentCommentIndex + 1) % comments.length;
    document.getElementById("comment-text").innerText = comments[currentCommentIndex];
}

setInterval(showNextComment, 3000); // Her 3 saniyede bir yorum değişecek

/* Menü */
document.getElementById("menu-icon").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
});

