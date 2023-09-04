import analyzer from "./analyzer.js";

//limpiar caja de texto//listo ///
const textarea = document.querySelector('#prueba');
const resetButton = document.getElementById('reset-button');

textarea.addEventListener('keyup', () => {
  // orden de todo con metricas(agregar analizer?//)
  analyzer.getWordCount(textarea.value)
});
resetButton.addEventListener('click', () => {
  textarea.value = '';
});  

