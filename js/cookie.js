const navLinks = document.querySelector('.nav__nav-links');
//HAMBURGER
const hamburger = document.querySelector('.nav__hamburger');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
