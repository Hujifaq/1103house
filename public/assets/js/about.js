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
    
    // Get all character spans
    const defaultName = document.querySelector('.team-name[data-name="default"]');
    const defaultChars = defaultName.querySelectorAll('.char');
    
    // Set initial states using GSAP
    gsap.set(defaultChars, { 
        y: 0, 
        opacity: 1 
    });
    
    teamNames.forEach((nameDiv, index) => {
        if (index > 0) { // Skip default
            const chars = nameDiv.querySelectorAll('.char');
            gsap.set(chars, { 
                y: '100%', 
                opacity: 0 
            });
        }
    });
    
    // Add hover functionality
    teamImages.forEach((img, index) => {
        const memberIndex = img.dataset.member;
        const memberName = document.querySelector(`.team-name[data-name="${memberIndex}"]`);
        
        if (!memberName) return;
        
        const memberChars = memberName.querySelectorAll('.char');
        
        img.addEventListener('mouseenter', () => {
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
            
            // Animate member name up and in
            gsap.to(memberChars, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: {
                    amount: 0.15,
                    from: 'center'
                },
                ease: 'power4.out'
            });
        });
        
        img.addEventListener('mouseleave', () => {
            // Animate member name down and out
            gsap.to(memberChars, {
                y: '100%',
                opacity: 0,
                duration: 0.6,
                stagger: {
                    amount: 0.15,
                    from: 'center'
                },
                ease: 'power4.out'
            });
            
            // Animate default name down and in
            gsap.to(defaultChars, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: {
                    amount: 0.15,
                    from: 'center'
                },
                ease: 'power4.out'
            });
        });
    });
});
