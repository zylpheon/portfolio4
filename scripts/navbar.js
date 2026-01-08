const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-blur');
    } else {
        navbar.classList.remove('navbar-blur');
    }
});
const navLinks = document.querySelectorAll('.nav-link');
const navIndicator = document.querySelector('.nav-indicator');
const sections = document.querySelectorAll('section[id]');
function updateActiveNav() {
    let current = '';
    const scrollPosition = window.scrollY + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove('active');
    });
    navLinks.forEach((link, index) => {
        const href = link.getAttribute('href').substring(1);
        if (href === current) {
            link.classList.add('active');
            const linkRect = link.getBoundingClientRect();
            const parentUl = link.closest('ul');
            const ulRect = parentUl.getBoundingClientRect();
            const firstLinkRect = navLinks[0].getBoundingClientRect();
            const leftPosition = linkRect.left - firstLinkRect.left;
            navIndicator.style.width = linkRect.width + 'px';
            navIndicator.style.left = leftPosition + 'px';
        }
    });
}
window.addEventListener('load', () => {
    updateActiveNav();
});
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('resize', updateActiveNav);