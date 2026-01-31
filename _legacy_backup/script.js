// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navIndicator = document.querySelector('.nav-indicator');
    
    // Scroll effect
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    }
    
    // Update active navigation link
    function updateActiveNavLink() {
        let fromTop = window.scrollY + 100;
        
        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            
            if (section && section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
                
                // Update indicator position
                if (navIndicator) {
                    const linkRect = link.getBoundingClientRect();
                    const navRect = navbar.getBoundingClientRect();
                    navIndicator.style.width = linkRect.width + 'px';
                    navIndicator.style.left = (linkRect.left - navRect.left) + 'px';
                }
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after click
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // Back to Top Functionality
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.visibility = 'visible';
            } else {
                backToTopButton.style.opacity = '0';
                backToTopButton.style.visibility = 'hidden';
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add current year to copyright
    const yearElement = document.querySelector('footer strong');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} Fasil Ahammed KM`;
    }
    
    // Initialize
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    // Update indicator on resize
    window.addEventListener('resize', updateActiveNavLink);
});

// EmailJS Configuration and Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init("pDKpttsGzOGY75O0Z");
    
    console.log("EmailJS initialized with Service ID: service_rcz600d");
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendEmail(this);
        });
    }
});

// Send Email Function
function sendEmail(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Hide previous messages
    if (successMessage) successMessage.style.display = 'none';
    if (errorMessage) errorMessage.style.display = 'none';
    
    // Get form data
    const formData = {
        from_name: document.getElementById('form-name').value.trim(),
        from_email: document.getElementById('InputEmail1').value.trim(),
        message: document.getElementById('FormControlTextarea1').value.trim(),
        to_name: 'Fasil Ahammed KM',
        reply_to: document.getElementById('InputEmail1').value.trim()
    };
    
    console.log('Sending email with params:', formData);
    
    // Validate form
    if (!formData.from_name) {
        showError('Please enter your name');
        document.getElementById('form-name').focus();
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        return;
    }
    
    if (!formData.from_email) {
        showError('Please enter your email address');
        document.getElementById('InputEmail1').focus();
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
        showError('Please enter a valid email address (e.g., example@email.com)');
        document.getElementById('InputEmail1').focus();
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        return;
    }
    
    if (!formData.message) {
        showError('Please enter your message');
        document.getElementById('FormControlTextarea1').focus();
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        return;
    }
    
    if (formData.message.length < 10) {
        showError('Please enter a message with at least 10 characters');
        document.getElementById('FormControlTextarea1').focus();
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        return;
    }
    
    // Send email using EmailJS with YOUR ACTUAL IDs
    emailjs.send('service_rcz600d', 'template_r18o3qf', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            showSuccess('Thank you! Your message has been sent successfully. I will get back to you soon!');
            
            // Reset form
            form.reset();
            
        }, function(error) {
            console.log('FAILED...', error);
            
            // Show error message with fallback option
            showError('Failed to send message via email service. Opening your email client instead...');
            
            // Fallback to mailto after a delay
            setTimeout(() => {
                const subject = 'Contact from Portfolio Website - ' + formData.from_name;
                const body = `Name: ${formData.from_name}\nEmail: ${formData.from_email}\n\nMessage:\n${formData.message}`;
                window.open(`mailto:ahamedahamed1883@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
            }, 1500);
            
        })
        .finally(() => {
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        });
}

// Show success message
function showSuccess(message) {
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
        successMessage.innerHTML = `<i class="fas fa-check-circle me-2"></i>${message}`;
        successMessage.style.display = 'block';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
}

