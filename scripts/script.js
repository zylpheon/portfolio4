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

    // Remove active class from all links
    navLinks.forEach((link) => {
        link.classList.remove('active');
    });

    // Add active class and update indicator
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

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

let isMobileMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
    isMobileMenuOpen = !isMobileMenuOpen;

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('active');
        // Delay icon change untuk smooth transition
        setTimeout(() => {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        }, 150);
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.remove('active');
        // Delay icon change untuk smooth transition
        setTimeout(() => {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }, 150);
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on a link
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

// Close mobile menu when window is resized to desktop
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