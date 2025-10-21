// Refined Portfolio - Apple + Tokyo + Alpenglow Interactions
// Premium, artistic, and futuristic with Apple elegance and Tokyo soul

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all refined features
    initRefinedFeatures();
    
    // Existing functionality from script.js
    initExistingFeatures();

    // Position profile photo near the end of the title
    positionPhotoNearTitle();
    window.addEventListener('resize', throttle(positionPhotoNearTitle, 100));
    
    // Initialize typewriter animation
    initTypewriterAnimation();
});

function initRefinedFeatures() {
    // Breathing cursor with Apple-like smoothness
    initBreathingCursor();
    
    // Refined particle system
    initRefinedParticles();
    
    // Apple-style scroll effects
    initAppleScrollEffects();
    
    // Interactive project cards with refined glow
    initRefinedProjectCards();
    
    // Typing animation with Apple smoothness
    initAppleTypingAnimation();
    
    // Theme toggle with refined ripple
    initRefinedThemeToggle();
    
    // Scroll-triggered refined animations
    initRefinedScrollAnimations();
    
    // Smooth scrolling with Apple precision
    initAppleSmoothScrolling();
}

// Revert to original static placement (no floating/absolute positioning)
function positionPhotoNearTitle() {
    try {
        const heroVisual = document.querySelector('.hero-name-section .hero-visual');
        if (!heroVisual) return;
        heroVisual.classList.remove('is-floating');
        heroVisual.style.left = '';
        heroVisual.style.top = '';
        heroVisual.style.transition = '';
    } catch (e) {
        // Fail silently
    }
}

// Typewriter Animation with Multilingual Phrases
function initTypewriterAnimation() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    // All phrases in multiple languages
    const phrases = [
        // English / Portuguese / Spanish / Italian / Japanese
        "Mobile Kotlin Developer / Desenvolvedor Mobile Kotlin / Desarrollador Móvil Kotlin / Sviluppatore Mobile Kotlin / モバイルKotlin開発者",
        "Android Developer / Desenvolvedor Android / Desarrollador Android / Sviluppatore Android / Android開発者",
        "iOS Developer / Desenvolvedor iOS / Desarrollador iOS / Sviluppatore iOS / iOS開発者",
        "Cross-Platform Mobile Developer / Desenvolvedor Mobile Multiplataforma / Desarrollador Móvil Multiplataforma / Sviluppatore Mobile Multipiattaforma / クロスプラットフォームモバイル開発者",
        "Full-Stack Mobile Engineer / Engenheiro Mobile Full-Stack / Ingeniero Móvil Full-Stack / Ingegnere Mobile Full-Stack / フルスタックモバイルエンジニア",
        "App Developer | Kotlin & Swift / Desenvolvedor de Apps | Kotlin & Swift / Desarrollador de Apps | Kotlin & Swift / Sviluppatore di App | Kotlin & Swift / アプリ開発者 | Kotlin & Swift",
        "Mobile Application Specialist / Especialista em Aplicativos Mobile / Especialista en Aplicaciones Móviles / Specialista in Applicazioni Mobili / モバイルアプリ専門家",
        "Android & iOS App Creator / Criador de Apps Android & iOS / Creador de Apps Android & iOS / Creatore di App Android & iOS / Android & iOSアプリクリエイター",
        "Flutter & Kotlin Developer / Desenvolvedor Flutter & Kotlin / Desarrollador Flutter & Kotlin / Sviluppatore Flutter & Kotlin / Flutter & Kotlin開発者",
        "UI/UX Focused Mobile Developer / Desenvolvedor Mobile Focado em UI/UX / Desarrollador Móvil Enfocado en UI/UX / Sviluppatore Mobile Focalizzato su UI/UX / UI/UXに特化したモバイル開発者",
        "Mobile Solutions Architect / Arquiteto de Soluções Mobile / Arquitecto de Soluciones Móviles / Architetto di Soluzioni Mobile / モバイルソリューションアーキテクト",
        "Kotlin Multiplatform Developer / Desenvolvedor Kotlin Multiplataforma / Desarrollador Kotlin Multiplataforma / Sviluppatore Kotlin Multiplatform / Kotlinマルチプラットフォーム開発者"
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 50; // Typing speed in ms
    let deleteSpeed = 30; // Deleting speed in ms
    let pauseTime = 2000; // Pause time in ms

    function typeWriter() {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (isDeleting) {
            // Deleting characters
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typeSpeed = deleteSpeed;
        } else {
            // Typing characters
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typeSpeed = 50;
        }

        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            // Finished typing, pause then start deleting
            typeSpeed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            // Finished deleting, move to next phrase
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            typeSpeed = 100; // Small pause before next phrase
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // Start the typewriter animation
    setTimeout(typeWriter, 1000); // Initial delay
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

function initBreathingCursor() {
    // Create breathing cursor element
    const cursor = document.createElement('div');
    cursor.className = 'breathing-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #8B5CF6;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        mix-blend-mode: difference;
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
        animation: breathing-glow 3s ease-in-out infinite;
    `;
    document.body.appendChild(cursor);
    
    // Create cursor trail with Apple smoothness
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: linear-gradient(135deg, #8B5CF6, #EC4899, #06B6D4);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
        transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        filter: blur(1px);
    `;
    document.body.appendChild(trail);
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    // Apple-style mouse tracking with smooth interpolation
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
        cursor.style.opacity = '1';
        
        // Smooth trail following with Apple-like easing
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        
        trail.style.left = trailX - 3 + 'px';
        trail.style.top = trailY - 3 + 'px';
        trail.style.opacity = '0.8';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        trail.style.opacity = '0';
    });
    
    // Enhanced hover effects with Apple smoothness
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .tech-icon, .social-link');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = '#06B6D4';
            cursor.style.boxShadow = '0 0 25px rgba(6, 182, 212, 0.5)';
            cursor.style.background = 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)';
            
            trail.style.transform = 'scale(1.2)';
            trail.style.background = 'linear-gradient(135deg, #06B6D4, #8B5CF6)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#8B5CF6';
            cursor.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.3)';
            cursor.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)';
            
            trail.style.transform = 'scale(1)';
            trail.style.background = 'linear-gradient(135deg, #8B5CF6, #EC4899, #06B6D4)';
        });
    });
    
    // Special effects for project cards with Tokyo accent
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursor.style.borderColor = '#EC4899';
            cursor.style.boxShadow = '0 0 30px rgba(236, 72, 153, 0.5)';
            cursor.style.background = 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)';
        });
        
        card.addEventListener('mouseleave', () => {
            cursor.style.borderColor = '#8B5CF6';
            cursor.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.3)';
            cursor.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)';
        });
    });
}

