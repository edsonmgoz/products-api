const express = require('express');


const logger = require('../logger/logger');


const app = express();

// database conection ....
const {
  getProducts,
  getProductByCode,
  createProduct,
} = require("../controllers/index.controller");

// array to hold products
// const products = [{ code: 'PRD1',name: 'PrettyJess', price: 100, quantity: 1 }];

// request to get all the products
app.get("/", getProducts);

// request to get all the products by code
app.get("/:code", getProductByCode);

// request to post the product
// req.body has object of type { code: 'PRD1',name: 'product1', price: 0.20, quantity: 60 }
app.post("/", createProduct);

module.exports = app;
