import { morseAlphabet } from "./modules/morse-alphabet.js";
import { englishToMorse } from "./modules/transform-input.js";
import { morseToEnglish } from "./modules/transform-input.js";
import { createEl } from "./modules/dom.js";
import { removeAllChildren } from "./modules/dom.js";


console.log(englishToMorse("I need a lot more coffee"));
console.log(morseToEnglish("... / --- / ..."));


const form = document.querySelector("form");
const translatedOutput = document.querySelector("#translatedOutput");

const display = document.querySelector("#translatedOutput");

/* AUTO DETECT LANGUAGE */
// if the first index of input is part of the morse obj keys? if it's a letter we go for english, if not we know know it's morse
const morseObj = Object.keys(morseAlphabet);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  removeAllChildren(display);
  const data = new FormData(form);
  const dataToTranslate = data.get("textToTranslate").trim();
  if (morseObj.includes(dataToTranslate[0].toUpperCase())) {
    // if english
    const translatedText = englishToMorse(dataToTranslate);
    createEl("p", translatedText, translatedOutput);
  } else {
    // if morse
    const translatedText = morseToEnglish(dataToTranslate);
    createEl("p", translatedText, translatedOutput);
  }
})
