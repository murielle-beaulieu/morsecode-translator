const { englishToMorse } = require("./modules/transform-input.js");
const { morseToEnglish } = require("./modules/transform-input.js");

/// Tests for Morse Translator Project

describe("Tests for Morse Translator Project", () => {
  test("Should return a translated version (English to Morse/Morse to English) of a single character", () => {
    expect(englishToMorse("E")).toBe(".");
    expect(morseToEnglish("-")).toBe("T");
  });

  test("Should return a translated version (English to Morse/Morse to English) of a word", () => {
    expect(englishToMorse("Chocolate")).toBe("-.-. .... --- -.-. --- .-.. .- - .");
    expect(morseToEnglish("-... ..- -. -. -.--")).toBe("BUNNY");
  });

  test("Should return a translated version (English to Morse/Morse to English) of a sentence", () => {
    expect(englishToMorse("I love coffee")).toBe(".. / .-.. --- ...- . / -.-. --- ..-. ..-. . .");
    expect(morseToEnglish("- . ... - ... / .- .-. . / .... .- .-. -..")).toBe("TESTS ARE HARD");
  });


  test("Should translate a string correctly, regardless of lowercase or uppercase character", () => {
    expect(englishToMorse("anExampleOfCamelCasing")).toBe(
      ".- -. . -..- .- -- .--. .-.. . --- ..-. -.-. .- -- . .-.. -.-. .- ... .. -. --."
    );
  });

  test("Should throw an error if string includes invalid characters", () => {
   expect(() => englishToMorse("murielle@gmail")).toThrow("The string includes invalid characters");
   expect(() => englishToMorse("#1 supporter of getting a sweet treat after dinner")).toThrow("The string includes invalid characters");
  });

  test("Should throw an error if string input is empty", () => {
   expect(() => englishToMorse(" ")).toThrow("Cannot translate an empty string or invalid input");
   expect(() => morseToEnglish(" ")).toThrow("Cannot translate an empty string or invalid input");
  });

  test("Should handle basic punctuation such as ! , .", () => {
    expect(englishToMorse("To be the shadow of an arrow, who hits the target.")).toBe("- --- / -... . / - .... . / ... .... .- -.. --- .-- / --- ..-. / .- -. / .- .-. .-. --- .-- --..-- / .-- .... --- / .... .. - ... / - .... . / - .- .-. --. . - .-.-.-");
    expect(morseToEnglish("- --- / -... . --..-- / --- .-. / -. --- - / - --- / -... . -.-.-- / - .... .- - / .. ... / - .... . / --.- ..- . ... - .. --- -. .-.-.-")
    ).toBe("TO BE, OR NOT TO BE! THAT IS THE QUESTION.");
  });

  test("Should represent spaces by a / in a sentence", () => {
    expect(englishToMorse("ho ho ho")).toBe(".... --- / .... --- / .... ---");
  });

  test("Should remove extra spaces in a sentence", () => {
    expect(englishToMorse("ho    ho    ho")).toBe(".... --- / .... --- / .... ---");
  });

});
