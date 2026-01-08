const welcomeContent = document.getElementById('welcome-content');
const welcomeSection = document.getElementById('welcome');
const welcomeHeight = welcomeSection.offsetHeight;

// Parallax effect untuk welcome section
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < welcomeHeight) {
        const progress = scrollPosition / welcomeHeight;
        const scale = 1 + (progress * 0.5);
        const blur = progress * 10;
        const opacity = 1 - progress;

        welcomeContent.style.transform = `scale(${scale})`;
        welcomeContent.style.filter = `blur(${blur}px)`;
        welcomeContent.style.opacity = opacity;
    }
});

// Smooth scroll untuk anchor links
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