
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const navbar = document.getElementsByTagName("nav"); // <nav>
const navList = document.querySelector(".nav-list"); // <ul class="nav-list">
const sections = document.getElementsByTagName("section");

document.addEventListener('DOMContentLoaded', init);

function init(){
  for (i = 0; i < sections.length; i++) {
    event.preventDefault();
    const currentSection = sections[i];
    if (currentSection.hasAttribute("data-nav")) {
      let link = document.createElement("a");
      let linkTitle = currentSection.getAttribute('data-nav');
      let linkText = document.createTextNode(linkTitle);
      link.appendChild(linkText);
      let currentSectionId = currentSection.getAttribute('id');
      let linkItem = document.createElement("li");
      linkItem.classList.add("nav-link");
      let section_id = sections[i].getAttribute('id');
      linkItem.onclick = function() {
          document.getElementById(section_id).scrollIntoView({
              behavior: 'smooth'
          });
      };
      linkItem.appendChild(link);
      navList.appendChild(linkItem);
    }
  }
};


/*
Add class 'active' to section when near top of viewport
My thoughts: 1. Add Event Listener for scrolling
2. Test if is in viewport.
3. If so, add a class or custom behaviour activeSection.classList.add("active");
*/

window.addEventListener("scroll", addActiveClass)

function addActiveClass(event) {
  // As seen here: https://vanillajstoolkit.com/helpers/isinviewport/
  var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  if (isInViewport === true) {
    elem.classList.add("active");
    // active class in style.css
  }
}