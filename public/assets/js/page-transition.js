// Awwwards-style Page Transition with Sequential White Bars
(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        barCount: 5,
        animationDuration: 0.7,
        staggerDelay: 0.08,
        easeIn: 'power3.inOut',
        easeOut: 'power3.inOut',
        barColor: '#ffffff'
    };

    // Create transition overlay container
    function createTransitionOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'page-transition-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: all;
            z-index: 99999;
            display: flex;
            will-change: transform;
        `;

        // Create individual bars - start visible for page enter
        for (let i = 0; i < CONFIG.barCount; i++) {
            const bar = document.createElement('div');
            bar.className = 'transition-bar';
            bar.style.cssText = `
                flex: 1;
                height: 100%;
                background-color: ${CONFIG.barColor};
                transform: scaleY(1) translateZ(0);
                transform-origin: bottom;
                will-change: transform;
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
            `;
            overlay.appendChild(bar);
        }

        document.body.appendChild(overlay);
        
        // Show body content now that overlay is ready
        document.body.style.visibility = 'visible';
        
        return overlay;
    }

    // Get or create overlay
    function getOverlay() {
        let overlay = document.getElementById('page-transition-overlay');
        if (!overlay) {
            overlay = createTransitionOverlay();
        }
        return overlay;
    }

    // Animate bars in (page exit)
    function animateIn(callback) {
        const overlay = getOverlay();
        const bars = overlay.querySelectorAll('.transition-bar');
        
        overlay.style.pointerEvents = 'all';
        document.body.style.overflow = 'hidden';

        // Reset bars to top
        gsap.set(bars, {
            scaleY: 0,
            transformOrigin: 'top'
        });

        const tl = gsap.timeline({
            onComplete: () => {
                if (callback) callback();
            }
        });

        // Animate bars down from top
        tl.to(bars, {
            scaleY: 1,
            duration: CONFIG.animationDuration,
            stagger: CONFIG.staggerDelay,
            ease: CONFIG.easeIn,
            force3D: true
        });

        return tl;
    }

    // Animate bars out (page enter)
    function animateOut(callback) {
        const overlay = getOverlay();
        const bars = overlay.querySelectorAll('.transition-bar');

        // Ensure bars start full
        gsap.set(bars, {
            scaleY: 1,
            transformOrigin: 'bottom'
        });

        const tl = gsap.timeline({
            onComplete: () => {
                overlay.style.pointerEvents = 'none';
                document.body.style.overflow = '';
                if (callback) callback();
            }
        });

        // Animate bars up from bottom
        tl.to(bars, {
            scaleY: 0,
            duration: CONFIG.animationDuration,
            stagger: CONFIG.staggerDelay,
            ease: CONFIG.easeOut,
            force3D: true
        });

        return tl;
    }

    // Handle page navigation
    function navigateToPage(url) {
        animateIn(() => {
            window.location.href = url;
        });
    }

    // Initialize page transition on page load
    function initPageTransition() {
        // Ensure GSAP is loaded
        if (typeof gsap === 'undefined') {
            console.error('GSAP is not loaded. Page transitions require GSAP.');
            return;
        }

        // Create overlay on init - starts visible
        getOverlay();

        // Animate out on page load (entrance animation)
        animateOut();

        // Handle all internal links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            
            if (!link) return;

            const href = link.getAttribute('href');
            
            // Check if it's an internal link (not external, not anchor, not mailto/tel)
            if (
                href &&
                !href.startsWith('#') &&
                !href.startsWith('mailto:') &&
                !href.startsWith('tel:') &&
                !link.hasAttribute('target') &&
                !link.hasAttribute('download') &&
                (href.startsWith('/') || 
                 href.startsWith('./') || 
                 href.startsWith('../') ||
                 href.includes(window.location.hostname) ||
                 !href.includes('://'))
            ) {
                e.preventDefault();
                navigateToPage(href);
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPageTransition);
    } else {
        initPageTransition();
    }

    // Public API
    window.PageTransition = {
        animateIn,
        animateOut,
        navigateTo: navigateToPage
    };
})();
