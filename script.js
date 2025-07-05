// Button click handlers
function handleContact() {
    alert('Contact button clicked! This would open a contact form or redirect to contact page.');
}

function handleStartNow() {
    alert('Start Now button clicked! This would redirect to the signup page.');
}

function handleStartMessaging() {
    alert('Start Messaging button clicked! This would redirect to the messaging dashboard.');
}

function handleViewPricing() {
    // Scroll to pricing section
    document.getElementById('pricing').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Toggle switch functionality
    const toggleSwitch = document.querySelector('.toggle-switch');
    if (toggleSwitch) {
        toggleSwitch.addEventListener('click', function() {
            this.classList.toggle('active');
            // Here you would typically update pricing display
            console.log('Pricing toggle switched');
        });
    }
});