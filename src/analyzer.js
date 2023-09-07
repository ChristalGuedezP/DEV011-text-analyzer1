const analyzer = {
  // Contar palabras
  getWordCount: (text) => {
    text = text.trim();
    const words = text.split(/\s+/);
    console.log(`Recuento de palabras: ${words.length}`);
    return words.length;
  },

  // Contar caracteres
  getCharacterCount: (text) => {
    let characterCount = 0;
    for (let i = 0; i < text.length; i++) {
      characterCount++;
    }
    console.log(`Recuento de caracteres: ${characterCount}`);
    return characterCount;
  },
  ///Contar Caracteres sin incluir Espacios ni Puntuacion
  getCharacterCountExcludingSpaces: (text) => {
    const cleanText = text.replace(/[^\w]/g, "");
    const characterCountExcludingSpaces = cleanText.length;
    console.log(
      `Recuento de caracteres excluyendo espacios y signos de puntuación: ${characterCountExcludingSpaces}`
    );
    return characterCountExcludingSpaces;
  },
  //Conteo de numeros
  getNumberCount: (text) => {
    const numbers = text.match(/\d+/g);
    if (!numbers) {
      console.log("Recuento de números: 0");
      return 0;
    }
    console.log(`Recuento de números: ${numbers.length}`);
    return numbers.length;
  },

  //Suma de Numeros
  getNumberSum: (text) => {
    const numbers = text.match(/\d+/g);

    if (!numbers) {
      console.log("Suma de los números: 0");
      return 0;
    }

    const sum = numbers.reduce(
      (total, number) => total + parseInt(number, 10),
      0
    );
    console.log(`Suma de los números: ${sum}`);
    return sum;
  },

  // Calcular la longitud media de las palabras
  getAverageWordLength: (text) => {
    const words = text.split(/\s+/);
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    const averageLength = totalLength / words.length;
    console.log(`Longitud media de palabras: ${averageLength}`);
    return parseFloat(averageLength.toFixed(2));
  },
};

export default analyzer;
