document.addEventListener('DOMContentLoaded', function() {
    // Theme selection
    const themeOptions = document.querySelectorAll('.theme-option');
    const htmlElement = document.documentElement;
    
    // Available themes array
    const availableThemes = ['purple', 'blue', 'green', 'red', 'orange', 'yellow', 'dark-purple', 'dark-blue', 'dark-green'];
    
    // Load saved theme from localStorage or use a random theme
    const savedTheme = localStorage.getItem('gohuman-theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        // Select a random theme
        const randomTheme = availableThemes[Math.floor(Math.random() * availableThemes.length)];
        htmlElement.setAttribute('data-theme', randomTheme);
    }
    
    // Theme switching functionality
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedTheme = this.getAttribute('data-theme');
            htmlElement.setAttribute('data-theme', selectedTheme);
            localStorage.setItem('gohuman-theme', selectedTheme);
            
            // Close theme options
            const themeSelector = document.querySelector('.theme-options');
            themeSelector.style.display = 'none';
            
            // Reopen after a brief timeout to allow for animation
            setTimeout(() => {
                themeSelector.style.display = '';
            }, 300);
        });
    });
    
    // Toggle theme options with button
    const themeToggle = document.querySelector('.theme-toggle');
    const themeOptionsMenu = document.querySelector('.theme-options');
    
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        if (themeOptionsMenu.style.display === 'flex') {
            themeOptionsMenu.style.display = 'none';
        } else {
            themeOptionsMenu.style.display = 'flex';
        }
    });
    
    // Close theme options when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.theme-selector')) {
            themeOptionsMenu.style.display = 'none';
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Mobile navigation toggle (for future implementation)
    
    // FAQ items expandable (can be enhanced later)
    const faqItems = document.querySelectorAll('.faq-item h3');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
    
    // Funding dropdown toggle
    const fundingBtn = document.querySelector('.funding-btn');
    if (fundingBtn) {
        fundingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            dropdown.style.opacity = dropdown.style.opacity === '1' ? '0' : '1';
            dropdown.style.visibility = dropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.funding-options')) {
                const dropdown = document.querySelector('.funding-dropdown');
                if (dropdown) {
                    dropdown.style.opacity = '0';
                    dropdown.style.visibility = 'hidden';
                }
            }
        });
    }
    
    // Simple form validation (for when a contact form is added)
    
    // Animation on scroll (for future enhancement)
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature, .project-card, .option, .success-story, .founder-quote');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // If element is in viewport
            if(position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('show');
            }
        });
    }
    
    // Call on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Call once on page load
    animateOnScroll();
    
    // Auto-hide announcement banner after 5 seconds
    setTimeout(function() {
        const banner = document.querySelector('.announcement-banner');
        if (banner) {
            banner.style.height = banner.offsetHeight + 'px';
            banner.style.overflow = 'hidden';
            
            setTimeout(function() {
                banner.style.height = '0';
                banner.style.padding = '0';
                banner.style.transition = 'all 0.5s ease';
                
                setTimeout(function() {
                    banner.style.display = 'none';
                }, 500);
            }, 100);
        }
    }, 5000);
}); 