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
    
    // Initialize scroll animations
    initScrollAnimations();
    initParallaxEffects();
    
    // Initialize typewriter animation
    initTypewriterAnimation();
    
    // Initialize skills animations
    initSkillsAnimations();
    
    // Initialize experience animations
    initExperienceAnimations();
    
    // Initialize dark mode
    initDarkMode();
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

function initSkillsAnimations() {
    // Intersection Observer for skills animation
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        skillsObserver.observe(category);
    });

    // Add hover effects to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function initExperienceAnimations() {
    // Intersection Observer for experience timeline animation
    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        experienceObserver.observe(item);
    });

    // Add hover effects to experience cards
    const experienceCards = document.querySelectorAll('.timeline-content');
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click effects to company links
    const companyLinks = document.querySelectorAll('.company-link');
    companyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

function initDarkMode() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Set initial icon based on current theme
    updateThemeIcon(currentTheme);
    
    // Toggle theme
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon with smooth transition
        updateThemeIcon(newTheme);
        
        // Add smooth transition effect
        body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            // Dark mode: show sun icon (click to go to light)
            themeIcon.className = 'fas fa-sun';
            themeIcon.style.color = '#F59E0B';
        } else {
            // Light mode: show moon icon (click to go to dark)
            themeIcon.className = 'fas fa-moon';
            themeIcon.style.color = '#8B5CF6';
        }
        
        // Add rotation animation
        themeIcon.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            themeIcon.style.transform = 'rotate(0deg)';
        }, 300);
    }
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

// Mobile device detection
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           ('ontouchstart' in window) || 
           (navigator.maxTouchPoints > 0);
}

