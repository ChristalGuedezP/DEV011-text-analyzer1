const analyzer = {
  // Contar palabras
  getWordCount: (text) => {
    text = text.trim();
    const words = text.split(/\s+/);
    return words.length;
  },

  // Contar caracteres
  getCharacterCount: (text) => {
    let characterCount = 0;
    for (let i = 0; i < text.length; i++) {
      characterCount++;
    }
    return characterCount;
  },
  ///Contar Caracteres sin incluir Espacios ni Puntuacion
  getCharacterCountExcludingSpaces: (text) => {
    const cleanText = text.replace(/[^\w]/g, "");
    const characterCountExcludingSpaces = cleanText.length;
    return characterCountExcludingSpaces;
  },
  //Conteo de numeros
  getNumberCount: (text) => {
    const numbers = text.match(/\d+/g);

    if (!numbers) {
      return 0;
    }
    return numbers.length;
  },

  //Suma de Numeros
  getNumberSum: (text) => {
    const numbers = text.match(/\d+/g);

    if (!numbers) {
      return 0;
    }

    const sum = numbers.reduce(
      (total, number) => total + parseInt(number, 10),
      0
    );
    return sum;
  },

  // Calcular la longitud media de las palabras
  getAverageWordLength: (text) => {
    const words = text.split(/\s+/);
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    const averageLength = totalLength / words.length;

    return parseFloat(averageLength.toFixed(2));
  },
};

export default analyzer;

