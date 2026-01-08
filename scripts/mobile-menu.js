const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
let isMobileMenuOpen = false;
mobileMenuBtn.addEventListener('click', () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('active');
        setTimeout(() => {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        }, 150);
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }, 150);
        document.body.style.overflow = 'auto';
    }
});
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }, 150);
        isMobileMenuOpen = false;
        document.body.style.overflow = 'auto';
    });
});
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }, 150);
        isMobileMenuOpen = false;
        document.body.style.overflow = 'auto';
    }
});