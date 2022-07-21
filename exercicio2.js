// Vamos imaginar que estamos trabalhando com o estoque de produtos de um
// vendedor no MeLi. Será composto pela seguinte lista de produtos:
//
// Usando a array acima, crie uma função para cada um dos seguintes requisitos:
// 5. Imprima no console os produtos que não possuem cor.

let products = [
  {
    name: 'Macbook',
    price: 1300,
    quantity: 40,
    colors: ['silver', 'black', 'white'],
  },
  {
    name: 'Iphone',
    price: 1000,
    quantity: 50,
    colors: ['silver', 'red', 'white'],
  },
  { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
  { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
  { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
  { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
  { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
  { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
  { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
  { name: 'Monitor', price: 200, quantity: 3, colors: [] },
];

let id = 1;

products.forEach((e) => {
  e.id = id++;
});

products.forEach((e) => {
  console.log(e.name);
});

console.log(products.find((e) => e.id === 3));

console.log(products.filter((e) => e.colors.includes('black')));

console.log(products.filter((e) => e.colors.length === 0));
