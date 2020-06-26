/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation
=======
/*****
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation.
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 ** Dependencies: None
 ** JS Version: ES2015/ES6
 ** JS Standard: ESlint

**/
// /**
//  * Define Global Variables
//  *
// */
const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');

//build the nav
function navigation() {
	for (let item of sections) {
		let section = document.createElement('li');
		// let anchor = document.createElement('a');
		section.className = 'menu__link';
		// anchor.href = `#${item.id}`;
		section.dataset.nav = item.id;
		section.innerText = item.dataset.nav;
		// section.appendChild(anchor);
		navList.appendChild(section);
	}
}


/****
 ** Define all the Global Variables
****/

//Add class 'active' to section when near top of viewport

function makeActive() {
	for (const section of sections) {
		const box = section.getBoundingClientRect();
		const active = document.querySelector('li[data-nav="' + section.id + '"]');
		if (box.top <= 200 && box.bottom >= 200) {
			// Apply active state on the current section and the corresponding Nav link.
			section.classList.add('your-active-class');
			//Add "active" class to the Nav link which have a class same as id of the current section
			active.classList.add('active__link');
		} else {
			// Remove active state from other section and corresponding Nav link.
			section.classList.remove('your-active-class');
			//Remove "active" class from the Nav link which have a class same as id of current section
			active.classList.remove('active__link');
		}
	}
}

//Build menu
navigation();

// Scroll to section on link click

function scroll() {
	navList.addEventListener('click', (e) => {
		e.preventDefault();
		document.querySelector('#' + event.target.dataset.nav).scrollIntoView({
			behavior: 'smooth',
			offsetTop: 20,
			block: 'end'
		});
	});
}

scroll();

// Set sections as active
window.addEventListener('scroll', function() {
	makeActive();
});