// Show error message
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
        errorMessage.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i>${message}`;
        errorMessage.style.display = 'block';
        
        // Hide error message after 7 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 7000);
    }
}

// Skills section animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    const progressBars = document.querySelectorAll('.skills-overview .progress-bar');
    
    // Add hover effects to skill cards
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animate progress bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.transition = 'width 1.5s ease-in-out';
                    progressBar.style.width = width;
                }, 300);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        if (bar.closest('.skills-overview')) {
            observer.observe(bar);
        }
    });
    
    // Project card interaction
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Form validation on input
    const inputs = document.querySelectorAll('.contact-input');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                this.classList.add('filled');
            } else {
                this.classList.remove('filled');
            }
        });
        
        // Real-time validation
        input.addEventListener('input', function() {
            if (this.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value && !emailRegex.test(this.value)) {
                    this.style.borderColor = '#dc3545';
                } else if (this.value) {
                    this.style.borderColor = '#28a745';
                } else {
                    this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }
            }
        });
    });
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Skip if it's a social media link or external link
            if (this.getAttribute('target') === '_blank' || 
                this.getAttribute('href').includes('http') ||
                this.classList.contains('social-icon') ||
                this.classList.contains('social-link-footer') ||
                this.classList.contains('project-link')) {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // About section progress bars animation
    const aboutProgressBars = document.querySelectorAll('#about .progress-bar');
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.transition = 'width 1.2s ease-in-out';
                    progressBar.style.width = width;
                }, 500);
                
                aboutObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.3 });
    
    aboutProgressBars.forEach(bar => {
        aboutObserver.observe(bar);
    });
});

// Initialize AOS with custom settings
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            disable: function() {
                return window.innerWidth < 768;
            }
        });
    }
});

// Navbar mobile menu close on link click
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                // Use Bootstrap's collapse method to hide the menu
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
                
                // Update aria-expanded attribute
                if (navbarToggler) {
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
});

// Utility function for debouncing
function debounce(func, wait) {
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

// Enhanced scroll handling with debounce
const debouncedScrollHandler = debounce(function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation to about section spinner
document.addEventListener('DOMContentLoaded', function() {
    const aboutSpinner = document.querySelector('#about .spinner-border');
    if (aboutSpinner) {
        // Add continuous rotation
        aboutSpinner.style.animation = 'spin 1s linear infinite';
    }
});

// Project links validation
document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#' || href === 'https://github.com/fasilahammed') {
                e.preventDefault();
                showError('Project link not available yet. Please check back later or contact me for details.');
            }
        });
    });
});

// Resume Download Functionality
document.addEventListener('DOMContentLoaded', function() {
    const resumeButtons = document.querySelectorAll('a[download*="Resume"], a[download*="resume"], .btn-resume, .btn-resume-download');
    
    resumeButtons.forEach(button => {
        // Add click event for tracking
        button.addEventListener('click', function(e) {
            const resumeUrl = this.getAttribute('href');
            
            // Check if file exists (basic check)
            if (resumeUrl && !resumeUrl.includes('path/to/') && resumeUrl !== '#') {
                console.log('Resume download initiated:', resumeUrl);
                
                // Optional: Add analytics or tracking here
                trackResumeDownload();
            } else {
                e.preventDefault();
                showError('Resume file not found. Please contact me directly at fasilahammedkm@gmail.com');
            }
        });
        
        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Track resume download (optional)
function trackResumeDownload() {
    // You can add Google Analytics or other tracking here
    console.log('Resume downloaded at:', new Date().toLocaleString());
    
    // Example: Google Analytics event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'resume_download', {
            'event_category': 'engagement',
            'event_label': 'Resume Download'
        });
    }
}

// Check if resume file exists
function checkResumeFile() {
    const resumeUrl = 'resume.pdf';
    
    fetch(resumeUrl, { method: 'HEAD' })
        .then(response => {
            if (!response.ok) {
                console.warn('Resume file not found or inaccessible');
                showResumeFallback();
            }
        })
        .catch(error => {
            console.warn('Resume file check failed:', error);
            showResumeFallback();
        });
}

// Show fallback if resume is not available
function showResumeFallback() {
    const resumeButtons = document.querySelectorAll('.btn-resume, .btn-resume-download');
    
    resumeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showError('Resume currently unavailable. Please contact me at fasilahammedkm@gmail.com for my resume.');
        });
        
        // Visual indication that resume might not be available
        button.style.opacity = '0.8';
        button.title = 'Resume might be unavailable - Click to contact';
    });
}

// Initialize resume check when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check resume file after a short delay
    setTimeout(checkResumeFile, 2000);
});

// Mobile-specific enhancements
function enhanceMobileExperience() {
    // Check if mobile device
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Add touch feedback for mobile
        const touchElements = document.querySelectorAll('.skill-card, .project-card, .btn');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        // Optimize animations for mobile
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
        
        // Improve scrolling performance
        document.documentElement.style.scrollBehavior = 'smooth';
    }
}

// Initialize mobile enhancements
document.addEventListener('DOMContentLoaded', function() {
    enhanceMobileExperience();
    
    // Re-run on resize
    window.addEventListener('resize', enhanceMobileExperience);
});

// Prevent zoom on input focus (iOS)
document.addEventListener('DOMContentLoaded', function() {
    let viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
        viewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
    }
});

// Console greeting (optional)
console.log(`
%cWelcome to Fasil Ahammed KM's Portfolio! 👋
%cFull-Stack Developer | React | .NET | SQL
%cEmailJS configured with Service: service_rcz600d
%cFeel free to explore my work and get in touch! 🚀
`, 
'color: #5b6fb2; font-size: 18px; font-weight: bold;',
'color: #b0b0b0; font-size: 14px;',
'color: #28a745; font-size: 12px;',
'color: #ff6b6b; font-size: 12px;'
);