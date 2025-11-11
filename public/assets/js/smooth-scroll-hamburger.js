// Floating Hamburger Controller
// Only runs on pages that are NOT index.html

import FloatingHamburgerComponent from './floating-hamburger.js';

// Check if we're on index page
const pathname = window.location.pathname;
const isIndexPage = pathname.endsWith('index.html') || 
                   pathname.endsWith('/') || 
                   pathname === '' ||
                   (!pathname.includes('/pages/') && !pathname.includes('index'));

if (!isIndexPage) {
    // Register floating hamburger component
    if (!customElements.get('floating-hamburger-component')) {
        customElements.define('floating-hamburger-component', FloatingHamburgerComponent);
    }
    
    // Wait for DOM and GSAP
    function initHamburger() {
        if (typeof gsap === 'undefined') {
            console.warn('GSAP not loaded');
            return;
        }
        
        // Floating Hamburger Scroll Detection
        const navbar = document.querySelector('navbar-component');
        const hamburgerComponent = document.querySelector('floating-hamburger-component');
        
        if (!navbar) {
            console.warn('Navbar not found');
            return;
        }
        
        if (!hamburgerComponent) {
            console.warn('Floating hamburger component not found');
            return;
        }
        
        // Wait for component to render its inner HTML
        function waitForHamburgerElement(callback, maxAttempts = 20) {
            let attempts = 0;
            const checkInterval = setInterval(() => {
                const floatingHamburger = hamburgerComponent.querySelector('#floating-hamburger');
                if (floatingHamburger) {
                    clearInterval(checkInterval);
                    callback(floatingHamburger);
                } else {
                    attempts++;
                    if (attempts >= maxAttempts) {
                        clearInterval(checkInterval);
                        console.warn('Floating hamburger element not found after waiting');
                    }
                }
            }, 50);
        }
        
        waitForHamburgerElement((floatingHamburger) => {
            let isNavbarVisible = true;
            let hamburgerVisible = false;
            
            function checkNavbarVisibility() {
                // Hide on screens 1200px and below
            if (window.innerWidth <= 1200) {
                if (hamburgerVisible) {
                    gsap.to(floatingHamburger, {
                        scale: 0.5,
                        opacity: 0,
                        pointerEvents: 'none',
                        duration: 0.4,
                        ease: 'power2.in'
                    });
                    hamburgerVisible = false;
                }
                return;
            }
                
                const navbarRect = navbar.getBoundingClientRect();
                // Navbar is visible if its bottom edge is still in the viewport (with small threshold)
                const isVisible = navbarRect.bottom > 50;
                
                if (!isVisible && isNavbarVisible) {
                    // Navbar scrolled out of view, show hamburger (scale up)
                    if (!hamburgerVisible) {
                        hamburgerVisible = true;
                        gsap.fromTo(floatingHamburger, 
                            {
                                scale: 0.5,
                                opacity: 0,
                                pointerEvents: 'none'
                            },
                            {
                                scale: 1,
                                opacity: 1,
                                pointerEvents: 'auto',
                                duration: 0.5,
                                ease: 'back.out(1.4)'
                            }
                        );
                    }
                    isNavbarVisible = false;
                } else if (isVisible && !isNavbarVisible) {
                    // Navbar scrolled back into view, hide hamburger (scale down)
                    if (hamburgerVisible) {
                        hamburgerVisible = false;
                        gsap.to(floatingHamburger, {
                            scale: 0.5,
                            opacity: 0,
                            pointerEvents: 'none',
                            duration: 0.09,
                            ease: 'power2.in'
                        });
                    }
                    isNavbarVisible = true;
                }
            }
            
            // Check on scroll
            window.addEventListener('scroll', checkNavbarVisibility, { passive: true });
            
            // Check on resize
            window.addEventListener('resize', () => {
                checkNavbarVisibility();
            });
            
            // Initial check
            checkNavbarVisibility();
        });
    }
    
    // Wait for components to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(initHamburger, 200);
        });
    } else {
        setTimeout(initHamburger, 200);
    }
}

