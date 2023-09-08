import analyzer from "./analyzer.js";

// Limpiar caja de texto
const textarea = document.querySelector('textarea[name="user-input"]');
const resetButton = document.getElementById("reset-button");

// Funciones
textarea.addEventListener("keyup", () => {
  //Conteo de Palabras
  const contarPalabras = analyzer.getWordCount(textarea.value);
  const wordCountLi = document.querySelector('[data-testid="word-count"]');
  wordCountLi.textContent = `Recuento de palabras: ${contarPalabras}`;

  // Conteo de Caracteres
  let contarCaracteres = analyzer.getCharacterCount(textarea.value);
  const characterCountLi = document.querySelector(
    '[data-testid="character-count"]'
  );
  characterCountLi.textContent = `Recuento de caracteres: ${contarCaracteres}`;

  //Conteo de Caracteres sin espacios ni puntuación
  const contarCaracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(
    textarea.value
  );
  const characterNoSpacesCountLi = document.querySelector(
    '[data-testid="character-no-spaces-count"]'
  );
  characterNoSpacesCountLi.textContent = `Recuento de caracteres excluyendo espacios y signos de puntuación: ${contarCaracteresSinEspacios}`;

  //Conteo de Números
  const contarNumeros = analyzer.getNumberCount(textarea.value);
  const numberCountLi = document.querySelector('[data-testid="number-count"]');
  numberCountLi.textContent = `Recuento de números: ${contarNumeros}`;

  //Suma de Números
  const sumadeNumeros = analyzer.getNumberSum(textarea.value);
  const numbersSumLi = document.querySelector('[data-testid="numbers-sum"]');
  numbersSumLi.textContent = `Suma de números: ${sumadeNumeros}`;

  //Longitud Media de Palabras
  const longituddePalabras = analyzer.getAverageWordLength(textarea.value);
  const wordLengthAverageLi = document.querySelector(
    '[data-testid="word-length-average"]'
  );
  wordLengthAverageLi.textContent = `Longitud media de palabras: ${longituddePalabras}`;
});
resetButton.addEventListener("click", () => {
  textarea.value = "";

  // Llamar elementos del Dom
  const wordCountElement = document.querySelector('[data-testid="word-count"]');
  const characterCountElement = document.querySelector(
    '[data-testid="character-count"]'
  );
  const characterNoSpacesCountElement = document.querySelector(
    '[data-testid="character-no-spaces-count"]'
  );
  const numberCountElement = document.querySelector(
    '[data-testid="number-count"]'
  );
  const numbersSumElement = document.querySelector(
    '[data-testid="numbers-sum"]'
  );
  const wordLengthAverageElement = document.querySelector(
    '[data-testid="word-length-average"]'
  );
  //Limpiar metricas
  wordCountElement.textContent = "Recuento de palabras: 0";
  characterCountElement.textContent = "Recuento de caracteres: 0";
  characterNoSpacesCountElement.textContent =
    "Recuento de caracteres excluyendo espacios y signos de puntuación: 0";
  numberCountElement.textContent = "Recuento de números: 0";
  numbersSumElement.textContent = "Suma de números: 0";
  wordLengthAverageElement.textContent = "Longitud media de palabras: 0";
});
