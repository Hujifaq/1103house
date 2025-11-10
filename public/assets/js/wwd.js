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
});



