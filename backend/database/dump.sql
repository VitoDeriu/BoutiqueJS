DROP TABLE IF EXISTS collections;
CREATE TABLE collections(
   collection_id INT AUTO_INCREMENT NOT NULL,
   collection_name VARCHAR(100) NOT NULL,
   PRIMARY KEY(collection_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS armes;
CREATE TABLE armes(
   arme_id INT AUTO_INCREMENT NOT NULL,
   arme_name VARCHAR(50) NOT NULL,
   PRIMARY KEY(arme_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS skin;
CREATE TABLE skin(
   collection_id INT NOT NULL,
   arme_id INT NOT NULL,
   price INT NOT NULL,
   reduction INT,
   image_path VARCHAR(500) NOT NULL,
   icone_path VARCHAR(500),
   background_path VARCHAR(500),
   description VARCHAR(500),
   PRIMARY KEY(collection_id, arme_id),
   FOREIGN KEY(collection_id) REFERENCES collections(collection_id),
   FOREIGN KEY(arme_id) REFERENCES armes(arme_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
