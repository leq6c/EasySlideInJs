/*
 * EasySlideInJs 2020
 */

/*
 * vars
 */
let slideClassName = "slide";
let slideMinTime = 100;
let slideFromRightClass = "slide-from-right";
let slideFromLeftClass = "slide-from-left";

/*
 * Slide func
 */
let EasySlideInLastExec = -1;
let EasySlideIn = () => {
	if (EasySlideInLastExec != -1) {
		if(new Date() - EasySlideInLastExec <= slideMinTime)
			return;
	}

	EasySlideInLastExec = new Date();

	var scrollTop =
	document.documentElement.scrollTop ||
	document.body.scrollTop;
	let elms = document.querySelectorAll("." + slideClassName);

	for (let i = 0; i < elms.length; i++) {
		let elm = elms[i];
		let bdx = elm.getBoundingClientRect();
		let y = bdx.top;
		let b = bdx.bottom;
		if (
			(y >= 0 && y <= document.body.clientHeight) || 
			(b >= 0 && b <= document.body.clientHeight)
		) {
			elm.classList.remove(slideClassName);
			if ((i + 1) % 2 == 0) {
				elm.classList.toggle(slideFromRightClass);
			} else {
				elm.classList.toggle(slideFromLeftClass);
			}
		}
	}
};

/*
 * addEventListeners
 */
window.addEventListener("scroll", EasySlideIn);
window.addEventListener("DOMContentLoaded", EasySlideIn);
window.addEventListener("load", EasySlideIn);
