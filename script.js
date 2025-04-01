
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-links') && !event.target.closest('.mobile-menu-btn')) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Dynamic year update
    document.getElementById('year').textContent = new Date().getFullYear();

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if(contactForm && successMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Show success message
            successMessage.style.display = "block";
            
            // Reset form
            this.reset();
            
            // Hide message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 3000);
        });
    } else {
        console.error('Could not find contact form elements!');
    }
});


document.getElementById('menubutton').addEventListener('click', function() {
    const nav_links = document.getElementById('nav_links');
    
    nav_links.style.width="80vw"; 

});
document.getElementById('arrow').addEventListener('click', function() {
    const nav_links = document.getElementById('nav_links');
      nav_links.style.width="0vw";  

});
