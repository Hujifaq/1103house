import NavbarComponent from './nav.js';

// Register the navbar component immediately
if (!customElements.get('navbar-component')) {
customElements.define('navbar-component', NavbarComponent);
}

