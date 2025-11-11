import NavbarComponent from './nav.js';
import footercom, { initFooter } from './footer.js';

// Create Footer Component class
class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = footercom();
        if (typeof initFooter === 'function') {
            try { initFooter(this); } catch (e) { /* ignore */ }
        }
    }
}

// Register the navbar component immediately
if (!customElements.get('navbar-component')) {
    customElements.define('navbar-component', NavbarComponent);
}

// Register the footer component
if (!customElements.get('footer-component')) {
    customElements.define('footer-component', FooterComponent);
}
