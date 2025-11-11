# Revert Changes Documentation

This document tracks all changes made for the floating hamburger and smooth scroll feature.
If you need to revert, use this as a reference.

## Files Created:
1. `public/assets/js/floating-hamburger.js` - Floating hamburger component
2. `public/assets/js/smooth-scroll-hamburger.js` - Smooth scroll + hamburger controller

## Files Modified:

### CSS:
- `public/assets/css/style.css` - Added floating hamburger styles (lines ~613-723)

### JavaScript:
- `public/assets/js/main.js` - No changes (already clean)

### HTML Pages (all except index.html):
- `public/pages/product.html` - Added hamburger component and scripts
- `public/pages/about.html` - Added hamburger component and scripts  
- `public/pages/wwd.html` - Added hamburger component and scripts

## To Revert:
1. Delete: `floating-hamburger.js` and `smooth-scroll-hamburger.js`
2. Remove hamburger styles from `style.css` (lines ~613-723)
3. Remove `<floating-hamburger-component>` from all pages
4. Remove `smooth-scroll-hamburger.js` script tags from all pages
5. Remove GSAP script if it was only added for this feature

