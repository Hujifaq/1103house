// Modern Floating Hamburger Component
const floatingHamburger = () => {
    // Determine base path based on current page location
    const pathname = window.location.pathname;
    const isIndexPage = pathname.endsWith('index.html') || 
                       pathname.endsWith('/') || 
                       pathname === '' ||
                       !pathname.includes('/pages/');
    const basePath = isIndexPage ? '' : '../';
    
    return `<div class="floating-hamburger" id="floating-hamburger">
        <button class="floating-menu-toggle" id="floating-menu-toggle" aria-label="Menu">
            <span class="floating-line floating-line-1"></span>
            <span class="floating-line floating-line-2"></span>
            <span class="floating-line floating-line-3"></span>
        </button>
        <div class="floating-menu-overlay" id="floating-menu-overlay">
            <button class="floating-menu-close" id="floating-menu-close" aria-label="Close Menu">
                <span class="close-line close-line-1"></span>
                <span class="close-line close-line-2"></span>
            </button>
            <nav class="floating-menu-nav">
                <a href="${basePath}index.html" class="floating-menu-link">Home</a>
                <a href="${basePath}pages/product.html" class="floating-menu-link">Products</a>
                <a href="${basePath}pages/about.html" class="floating-menu-link">About Us</a>
                <a href="${basePath}pages/contact.html" class="floating-menu-link">Contact Us</a>
            </nav>
        </div>
    </div>`;
}

class FloatingHamburgerComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = floatingHamburger();
        this.initializeHamburger();
    }
    
    initializeHamburger() {
        const toggle = this.querySelector('#floating-menu-toggle');
        const overlay = this.querySelector('#floating-menu-overlay');
        const closeButton = this.querySelector('#floating-menu-close');
        const hamburger = this.querySelector('#floating-hamburger');
        
        if (!toggle || !overlay) {
            console.warn('Hamburger elements not found');
            return;
        }
        
        let isOpen = false;
        
        // Close button handler
        if (closeButton) {
            closeButton.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                if (isOpen) {
                    toggle.click();
                }
            });
        }
        
        // GSAP hover animation for toggle button - white to black with line color change
        if (typeof gsap !== 'undefined') {
            const lines = toggle.querySelectorAll('.floating-line');
            
            toggle.addEventListener('mouseenter', () => {
                // Change background to black (#070707)
                gsap.to(toggle, {
                    backgroundColor: '#070707',
                    duration: 0.1,
                    ease: 'power2.out'
                });
                
                // Change lines to white
                lines.forEach(line => {
                    gsap.to(line, {
                        backgroundColor: '#ffffff',
                        duration: 0.1,
                        ease: 'power2.out'
                    });
                });
            });
            
            toggle.addEventListener('mouseleave', () => {
                // Change background back to white
                gsap.to(toggle, {
                    backgroundColor: '#ffffff',
                    duration: 0.1,
                    ease: 'power2.out'
                });
                
                // Change lines back to black
                lines.forEach(line => {
                    gsap.to(line, {
                        backgroundColor: '#000000',
                        duration: 0.1,
                        ease: 'power2.out'
                    });
                });
            });
        }
        
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            isOpen = !isOpen;
            
            console.log('Hamburger clicked, isOpen:', isOpen, 'GSAP available:', typeof gsap !== 'undefined');
            
            if (typeof gsap !== 'undefined') {
                if (isOpen) {
                    // Show overlay - from right side (10% offset)
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.right = '10%';
                    overlay.style.left = 'auto';
                    overlay.style.bottom = '0';
                    overlay.style.width = '50vw';
                    overlay.style.height = '100vh';
                    overlay.style.display = 'flex';
                    overlay.style.zIndex = '10002';
                    overlay.style.transform = 'scaleX(0.8)';
                    
                    // Animate overlay - scale up from right
                    gsap.to(overlay, {
                        opacity: 1,
                        scaleX: 1,
                        pointerEvents: 'auto',
                        duration: 0.6,
                        ease: 'back.out(1.7)'
                    });
                    
                    // Animate hamburger lines
                    const lines = toggle.querySelectorAll('.floating-line');
                    gsap.to(lines[0], {
                        rotation: 45,
                        y: 8,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                    gsap.to(lines[1], {
                        opacity: 0,
                        duration: 0.2
                    });
                    gsap.to(lines[2], {
                        rotation: -45,
                        y: -8,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                    
                    // Reset links first, then animate with scale up
                    const links = overlay.querySelectorAll('.floating-menu-link');
                    console.log('Found links:', links.length);
                    
                    if (links.length > 0) {
                        gsap.set(links, {
                            scale: 0.5,
                            opacity: 0
                        });
                        
                        // Animate menu links - scale up with stagger
                        gsap.to(links, {
                            scale: 1,
                            opacity: 1,
                            duration: 0.8,
                            ease: 'back.out(1.4)',
                            stagger: 0.1,
                            delay: 0.15
                        });
                    }
                } else {
                    // Hide menu links first - scale down (faster)
                    const links = overlay.querySelectorAll('.floating-menu-link');
                    gsap.to(links, {
                        scale: 0.5,
                        opacity: 0,
                        duration: 0.15,
                        ease: 'power2.in',
                        stagger: 0.02
                    });
                    
                    // Hide overlay - scale down from right (faster)
                    gsap.to(overlay, {
                        opacity: 0,
                        scaleX: 0.8,
                        pointerEvents: 'none',
                        duration: 0.2,
                        ease: 'power2.in',
                        delay: 0.05,
                        onComplete: () => {
                            overlay.style.display = 'none';
                        }
                    });
                    
                    // Reset hamburger lines
                    const lines = toggle.querySelectorAll('.floating-line');
                    gsap.to(lines[0], {
                        rotation: 0,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                    gsap.to(lines[1], {
                        opacity: 1,
                        duration: 0.2
                    });
                    gsap.to(lines[2], {
                        rotation: 0,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            } else {
                // Fallback if GSAP not available
                console.log('Using fallback (no GSAP)');
                if (isOpen) {
                    // Force dimensions (from right, 50% width, 10% offset)
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.right = '10%';
                    overlay.style.left = 'auto';
                    overlay.style.bottom = '0';
                    overlay.style.width = '50vw';
                    overlay.style.height = '100vh';
                    overlay.style.display = 'flex';
                    overlay.style.zIndex = '10002';
                    overlay.style.opacity = '1';
                    overlay.style.pointerEvents = 'auto';
                    overlay.style.transform = 'scaleX(1)';
                    // Show links with scale
                    const links = overlay.querySelectorAll('.floating-menu-link');
                    links.forEach(link => {
                        link.style.opacity = '1';
                        link.style.transform = 'scale(1)';
                    });
                } else {
                    overlay.style.opacity = '0';
                    overlay.style.pointerEvents = 'none';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 300);
                }
            }
        });
        
        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                toggle.click();
            }
        });
        
        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isOpen) {
                toggle.click();
            }
        });
    }
}

export default FloatingHamburgerComponent;

