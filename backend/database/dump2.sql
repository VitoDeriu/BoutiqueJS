DROP TABLE IF EXISTS collections;
CREATE TABLE collections(
    collection_id INT AUTO_INCREMENT NOT NULL,
    collection_name VARCHAR(50) NOT NULL,
    collection_description VARCHAR(300),
    PRIMARY KEY(collection_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS weapons; 
CREATE TABLE weapons(
    weapon_id INT AUTO_INCREMENT NOT NULL,
    weapon_name VARCHAR(50) NOT NULL,
    weapon_type VARCHAR(50) NOT NULL,
    PRIMARY KEY(weapon_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE if EXISTS variantes;
CREATE TABLE variantes(
    variante_id INT AUTO_INCREMENT NOT NULL,
    variante_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(variante_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS images;
CREATE TABLE images(
    image_id INT AUTO_INCREMENT NOT NULL,
    image_path VARCHAR(200) NOT NULL,
    PRIMARY KEY(image_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS products;
CREATE TABLE products(
   product_id INT AUTO_INCREMENT NOT NULL,
   product_name VARCHAR(100) NOT NULL,
   price INT NOT NULL,
   reduction INT,
   description VARCHAR(500),
   weapon_id INT NOT NULL,
   collection_id INT NOT NULL,
   variante_id INT,
   PRIMARY KEY(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS product_images;
CREATE TABLE product_images(
    product_images_id INT AUTO_INCREMENT NOT NULL,
    product_id INT,
    image_id INT,
    PRIMARY KEY(product_images_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE products
ADD CONSTRAINT FOREIGN KEY(weapon_id) REFERENCES weapons(weapon_id),
ADD CONSTRAINT FOREIGN KEY(collection_id) REFERENCES collections(collection_id);
ADD CONSTRAINT FOREIGN KEY(variante_id) REFERENCES variantes(variante_id);

ALTER TABLE product_images
ADD CONSTRAINT FOREIGN KEY(product_id) REFERENCES products(product_id),
ADD CONSTRAINT FOREIGN KEY(image_id) REFERENCES images(image_id);