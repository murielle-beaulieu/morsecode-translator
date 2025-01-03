import { morseAlphabet } from "./morse-alphabet.js";

/* * * ENGLISH TO MORSE * * */

const englishInputToUpcaseArr = (input) => {
  const cleanedInput = input.trim().split(/\s+/).join(" ");
  const arrInput = [...cleanedInput];
  const upCaseInput = arrInput.map((l) => {
    return l.toUpperCase();
  });
  return upCaseInput;
};

export const englishToMorse = (input) => {
  const data = englishInputToUpcaseArr(input);
  const morseObjKeys = Object.keys(morseAlphabet);
  let translatedToMorse = data.map((letter) => {
      let indexOfMorse = morseObjKeys.indexOf(letter);
      let translatedArr = Object.values(morseAlphabet)[indexOfMorse];
      return translatedArr;
});
  return translatedToMorse.join(" ");
};

/* * * MORSE TO ENGLISH * * */

const morseInputToArr = (input) => {
  const arrInput = input.split(" ");
  console.log(arrInput);
  return arrInput;
};

export const morseToEnglish = (input) => {
  const data = morseInputToArr(input);
  const morseObjValues = Object.values(morseAlphabet);
  let translatedToEnglish = data.map((morseLet) => {
    let indexOfEnglish = morseObjValues.indexOf(morseLet);
    let translatedArr = Object.keys(morseAlphabet)[indexOfEnglish];
    return translatedArr;
  });
  return translatedToEnglish.join("");
};
