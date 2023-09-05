import analyzer from "./analyzer.js";

// Llamar elementos del DOM
const words = document.querySelector('[data-testid="word-count"]');


// Limpiar caja de texto
const textarea = document.querySelector('#prueba');
const resetButton = document.getElementById('reset-button');

// Funciones
textarea.addEventListener('keyup', () => {
  //Conteo de Palabras
  const contarPalabras = analyzer.getWordCount(textarea.value);
  const wordCountSpan = document.getElementById('wordCount');
  wordCountSpan.textContent = contarPalabras; 

  //Conteo de Caracteres
  const contarCaracteres = analyzer.getCharacterCount(textarea.value);
  const characterCountSpan = document.getElementById('characterCount');
  characterCountSpan.textContent = contarCaracteres; 

  //Conteo de Caracteres sin espacios ni puntuación
  const contarCaracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  const characterNoSpacesCountSpan = document.getElementById('characterNoSpacesCount');
  characterNoSpacesCountSpan.textContent = contarCaracteresSinEspacios; 

  //Conteo de Números
  const contarNumeros = analyzer.getNumbersCount(textarea.value);
  const numberCountSpan = document.getElementById('numberCount');
  numberCountSpan.textContent = contarNumeros; 

  //Suma de Números
  const sumadeNumeros = analyzer.getNumbersSum(textarea.value);
  const numbersSumSpan = document.getElementById('numbersSum');
  numbersSumSpan.textContent = sumadeNumeros; 

  //Longitud Media de Palabras
  const longituddePalabras = analyzer.getAverageWordLength(textarea.value);
  const wordLengthAverageSpan = document.getElementById('wordLengthAverage');
  wordLengthAverageSpan.textContent = longituddePalabras;
});

resetButton.addEventListener('click', () => {
  textarea.value = '';
});
