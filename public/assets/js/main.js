import NavbarComponent from './nav.js';
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector('.scroll-container'),
    smooth: true,
    
});


customElements.define('navbar-component', NavbarComponent);

