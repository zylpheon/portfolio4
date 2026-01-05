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

const expandBtn = document.getElementById('expand-btn');
const expandText = document.getElementById('expand-text');
const expandIcon = document.getElementById('expand-icon');
const certificateItems = document.querySelectorAll('.certificate-item');
let isExpanded = false;

expandBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    certificateItems.forEach((item, index) => {
        if (index >= 3) {
            if (isExpanded) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        }
    });

    if (isExpanded) {
        expandText.textContent = 'Show Less';
        expandIcon.classList.add('rotated');
    } else {
        expandText.textContent = 'Show More';
        expandIcon.classList.remove('rotated');
    }
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const mailtoLink = `mailto:lrv94451@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
});

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

    // Posisi awal di area kiri atas hingga kanan atas
    const startX = Math.random() * 70;
    const startY = Math.random() * 40;

    shootingStar.style.left = startX + '%';
    shootingStar.style.top = startY + '%';

    const duration = Math.random() * 0.8 + 1.2; // Durasi 1.2-2 detik
    shootingStar.style.animation = `shooting ${duration}s linear`;

    shootingStarsContainer.appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, duration * 1000);
}

createStars();

// Bintang jatuh muncul lebih sering
setInterval(() => {
    if (Math.random() < 0.5) { // 50% chance setiap interval
        createShootingStar();
    }
}, 1000); // Setiap 1 detik

// Navigation indicator
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
        const href = link.getAttribute('href').substring(1);
        if (href === current) {
            // Ambil posisi link relatif terhadap parent ul
            const linkRect = link.getBoundingClientRect();
            const parentUl = link.closest('ul');
            const ulRect = parentUl.getBoundingClientRect();

            // Hitung posisi yang tepat
            const leftPosition = linkRect.left - ulRect.left;

            navIndicator.style.width = linkRect.width + 'px';
            navIndicator.style.left = leftPosition + 'px';
        }
    });
}

// Inisialisasi saat halaman dimuat
window.addEventListener('load', () => {
    updateActiveNav();
});

window.addEventListener('scroll', updateActiveNav);

// Update juga saat resize window
window.addEventListener('resize', updateActiveNav);