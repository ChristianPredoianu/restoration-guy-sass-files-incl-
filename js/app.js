// ARROW UP
const arrowUp = document.getElementById('nav-up-cta');
// Add event listener
arrowUp.addEventListener('click', topFunction);

const navLinks = document.querySelector('.nav__nav-links');
//HAMBURGER
const hamburger = document.querySelector('.nav__hamburger');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// On click scroll to top of document
function topFunction() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

//On click scroll to services section
function scrollToServices() {
  var elmnt = document.getElementById('services');
  elmnt.scrollIntoView({
    behavior: 'smooth'
  });
}

//On click scroll to packages section
function scrollToPackages() {
  var elmnt = document.getElementById('packages');
  elmnt.scrollIntoView({
    behavior: 'smooth'
  });
}

AOS.init({
  // Global settings:

  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
});
