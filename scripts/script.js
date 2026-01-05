
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

// Certificates expand/collapse functionality
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

// Contact form with mailto functionality
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