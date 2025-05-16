// Simple script to enhance the page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the home page
    const path = window.location.pathname;
    const isHomePage = path === '/' || path === '/index.html' || path === '';
    
    if (isHomePage) {
        const header = document.querySelector('h1');
        const subtitle = document.querySelector('.subtitle');
        const profileImage = document.querySelector('.profile-image');
        
        // Add a subtle animation effect when the page loads
        profileImage.style.opacity = '0';
        profileImage.style.transform = 'translateY(-20px)';
        profileImage.style.transition = 'opacity 1s ease, transform 1s ease';
        
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        header.style.transition = 'opacity 1s ease, transform 1s ease';
        
        // Also animate the subtitle
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateY(-10px)';
        subtitle.style.transition = 'opacity 1s ease, transform 1s ease';
        
        // Staggered animation
        setTimeout(() => {
            profileImage.style.opacity = '1';
            profileImage.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
                
                // Delay the subtitle animation slightly
                setTimeout(() => {
                    subtitle.style.opacity = '1';
                    subtitle.style.transform = 'translateY(0)';
                }, 300);
            }, 200);
        }, 100);
    } else {
        // For other pages, animate the content placeholder
        const contentPlaceholder = document.querySelector('.content-placeholder');
        if (contentPlaceholder) {
            contentPlaceholder.style.opacity = '0';
            contentPlaceholder.style.transform = 'translateY(-20px)';
            contentPlaceholder.style.transition = 'opacity 1s ease, transform 1s ease';
            
            setTimeout(() => {
                contentPlaceholder.style.opacity = '1';
                contentPlaceholder.style.transform = 'translateY(0)';
            }, 100);
        }
    }
    
    // Set active navigation link based on current page
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        // Get the path from the href attribute
        const linkPath = link.getAttribute('href');
        
        // Check if the link path matches the current path
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '/' && linkPath === '/') {
            link.classList.add('active');
        }
    });
});
