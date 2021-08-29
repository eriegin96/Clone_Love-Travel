// Open / Close sidebar PC
var navbarMenuPc = document.querySelector('.navbar-menu-pc');
var sidebarPc = document.querySelector('.sidebar');
var sidebarPcCloseBtn = document.querySelector('.sidebar__close');
var overlay = document.querySelector('.overlay');

function sidebarPcOpen() {
	sidebarPc.style.right = '0rem';
	overlay.style.display = 'block';
}
function sidebarPcClose() {
	sidebarPc.style.right = '-35rem';
	overlay.style.display = 'none';
}

navbarMenuPc.addEventListener('click', sidebarPcOpen);
sidebarPcCloseBtn.addEventListener('click', sidebarPcClose);
overlay.addEventListener('click', sidebarPcClose);

// Open / Close sidebar Mobile
var navbarMenuMobile = document.querySelector('.navbar-menu-mobile');
var sidebarMobile = document.querySelector('.sidebar-mobile');
var sidebarMobileCloseBtn = document.querySelector('.sidebar-mobile__close');
var overlay = document.querySelector('.overlay');

function sidebarMobileOpen() {
	sidebarMobile.style.right = '0rem';
	overlay.style.display = 'block';
}
function sidebarMobileClose() {
	sidebarMobile.style.right = '-35rem';
	overlay.style.display = 'none';
}

navbarMenuMobile.addEventListener('click', sidebarMobileOpen);
sidebarMobileCloseBtn.addEventListener('click', sidebarMobileClose);
overlay.addEventListener('click', sidebarMobileClose);

// Slide Image
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('next-holiday__slide');
	var dashed = document.getElementsByClassName('next-holiday__selecter');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < slides.length; i++) {
		// dashed[i].className = dashed[i].className.replace(' next-holiday--active', '');
		dashed[i].classList.remove('next-holiday--active');
	}
	slides[slideIndex - 1].style.display = 'block';
	// dashed[slideIndex - 1].className += ' next-holiday--active';
	dashed[slideIndex - 1].classList.add('next-holiday--active');
}
