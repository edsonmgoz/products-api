const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "secret",
  database: "products",
  port: "5432",
});

const getProducts = async (req, res) => {
  const response = await pool.query("SELECT * FROM products ORDER BY id ASC");
  res.status(200).json(response.rows);
};

const getProductByCode = async (req, res) => {
  const code = req.params.code;
  const response = await pool.query("SELECT * FROM products WHERE code = $1", [
    code,
  ]);
  res.json(response.rows);
};

const createProduct = async (req, res) => {
  const { code, name, price, quantity } = req.body;
  const response = await pool.query(
    "INSERT INTO products (code, name, price, quantity) VALUES ($1, $2, $3, $4)",
    [code, name, price, quantity]
  );
  res.json({
    message: "Product Added successfully",
    body: {
      product: { code, name, price, quantity },
    },
  });
};

module.exports = {
  getProducts,
  getProductByCode,
  createProduct
};
