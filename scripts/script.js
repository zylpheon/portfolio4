const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-blur');
    } else {
        navbar.classList.remove('navbar-blur');
    }
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