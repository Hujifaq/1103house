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
});




