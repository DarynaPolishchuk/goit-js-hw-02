/*Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), которая принимает параметром
произвольную строку(в строке будут только слова и пробелы)
и возвращает самое длинное слово в этой строке.*/

function findLongestWord(string = "") {
  const arrayString = string.split(" ");

  //   console.table(arrayString);
  let numLetter = arrayString[0].length;
  //   console.log(numLetter);
  let maxNum = arrayString[0];
  //   console.log(maxNum);
  //   Перебор элементов массива и сравнивание с array[0]
  for (let i = 0; i <= arrayString.length - 1; i += 1) {
    let num = arrayString[i].length;
    if (num > numLetter) {
      numLetter = num;
      maxNum = arrayString[i];
    }
  }
  return maxNum;
  // Write code under this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'

// 1. превратить строчку в массив
// 2. как подсчитать количесво букв в слове
// 3. взять первое слово за начальное значение что array[0]=maxNum
// 4. цикл с перебором всех елементов и сравнение их с maxNum
