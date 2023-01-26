const express = require('express');


const logger = require('../logger/logger');


const app = express();

// array to hold products
const products = [{ code: 'PRD1',name: 'PrettyJess', price: 100, quantity: 1 }];

// request to get all the products
app.get('/', (req, res) => {
  logger.info('products route');
  res.json(products);
});

// request to get all the products by code
app.get('/:code', (req, res) => {
  logger.info(`filter products by code:::::${req.params.code}`);
  const product = products.filter(prds => req.params.code === prds.code);
  res.json(product);
});

// request to post the product
// req.body has object of type { code: 'PRD1',name: 'product1', price: 0.20, quantity: 60 }
app.post('/', (req, res) => {
  products.push(req.body);
  res.json(products);
});

module.exports = app;
