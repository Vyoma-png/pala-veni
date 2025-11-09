// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.section-title, .about-text, .menu-card, .signature-item, .accompaniment-item, .contact-content').forEach(el => {
    observer.observe(el);
});

// Stagger animation for menu cards
const menuCards = document.querySelectorAll('.menu-card');
menuCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Stagger animation for signature items
const signatureItems = document.querySelectorAll('.signature-item');
signatureItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.15}s`;
});

// Stagger animation for accompaniment items
const accompanimentItems = document.querySelectorAll('.accompaniment-item');
accompanimentItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Scroll indicator click
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Video audio control - pause when leaving hero section
const heroVideo = document.getElementById('heroVideo');
const heroVideoMobile = document.getElementById('heroVideoMobile');
const heroSection = document.getElementById('home');

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            heroVideo.pause();
            heroVideoMobile.pause();
        } else {
            heroVideo.play();
            heroVideoMobile.play();
        }
    });
}, { threshold: 0.5 });

if (heroSection) {
    videoObserver.observe(heroSection);
}