function initBreathingCursor() {
    // Skip mouse follower on mobile devices
    if (isMobileDevice()) {
        console.log('Mobile device detected - skipping mouse follower');
        return;
    }
    
    // Remove any existing mouse followers to prevent duplicates
    const existingFollowers = document.querySelectorAll('.breathing-cursor, .cursor-trail, .mouse-follower, .luminous-cursor');
    existingFollowers.forEach(follower => follower.remove());
    
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
        will-change: transform, opacity;
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
        will-change: transform, opacity;
    `;
    document.body.appendChild(trail);
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    let animationId;
    
    // Optimized mouse tracking with requestAnimationFrame
    function updateCursor() {
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
        
        // Smooth trail following with Apple-like easing
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        
        trail.style.left = trailX - 3 + 'px';
        trail.style.top = trailY - 3 + 'px';
        
        animationId = requestAnimationFrame(updateCursor);
    }
    
    // Throttled mouse move handler
    let mouseMoveTimeout;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.opacity = '1';
        trail.style.opacity = '0.8';
        
        // Start animation loop if not already running
        if (!animationId) {
            updateCursor();
        }
        
        // Clear any existing timeout
        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(() => {
            cursor.style.opacity = '0';
            trail.style.opacity = '0';
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        }, 100);
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        trail.style.opacity = '0';
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
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
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        cursor.remove();
        trail.remove();
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

// Scroll Animations - Apple/Wix Inspired
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(`
        .scroll-animate,
        .reveal-up,
        .reveal-down,
        .card-entrance,
        .timeline-entrance,
        .skill-tag-entrance,
        .project-entrance,
        .contact-entrance,
        .text-reveal
    `);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add stagger delays to elements
    const staggerElements = document.querySelectorAll('.scroll-animate');
    staggerElements.forEach((el, index) => {
        if (index < 5) {
            el.classList.add(`stagger-${index + 1}`);
        }
    });
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
    
    if (parallaxElements.length === 0) return;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        parallaxElements.forEach(el => {
            const speed = el.classList.contains('parallax-slow') ? 0.3 : 
                         el.classList.contains('parallax-medium') ? 0.5 : 0.7;
            
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Throttle parallax updates for performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', () => {
        requestTick();
        ticking = false;
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#main-content') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced hover effects
function initEnhancedHovers() {
    const hoverElements = document.querySelectorAll('.hover-lift, .hover-scale');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    });
}

// Initialize smooth scroll and enhanced hovers
document.addEventListener('DOMContentLoaded', function() {
    try {
        initSmoothScroll();
        initEnhancedHovers();
    } catch (error) {
        console.warn('Some features failed to initialize:', error);
    }
});

// Error handling for failed resource loading
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // Add fallback for broken images
        e.target.style.display = 'none';
    } else if (e.target.tagName === 'LINK' || e.target.tagName === 'SCRIPT') {
        console.warn('Resource failed to load:', e.target.src || e.target.href);
    }
});

// Ensure all critical elements are loaded
function ensureCriticalElementsLoaded() {
    const criticalElements = [
        '.navbar',
        '.hero-content',
        '.floating-social-container'
    ];
    
    criticalElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn('Critical element not found:', selector);
        }
    });
}

// Run critical element check after DOM is loaded
document.addEventListener('DOMContentLoaded', ensureCriticalElementsLoaded);

// Performance monitoring
function checkLoadingPerformance() {
    if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        
        if (loadTime > 3000) {
            console.warn('Page load time is slow:', loadTime + 'ms');
        }
    }
}

// Check performance after page load
window.addEventListener('load', checkLoadingPerformance);

// Loading indicator management
function initLoadingIndicator() {
    const loadingIndicator = document.getElementById('loading-indicator');
    
    if (!loadingIndicator) return;
    
    // Hide loading indicator when everything is loaded
    function hideLoadingIndicator() {
        if (loadingIndicator) {
            loadingIndicator.classList.add('hidden');
            // Remove from DOM after animation
            setTimeout(() => {
                if (loadingIndicator.parentNode) {
                    loadingIndicator.parentNode.removeChild(loadingIndicator);
                }
            }, 500);
        }
    }
    
    // Hide loading indicator when DOM is ready and fonts are loaded
    if (document.readyState === 'complete') {
        hideLoadingIndicator();
    } else {
        window.addEventListener('load', hideLoadingIndicator);
    }
    
    // Fallback: hide after 3 seconds regardless
    setTimeout(hideLoadingIndicator, 3000);
}

// Initialize loading indicator
document.addEventListener('DOMContentLoaded', initLoadingIndicator);

// Neural Network Animation
function initNeuralNetwork() {
    console.log('🧠 Initializing neural network...');
    const neuralSvg = document.querySelector('.neural-svg');
    if (!neuralSvg) {
        console.log('❌ Neural SVG not found');
        return;
    }
    console.log('✅ Neural SVG found, creating animation...');
    
    // Clear existing content
    neuralSvg.innerHTML = '';
    
    // Add a test element to verify SVG is working
    const testCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    testCircle.setAttribute('cx', '100');
    testCircle.setAttribute('cy', '100');
    testCircle.setAttribute('r', '10');
    testCircle.setAttribute('fill', 'red');
    testCircle.setAttribute('opacity', '0.8');
    neuralSvg.appendChild(testCircle);
    console.log('🧪 Test circle added');
    
    // Create neural network nodes
    const nodes = [];
    const nodeCount = 30;
    
    // Generate nodes with some clustering around center
    for (let i = 0; i < nodeCount; i++) {
        let x, y;
        
        // Create some clusters for more interesting patterns
        if (i < 10) {
            // Center cluster
            x = 960 + (Math.random() - 0.5) * 400;
            y = 540 + (Math.random() - 0.5) * 300;
        } else if (i < 20) {
            // Corner clusters
            const corner = Math.floor(Math.random() * 4);
            switch (corner) {
                case 0: // Top-left
                    x = 200 + Math.random() * 300;
                    y = 150 + Math.random() * 200;
                    break;
                case 1: // Top-right
                    x = 1420 + Math.random() * 300;
                    y = 150 + Math.random() * 200;
                    break;
                case 2: // Bottom-left
                    x = 200 + Math.random() * 300;
                    y = 730 + Math.random() * 200;
                    break;
                case 3: // Bottom-right
                    x = 1420 + Math.random() * 300;
                    y = 730 + Math.random() * 200;
                    break;
            }
        } else {
            // Random scattered nodes
            x = Math.random() * 1920;
            y = Math.random() * 1080;
        }
        
        const node = {
            id: i,
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            connections: []
        };
        nodes.push(node);
        
        // Create SVG circle for node
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', node.x);
        circle.setAttribute('cy', node.y);
        circle.setAttribute('r', '2');
        circle.classList.add('neural-node');
        circle.setAttribute('data-node-id', i);
        neuralSvg.appendChild(circle);
    }
    
    // Create connections between nearby nodes
    function createConnections() {
        // Remove existing connections
        const existingConnections = neuralSvg.querySelectorAll('.neural-connection');
        existingConnections.forEach(conn => conn.remove());
        
        // Create new connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(nodes[i].x - nodes[j].x, 2) + 
                    Math.pow(nodes[i].y - nodes[j].y, 2)
                );
                
                // Connect nodes that are close enough (spider web effect)
                if (distance < 250) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', nodes[i].x);
                    line.setAttribute('y1', nodes[i].y);
                    line.setAttribute('x2', nodes[j].x);
                    line.setAttribute('y2', nodes[j].y);
                    line.classList.add('neural-connection');
                    line.style.strokeDashoffset = Math.random() * 10;
                    neuralSvg.appendChild(line);
                }
            }
        }
    }
    
    // Animate nodes (subtle movement)
    function animateNodes() {
        nodes.forEach(node => {
            // Update position with subtle movement
            node.x += node.vx;
            node.y += node.vy;
            
            // Gentle boundary bouncing
            if (node.x < 50 || node.x > 1870) node.vx *= -0.8;
            if (node.y < 50 || node.y > 1030) node.vy *= -0.8;
            
            // Keep nodes within bounds
            node.x = Math.max(50, Math.min(1870, node.x));
            node.y = Math.max(50, Math.min(1030, node.y));
            
            // Update SVG circle position
            const circle = neuralSvg.querySelector(`[data-node-id="${node.id}"]`);
            if (circle) {
                circle.setAttribute('cx', node.x);
                circle.setAttribute('cy', node.y);
            }
        });
        
        // Update connections
        createConnections();
        
        // Continue animation
        requestAnimationFrame(animateNodes);
    }
    
    // Start animation
    animateNodes();
    
    // Adjust for mobile devices
    if (isMobileDevice()) {
        // Reduce animation intensity on mobile
        neuralSvg.style.opacity = '0.2';
    }
    
    // Pause animation when page is not visible (performance optimization)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            neuralSvg.style.animationPlayState = 'paused';
        } else {
            neuralSvg.style.animationPlayState = 'running';
        }
    });
}

// Neuralink-style interface where mouse moves naturally within neural network
function initNeuralinkInterface() {
    const neuralSvg = document.querySelector('.neural-svg');
    if (!neuralSvg) return;

    let mouseNode = null;
    let neuralNodes = [];
    let neuralConnections = [];
    let isMouseInNeuralSpace = false;

    // Create mouse cursor node
    function createMouseNode() {
        mouseNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        mouseNode.setAttribute('class', 'neuralink-mouse-node');
        mouseNode.setAttribute('r', '4');
        mouseNode.setAttribute('fill', '#d1d5db');
        mouseNode.setAttribute('opacity', '0.3');
        mouseNode.setAttribute('filter', 'drop-shadow(0 0 3px #d1d5db)');
        mouseNode.setAttribute('animation', 'pulse 1.5s ease-in-out infinite');
        mouseNode.style.display = 'none';
        neuralSvg.appendChild(mouseNode);
    }

    // Generate neural network nodes around the page
    function generateNeuralNodes() {
        const nodeCount = 50;
        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            const x = Math.random() * 1920;
            const y = Math.random() * 1080;
            
            node.setAttribute('class', 'neuralink-static-node');
            node.setAttribute('cx', x);
            node.setAttribute('cy', y);
            node.setAttribute('r', '2');
            node.setAttribute('fill', '#d1d5db');
            node.setAttribute('opacity', '0.15');
            node.setAttribute('filter', 'drop-shadow(0 0 2px #d1d5db)');
            node.setAttribute('animation', 'pulse 3s ease-in-out infinite');
            
            neuralSvg.appendChild(node);
            neuralNodes.push({ element: node, x, y });
        }
    }

    // Create connections between nearby nodes
    function createNeuralConnections() {
        neuralNodes.forEach((node1, i) => {
            neuralNodes.forEach((node2, j) => {
                if (i !== j) {
                    const distance = Math.sqrt((node1.x - node2.x) ** 2 + (node1.y - node2.y) ** 2);
                    
                    // Connect nodes within 200px
                    if (distance < 200) {
                        const connection = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        connection.setAttribute('class', 'neuralink-connection');
                        connection.setAttribute('x1', node1.x);
                        connection.setAttribute('y1', node1.y);
                        connection.setAttribute('x2', node2.x);
                        connection.setAttribute('y2', node2.y);
                        connection.setAttribute('stroke', '#d1d5db');
                        connection.setAttribute('stroke-width', '1');
                        connection.setAttribute('opacity', '0.1');
                        connection.setAttribute('filter', 'drop-shadow(0 0 1px #d1d5db)');
                        connection.setAttribute('stroke-dasharray', '2,4');
                        connection.setAttribute('animation', 'flow 4s linear infinite');
                        
                        neuralSvg.appendChild(connection);
                        neuralConnections.push(connection);
                    }
                }
            });
        });
    }

    // Get theme-aware colors
    function getThemeColors() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        return {
            mouseNode: isDark ? '#6b7280' : '#d1d5db',
            staticNode: isDark ? '#6b7280' : '#d1d5db',
            connection: isDark ? '#6b7280' : '#d1d5db',
            mouseConnection: isDark ? '#6b7280' : '#d1d5db'
        };
    }

    // Update colors based on theme
    function updateColors() {
        const colors = getThemeColors();
        
        if (mouseNode) {
            mouseNode.setAttribute('fill', colors.mouseNode);
            mouseNode.setAttribute('filter', `drop-shadow(0 0 12px ${colors.mouseNode})`);
        }
        
        neuralNodes.forEach(node => {
            node.element.setAttribute('fill', colors.staticNode);
            node.element.setAttribute('filter', `drop-shadow(0 0 6px ${colors.staticNode})`);
        });
        
        neuralConnections.forEach(connection => {
            connection.setAttribute('stroke', colors.connection);
            connection.setAttribute('filter', `drop-shadow(0 0 4px ${colors.connection})`);
        });
    }

    // Mouse move handler - mouse becomes part of neural network
    function handleMouseMove(event) {
        const rect = neuralSvg.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 1920;
        const y = ((event.clientY - rect.top) / rect.height) * 1080;

        if (mouseNode) {
            mouseNode.setAttribute('cx', x);
            mouseNode.setAttribute('cy', y);
            mouseNode.style.display = 'block';
        }

        // Connect mouse to nearby neural nodes
        connectMouseToNeuralNodes(x, y);
    }

    // Connect mouse node to nearby neural nodes
    function connectMouseToNeuralNodes(mouseX, mouseY) {
        // Remove existing mouse connections
        const existingMouseConnections = neuralSvg.querySelectorAll('.neuralink-mouse-connection');
        existingMouseConnections.forEach(conn => conn.remove());

        const colors = getThemeColors();
        
        neuralNodes.forEach(node => {
            const distance = Math.sqrt((mouseX - node.x) ** 2 + (mouseY - node.y) ** 2);
            
            // Connect to nodes within 150px
            if (distance < 150) {
                const connection = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                connection.setAttribute('class', 'neuralink-mouse-connection');
                connection.setAttribute('x1', mouseX);
                connection.setAttribute('y1', mouseY);
                connection.setAttribute('x2', node.x);
                connection.setAttribute('y2', node.y);
                connection.setAttribute('stroke', colors.mouseConnection);
                connection.setAttribute('stroke-width', '1');
                connection.setAttribute('opacity', '0.2');
                connection.setAttribute('filter', `drop-shadow(0 0 2px ${colors.mouseConnection})`);
                connection.setAttribute('stroke-dasharray', '3,3');
                connection.setAttribute('animation', 'flow 2s linear infinite');
                
                neuralSvg.appendChild(connection);
            }
        });
    }

    // Mouse enter/leave handlers
    function handleMouseEnter() {
        isMouseInNeuralSpace = true;
        if (mouseNode) {
            mouseNode.style.display = 'block';
        }
    }

    function handleMouseLeave() {
        isMouseInNeuralSpace = false;
        if (mouseNode) {
            mouseNode.style.display = 'none';
        }
        // Remove mouse connections when leaving
        const mouseConnections = neuralSvg.querySelectorAll('.neuralink-mouse-connection');
        mouseConnections.forEach(conn => conn.remove());
    }

    // Initialize the neuralink interface
    createMouseNode();
    generateNeuralNodes();
    createNeuralConnections();
    updateColors(); // Set initial colors based on current theme

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                updateColors();
            }
        });
    });
    observer.observe(document.documentElement, { attributes: true });
}

// Initialize neural network hover effects
function initNeuralHoverEffects() {
    const neuralSvg = document.querySelector('.neural-svg');
    if (!neuralSvg) return;

    // Add hover effects to all neural elements
    const nodes = neuralSvg.querySelectorAll('.neural-node');
    const connections = neuralSvg.querySelectorAll('.neural-connection');
    const outlines = neuralSvg.querySelectorAll('.chess-outline');

    // Enhanced hover effects for nodes
    nodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            this.style.animation = 'hoverPulse 0.8s ease-in-out infinite';
            this.style.transform = 'scale(1.2)';
            this.style.filter = 'drop-shadow(0 0 25px #ff6b35)';
        });

        node.addEventListener('mouseleave', function() {
            this.style.animation = 'pulse 3s ease-in-out infinite';
            this.style.transform = 'scale(1)';
            this.style.filter = 'drop-shadow(0 0 12px #ff6b35)';
        });
    });

    // Enhanced hover effects for connections
    connections.forEach(connection => {
        connection.addEventListener('mouseenter', function() {
            this.style.animation = 'hoverFlow 0.6s linear infinite';
            this.style.strokeWidth = '4';
            this.style.opacity = '1';
            this.style.filter = 'drop-shadow(0 0 20px #ff6b35)';
        });

        connection.addEventListener('mouseleave', function() {
            this.style.animation = 'flow 4s linear infinite';
            this.style.strokeWidth = '3';
            this.style.opacity = '0.9';
            this.style.filter = 'drop-shadow(0 0 10px #ff6b35)';
        });
    });

    // Enhanced hover effects for chess outlines
    outlines.forEach(outline => {
        outline.addEventListener('mouseenter', function() {
            this.style.animation = 'hoverOutline 0.8s ease-in-out infinite';
            this.style.strokeWidth = '4';
            this.style.opacity = '1';
            this.style.filter = 'drop-shadow(0 0 25px #8b5cf6)';
        });

        outline.addEventListener('mouseleave', function() {
            this.style.animation = 'outlineGlow 6s ease-in-out infinite';
            this.style.strokeWidth = '3';
            this.style.opacity = '0.8';
            this.style.filter = 'drop-shadow(0 0 12px #8b5cf6)';
        });
    });
}

// Initialize neural network
document.addEventListener('DOMContentLoaded', function() {
    initNeuralNetwork();
    initNeuralHoverEffects();
    initNeuralinkInterface();
});
