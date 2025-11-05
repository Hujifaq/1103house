const track = document.getElementById("image-track");

// Initialize percentage values
track.dataset.prevPercentage = "0";
track.dataset.percentage = "0";

// Touch scroll variables
let touchStartX = 0;
let touchScrollStartX = 0;
let isScrolling = false;
let scrollVelocity = 0;
let lastTouchTime = 0;
let lastTouchX = 0;
let scrollAnimationFrame = null;

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const getMinClampPercentage = () => {
  const w = window.innerWidth;
  if (w <= 768) return -120;     // allow more drag on small screens
  if (w <= 1200) return -85;     // medium screens
  return -52.5;                  // default for large screens
};

const applyTransform = (percentage) => {
  track.animate({
    transform: `translate(${percentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  for (const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${50 + percentage}% center`;
  }
};

// Update track position with smooth scrolling
const updateTrackPosition = (deltaX) => {
  const currentPercentage = parseFloat(track.dataset.percentage || 0);
  const sensitivity = 0.5; // Adjust scroll sensitivity
  const percentageDelta = (deltaX / window.innerWidth) * 100 * sensitivity;
  const nextPercentageUnconstrained = currentPercentage + percentageDelta;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), getMinClampPercentage());
  
  track.dataset.percentage = nextPercentage;
  applyTransform(nextPercentage);
};

// Touch scrolling handlers (for smooth horizontal scrolling on mobile)
const handleTouchScrollStart = (e) => {
  if (e.touches.length === 1) {
    touchStartX = e.touches[0].clientX;
    touchScrollStartX = parseFloat(track.dataset.percentage || 0);
    isScrolling = true;
    lastTouchTime = Date.now();
    lastTouchX = touchStartX;
    scrollVelocity = 0;
    
    // Cancel any ongoing scroll animation
    if (scrollAnimationFrame) {
      cancelAnimationFrame(scrollAnimationFrame);
      scrollAnimationFrame = null;
    }
  }
};

const handleTouchScrollMove = (e) => {
  if (!isScrolling || e.touches.length !== 1) return;
  
  // Always prevent default scrolling to avoid page horizontal scroll
  e.preventDefault();
  
  const currentX = e.touches[0].clientX;
  const currentTime = Date.now();
  const deltaX = currentX - touchStartX;
  const deltaTime = currentTime - lastTouchTime;
  
  // Always calculate velocity for momentum scrolling (even during drag)
  if (deltaTime > 0) {
    const moveX = currentX - lastTouchX;
    scrollVelocity = moveX / deltaTime;
  }
  
  lastTouchX = currentX;
  lastTouchTime = currentTime;
  
  // Only update position if drag is not active (drag handles position when active)
  if (track.dataset.mouseDownAt === "0") {
    // Convert pixel movement to percentage
    const percentageDelta = (deltaX / window.innerWidth) * 100;
    const nextPercentageUnconstrained = touchScrollStartX + percentageDelta;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), getMinClampPercentage());
    
    track.dataset.percentage = nextPercentage;
    applyTransform(nextPercentage);
  }
};

const handleTouchScrollEnd = () => {
  if (!isScrolling) return;
  isScrolling = false;
  
  // Apply momentum scrolling
  if (Math.abs(scrollVelocity) > 0.1) {
    const momentum = () => {
      scrollVelocity *= 0.95; // Friction factor
      
      if (Math.abs(scrollVelocity) < 0.1) {
        scrollVelocity = 0;
        return;
      }
      
      const currentPercentage = parseFloat(track.dataset.percentage || 0);
      const percentageDelta = (scrollVelocity * 16) / window.innerWidth * 100; // 16ms frame time
      const nextPercentageUnconstrained = currentPercentage + percentageDelta;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), getMinClampPercentage());
      
      // Stop if we've hit a boundary
      if (nextPercentage === currentPercentage) {
        scrollVelocity = 0;
        return;
      }
      
      track.dataset.percentage = nextPercentage;
      applyTransform(nextPercentage);
      
      scrollAnimationFrame = requestAnimationFrame(momentum);
    };
    
    scrollAnimationFrame = requestAnimationFrame(momentum);
  }
};

// Mouse wheel scrolling handler
const handleWheel = (e) => {
  e.preventDefault(); // Prevent default vertical scrolling
  
  // Use deltaY for vertical scroll, convert to horizontal (reversed direction)
  const deltaX = -e.deltaY; // Scroll down moves left, scroll up moves right
  updateTrackPosition(deltaX);
};

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = e.clientX - parseFloat(track.dataset.mouseDownAt),
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * 100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage || 0) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), getMinClampPercentage());
  
  track.dataset.percentage = nextPercentage;
  applyTransform(nextPercentage);
}

// Initialize default image positions
window.onload = () => {
  const images = track.getElementsByClassName("image");
  for(const image of images) {
    image.style.objectPosition = "50% center"; // Set initial center position
  }
  // ensure initial clamp after load (esp. on small screens)
  const p = parseFloat(track.dataset.percentage || 0);
  const clamped = Math.max(Math.min(p, 0), getMinClampPercentage());
  track.dataset.percentage = clamped;
  applyTransform(clamped);
}



window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => {
  // Try drag first, but also enable touch scrolling
  handleOnDown(e.touches[0]);
  handleTouchScrollStart(e);
};

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => {
  handleOnUp(e.touches[0]);
  handleTouchScrollEnd();
};

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => {
  // Handle both drag and scroll
  handleOnMove(e.touches[0]);
  handleTouchScrollMove(e);
};

// Mouse wheel scrolling
window.addEventListener('wheel', handleWheel, { passive: false });

// -- End of touch events addition --

// Re-clamp on resize to respect device width bounds
window.addEventListener("resize", () => {
  const current = parseFloat(track.dataset.percentage || 0);
  const clamped = Math.max(Math.min(current, 0), getMinClampPercentage());
  track.dataset.percentage = clamped;
  applyTransform(clamped);
});

// keep loader visible for 3s after window "load", then fade out and remove
window.addEventListener("load", () => {
  const wrapper = document.querySelector(".loader-wrapper");
  const inner = document.querySelector(".load-container");

  const fadeOut = (el, ms = 500) => {
    if (!el) return Promise.resolve();
    el.style.transition = `opacity ${ms}ms ease`;
    el.style.opacity = "1";
    void el.offsetWidth; // force reflow
    el.style.opacity = "0";
    return new Promise(res => setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
      res();
    }, ms));
  };

  setTimeout(async () => {
    await fadeOut(inner, 500);
    await fadeOut(wrapper, 500);

    // initialize AOS after loader fully removed
    if (window.AOS && typeof AOS.init === "function") {
      AOS.init({ once: true, offset: 0 });
      if (typeof AOS.refreshHard === "function") {
        AOS.refreshHard();
      } else if (typeof AOS.refresh === "function") {
        AOS.refresh();
      }
      setTimeout(() => {
        if (typeof AOS.refresh === "function") AOS.refresh();
      }, 50);
    }
  }, 3000); 
});




