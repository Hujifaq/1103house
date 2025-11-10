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
            <a href="${basePath}index.html"><img src="${basePath}assets/images/1103.png" alt="1103 Logo" class="logo-image"></a>
        </div>
        <ul class="navbar-links">
            <li><a href="${basePath}index.html" class="nav-link">Home</a></li>
            <li><a href="${basePath}pages/product.html" class="nav-link">Products</a></li>
            <li><a href="${basePath}pages/about.html" class="nav-link">About Us</a></li>
            <li><a href="${basePath}pages/contact.html" class="nav-link">Contact Us</a></li>
        </ul>
         
 <input type="checkbox" id="checkbox">
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
        <ul class="sidebars" id="sidebar-menu">
            <li><a href="${basePath}index.html" class="nav-link">Home</a></li>
            <li><a href="${basePath}pages/wwd.html" class="nav-link">Products</a></li>
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
        // ESC key handler for closing mobile menu
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const checkbox = document.getElementById('checkbox');
                if (checkbox && checkbox.checked) {
                    checkbox.checked = false;
                }
            }
        });
    }
}

export default NavbarComponent;