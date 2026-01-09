const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navIndicator = document.querySelector('.nav-indicator');
const sections = document.querySelectorAll('section[id]');

// Fungsi untuk update active navigation
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
    // also remove active from mobile nav links
    document.querySelectorAll('.mobile-nav-link').forEach((link) => link.classList.remove('active'));

    navLinks.forEach((link) => {
        const href = link.getAttribute('href').substring(1);
        if (href === current) {
            link.classList.add('active');
            // also mark corresponding mobile nav link active (if present)
            const mobileMatch = document.querySelector(`.mobile-nav-link[href="#${href}"]`);
            if (mobileMatch) mobileMatch.classList.add('active');
            const linkRect = link.getBoundingClientRect();
            const firstLinkRect = navLinks[0].getBoundingClientRect();
            const leftPosition = linkRect.left - firstLinkRect.left;

            navIndicator.style.width = linkRect.width + 'px';
            navIndicator.style.left = leftPosition + 'px';
        }
    });
}

// Event listeners
window.addEventListener('load', updateActiveNav);
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('resize', updateActiveNav);