/* ============================================
   HUNTER'S BACHELOR PARTY - SCRIPTS
   ============================================ */

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for items
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
        '.itinerary-item, .venue-card, .travel-card, .gallery-item'
    );

    animatableElements.forEach((el) => {
        observer.observe(el);
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');

        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// Hide/show form placeholder based on iframe load
function handleFormLoad() {
    const iframe = document.querySelector('.google-form');
    const placeholder = document.getElementById('formPlaceholder');

    if (iframe && placeholder) {
        iframe.addEventListener('load', () => {
            placeholder.style.display = 'none';
        });

        // If iframe src is placeholder, show the placeholder
        if (iframe.src.includes('YOUR_GOOGLE_FORM')) {
            iframe.style.display = 'none';
            placeholder.innerHTML = `
                <p style="font-size: 1.5rem; margin-bottom: 20px;">📝 RSVP Form Coming Soon</p>
                <p>The RSVP form will be embedded here.</p>
            `;
        }
    }
}

// Countdown timer (optional - if you want to add urgency)
function initCountdown() {
    const rsvpDeadline = new Date('2025-03-23T23:59:59').getTime();
    const eventDate = new Date('2025-07-09T00:00:00').getTime();

    // You can add countdown display elements if desired
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initScrollAnimations();
    initSmoothScroll();
    initParallax();
    handleFormLoad();
});

// Add loaded class to body for additional animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
