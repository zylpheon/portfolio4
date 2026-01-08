function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const numberOfStars = 200;
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
    }
}
function createShootingStar() {
    const shootingStarsContainer = document.getElementById('shooting-stars-container');
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    const startX = Math.random() * 70;
    const startY = Math.random() * 40;
    shootingStar.style.left = startX + '%';
    shootingStar.style.top = startY + '%';
    const duration = Math.random() * 0.8 + 1.2;
    shootingStar.style.animation = `shooting ${duration}s linear`;
    shootingStarsContainer.appendChild(shootingStar);
    setTimeout(() => {
        shootingStar.remove();
    }, duration * 1000);
}
createStars();
setInterval(() => {
    if (Math.random() < 0.5) {
        createShootingStar();
    }
}, 1000);