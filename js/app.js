// Get the arrow up
const arrowUp = document.getElementById("nav-up-cta");

// Add event listener
arrowUp.addEventListener("click", topFunction);

// On click scroll to top of document
function topFunction() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

//On click scroll to services section
function scrollToServices() {
  var elmnt = document.getElementById("services");
  elmnt.scrollIntoView({
    behavior: "smooth"
  });
}

//On click scroll to packages section
function scrollToPackages() {
  var elmnt = document.getElementById("packages");
  elmnt.scrollIntoView({
    behavior: "smooth"
  });
}
