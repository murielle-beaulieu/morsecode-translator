import { englishToMorse } from "./translator.js";

test("dummy test", () => {
  expect(true).toBe(true);
});

// Tests for Morse Translator Project
// if the data is invalid, using special characters or empty string

test("Should throw an error if invalid characters or input is given, ", () => {
  expect(() => {
    englishToMorse("");
  }).toThrow("You must a string before attempting to translate");
  expect(() => {
    englishToMorse("$ # @ ^ !!chaos!! * ( ) % &");
  }).toThrow("You must a string before attempting to translate");
})

// if the string passed is lowercase, we transform to uppercase before translating

test("Both lowercase and upercase input is translated correctly", () => {
  expect("Hello").toBe(".... . .-.. .-.. ---");
  expect("I grew up in Canada").toBe(".. / --. .-. . .-- / ..- .--. / .. -. / -.-. .- -. .- -.. .-");
});

// we should return a translated version (english to morse/morse to english) of the inputed string

test("Both morse and english can be translated to the other", () => {
  expect("hello").toBe(".... . .-.. .-.. ---");
  expect("I love snowboarding").toBe(".. / .-.. --- ...- . / ... -. --- .-- -... --- .- .-. -.. .. -. --.");
})

// spaces should be represented by a / in a sentence

test("Spaces are represented by one /,no matter how many consecutive spaces are in the sentence", () => {
  expect("Hey   you").toBe(".... . -.-- / -.-- --- ..-");
})
