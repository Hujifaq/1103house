


document.addEventListener('DOMContentLoaded', function () {
	if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
		return;
	}

	gsap.registerPlugin(ScrollTrigger);

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
		// set initial state: centered horizontally (xPercent:-50) and well below viewport
		const initialRotations = [8, -6, 6, -3];
		spotlightImages.forEach((el, i) => {
			gsap.set(el, { xPercent: -50, y: window.innerHeight * 1.1, rotation: initialRotations[i] || 6 });
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.spotlight',
				start: 'top top',
				end: `+=${window.innerHeight * 6}`,
				scrub: true,
				pin: true,
				pinSpacing: true,
				invalidateOnRefresh: true,
			},
		});

		// Phase 1: bring each image up one by one to the spotlight area
		spotlightImages.forEach((el, i) => {
			tl.to(el, {
				duration: 0.9,
				y: -50,
				rotation: 0,
				ease: 'power3.out'
			}, i * 0.6);
		});

		// Phase 2: small pause, then spread to corners one-by-one
		const spreadStart = spotlightImages.length * 0.6 + 0.4;
		// keep a margin from the viewport edges - use safer percentages
		const corners = [
			{ left: '12%', top: '12%' },
			{ left: '76%', top: '12%' },
			{ left: '12%', top: '76%' },
			{ left: '76%', top: '76%' },
		];

		// Put images around the spotlight H1 corners and scale down 10%
		const spotlight = document.querySelector('.spotlight');
		const header = spotlight ? spotlight.querySelector('.spotlight-header h1') : null;

		if (header && spotlight) {
			// compute an extra offset: positive moves left, negative moves right
			const extraLeftFraction = 0.12; // move 2% to the left
			const extraTopFraction = 0.15; // 15% up

			spotlightImages.forEach((el, i) => {
				tl.to(el, {
					duration: 0.8,
					left: function () {
						const s = spotlight.getBoundingClientRect();
						const h = header.getBoundingClientRect();
						const elW = el.offsetWidth || 200;
						// choose left/right corner of header
						const cornerX = (i % 2 === 0) ? h.left : h.right;
						// center image around header corner with a small padding
						const baseX = cornerX - s.left + (i % 2 === 0 ? -elW * 0.5 - 12 : elW * 0.5 + 12);
						const extraLeft = s.width * extraLeftFraction;
						return `${baseX - extraLeft}px`;
					},
					top: function () {
						const s = spotlight.getBoundingClientRect();
						const h = header.getBoundingClientRect();
						const elH = el.offsetHeight || 140;
						// choose top/bottom corner of header (first two items -> top, last two -> bottom)
						const cornerY = (i < 2) ? h.top : h.bottom;
						const baseY = cornerY - s.top + (i < 2 ? -elH * 0.5 - 12 : elH * 0.5 + 12);
						const extraTop = s.height * extraTopFraction;
						return `${baseY - extraTop}px`;
					},
					// clear transform offsets so left/top placement is accurate
					x: 0,
					y: 0,
					xPercent: 0,
					yPercent: 0,
					rotation: 0,
					// scale down by 10%
					scale: 0.9,
					ease: 'power2.inOut'
				}, spreadStart + i * 0.45);
			});
		} else {
			// fallback to percentage-based positions computed in pixels so we can apply same offset
			const fallbackPercents = [
				{ x: 12, y: 12 },
				{ x: 76, y: 12 },
				{ x: 12, y: 76 },
				{ x: 76, y: 76 },
			];

			// fallback uses same fractions; positive moves left
			const extraLeftFraction = 0.02;
			const extraTopFraction = 0.15;

			spotlightImages.forEach((el, i) => {
				tl.to(el, {
					duration: 0.8,
					left: function () {
						const s = spotlight.getBoundingClientRect();
						const elW = el.offsetWidth || 200;
						const percentX = fallbackPercents[i].x / 100;
						const baseLeft = s.width * percentX - elW * 0.5;
						const extraLeft = s.width * extraLeftFraction;
						return `${baseLeft - extraLeft}px`;
					},
					top: function () {
						const s = spotlight.getBoundingClientRect();
						const elH = el.offsetHeight || 140;
						const percentY = fallbackPercents[i].y / 100;
						const baseTop = s.height * percentY - elH * 0.5;
						const extraTop = s.height * extraTopFraction;
						return `${baseTop - extraTop}px`;
					},
					x: 0,
					y: 0,
					xPercent: 0,
					yPercent: 0,
					rotation: 0,
					scale: 0.9,
					ease: 'power2.inOut'
				}, spreadStart + i * 0.45);
			});
		}
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

	// --- Footer lock: prevent scrolling past footer (.footer-part or .footer) ---
	(function setupFooterLock() {
		const footer = document.querySelector('.footer-part') || document.querySelector('.footer') || document.querySelector('footer');
		if (!footer || typeof ScrollTrigger === 'undefined') return;

		let maxScroll = 0;
		let isLocked = false;

		function updateMax() {
			// compute the max scroll we want to allow based on footer bounds.
			// target = footer bottom - viewport height (so footer bottom lines up with viewport bottom)
			const rect = footer.getBoundingClientRect();
			const footerBottom = rect.bottom + window.scrollY;
			maxScroll = Math.max(0, Math.round(footerBottom - window.innerHeight));
			// if the computed value is greater than document max, clamp to doc max as a fallback
			const docMax = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
			if (maxScroll > docMax) maxScroll = docMax;
		}

		// Prevent further downward scrolling when locked
		function wheelHandler(e) {
			if (!isLocked) return;
			// block any downward scroll once we're at/after maxScroll
			if (e.deltaY > 0 && window.scrollY >= maxScroll - 2) {
				e.preventDefault();
				e.stopPropagation();
				window.scrollTo({ top: Math.round(maxScroll), behavior: 'auto' });
				return false;
			}
		}

		// Touch move handler for mobile (prevent vertical dragging past footer)
		let touchStartY = null;
		function touchStartHandler(e) {
			touchStartY = e.touches && e.touches[0] ? e.touches[0].clientY : null;
		}

		function touchMoveHandler(e) {
			if (!isLocked || touchStartY === null) return;
			const currentY = e.touches && e.touches[0] ? e.touches[0].clientY : 0;
			const dy = touchStartY - currentY; // positive -> scroll down
			if (dy > 0 && window.scrollY >= maxScroll - 1) {
				e.preventDefault();
				e.stopPropagation();
				window.scrollTo({ top: Math.round(maxScroll), behavior: 'auto' });
				return false;
			}
		}

		// Keyboard handler (PageDown / ArrowDown / Space / End)
		function keyHandler(e) {
			if (!isLocked) return;
			const blocked = ['ArrowDown', 'PageDown', ' ', 'End', 'Spacebar'];
			if (blocked.includes(e.key)) {
				// if already at max, prevent further scroll
				if (window.scrollY >= maxScroll - 1) {
					e.preventDefault();
					e.stopPropagation();
					window.scrollTo({ top: Math.round(maxScroll), behavior: 'auto' });
				}
			}
		}

		// clamp using rAF to avoid flicker / momentum overscroll
		let rafId = null;
		function scrollClamp() {
			if (!isLocked) return;
			if (rafId) return; // already scheduled
			rafId = requestAnimationFrame(() => {
				rafId = null;
				if (window.scrollY > maxScroll) {
					window.scrollTo({ top: Math.round(maxScroll), behavior: 'auto' });
				}
			});
		}

		function lock() {
			updateMax();
			isLocked = true;
			// Immediately snap to the computed max (prevents further downward space)
			if (window.scrollY > maxScroll) window.scrollTo({ top: Math.round(maxScroll), behavior: 'auto' });
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

		// Create a ScrollTrigger that locks once footer top meets bottom-of-viewport
		ScrollTrigger.create({
			trigger: footer,
			start: 'top bottom',
			end: 'bottom bottom',
			onEnter: () => lock(),
			onEnterBack: () => lock(),
			onLeaveBack: () => unlock(),
			onLeave: () => unlock(),
			refreshPriority: 1,
		});

		// Keep maxScroll updated on resize/refresh
		ScrollTrigger.addEventListener('refreshInit', updateMax);
		window.addEventListener('resize', updateMax);

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







