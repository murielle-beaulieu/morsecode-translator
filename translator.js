import { englishToMorse } from "./modules/input-transformation.js";
import { createEl } from "./modules/dom.js";

console.log(englishToMorse("I need a lot more coffee"));

const form = document.querySelector("form");
const translatedOutput = document.querySelector("#translatedOutput");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const dataToTranslate = data.get("textToTranslate").trim();
  const translatedText = englishToMorse(dataToTranslate);
  createEl("p", translatedText, translatedOutput);
})
