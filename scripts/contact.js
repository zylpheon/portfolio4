// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'Je1rLHXvYjfvQxLXd';
const EMAILJS_SERVICE_ID = 'service_v4l3nt1n0';
const EMAILJS_TEMPLATE_ID = 'template_v4l3nt1n0';

const contactForm = document.getElementById('contact-form');
const submitButton = contactForm.querySelector('button[type="submit"]');
const originalButtonText = submitButton.innerHTML;

emailjs.init(EMAILJS_PUBLIC_KEY);

// Form submission handler
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Disable button dan tampilkan loading
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
    submitButton.style.opacity = '0.6';
    submitButton.style.cursor = 'not-allowed';

    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        to_email: 'lrv94451@gmail.com'
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();
        })
        .catch(function (error) {
            console.error('FAILED...', error);
            showNotification('Failed to send message. Please try again or contact via email directly.', 'error');
        })
        .finally(() => {
            resetButton();
        });
});

function resetButton() {
    setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
        submitButton.style.opacity = '1';
        submitButton.style.cursor = 'pointer';
    }, 1000);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const isSuccess = type === 'success';

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        max-width: 350px;
        padding: 1rem 1.5rem;
        background: ${isSuccess ? 'rgba(0, 100, 0, 0.9)' : 'rgba(100, 0, 0, 0.9)'};
        border: 2px solid ${isSuccess ? '#FFD700' : '#ff4444'};
        border-radius: 8px;
        color: ${isSuccess ? '#FFD700' : '#ffcccc'};
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    const icon = isSuccess
        ? '<i class="fas fa-check-circle"></i>'
        : '<i class="fas fa-exclamation-circle"></i>';
    notification.innerHTML = `${icon}<span>${message}</span>`;

    // Inject animation styles jika belum ada
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(400px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto remove notification setelah 5 detik
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Form input enhancements
const formInputs = contactForm.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.style.transform = 'translateX(5px)';
        this.parentElement.style.transition = 'transform 0.3s ease';
    });

    input.addEventListener('blur', function () {
        this.parentElement.style.transform = 'translateX(0)';
    });
});

// Email validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.style.borderColor = this.value && !emailRegex.test(this.value) ? '#ff4444' : '';
});