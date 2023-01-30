CREATE DATABASE products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    code VARCHAR(10),
    name VARCHAR(40),
    price numeric(18, 4),
    quantity int4
);

INSERT INTO products (code, name, price, quantity)
    VALUES ('PRD1', 'PrettyJess', 10, 1),
    ('PRD2', 'Watch', 150, 3);

select * from products;
