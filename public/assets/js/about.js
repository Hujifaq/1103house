// Simple text splitting function (alternative to SplitText)
function splitTextIntoChars(element) {
    const text = element.textContent;
    element.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        element.appendChild(span);
    }
}

// Smooth scroll function
function smoothScrollTo(targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500;
    let start = null;

    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
    // Get all elements
    const teamImages = document.querySelectorAll(".team-img");
    const teamNames = document.querySelectorAll(".team-name");
    
    // Split all h1 text into characters
    teamNames.forEach(nameDiv => {
        const h1 = nameDiv.querySelector('h1');
        splitTextIntoChars(h1);
    });
    
   
    const urlParams = new URLSearchParams(window.location.search);
    const targetMemberId = urlParams.get('member'); 
    
    const defaultName = document.querySelector('.team-name[data-name="default"]');
    let activeNameDiv = defaultName; 

   
    teamNames.forEach((nameDiv) => {
        const chars = nameDiv.querySelectorAll('.char');
        gsap.set(chars, { y: '100%', opacity: 0 });
    });

    
    if (targetMemberId !== null) {
        const targetName = document.querySelector(`.team-name[data-name="${targetMemberId}"]`);
        const targetSection = document.querySelector(`.member-detail[data-member="${targetMemberId}"]`);
        
        if (targetName) {
            activeNameDiv = targetName; 
            
            
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 500);
            }
        }
    }

    if (activeNameDiv) {
        const activeChars = activeNameDiv.querySelectorAll('.char');
        gsap.set(activeChars, { y: 0, opacity: 1 });
    }
    
    // Add hover functionality for team images
    teamImages.forEach((img, index) => {
        const memberIndex = img.dataset.member;
        const memberName = document.querySelector(`.team-name[data-name="${memberIndex}"]`);
        const arrowIndicator = img.querySelector('.img-arrow-indicator');
        
        if (!memberName) return;
        
        const memberChars = memberName.querySelectorAll('.char');
        
        img.addEventListener('mouseenter', () => {
            // Arrow indicator in
            if (arrowIndicator) {
                gsap.to(arrowIndicator, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            }
            
            // Animate default name up and out
            gsap.to(defaultChars, {
                y: '-100%',
                opacity: 0,
                duration: 0.6,
                stagger: {
                    amount: 0.15,
                    from: 'center'
                },
                ease: 'power4.out'
            });
            
            gsap.to(memberChars, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: { amount: 0.15, from: 'center' },
                ease: 'power4.out',
                overwrite: true
            });
        });
        
        img.addEventListener('mouseleave', () => {
            // Arrow indicator out
            if (arrowIndicator) {
                gsap.to(arrowIndicator, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.2,
                    ease: 'power2.in'
                });
            }
            
            gsap.to(memberChars, {
                y: '100%',
                opacity: 0,
                duration: 0.6,
                stagger: { amount: 0.15, from: 'center' },
                ease: 'power4.out'
            });
            
            if (activeNameDiv) {
                const currentActiveChars = activeNameDiv.querySelectorAll('.char');
                gsap.to(currentActiveChars, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: { amount: 0.15, from: 'center' },
                    ease: 'power4.out',
                    delay: 0.1
                });
            }
        });

        // Click to scroll
        img.addEventListener('click', () => {
            const memberSection = document.getElementById(`member-${memberIndex}`);
            if (memberSection) {
                if (arrowIndicator) gsap.to(arrowIndicator, { rotation: 90, duration: 0.3 });
                memberSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (arrowIndicator) setTimeout(() => gsap.to(arrowIndicator, { rotation: 0, duration: 0.3 }), 500);
            }
        });
    });

    // History Section GSAP Animations
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.from('.history-header', {
            scrollTrigger: {
                trigger: '.history-section',
                start: 'top 70%',
                end: 'top 40%',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });
        
        // SplitText logic (safe check)
        const historyTextElm = document.querySelector('.history-text');
        if (historyTextElm) {
            if (typeof SplitText !== 'undefined') {
                const split = new SplitText(historyTextElm, { type: "lines", linesClass: 'lineParent' });
                const split_parent = new SplitText(historyTextElm.querySelectorAll('.lineParent'), { type: "lines", linesClass: 'lineChild' });
                gsap.set(split_parent.lines, { y: '100%' });
                gsap.to(split_parent.lines, {
                    scrollTrigger: { trigger: '.history-text-wrapper', start: 'top 80%', end: 'top 50%', toggleActions: 'play none none reverse' },
                    y: 0, duration: 0.8, stagger: { each: 0.1, ease: 'power1.in' }, ease: 'power3.out'
                });
            } else {
                gsap.from(historyTextElm, {
                    scrollTrigger: { trigger: '.history-text-wrapper', start: 'top 80%', end: 'top 50%', toggleActions: 'play none none reverse' },
                    y: 50, opacity: 0, duration: 1, ease: 'power3.out'
                });
            }
        }
        
        // Decorations animations
        gsap.to('.history-text-wrapper::before', { scrollTrigger: { trigger: '.history-text-wrapper', start: 'top 75%', toggleActions: 'play none none reverse' }, height: '100%', opacity: 1, duration: 1.5, ease: 'power3.out' });
        gsap.to('.decoration-line-1', { scrollTrigger: { trigger: '.history-section', start: 'top 60%', toggleActions: 'play none none reverse' }, scaleX: 1, opacity: 1, duration: 1.2, ease: 'power3.out' });
        gsap.to('.decoration-line-2', { scrollTrigger: { trigger: '.history-section', start: 'top 50%', toggleActions: 'play none none reverse' }, scaleX: 1, opacity: 1, duration: 1.2, delay: 0.2, ease: 'power3.out' });
        gsap.to('.decoration-circle', { scrollTrigger: { trigger: '.history-section', start: 'top 55%', toggleActions: 'play none none reverse' }, scale: 1, opacity: 1, duration: 1.5, delay: 0.4, ease: 'power3.out' });
    }

    // Member sections animations
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        const memberSections = document.querySelectorAll('.member-detail');
        memberSections.forEach((section) => {
            const memberImages = section.querySelector('.member-images');
            const infoSections = section.querySelectorAll('.info-section');
            
            gsap.from(memberImages, {
                scrollTrigger: { trigger: section, start: 'top 80%', end: 'top 30%', toggleActions: 'play none none reverse' },
                opacity: 0, x: section.classList.contains('inverted') ? 100 : -100, duration: 1.2, ease: 'power3.out'
            });
            gsap.from(infoSections, {
                scrollTrigger: { trigger: section, start: 'top 75%', end: 'top 30%', toggleActions: 'play none none reverse' },
                opacity: 0, y: 50, duration: 0.8, stagger: 0.15, ease: 'power3.out'
            });
        });

        // Slider logic
        const imageSliders = document.querySelectorAll('.image-slider');
        imageSliders.forEach((slider) => {
            const images = slider.querySelectorAll('.slider-images img');
            let currentIndex = 0;
            let autoplayInterval;
            const changeSlide = (newIndex) => {
                images[currentIndex].classList.remove('active');
                currentIndex = newIndex;
                images[currentIndex].classList.add('active');
            };
            const startAutoplay = () => { autoplayInterval = setInterval(() => { const nextIndex = (currentIndex + 1) % images.length; changeSlide(nextIndex); }, 4000); };
            const stopAutoplay = () => { clearInterval(autoplayInterval); };
            startAutoplay();
            slider.addEventListener('mouseenter', stopAutoplay);
            slider.addEventListener('mouseleave', startAutoplay);
        });
    }

    // Deep-link: if arriving with a #member-x hash, smooth scroll & subtle highlight
    const hash = window.location.hash;
    if (hash && /^#member-\d+$/.test(hash)) {
        const target = document.querySelector(hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Ensure any previous highlight boxShadow removed
                const content = target.querySelector('.member-content');
                if (content) {
                    content.style.boxShadow = 'none';
                }
            }, 300);
        }
    }
});

const elm = document.querySelector('.text');
const revert = false;
var split = new SplitText(elm, {
  type: "lines",
  linesClass: 'lineParent'
});

var split_parent = new SplitText(elm.getElementsByClassName('lineParent'), {
  type: "lines",
  charsClass: 'lineChild'
});

gsap.set(split_parent.lines, {
  y: '100%',
});

gsap.to(split_parent.lines, {
  stagger: {
    each: 0.1,
    ease: 'power1.in',
    y: 0,
  },
  onComplete: function(){
    if (revert === true) {
      split.revert();
      split_parent.revert();
    }
  }
});
