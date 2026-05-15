// script.js — Shared scripts for all pages

document.addEventListener('DOMContentLoaded', () => {

    // Hamburger Menu Toggle
    const burger   = document.getElementById('navBurger');
    const dropdown = document.getElementById('mobileDropdown');

    if (burger && dropdown) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            dropdown.classList.toggle('is-active');
        });

        // Close menu when a nav link is clicked
        dropdown.querySelectorAll('.mobile-nav-item').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('is-active');
                dropdown.classList.remove('is-active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!burger.contains(e.target) && !dropdown.contains(e.target)) {
                burger.classList.remove('is-active');
                dropdown.classList.remove('is-active');
            }
        });
    }

    // Certifications Page: Lightbox keyboard close
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLightbox();
        });
    }

});

function openLightbox(imgEl) {
    document.getElementById('lightbox-img').src = imgEl.src;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}