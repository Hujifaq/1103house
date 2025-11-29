


document.addEventListener('DOMContentLoaded', function () {
	if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
		return;
	}

	gsap.registerPlugin(ScrollTrigger);

	// Hero Text Reveal Animation - Awwwards Style
	const heroTitle = document.querySelector('.hero-title-inner');
	const subline = document.querySelector('.subline-inner');
	
	if (heroTitle && subline) {
		const heroTl = gsap.timeline({
			defaults: { ease: 'expo.out' }
		});
		
		// Reveal title with clip-path and slide up
		heroTl.to(heroTitle, {
			y: 0,
			opacity: 1,
			duration: 1.4,
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
			ease: 'expo.out'
		}, 0.3);
		
		// Reveal subline with slight delay
		heroTl.to(subline, {
			y: 0,
			opacity: 1,
			duration: 1.2,
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
			ease: 'expo.out'
		}, 0.7);
	}

	// Support multiple side-scroll sections independently
	document.querySelectorAll('.side-scroll').forEach(function (section) {
		const wrapper = section.querySelector('.side-scroll-list-wrapper');
		const list = section.querySelector('.side-scroll-list');
		if (!wrapper || !list) return;

		// Main horizontal scrub/pin tween
		const horizontalTween = gsap.to(list, {
			x: () => -(list.clientWidth - wrapper.clientWidth),
			ease: 'none',
			scrollTrigger: {
				trigger: section,
				start: 'top top',
				end: () => `+=${Math.max(0, list.clientWidth - wrapper.clientWidth)}`,
				scrub: true,
				pin: true,
				anticipatePin: 1,
				invalidateOnRefresh: true,
			},
		});

		        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from("#we-can-heading", {
             scrollTrigger: {
                 trigger: "#we-can-heading",
                 start: "top 80%", 
                 end: "bottom 20%",
                 toggleActions: "play none none none", 
                 once: false
            },
            x: -100,       
            opacity: 0,    
            duration: 0.5   
     });

		Array.from(list.querySelectorAll('.side-scroll-item')).forEach(function (item) {
			gsap.from(item, {
				opacity: 0,
				x: 100,
				duration: 0.6,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: item,
					containerAnimation: horizontalTween,
					start: 'left center', // when item's left hits center of viewport
					toggleActions: 'play none none reverse',
					once: false,
				},
			});
		});
	});

	// Text Mask Zoom Animation - Clean implementation
	gsap.to(".text-mask-wrapper .mask h2", {
		scale: 300,
		scrollTrigger: {
			trigger: ".text-mask-wrapper",
			scrub: 1,
			pin: true,
			start: "top top",
			end: "+=1500",
			ease: "none"
		}
	});


	// imgscroll - bring images up from below, then spread to corners
	const spotlightImages = document.querySelectorAll('.spotlight-img');
	if (spotlightImages.length) {
		// set initial state: centered horizontally and well below viewport
		const initialRotations = [8, -6, 6, -3];
		spotlightImages.forEach((el, i) => {
			gsap.set(el, { 
				xPercent: -50, 
				yPercent: -50,
				left: '50%',
				top: '50%',
				y: window.innerHeight * 1.5, 
				rotation: initialRotations[i] || 6 
			});
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.spotlight',
				start: 'top top',
				end: `+=${window.innerHeight * 5}`,
				scrub: true,
				pin: true,
				pinSpacing: true,
				invalidateOnRefresh: true,
			},
		});

		// Phase 1: bring each image up one by one to center of viewport
		spotlightImages.forEach((el, i) => {
			tl.to(el, {
				duration: 0.9,
				y: 0,
				rotation: 0,
				ease: 'power3.out'
			}, i * 0.6);
		});

		// Phase 2: ALL images spread to corners simultaneously
		const spreadStart = spotlightImages.length * 0.6 + 0.5;
		
		// Responsive corner positions that work on all screen sizes
		const cornerPositions = [
			{ left: '15%', top: '15%', xPercent: -50, yPercent: -50 },  // Top-left
			{ left: '85%', top: '15%', xPercent: -50, yPercent: -50 },  // Top-right
			{ left: '15%', top: '85%', xPercent: -50, yPercent: -50 },  // Bottom-left
			{ left: '85%', top: '85%', xPercent: -50, yPercent: -50 }   // Bottom-right
		];

		// Animate all images to corners at once with same timing
		spotlightImages.forEach((el, i) => {
			const position = cornerPositions[i];
			tl.to(el, {
				duration: 1.2,
				left: position.left,
				top: position.top,
				xPercent: position.xPercent,
				yPercent: position.yPercent,
				x: 0,
				y: 0,
				rotation: 0,
				scale: 0.85,
				ease: 'power2.inOut'
			}, spreadStart); // Same start time for all images
		});
	}









	// Layer animations
	var isAnimating = false;
	
	
	let chars = [];
	if (typeof SplitText !== 'undefined') {
		const mySplitText = new SplitText(".second", { type: "words,chars" });
		chars = mySplitText.chars;
	}

	let tl = gsap.timeline({
		paused: true,
		onStart: function () {
			isAnimating = true;
		},
		onComplete: function () {
			isAnimating = false;
		}
	});

	tl.to("#layer1circle", {
		scale: 2000,
		duration: 5,
		transformOrigin: "50% 50%",
		ease: "power3.inOut",
		overwrite: "auto"
	});

	tl.to(
		".layer-1-first",
		{
			opacity: 1,
			duration: 1,
			y: -50
		},
		1
	);

	// Enter button click handler
	const enterBtn = document.getElementById("enter");
	if (enterBtn) {
		enterBtn.addEventListener('click', function () {
			gsap.to(".wrapper", { opacity: 0, zIndex: 0, duration: 3 });
			gsap.to(".text_wapper.layer-1", { opacity: 1, duration: 1 });
			
			// Scroll to top
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
			
			
			if (typeof gsap.to !== 'undefined' && gsap.to(window, { scrollTo: 0 })) {
				gsap.to(window, {
					scrollTo: 0,
					duration: 1,
					ease: "power2.inOut"
				});
			}
			
			tl.play();
		});
	}

	// Layer timeline for triggerI scale animation
	const layer_timeline = gsap.timeline();
	layer_timeline.fromTo(
		".layer-1-first .triggerI",
		{ scale: 1 },
		{ scale: 500, duration: 1 }
	);

	ScrollTrigger.create({
		animation: layer_timeline,
		trigger: ".layers",
		start: "top top",
		end: "+=1000%",
		scrub: true,
		pin: true,
		anticipatePin: 1
	});

	// --- Footer lock: prevent scrolling past footer when it's centered in viewport ---
	(function setupFooterLock() {
		const footer = document.querySelector('.footer-part') || document.querySelector('.footer') || document.querySelector('footer');
		if (!footer || typeof ScrollTrigger === 'undefined') return;

		let maxScroll = 0;
		let lockScrollPosition = 0;
		let isLocked = false;

		function updateMax() {
			// Calculate scroll position where footer center aligns with viewport center
			const rect = footer.getBoundingClientRect();
			const footerTop = rect.top + window.scrollY;
			const footerHeight = rect.height;
			const viewportHeight = window.innerHeight;
			
			// Lock when footer center is at viewport center
			lockScrollPosition = Math.max(0, Math.round(footerTop - (viewportHeight / 2) + (footerHeight / 2)));
			
			// Also calculate absolute max (footer bottom at viewport bottom)
			const footerBottom = rect.bottom + window.scrollY;
			maxScroll = Math.max(0, Math.round(footerBottom - viewportHeight));
			const docMax = Math.max(0, document.documentElement.scrollHeight - viewportHeight);
			if (maxScroll > docMax) maxScroll = docMax;
		}

		// Prevent further downward scrolling when locked
		function wheelHandler(e) {
			if (!isLocked) return;
			const currentScroll = window.scrollY;
			
			// Allow scrolling up always
			if (e.deltaY < 0) return;
			
			// Block downward scroll when at or past lock position
			if (currentScroll >= lockScrollPosition - 5) {
				e.preventDefault();
				e.stopPropagation();
				window.scrollTo({ top: Math.round(lockScrollPosition), behavior: 'auto' });
				return false;
			}
		}

		// Touch move handler for mobile
		let touchStartY = null;
		let touchStartScroll = 0;
		
		function touchStartHandler(e) {
			touchStartY = e.touches && e.touches[0] ? e.touches[0].clientY : null;
			touchStartScroll = window.scrollY;
		}

		function touchMoveHandler(e) {
			if (!isLocked || touchStartY === null) return;
			const currentY = e.touches && e.touches[0] ? e.touches[0].clientY : 0;
			const dy = touchStartY - currentY; // positive -> scroll down
			const currentScroll = window.scrollY;
			
			// Allow scrolling up
			if (dy < 0 && currentScroll > touchStartScroll) return;
			
			// Block downward scroll when at or past lock position
			if (dy > 0 && currentScroll >= lockScrollPosition - 5) {
				e.preventDefault();
				e.stopPropagation();
				window.scrollTo({ top: Math.round(lockScrollPosition), behavior: 'auto' });
				return false;
			}
		}

		// Keyboard handler (PageDown / ArrowDown / Space / End)
		function keyHandler(e) {
			if (!isLocked) return;
			const currentScroll = window.scrollY;
			const blocked = ['ArrowDown', 'PageDown', ' ', 'End', 'Spacebar'];
			
			// Allow scrolling up
			const allowedUp = ['ArrowUp', 'PageUp', 'Home'];
			if (allowedUp.includes(e.key)) return;
			
			if (blocked.includes(e.key)) {
				// Block if at or past lock position
				if (currentScroll >= lockScrollPosition - 5) {
					e.preventDefault();
					e.stopPropagation();
					window.scrollTo({ top: Math.round(lockScrollPosition), behavior: 'auto' });
				}
			}
		}

		// Clamp scroll position continuously
		let rafId = null;
		function scrollClamp() {
			if (!isLocked) return;
			if (rafId) return; // already scheduled
			rafId = requestAnimationFrame(() => {
				rafId = null;
				const currentScroll = window.scrollY;
				if (currentScroll > lockScrollPosition) {
					window.scrollTo({ top: Math.round(lockScrollPosition), behavior: 'auto' });
				}
			});
		}

		function lock() {
			updateMax();
			isLocked = true;
			
			// Snap to lock position if already past it
			const currentScroll = window.scrollY;
			if (currentScroll > lockScrollPosition) {
				window.scrollTo({ top: Math.round(lockScrollPosition), behavior: 'smooth' });
			}
			
			window.addEventListener('wheel', wheelHandler, { passive: false });
			window.addEventListener('touchmove', touchMoveHandler, { passive: false });
			window.addEventListener('touchstart', touchStartHandler, { passive: true });
			window.addEventListener('keydown', keyHandler, { passive: false });
			window.addEventListener('scroll', scrollClamp, { passive: true });
		}

		function unlock() {
			isLocked = false;
			window.removeEventListener('wheel', wheelHandler, { passive: false });
			window.removeEventListener('touchmove', touchMoveHandler, { passive: false });
			window.removeEventListener('touchstart', touchStartHandler, { passive: true });
			window.removeEventListener('keydown', keyHandler, { passive: false });
			window.removeEventListener('scroll', scrollClamp, { passive: true });
		}

		// Create a ScrollTrigger that locks when footer center reaches viewport center
		ScrollTrigger.create({
			trigger: footer,
			start: 'center center', // Lock when footer center is at viewport center
			end: '+=1', // Keep it locked
			onEnter: () => lock(),
			onEnterBack: () => lock(),
			onLeaveBack: () => unlock(),
			refreshPriority: 1,
		});

		// Keep maxScroll updated on resize/refresh
		ScrollTrigger.addEventListener('refreshInit', updateMax);
		window.addEventListener('resize', updateMax);
		
		// Initial calculation
		updateMax();

		// Testimonials: micro-interactions (hover/focus) using GSAP
		(function initTestimonialsMicroInteractions(){
			const cards = document.querySelectorAll('.testimonial-card');
			if (!cards || !cards.length) return;
			cards.forEach(card => {
				// make keyboard-focusable
				if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
				card.addEventListener('mouseenter', () => {
					if (typeof gsap !== 'undefined') gsap.to(card, { y: -8, scale: 1.02, duration: 0.22, ease: 'power2.out' });
				});
				card.addEventListener('mouseleave', () => {
					if (typeof gsap !== 'undefined') gsap.to(card, { y: 0, scale: 1, duration: 0.22, ease: 'power2.out' });
				});
				card.addEventListener('focus', () => {
					if (typeof gsap !== 'undefined') gsap.to(card, { y: -8, scale: 1.02, duration: 0.22, ease: 'power2.out' });
				});
				card.addEventListener('blur', () => {
					if (typeof gsap !== 'undefined') gsap.to(card, { y: 0, scale: 1, duration: 0.22, ease: 'power2.out' });
				});
			});
		})();
	})();
});







