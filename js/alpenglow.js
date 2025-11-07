// Alpenglow Theme - Cosmic Portfolio Interactions
// Luminous cursor, aurora effects, and smooth cosmic animations

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all Alpenglow features
    initAlpenglowFeatures();
    
    // Existing functionality from script.js
    initExistingFeatures();
});

function initAlpenglowFeatures() {
    // Interactive project cards with glow
    initGlowingProjectCards();
    
    // Typing animation with cosmic shimmer
    initCosmicTypingAnimation();
    
    // Theme toggle with aurora ripple
    initAuroraThemeToggle();
    
    // Scroll-triggered cosmic animations
    initCosmicScrollAnimations();
    
    // Smooth scrolling with cosmic offset
    initCosmicSmoothScrolling();
}

function initExistingFeatures() {
    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", mobileMenu);
    }

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    // Close navbar when link is clicked
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    // Theme toggle functionality
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    if (toggleSwitch) {
        toggleSwitch.addEventListener("change", switchTheme, false);
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }

    // Save user preference on load
    const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        if (currentTheme === "dark") {
            toggleSwitch.checked = true;
        }
    }

    // Adding date
    let myDate = document.querySelector("#datee");
    if (myDate) {
        const yes = new Date().getFullYear();
        myDate.innerHTML = yes;
    }
}

function initLuminousCursor() {
    // Create luminous cursor element
    const cursor = document.createElement('div');
    cursor.className = 'luminous-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #8B5CF6;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
        mix-blend-mode: difference;
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
    `;
    document.body.appendChild(cursor);
    
    // Create cursor trail
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: linear-gradient(135deg, #8B5CF6, #EC4899, #06B6D4);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
        transition: opacity 0.1s ease;
        filter: blur(1px);
    `;
    document.body.appendChild(trail);
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    // Mouse movement tracking
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
        cursor.style.opacity = '1';
        
        // Smooth trail following
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX - 4 + 'px';
        trail.style.top = trailY - 4 + 'px';
        trail.style.opacity = '0.8';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        trail.style.opacity = '0';
    });
    
    // Enhanced hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .tech-icon, .social-link');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.borderColor = '#06B6D4';
            cursor.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.8)';
            cursor.style.background = 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)';
            
            trail.style.transform = 'scale(1.5)';
            trail.style.background = 'linear-gradient(135deg, #06B6D4, #8B5CF6)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#8B5CF6';
            cursor.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.5)';
            cursor.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)';
            
            trail.style.transform = 'scale(1)';
            trail.style.background = 'linear-gradient(135deg, #8B5CF6, #EC4899, #06B6D4)';
        });
    });
    
    // Special effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursor.style.borderColor = '#EC4899';
            cursor.style.boxShadow = '0 0 40px rgba(236, 72, 153, 0.8)';
            cursor.style.background = 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)';
        });
        
        card.addEventListener('mouseleave', () => {
            cursor.style.borderColor = '#8B5CF6';
            cursor.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.5)';
            cursor.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)';
        });
    });
}

function initAuroraParticles() {
    // Create additional floating particles
    const particleContainer = document.querySelector('.aurora-particles');
    if (!particleContainer) return;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${getRandomAuroraColor()};
            border-radius: 50%;
            opacity: ${Math.random() * 0.3 + 0.1};
            animation: aurora-float ${Math.random() * 20 + 15}s infinite linear;
            animation-delay: ${Math.random() * 20}s;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            filter: blur(0.5px);
        `;
        particleContainer.appendChild(particle);
    }
}

function getRandomAuroraColor() {
    const colors = ['#8B5CF6', '#EC4899', '#06B6D4', '#F97316', '#3B82F6'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function initCosmicScrollEffects() {
    // Cosmic scroll effects - DISABLED for performance
    // All elements remain static
    return;
}

function initGlowingProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add cosmic hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg)';
            this.style.boxShadow = '0 0 40px rgba(139, 92, 246, 0.4)';
            
            // Add glow to tech icons
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.boxShadow = '0 0 15px rgba(139, 92, 246, 0.6)';
                }, index * 100);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
            this.style.boxShadow = '0 8px 32px 0 rgba(139, 92, 246, 0.1)';
            
            // Remove glow from tech icons
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.boxShadow = 'none';
            });
        });
        
        // Add click ripple effect
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                animation: ripple-expand 0.6s ease-out;
                z-index: 1;
            `;
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

function initCosmicTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const titleLines = heroTitle.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            line.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
            
            // Add shimmer effect to aurora text
            if (line.classList.contains('aurora-text')) {
                setTimeout(() => {
                    line.style.animation = 'cosmic-shimmer 3s ease-in-out infinite';
                }, 500);
            }
        }, index * 400);
    });
}

function initAuroraThemeToggle() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (!toggleSwitch) return;
    
    toggleSwitch.addEventListener('change', function() {
        // Create aurora ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: ${this.checked ? 'radial-gradient(circle, #8B5CF6, #EC4899)' : 'radial-gradient(circle, #F97316, #EC4899)'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: aurora-ripple 1s ease-out;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        `;
        
        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes aurora-ripple {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) scale(50);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
            style.remove();
        }, 1000);
    });
}

function initCosmicScrollAnimations() {
    // Intersection Observer for cosmic scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add aurora glow to project cards
                if (entry.target.classList.contains('project-card')) {
                    setTimeout(() => {
                        entry.target.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.2)';
                    }, 300);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .section-header, .hero-stats, .tech-icon');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

function initCosmicSmoothScrolling() {
    // Enhanced smooth scrolling with cosmic offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100; // Account for cosmic navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add loading animation with cosmic effects
window.addEventListener('load', () => {
    document.body.classList.add('cosmic-loaded');
    
    // Animate hero elements with cosmic timing
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-description, .hero-actions, .hero-stats');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            
            // Add aurora glow to stats
            if (el.classList.contains('hero-stats')) {
                setTimeout(() => {
                    el.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.2)';
                }, 500);
            }
        }, index * 300);
    });
    
    // Initialize cosmic particles
    setTimeout(() => {
        initAuroraParticles();
    }, 1000);
});

// Add keyboard navigation support with cosmic focus
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('cosmic-keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('cosmic-keyboard-navigation');
});

// Add cosmic focus styles for keyboard navigation
const cosmicStyle = document.createElement('style');
cosmicStyle.textContent = `
    .cosmic-keyboard-navigation *:focus {
        outline: 2px solid #8B5CF6 !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.5) !important;
    }
    
    @keyframes ripple-expand {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(cosmicStyle);

// Cosmic performance monitoring
let frameCount = 0;
let lastTime = performance.now();

function monitorPerformance() {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // Reduce particle count if FPS is low
        if (fps < 30) {
            const particles = document.querySelectorAll('.floating-particle');
            if (particles.length > 10) {
                particles[particles.length - 1].remove();
            }
        }
        
        frameCount = 0;
        lastTime = currentTime;
    }
    
    requestAnimationFrame(monitorPerformance);
}

// Start performance monitoring
requestAnimationFrame(monitorPerformance);
