document.addEventListener('DOMContentLoaded', function() {
    // Initialize Particles.js for the background
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#00d4ff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#00d4ff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Header Animations
    gsap.from('.profile-img', { 
        opacity: 0, 
        scale: 0.5, 
        duration: 1, 
        ease: 'back' 
    });
    gsap.from('.profile-info', { 
        opacity: 0, 
        y: 50, 
        duration: 1, 
        delay: 0.5 
    });

    // Typewriter Effect (enhances CSS animation)
    const typewriterElements = document.querySelectorAll('.typewriter, .typewriter-subtitle');
    typewriterElements.forEach(el => {
        const text = el.getAttribute('data-text');
        el.textContent = ''; // Clear initial content
        let i = 0;
        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100); // Typing speed
            }
        }
        type();
    });

    // Section Scroll Animations
    document.querySelectorAll('.animate-section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Card Hover Animation (optional enhancement)
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.02, duration: 0.3, ease: 'power1.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: 'power1.out' });
        });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            gsap.to(window, { 
                scrollTo: targetElement.offsetTop - 70, // Offset for sticky nav
                duration: 1, 
                ease: 'power2.inOut' 
            });
        });
    });

    // Highlight Active Navigation Link on Scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = '#' + section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust if needed
                    behavior: "smooth"
                });
            }
        });
    });
});
