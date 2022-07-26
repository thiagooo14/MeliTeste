const express = require('express');
const productRoutes = require('/routes/productRoutes.js');
const port = 3000;
const app = express();

const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use('/produtc', productRoutes);

app.use('*', (req, res, next) => {
  res.status(404).send('error 404, not found');

  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
