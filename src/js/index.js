import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const counter = document.querySelector(".counter--js");
const addButton = document.querySelector(".button__add--js");
const removeButton = document.querySelector(".button__remove--js");

let score = 0;


// KLUCZ Z DZISIEJSZĄ DATĄ WG. CZASU UTC
// const key = new Date().toISOString().slice(0, 10);

// KLUCZ Z DATĄ wg czasu lokalnego
const key = new Date().toLocaleString().slice(0, 10);

// LOCAL STORAGE
const localStorageValue = localStorage.getItem(key); //zmienna przypisana do klucza

if (localStorageValue) { //sprawszamy czy jest coś pod tym kluczem w localstorage, jeśli jest to:
	score = localStorageValue //przypisujemy jego wartość do zmiennej score
} else { //jeśli nie
	localStorage.setItem(key, 0); //pod klucz wstawiamy zero 
}

//USTAWIENIE WYŚWIETLANIA SCORE W ELEMENCIE (ALT. DLA WPISANIA WPROST W HTML)
function createScore(content) {
	counter.innerHTML = content;
}

createScore(score);

//DWA ALTERNATYWNE SPOSOBY ZAPISU FUNKCJI NA ON CLICK

// function add() {
// 	if (score <= 20) {
// 		score++;
// 	} else if (score > 20) {
// 		score = 'really?';
// 	}

// 	counter.innerHTML = score;
// }

// addButton.addEventListener("click", add);

addButton.addEventListener("click", () => {
	if (score <= 20) {
		score++;
	} else if (score > 20) {
		score = "really?";
	}

	counter.innerHTML = score;
});

function remove() {
	if (score > 0) {
		score--;
	} else if (score == "really?") {
		score = 21;
	}

	counter.innerHTML = score;
}

removeButton.addEventListener("click", remove);

// local storage
