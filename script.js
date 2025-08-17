// Mobile menu management
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('active');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // Handle clicks outside mobile menu
    document.addEventListener('click', function(e) {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuBtn = document.getElementById('mobile-menu-btn');
        
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card, .feature-card-large');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