function initRefinedParticles() {
    // Create additional refined floating particles
    const particleContainer = document.querySelector('.refined-particles');
    if (!particleContainer) return;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle-refined';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 2 + 1}px;
            height: ${Math.random() * 2 + 1}px;
            background: ${getRefinedAuroraColor()};
            border-radius: 50%;
            opacity: ${Math.random() * 0.1 + 0.05};
            animation: refined-float ${Math.random() * 15 + 20}s infinite linear;
            animation-delay: ${Math.random() * 20}s;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            filter: blur(0.5px);
        `;
        particleContainer.appendChild(particle);
    }
}

function getRefinedAuroraColor() {
    const colors = ['#8B5CF6', '#EC4899', '#06B6D4', '#F97316', '#DC2626'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function initAppleScrollEffects() {
    // Apple-style parallax with smooth easing
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        const particles = document.querySelectorAll('.particle-refined, .floating-particle-refined');
        const tokyoLines = document.querySelectorAll('.tokyo-line');
        
        particles.forEach((particle, index) => {
            const speed = 0.1 + (index * 0.02);
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        tokyoLines.forEach((line, index) => {
            const speed = 0.05 + (index * 0.02);
            line.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, 16));
}

function initRefinedProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add refined hover effect with Apple smoothness
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            
            // Add subtle glow to tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.boxShadow = '0 0 10px rgba(139, 92, 246, 0.3)';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            
            // Remove glow from tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.boxShadow = 'none';
            });
        });
        
        // Add refined click ripple effect
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
                background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                animation: refined-ripple 0.6s cubic-bezier(0.4, 0, 0.2, 1);
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

function initAppleTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const titleLines = heroTitle.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            line.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
            
            // Add shimmer effect to refined text
            if (line.classList.contains('refined-text')) {
                setTimeout(() => {
                    line.style.animation = 'apple-shimmer 4s ease-in-out infinite';
                }, 500);
            }
        }, index * 300);
    });
}

function initRefinedThemeToggle() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (!toggleSwitch) return;
    
    toggleSwitch.addEventListener('change', function() {
        // Create refined ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: ${this.checked ? 'radial-gradient(circle, #8B5CF6, #EC4899)' : 'radial-gradient(circle, #F97316, #EC4899)'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: refined-ripple 1s cubic-bezier(0.4, 0, 0.2, 1);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        `;
        
        // Add refined ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes refined-ripple {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) scale(40);
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

function initRefinedScrollAnimations() {
    // Intersection Observer for refined scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add subtle glow to project cards
                if (entry.target.classList.contains('project-card')) {
                    setTimeout(() => {
                        entry.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                    }, 300);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .section-header, .hero-stats, .tech-icon');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

function initAppleSmoothScrolling() {
    // Apple-style smooth scrolling with precise offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100; // Account for refined navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Performance optimization: Throttle scroll events with Apple precision
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

// Add loading animation with refined effects
window.addEventListener('load', () => {
    document.body.classList.add('refined-loaded');
    
    // Animate hero elements with Apple timing
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-description, .hero-actions, .hero-stats');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            
            // Add subtle glow to stats
            if (el.classList.contains('hero-stats')) {
                setTimeout(() => {
                    el.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                }, 500);
            }
        }, index * 200);
    });
    
    // Initialize refined particles
    setTimeout(() => {
        initRefinedParticles();
    }, 1000);
});

// Add keyboard navigation support with refined focus
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('refined-keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('refined-keyboard-navigation');
});

// Add refined focus styles for keyboard navigation
const refinedStyle = document.createElement('style');
refinedStyle.textContent = `
    .refined-keyboard-navigation *:focus {
        outline: 2px solid #8B5CF6 !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 15px rgba(139, 92, 246, 0.3) !important;
    }
    
    @keyframes refined-ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
    
    @keyframes breathing-glow {
        0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }
        50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
        }
    }
`;
document.head.appendChild(refinedStyle);

// Refined performance monitoring
let frameCount = 0;
let lastTime = performance.now();

function monitorRefinedPerformance() {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // Reduce particle count if FPS is low
        if (fps < 30) {
            const particles = document.querySelectorAll('.floating-particle-refined');
            if (particles.length > 5) {
                particles[particles.length - 1].remove();
            }
        }
        
        frameCount = 0;
        lastTime = currentTime;
    }
    
    requestAnimationFrame(monitorRefinedPerformance);
}

// Start refined performance monitoring
requestAnimationFrame(monitorRefinedPerformance);
