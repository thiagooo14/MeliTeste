const express = require('express');
const port = 3000;
const app = express();

const products = require('./products');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const productID = products.findIndex((item) => item.id === id);
  res.json(products[productID]);
});

app.post('/products', (req, res) => {
  products.push(req.body);
  res.status(201).send(`produto ${req.body.name} criado`);
});

app.put('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const productID = products.findIndex((item) => item.id === id);
  products[productID] = req.body;
  res.json(products);
});

app.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const productID = products.findIndex((item) => item.id === id);
  products.splice(productID, 1);
  res.json(`produto ${id} excluido`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
