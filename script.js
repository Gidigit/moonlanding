// static/js/script.js
// JavaScript to toggle the menu visibility on mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetHref = link.getAttribute('href');
            
            // Only apply smooth scrolling for internal anchor links (sections in the same page)
            if (!targetHref.endsWith('.html')) {
                event.preventDefault(); // Prevent default anchor behavior
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth' // Smooth scrolling
                    });
                }
            }
        });
    });
});

// Lightbox functionality for gallery images
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.createElement('div');
    const lightboxImage = document.createElement('img');
    
    lightbox.classList.add('lightbox');
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightboxImage.src = item.src;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.partner-scroll');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Pause animation when not in viewport to save resources
    function handleVisibility() {
        if (isInViewport(scrollContainer)) {
            scrollContainer.style.animationPlayState = 'running';
        } else {
            scrollContainer.style.animationPlayState = 'paused';
        }
    }

    // Add event listeners
    window.addEventListener('scroll', handleVisibility);
    window.addEventListener('resize', handleVisibility);
    
    // Initial check
    handleVisibility();
});
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach(dropdownElement => {
        dropdownElement.addEventListener('click', (event) => {
            const dropdownMenu = dropdownElement.querySelector('.dropdown-menu');
            dropdownMenu.classList.toggle('active');
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', (e) => {
            if (!dropdownElement.contains(e.target)) {
                const dropdownMenu = dropdownElement.querySelector('.dropdown-menu');
                dropdownMenu.classList.remove('active');
            }
        });
    });
});
