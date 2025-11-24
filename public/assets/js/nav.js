const header = () => {
    // Determine base path based on current page location
    const pathname = window.location.pathname;
    const isIndexPage = pathname.endsWith('index.html') || 
                       pathname.endsWith('/') || 
                       pathname === '' ||
                       !pathname.includes('/pages/');
    const basePath = isIndexPage ? '' : '../';
    
    return `<nav class="navbar-wrapper">
        <div class="logo">
            <a href="${basePath}index.html" draggable="false"><img src="${basePath}assets/images/1103.png" alt="1103 Logo" class="logo-image" draggable="false"></a>
        </div>
        <ul class="navbar-links">
            <li><a href="${basePath}index.html" class="nav-link" draggable="false">Home</a></li>
            <li><a href="${basePath}pages/product.html" class="nav-link" draggable="false">Products</a></li>
            <li><a href="${basePath}pages/about.html" class="nav-link" draggable="false">About Us</a></li>
            <li><a href="${basePath}pages/contact.html" class="nav-link" draggable="false">Contact Us</a></li>
        </ul>
         
 <input type="checkbox" id="checkbox">
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
        <ul class="sidebars" id="sidebar-menu">
            <li><a href="${basePath}index.html" class="nav-link">Home</a></li>
            <li><a href="${basePath}pages/product.html" class="nav-link">Products</a></li>
            <li><a href="${basePath}pages/about.html" class="nav-link">About Us</a></li>
            <li><a href="${basePath}pages/contact.html" class="nav-link">Contact Us</a></li>
        </ul>


    </nav>`
}

class NavbarComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = header();
        
        // Initialize navbar functionality after rendering
        this.initializeNavbar();
    }
    
    initializeNavbar() {
        const navbar = this.querySelector('.navbar-wrapper');
        const checkbox = this.querySelector('#checkbox');
        if (!navbar) return;

        let lastScrollY = window.scrollY;
        const desktopLinks = navbar.querySelectorAll('.navbar-links .nav-link');
        const mobileLinks = navbar.querySelectorAll('.sidebars .nav-link');

        const animateNavLinks = (links, { direction = "in" } = {}) => {
            if (!window.gsap || !links.length) return;

            const items = Array.from(links);
            
            if (direction === "in") {
                window.gsap.set(items, { xPercent: 35, opacity: 0 });
                window.gsap.to(items, {
                    xPercent: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.08,
                    delay: 0.1
                });
            } else if (direction === "out") {
                window.gsap.to(items, {
                    xPercent: 35,
                    opacity: 0,
                    duration: 0.35,
                    ease: "power2.in",
                    stagger: 0.06
                });
            }
        };

        const isMobileView = () => window.innerWidth <= 1200;

        const closeMobileMenu = () => {
            if (!checkbox || !checkbox.checked) return;
            animateNavLinks(mobileLinks, { direction: "out" });
            setTimeout(() => {
                checkbox.checked = false;
            }, 220);
        };

        const setNavbarMode = () => {
            if (isMobileView()) {
                navbar.classList.add('mobile-fixed-nav');
                lastScrollY = window.scrollY;
                animateNavLinks(mobileLinks, { direction: "in" });
            } else {
                navbar.classList.remove('mobile-fixed-nav', 'nav-hidden');
                animateNavLinks(desktopLinks, { direction: "in" });
            }
        };

        const handleScroll = () => {
            if (!isMobileView()) return;
            if (checkbox && checkbox.checked) {
                navbar.classList.remove('nav-hidden');
                return;
            }

            const currentY = window.scrollY;
            const scrolledPastThreshold = currentY > 60;
            const scrollingDown = currentY > lastScrollY + 5;
            const scrollingUp = currentY < lastScrollY - 5;

            if (scrolledPastThreshold && scrollingDown) {
                animateNavLinks(mobileLinks, { direction: "out" });
                navbar.classList.add('nav-hidden');
            } else if (scrollingUp) {
                navbar.classList.remove('nav-hidden');
                animateNavLinks(mobileLinks, { direction: "in" });
            }

            lastScrollY = currentY;
        };

        setNavbarMode();
        window.addEventListener('resize', setNavbarMode);
        window.addEventListener('scroll', handleScroll, { passive: true });

        if (checkbox) {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    navbar.classList.remove('nav-hidden');
                    animateNavLinks(mobileLinks, { direction: "in" });
                } else {
                    animateNavLinks(mobileLinks, { direction: "out" });
                }
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    closeMobileMenu();
                });
            });
        }

        // Initial desktop animation (in case we're already on desktop)
        if (!isMobileView()) {
            animateNavLinks(desktopLinks, { direction: "in" });
        }

        // ESC key handler for closing mobile menu
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeMobileMenu();
            }
        });
    }
}

export default NavbarComponent;