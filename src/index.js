import analyzer from "./analyzer.js";

//llamar elementos del DOM
const words = document.querySelector('[data-testied="word-count"]')

//limpiar caja de texto//listo ///
const textarea = document.querySelector('#prueba');
const resetButton = document.getElementById('reset-button');

function actualizarMetricas() {

///Conteo de Palabras
const contarPalabras = analyzer.getWordCount(textarea.value);
const wordCountSpan = document.getElementById("wordCount");
console.log(contarPalabras);
wordCountSpan.textContent = contarPalabras; 

///Conteo de Caracteres


}

textarea.addEventListener('keyup', () => {
  // orden de todo con metricas(agregar analizer?//)
  analyzer.getCharacterCount(textarea.value)
  analyzer.getCharacterCountExcludingSpaces(textarea.value)
  analyzer.getNumbersCount(textarea.value)
  analyzer.getNumbersSum(textarea.value)
  analyzer.getAverageWordLength(textarea.value)
});
resetButton.addEventListener('click', () => {
  textarea.value = '';
});  
 
