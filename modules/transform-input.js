import { morseAlphabet } from "./morse-alphabet.js";

/* * * ENGLISH TO MORSE * * */

const englishInputToUpcaseArr = (input) => {
  console.log("Received input:", input);
  const cleanedInput = input.trim().split(/\s+/).join(" ");
  const arrInput = [...cleanedInput];
  console.log(arrInput);
  // try {
  //   if (typeof input !== "string" || input.trim() === "") {
  //     throw new Error("You cannot translate an empty string or invalid input");
  //   }
  // } catch (error) {
  //   console.warn(error.message);
  //   return []; // Return an empty array for invalid input
  // }
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
