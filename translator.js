import { morseAlphabet } from "./modules/morse-alphabet.js";
import { englishToMorse } from "./modules/transform-input.js";
import { morseToEnglish } from "./modules/transform-input.js";
import { createEl } from "./modules/dom.js";
import { removeAllChildren } from "./modules/dom.js";

const form = document.querySelector("form");
const translatedOutput = document.querySelector("#translatedOutput");
const display = document.querySelector("#translatedOutput");

/* AUTO DETECT LANGUAGE */
// if the first index of input is part of the morse obj keys? if it's a letter we go for english, if not we know know it's morse
const morseObj = Object.keys(morseAlphabet);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  removeAllChildren(display);

  const data = new FormData(form);
  const dataToTranslate = data.get("textToTranslate").trim();
  try {
   if(dataToTranslate === "") {
    throw new Error("Cannot translate an empty string or invalid input");
   }
  } catch (error) {
    createEl("p", `${error}. Try again!`, translatedOutput);
    return error;
  }

  try {
    if(
    dataToTranslate.includes("#") ||
    dataToTranslate.includes("@") ||
    dataToTranslate.includes("#") ||
    dataToTranslate.includes("$")) {
      throw new Error("The string includes invalid characters");
    }
   } catch (error) {
      console.log(error);
      createEl("p", `${error}. Try again!`, translatedOutput);
      return error;
    }

    const isMorseCode = /^[.\- ]+$/.test(dataToTranslate);
    if (isMorseCode) {
    // if morse
    const translatedText = morseToEnglish(dataToTranslate);
    createEl("p", translatedText, translatedOutput);
  } else {
    // if english
    const translatedText = englishToMorse(dataToTranslate);
    createEl("p", translatedText, translatedOutput);
}
})
