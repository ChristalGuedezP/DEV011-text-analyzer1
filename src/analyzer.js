const analyzer = {  
////CONTAR PALABRAS///
  getWordCount: (text) => {
    text = text.trim();
    const words = text.split(/\s+/);
    console.log(`Recuento de palabras: ${words.length}`);
    return words.length;
  },

///CONTAR CARACTERES///
  getCharacterCount: (text) => {
    text = text.trim();
    const characterCount = text.length;
    console.log(`Recuento de caracteres: ${characterCount}`);
        return characterCount;
  },

///CONTAR CARACTERES EXCLUYENDO ESPACIOS Y PUNTUACION///
getCharacterCountExcludingSpaces: (text) => {
  const cleanText = text.replace(/[^\w]/g, "");
  const characterCountExcludingSpaces = cleanText.length;
  console.log(`Recuento de caracteres excluyendo espacios y signos de puntuación: ${characterCountExcludingSpaces}`);
  return characterCountExcludingSpaces;
},

///CONTEO DE NUMEROS///  
  getNumbersCount: (text) => {
    const numbers = text.match(/\d+/g);
    if (!numbers) {
      console.log('Recuento de números: 0');
      return 0;
    }
    console.log(`Recuento de números: ${numbers.length}`);
    return numbers.length;
  },

///SUMA DE NUMEROS///  
getNumbersSum: (text) => {
  const numbers = text.match(/\d+/g);

  if (!numbers) {
    console.log('Suma de los números: 0');
    return 0;
  }

  const sum = numbers.reduce((total, number) => total + parseInt(number, 10), 0);
  console.log(`Suma de los números: ${sum}`);

  return sum;
  },

///LONGITUD MEDIA DE PALABRAS///
  getAverageWordLength: (text) => {
    const words = text.split(/\s+/);

    const totalLength = words.reduce((sum, word) => sum + word.length, 0);

    const averageLength = totalLength / words.length;
    console.log(`Longitud media de palabras: ${averageLength}`);

    return averageLength;
  },
};

export default analyzer;

