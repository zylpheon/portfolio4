const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;

    mobileMenu.classList.toggle('active', isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';

    // Toggle icon dengan delay untuk animasi yang smooth
    setTimeout(() => {
        menuIcon.classList.toggle('fa-bars', !isMobileMenuOpen);
        menuIcon.classList.toggle('fa-times', isMobileMenuOpen);
    }, 150);
}

function closeMobileMenu() {
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Event listeners
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
});