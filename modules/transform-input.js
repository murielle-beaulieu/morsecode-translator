import { morseAlphabet } from "./morse-alphabet.js";

/* * * ENGLISH TO MORSE * * */

const englishInputToUpcaseArr = (input) => {
  if (input[0] === " " || input[0] === "") {
    throw new Error("Cannot translate an empty string or invalid input");
  }

  if(
    input.includes("#") ||
    input.includes("@") ||
    input.includes("#") ||
    input.includes("$")) {
      throw new Error("The string includes invalid characters");
    }

  const cleanedInput = input.trim().split(/\s+/).join(" ");
  const arrInput = [...cleanedInput];
  const upCaseInput = arrInput.map((l) => {
    switch (l) {
      case "!":
        l = "!";
        break;
      case ",":
        l = ",";
        break;
      case ".":
         l = ".";
        break;
    }
    return (l === " ") ?  l = "/" : l.toUpperCase();
  });
    return upCaseInput;
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
  if (input[0] === " " || input[0] === "") {
    throw new Error("Cannot translate an empty string or invalid input");
  }
  const arrInput = input.split(" ");
  console.log(arrInput);
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
