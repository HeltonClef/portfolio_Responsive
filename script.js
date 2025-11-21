// Enhanced JavaScript for more colorful interactions
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle with animation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger lines
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Enhanced navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const scrolled = window.scrollY > 100;
        
        if (scrolled) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            navbar.style.borderBottom = '3px solid transparent';
            navbar.style.background = 'linear-gradient(white, white) padding-box, linear-gradient(45deg, var(--primary-color), var(--secondary-color)) border-box';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '3px solid transparent';
            navbar.style.background = 'linear-gradient(white, white) padding-box, linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--accent-1)) border-box';
        }
    });
    
    // Colorful cursor trail effect
    document.addEventListener('mousemove', function(e) {
        createCursorTrail(e.clientX, e.clientY);
    });
    
    function createCursorTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF8E53', '#6A67CE'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        trail.style.background = randomColor;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }
    
    // Add CSS for cursor trail
    const style = document.createElement('style');
    style.textContent = `
        .cursor-trail {
            position: fixed;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: trailFade 1s ease-out forwards;
        }
        
        @keyframes trailFade {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Enhanced skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (barPosition < screenPosition) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
                
                // Add celebration effect when skill bars fill
                if (!bar.classList.contains('animated')) {
                    bar.classList.add('animated');
                    createConfetti(bar);
                }
            }
        });
    };
    
    function createConfetti(element) {
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 10; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = (rect.left + rect.width / 2) + 'px';
            confetti.style.top = rect.top + 'px';
            confetti.style.background = getRandomColor();
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 2000);
        }
    }
    
    function getRandomColor() {
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF8E53', '#6A67CE', '#FF9A8B'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Add confetti CSS
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        .confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 2px;
            animation: confettiFall 2s ease-out forwards;
            z-index: 1000;
        }
        
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(confettiStyle);
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars();
    
    // Enhanced form submission with colorful feedback
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name') || 'Friend';
            
            // Create colorful success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <div class="success-content">
                    <div class="success-icon">🎉</div>
                    <h3>Thank you ${name}!</h3>
                    <p>Your message has been sent successfully. I'll get back to you soon!</p>
                    <button onclick="this.parentElement.parentElement.remove()">Awesome!</button>
                </div>
            `;
            
            // Add styles for success message
            const successStyle = document.createElement('style');
            successStyle.textContent = `
                .success-message {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 2rem;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    z-index: 10000;
                    border: 4px solid transparent;
                    background: linear-gradient(white, white) padding-box,
                                var(--gradient-1) border-box;
                    animation: popIn 0.5s ease;
                }
                
                .success-content {
                    text-align: center;
                }
                
                .success-icon {
                    font-size: 4rem;
                    margin-bottom: 1rem;
                    animation: bounce 1s infinite;
                }
                
                .success-content h3 {
                    background: var(--gradient-1);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 1rem;
                }
                
                .success-content button {
                    background: var(--gradient-2);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 25px;
                    cursor: pointer;
                    font-weight: bold;
                    margin-top: 1rem;
                }
                
                @keyframes popIn {
                    from {
                        transform: translate(-50%, -50%) scale(0.5);
                        opacity: 0;
                    }
                    to {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(successStyle);
            
            document.body.appendChild(successMessage);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add rainbow effect to section titles on hover
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.classList.add('rainbow-text');
        });
        
        title.addEventListener('mouseleave', function() {
            this.classList.remove('rainbow-text');
        });
    });
    
    // Enhanced scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                
                // Add colorful border animation
                if (entry.target.classList.contains('about-card')) {
                    entry.target.style.borderImage = 'var(--gradient-1) 1';
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.about-card, .project-card, .timeline-item, .skills-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.9)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Smooth scroll to section with colorful indicator
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if