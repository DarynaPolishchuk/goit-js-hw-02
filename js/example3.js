const clients = ["Mango", "Ajax", "Poly"];

console.log(clients.shift()); // Mango
console.table(clients); // ["Ajax", "Poly"]

clients.unshift("Kiwi");
console.table(clients); // ["Kiwi", "Ajax", "Poly"]
