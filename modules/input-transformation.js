import { morseAlphabet } from "./morse-alphabet.js";

const inputToUpcaseArr = (input) => {
  const arrInput = [...input];
  // return uppercaseInput;
  const upCaseInput = arrInput.map((l) => {
    return (l === " ") ?  l = "/" : l.toUpperCase();
  });
  return upCaseInput
};

export const englishToMorse = (input) => {
  const data = inputToUpcaseArr(input);
  const morseObj = Object.keys(morseAlphabet);
   let translatedMorse = data.map((letter) => {
      if (letter === "/") {
        return "/"
      }
      let indexOfMorse = morseObj.indexOf(letter);
      let translatedArr = Object.values(morseAlphabet)[indexOfMorse];
      return translatedArr;
});
  return translatedMorse.join(" ");
};
