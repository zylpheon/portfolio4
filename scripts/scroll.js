// Welcome section scroll effects
window.addEventListener('scroll', () => {
    const welcomeContent = document.getElementById('welcome-content');
    const scrollPosition = window.scrollY;
    const welcomeSection = document.getElementById('welcome');
    const welcomeHeight = welcomeSection.offsetHeight;

    if (scrollPosition < welcomeHeight) {
        const scale = 1 + (scrollPosition / welcomeHeight) * 0.5;
        const blur = (scrollPosition / welcomeHeight) * 10;
        const opacity = 1 - (scrollPosition / welcomeHeight);
        welcomeContent.style.transform = `scale(${scale})`;
        welcomeContent.style.filter = `blur(${blur}px)`;
        welcomeContent.style.opacity = opacity;
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});