import { morseAlphabet } from "./morse-alphabet.js";

/* * * ENGLISH TO MORSE * * */

const englishInputToUpcaseArr = (input) => {
  const arrInput = [...input];
  const upCaseInput = arrInput.map((l) => {
    return (l === " ") ?  l = "/" : l.toUpperCase();
  });
  return upCaseInput
};

export const englishToMorse = (input) => {
  const data = englishInputToUpcaseArr(input);
  const morseObjKeys = Object.keys(morseAlphabet);
  let translatedToMorse = data.map((letter) => {
      if (letter === "/") {
        return "/"
      }
      let indexOfMorse = morseObjKeys.indexOf(letter);
      let translatedArr = Object.values(morseAlphabet)[indexOfMorse];
      return translatedArr;
});
  return translatedToMorse.join(" ");
};

/* * * MORSE TO ENGLISH * * */

const morseInputToArr = (input) => {
  const arrInput = input.split(" ");
  return arrInput;
};

export const morseToEnglish = (input) => {
  const data = morseInputToArr(input);
  const morseObjValues = Object.values(morseAlphabet);
  let translatedToEnglish = data.map((morseLet) => {
    if ( morseLet === "/") {
      return " "
    }
    let indexOfEnglish = morseObjValues.indexOf(morseLet);
    let translatedArr = Object.keys(morseAlphabet)[indexOfEnglish];
    return translatedArr;
  });
  return translatedToEnglish.join("");
}
