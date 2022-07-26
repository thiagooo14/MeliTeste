const express = require('express');
const products = require('./products');
const app = express();
app.use(express.json());

const port = 3000;

app.get('/produtcs', (req, res) => {
  res.status(200).json(products);
});

app.get('/produtcs/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  res.status(200).json(product);
});

app.post('/produtcs', (req, res) => {
  const content = req.body;
  const newContent = [...products, content];
  res.status(201).json(newContent);
});

app.post('/produtcs/:id', (req, res) => {
  const content = req.body;
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  const updatedProducts = products.map((product) => {
    if (product.id === id) {
      return content;
    }
    return product;
  });

  products = updatedProducts;

  res.status(201).send(product);
});

app.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const withoutDeletedProduct = products.filter((product) => product.id !== id);

  products = withoutDeletedProduct;
  res.status(200).json(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
