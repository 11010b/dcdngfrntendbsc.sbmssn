const links = document.querySelectorAll('.navLinks');
const links2 = document.querySelectorAll('.navLinks2');
const sections = document.querySelectorAll('.forJS');
const hamburger = document.querySelector('.hamburger');
const navItems2 = document.querySelector('.navItems2');
const header = document.querySelector('.header');
const headerActiveBorder = document.querySelector('.headerActiveBorder');

function changeLinkState() {
	let index = sections.length;

	while (--index && window.scrollY + 80 < sections[index].offsetTop) {}

	links.forEach((link) => link.classList.remove('active'));
	links2.forEach((link2) => link2.classList.remove('active'));
	if (scrollY - sections[index].offsetHeight < sections[index].offsetTop) {
		links[index].classList.add('active');
		links2[index].classList.add('active');
	}
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

hamburger.addEventListener('click', function (e) {
	if (header.classList.contains('active')) {
		headerActiveBorder.style.animation = 'addWidth 0.3s linear forwards';
		navItems2.style.animation = 'toRight 0.3s linear forwards';
	} else {
		headerActiveBorder.style.animation = 'reduceWidth 0.3s linear forwards';
		navItems2.style.animation = 'toLeft 0.3s linear forwards';
	}
	navItems2.classList.toggle('active');
	header.classList.toggle('active');
	e.preventDefault();
});
document.addEventListener('click', function (e) {
	if (!hamburger.contains(e.target) && !navItems2.contains(e.target)) {
		navItems2.classList.remove('active');
		header.classList.remove('active');
		headerActiveBorder.style.animation = 'addWidth 0.3s linear forwards';
		navItems2.style.animation = 'toRight 0.3s linear forwards';
	}
});
