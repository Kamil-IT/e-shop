CREATE TABLE user
(
    id         INT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name  VARCHAR(100),
    e_mail     VARCHAR(100),
    adress     VARCHAR(200)
);
CREATE INDEX idx_shopping_cart_2
    ON shopping_cart_item (product_id);

CREATE TABLE products
(
    id           INT PRIMARY KEY,
    name         VARCHAR(100),
    price        FLOAT,
    quantity     INT,
    availability VARCHAR(3),
    weight       FLOAT
);


CREATE TABLE shopping_cart
(
    id             INT PRIMARY KEY,
    quantity       INT,
    total_price    INT,
    shipping_price FLOAT
);
CREATE INDEX product_idx
    ON products (id, name, availability);

CREATE TABLE order_x
(
    id           INT PRIMARY KEY,
    user_id      INT,
    total_price  INT,
    total_weight FLOAT
);

CREATE TABLE shopping_cart_item
(
    shopping_cart_id INT,
    product_id       INT,
    quantity         INT,
    PRIMARY KEY (shopping_cart_id, product_id)
);

-- Create indexes
CREATE INDEX idx_shopping_cart
    ON shopping_cart_item (product_id);

-- Add constraints
ALTER TABLE shopping_cart_item
    ADD CONSTRAINT shopping_cart_item_ibfk_
        FOREIGN KEY (shopping_cart_id)
            REFERENCES shopping_cart (id);
ALTER TABLE shopping_cart_item
    ADD CONSTRAINT shopping_cart_item_ibfk_2
        FOREIGN KEY (product_id)
            REFERENCES products (id);
ALTER TABLE order_x
    ADD CONSTRAINT order_x_ibfk_
        FOREIGN KEY (user_id)
            REFERENCES user (id);