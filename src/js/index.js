import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

//BUTTONY

console.log("HELLO 🚀");

const counter = document.querySelector(".counter--js");
const addButton = document.querySelector(".button__add--js");
const removeButton = document.querySelector(".button__remove--js");

let score = 0;

function createScore(querySelectorContent, content) {
	let myResult = document.querySelector(querySelectorContent);
	myResult.innerHTML = content;
}

createScore(".counter--js", score);

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

const key = new Date().toISOString().slice(0, 10);
