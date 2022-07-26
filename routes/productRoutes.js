const express = require('express');
const routes = express.Router();

const products = require('../products');

routes.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

routes.get('/products', (req, res) => {
  res.status(200).json(products);
});

routes.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const productID = products.findIndex((item) => item.id === id);
  res.json(products[productID]);
});

routes.post('/products', (req, res) => {
  products.push(req.body);
  res.status(201).send(`produto ${req.body.name} criado`);
});

routes.put('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const productID = products.findIndex((item) => item.id === id);
  products[productID] = req.body;
  res.json(products);
});

routes.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const productID = products.findIndex((item) => item.id === id);
  products.splice(productID, 1);
  res.json(`produto ${id} excluido`);
});

routes.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = routes;
