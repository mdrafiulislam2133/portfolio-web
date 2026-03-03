// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navbar Effect (Adds white background when scrolling down)
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-sm', 'transition-all', 'duration-300', 'py-4');
            header.classList.remove('bg-transparent', 'py-6');
        } else {
            header.classList.remove('bg-white', 'shadow-sm', 'py-4');
            header.classList.add('bg-transparent', 'py-6');
        }
    });

    // 2. Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = mobileMenuBtn.querySelector('i');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');
        
        if (mobileMenu.classList.contains('translate-x-full')) {
            mobileMenuIcon.classList.remove('fa-xmark');
            mobileMenuIcon.classList.add('fa-bars');
        } else {
            mobileMenuIcon.classList.remove('fa-bars');
            mobileMenuIcon.classList.add('fa-xmark');
        }
    });

    // Close mobile menu when a mobile link is clicked
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            mobileMenuIcon.classList.remove('fa-xmark');
            mobileMenuIcon.classList.add('fa-bars');
        });
    });

    // 3. Portfolio Filters (Click logic to highlight current category)
    const filterSection = document.getElementById('portfolio-filters');
    if (filterSection) {
        const filterBtns = filterSection.querySelectorAll('button');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.className = 'text-gray-500 hover:text-primary transition';
                });
                btn.className = 'text-primary border-b-2 border-primary pb-1';
            });
        });
    }

    // 4. Typing Effect for Hero Section
    const textArray = ["Web Designer", "Front-End Developer", "Webflow Designer",""];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    
    const typedTextSpan = document.getElementById("typing-text");
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 500);
        }
    }
    
    // Start typing effect after 1 second
    if(typedTextSpan) {
        setTimeout(type, 1000);
    }

    // 5. Initialize Scroll Animations (AOS Library)
    AOS.init({
        duration: 1000, // Animation takes 1 second
        once: true,     // Only animate once when scrolling down
        offset: 100     // Start animation slightly before it's in full view
    });
    // --- CUSTOM CURSOR ANIMATION ---
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    // 1. Make the cursor follow the mouse
    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with a smooth delay
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // 2. Add hover effect (grows bigger when hovering over links/buttons)
    const interactables = document.querySelectorAll('a, button, .portfolio-item');
    
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(0, 102, 255, 0.1)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });
    function hideHomeImageOnMobile() {
    const targetDiv = document.querySelector('#home > div > div.w-full.md\\:w-1\\/2.mt-12');
    if (!targetDiv) return;

    if (window.innerWidth < 768) {
        targetDiv.style.display = 'none';
    } else {
        targetDiv.style.display = 'flex'; // reset for larger screens
    }
}

// Run on page load
window.addEventListener('load', hideHomeImageOnMobile);

// Run on window resize
window.addEventListener('resize', hideHomeImageOnMobile);

});


