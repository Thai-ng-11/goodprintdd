// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.close-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Galerie Modal
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.modal-close');

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-img');
        modalImage.src = imgSrc;
        modal.classList.add('active');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    modalImage.src = "";
});

// Scroll-to-top Button
const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 300);
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Kontaktformular Feedback (Dummy ohne Backend)
const contactForm = document.getElementById('contactForm');
const successMsg = document.querySelector('.form-success');
const errorMsg = document.querySelector('.form-error');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulierter Erfolg
    successMsg.style.display = 'block';
    errorMsg.style.display = 'none';

    contactForm.reset();

    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
});
