const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show");
		});
	}
};

showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	navLink.forEach((n) => n.classList.remove("active"));
	this.classList.add("active");

	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
	scrollBtn.classList.toggle("active", window.scrollY > 10);
});

scrollBtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", rotate);
window.addEventListener("scroll", drop);
window.addEventListener("scroll", reveal);

function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 50;

		if (revealTop < windowHeight - revealPoint) {
			reveals[i].classList.add("active");
		}
	}
}

function drop() {
	var reveals = document.querySelectorAll(".drop");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 50;

		if (revealTop < windowHeight - revealPoint) {
			reveals[i].classList.add("active");
		}
	}
}
function rotate() {
	var reveals = document.querySelectorAll(".rotate");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 50;

		if (revealTop < windowHeight - revealPoint) {
			reveals[i].classList.add("active");
		}
	}
}

const sectionAll = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
	const scrollY = window.pageYOffset;
	sectionAll.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 100;
		const sectionId = current.getAttribute("id");
		console.log(sectionId);
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('li a[href*="' + sectionId + '"]')
				.classList.add("active");
		} else {
			document
				.querySelector('li a[href*="' + sectionId + '"]')
				.classList.remove("active");
		}
	});
});

function getStarted() {
	window.open("/src/assets/pages/get-started.html", "target=_blank");
}

function openGithub() {
	window.open("https://github.com/Adiksuu", "target=_blank");
}

function hideLoader() {
	const headerElement = document.querySelector("header");
	const loaderElement = document.querySelector(".loader");

	headerElement.classList.remove("load");
	loaderElement.classList.remove("load");
}

function loader() {
	const headerElement = document.querySelector("header");
	const loaderElement = document.querySelector(".loader");

	headerElement.classList.add("load");
	loaderElement.classList.add("load")

	setTimeout(hideLoader,3500)
}