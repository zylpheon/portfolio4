const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
let isMobileMenuOpen = false;
const OVERLAY_ID = 'menu-overlay';
// safely grab navbar element with a different variable name to avoid duplicate-const errors
const navbarEl = document.getElementById('navbar');

function toggleMobileMenu() {
    console.log('toggleMobileMenu called');
    isMobileMenuOpen = !isMobileMenuOpen;

    mobileMenu.classList.toggle('active', isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';

    // Manage dim overlay and navbar dimming
    if (isMobileMenuOpen) {
        let overlay = document.getElementById(OVERLAY_ID);
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = OVERLAY_ID;
            overlay.className = 'menu-overlay';
            document.body.appendChild(overlay);
            overlay.addEventListener('click', closeMobileMenu);
        }
        // trigger CSS transition
        requestAnimationFrame(() => overlay.classList.add('active'));
        if (navbarEl) navbarEl.classList.add('dimmed');
    } else {
        const overlay = document.getElementById(OVERLAY_ID);
        if (overlay) {
            overlay.classList.remove('active');
            // remove from DOM after transition
            overlay.addEventListener('transitionend', () => {
                if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
            }, { once: true });
        }
        if (navbarEl) navbarEl.classList.remove('dimmed');
    }

    // Toggle icon dengan delay untuk animasi yang smooth
    setTimeout(() => {
        if (menuIcon) {
            menuIcon.classList.toggle('fa-bars', !isMobileMenuOpen);
            menuIcon.classList.toggle('fa-times', isMobileMenuOpen);
        }
    }, 150);
}

function closeMobileMenu() {
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Event listeners
if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);

if (mobileNavLinks && mobileNavLinks.length) {
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
});