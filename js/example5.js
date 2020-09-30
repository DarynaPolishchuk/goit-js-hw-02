// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.Если нашли запрещенное слово то функция возвращает
// true, если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.

function checkForSpam(str) {
  "use strict";
  // Write code under this line
  const sale = "sale";
  const spam = "spam";
  str = str.toLowerCase();
  let strArray = str.split(" ");
  //   console.log(str);
  if (strArray.includes(sale)) {
    return true;
  } else if (str.search(spam) != -1) {
    return true;
  } else return false;

  //   let a = str.toLowerCase();
  //   if (a.search("sale") != -1) {
  //     return true;
  //   } else if (a.search("spam") != -1) {
  //     return true;
  //   } else return false;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
