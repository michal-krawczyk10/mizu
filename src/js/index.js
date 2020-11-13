import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const addButton = document.querySelector(".button__add--js");
const removeButton = document.querySelector(".button__remove--js");

const score = 0;

function createScore(querySelectorContent, content) {
	const score = document.querySelector(querySelectorContent);
	score.innerHTML = content;
}

createScore(".counter--js", 0);

const add = score++;
const remove = score--;

