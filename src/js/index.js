import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const addButton = document.querySelector(".button__add--js");
const removeButton = document.querySelector(".button__remove--js");

let score = 0;

const myResult = score;

function createScore(querySelectorContent, content) {
	let myResult = document.querySelector(querySelectorContent);
	myResult.innerHTML = content;
}

createScore(".counter--js", score);

function add() {
	let myResult = document.querySelector(".counter--js");
	score++;
	myResult.innerHTML = score;
}

addButton.addEventListener('click', add);

function remove() {
	let myResult = document.querySelector(".counter--js");
  score--;
  myResult.innerHTML = score;
}

removeButton.addEventListener('click', remove);