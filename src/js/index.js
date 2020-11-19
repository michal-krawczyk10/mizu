import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const counter = document.querySelector(".counter--js");
const addButton = document.querySelector(".button__add--js");
const removeButton = document.querySelector(".button__remove--js");

let score = 0;

/* KLUCZ Z DZISIEJSZĄ DATĄ WG. CZASU UTC:
const key = new Date().toISOString().slice(0, 10); */

// KLUCZ Z DATĄ wg czasu lokalnego
const key = new Date().toLocaleString().slice(0, 10);

// LOCAL STORAGE
const localStorageValue = localStorage.getItem(key); //zmienna przypięta do klucza

if (localStorageValue) {
	//sprawszamy czy jest coś pod tym kluczem w localstorage, jeśli jest to:
	score = localStorageValue; //przypisujemy jego wartość do zmiennej score
} else {
	//jeśli nie
	localStorage.setItem(key, 0); //pod wartość klucza wstawiamy zero
}

counter.innerHTML = score; //wstawia do html wartość przypisaną do klucza

// //USTAWIENIE WYŚWIETLANIA SCORE W ELEMENCIE (ALT. DLA WPISANIA WPROST W HTML)
// function createScore(content) {
// 	counter.innerHTML = content;
// }
// createScore(score);

// DWA ALTERNATYWNE SPOSOBY ZAPISU FUNKCJI NA CLICK

addButton.addEventListener("click", () => {
	if (score <= 20) {
		score++;
	} else if (score > 20) {
		score = "really?";
	}

	counter.innerHTML = score;

	localStorage.setItem(key, score); //po kliknięciu wstawia wynik pod klucz
});

function remove() {
	if (score > 0) {
		score--;
	} else if (score == "really?") {
		score = 21;
	}

	counter.innerHTML = score;

	localStorage.setItem(key, score);
}

removeButton.addEventListener("click", remove); // TAK CLICK ODPALA FUNKCJE ZDEFINIOWANĄ WCZEŚNIEJ

//hamburger on/off
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const background = document.querySelector(".background");

hamburger.addEventListener("click", () => {
	menu.classList.add("show");
	background.classList.add("background--js");
});

background.addEventListener("click", () => {
	menu.classList.remove("show");
	background.classList.remove("background--js");
});

//add class to tag on click

const rotate = document.querySelector(".glass");

addButton.addEventListener("click", () => {
	rotate.classList.toggle("glass--animation");
});

removeButton.addEventListener("click", () => {
	rotate.classList.toggle("glass--animation");
});

// dark mode

let isDark = false;

const dark = document.querySelector(".dark--js");

function createContent(querySelectorContent, content) {
	const item = document.querySelector(querySelectorContent);
	item.innerHTML = content;
}

//cdn	

// ustalanie języka z local storage (html jest po angielsku)

let language = localStorage.getItem("language");

let polish = false;

if (language === "polish") {
	polish = true;
	createContent(".button__add--js", "+ dodaj szklankę");
	createContent(".button__remove--js", "- usuń szklankę");
	createContent(".language--js", "english");
	createContent(".history--js", "historia");
	if (isDark) {
		createContent(".dark--js", "tryb jasny");
	} else {
		createContent(".dark--js", "tryb ciemny");
	}
} else {
	polish = false;
}

// dark mode cd

dark.addEventListener("click", () => {
	if (isDark == false) {
		isDark = true;
		document.documentElement.style.setProperty("--back", "#062452");
		document.documentElement.style.setProperty("--back2", "#021531");
		if (polish) {
			createContent(".dark--js", "tryb jasny");
		} else {
			createContent(".dark--js", "bright mode");
		}
	} else {
		isDark = false;
		document.documentElement.style.setProperty("--back", "#3E98CB");
		document.documentElement.style.setProperty("--back2", "#0e5985");
		if (polish) {
			createContent(".dark--js", "tryb ciemny");
		} else {
			createContent(".dark--js", "dark mode");
		}
	}
});

//language

// let polish = false; (flaga zdefiniowana już została wyżej, zostawiam też tu żeby o niej pamiętać)

let changeLanguage = document.querySelector(".language--js");

changeLanguage.addEventListener("click", () => {
	if (polish) {
		polish = false;
		createContent(".button__add--js", "+ add a glass");
		createContent(".button__remove--js", "- remove a glass");
		createContent(".language--js", "polski");
		createContent(".history--js", "history");
		if (isDark) {
			createContent(".dark--js", "bright mode");
		} else {
			createContent(".dark--js", "dark mode");
		}
		localStorage.setItem("language", "english");
	} else {
		polish = true;
		createContent(".button__add--js", "+ dodaj szklankę");
		createContent(".button__remove--js", "- usuń szklankę");
		createContent(".language--js", "english");
		createContent(".history--js", "historia");
		localStorage.setItem("language", "polish");
		if (isDark) {
			createContent(".dark--js", "tryb jasny");
		} else {
			createContent(".dark--js", "tryb ciemny");
		}
	}
});
