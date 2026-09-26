// ==========================================
// JAVASCRIPT - WEBSITE CV ALLFARIZ RAJIH GALIB
// ==========================================


// 1. SMOOTH SCROLLING
// Membuat perpindahan antar-section menjadi lebih halus
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// 2. TOMBOL KEMBALI KE ATAS
// Tombol akan muncul setelah halaman di-scroll ke bawah
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});


// Ketika tombol diklik, halaman kembali ke bagian paling atas
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 3. NAVIGASI AKTIF
// Memberikan tanda pada menu sesuai section yang sedang dibaca
const sections = document.querySelectorAll("main section[id]");
const menuLinks = document.querySelectorAll("#mainNav a");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {

                menuLinks.forEach(function (link) {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    '#mainNav a[href="#' + entry.target.id + '"]'
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    },
    {
        threshold: 0.35
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});


// 4. TAHUN COPYRIGHT OTOMATIS
// Tahun footer mengikuti tahun pada komputer pengunjung
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// 5. PESAN DI CONSOLE
// Untuk memastikan JavaScript berhasil dijalankan
console.log("Website CV Allfariz Rajih Galib berhasil dimuat.");