//limpiar caja de texto// listoooo
window.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea');
    textarea.addEventListener('keyup', () => {
      // orden de todo con metricas(agregar analizer?//) no se muy bien como continuaaaaaaaaaaaaarrrrr////////
      const analyzer = {  
        getWordCount: (text) => {
          //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
        },
        getCharacterCount: (text) => {
          //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
        },
        getCharacterCountExcludingSpaces: (text) => {
          //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
        },
        getAverageWordLength: (text) => {    
          //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
        },
        getNumberCount: (text) => {
          //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
        },
        getNumberSum: (text) => {
          //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
        },
      };

    });
  
    const resetButton = document.getElementById('reset-button');
  
    resetButton.addEventListener('click', () => {
      textarea.value = ''; 
    });
  });
