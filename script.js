// Simple script to enhance the page
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('h1');
    const subtitle = document.querySelector('.subtitle');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Add a subtle animation effect when the page loads
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'opacity 1s ease, transform 1s ease';
    
    // Also animate the subtitle
    subtitle.style.opacity = '0';
    subtitle.style.transform = 'translateY(-10px)';
    subtitle.style.transition = 'opacity 1s ease, transform 1s ease';
    
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
        
        // Delay the subtitle animation slightly
        setTimeout(() => {
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
        }, 300);
    }, 100);
    
    // Add active state to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default behavior
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
});
