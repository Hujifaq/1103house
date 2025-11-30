// Ensure footer CSS is available (safe for plain static pages)
const ensureFooterCSS = () => {
    const existing = document.querySelector('link[href*="footer.css"]');
    if (!existing) {
        const pathname = window.location.pathname;
        const isIndexPage = pathname.endsWith('index.html') || pathname.endsWith('/') || pathname === '' || !pathname.includes('/pages/');
        const href = isIndexPage ? 'assets/css/footer.css' : '../assets/css/footer.css';
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
        console.info('[footer] injected CSS:', href);
    } else {
        console.info('[footer] footer.css already present:', existing.href);
    }
};

// Load FontAwesome script
const loadFontAwesome = () => {
    const existing = document.querySelector('script[src*="kit.fontawesome.com"]');
    if (!existing) {
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/0b1f29cd7e.js';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
        console.info('[footer] injected FontAwesome kit');
    } else {
        console.info('[footer] FontAwesome kit already present:', existing.src);
    }
};

const footercom = () => {
    // Inject footer stylesheet and FontAwesome only when component is used
    // Debug: report where this component thinks assets should be loaded from
    ensureFooterCSS();
    loadFontAwesome();
    const pathname = window.location.pathname;
    const isIndexPage = pathname.endsWith('index.html') || pathname.endsWith('/') || pathname === '' || !pathname.includes('/pages/');
    const basePath = isIndexPage ? '' : '../';
    console.info('[footer] rendering footer, basePath=', basePath);
    return `<div class="footer">
        <div class="parallax-inner">
        <div class="footer-main">
        <div class="upper-footer">
            <div class="Contact">
                <h1 class="Header">Contact</h1>
                <p>555 Soi Phutthabucha 44, Bang Mot Subdistrict, Thung Khru District, Bangkok 10140</p>
                <a href="#">1103.nahee@gmail.com</a>
            </div> 
            <div class="Link">
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="logo">
                <div class="logo-wrapper">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
                </div>
                <a href="${basePath}index.html"><img src="${basePath}assets/images/1103-black-logo.png" alt="1103 logo"></a> 
            </div>
        </div>
        <div class="lower-footer">
            <p>© 2025 All Rights Reserved </p>
           
        </div>
        </div>
        </div>
    </div>`;
};

// Initialize parallax behaviour for a rendered footer element
const initFooter = (rootElement) => {
    try {
        const footer = rootElement.querySelector('.footer');
        if (!footer) return;
        const parallax = footer.querySelector('.parallax-inner');
        if (!parallax) return;

        // Ensure initial style
        parallax.style.willChange = 'transform';
        parallax.style.transition = 'transform 0.12s linear';

        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const rect = footer.getBoundingClientRect();
                const vh = window.innerHeight || document.documentElement.clientHeight;
                // progress = 0 (footer bottom at viewport top) -> 1 (footer top at viewport bottom)
                const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
                // translate less than scroll to create parallax (positive moves down)
                const translate = (1 - progress) * 30; // px
                parallax.style.transform = `translateY(${translate}px)`;
                ticking = false;
            });
        };

        // Run once to initialize
        onScroll();

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
    } catch (e) {
        // silent fail
        console.warn('initFooter error', e);
    }
};

export default footercom;
export { initFooter };
    