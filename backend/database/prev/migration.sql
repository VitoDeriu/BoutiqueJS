DROP TABLE IF EXISTS collections;
CREATE TABLE collections(
   collection_id INT AUTO_INCREMENT NOT NULL,
   collection_name VARCHAR(100) NOT NULL,
   description VARCHAR(500),
   PRIMARY KEY(collection_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS armes;
CREATE TABLE armes(
    arme_id INT AUTO_INCREMENT NOT NULL,
    arme_name VARCHAR(50) NOT NULL,
    degats INT NOT NULL,
   PRIMARY KEY(arme_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS skin;
CREATE TABLE skin(
    skin_id INT AUTO_INCREMENT NOT NULL,
   collection_id INT NOT NULL,
   arme_id INT NOT NULL,
   price INT NOT NULL,
   reduction INT default null,
   PRIMARY KEY(skin_id),
   FOREIGN KEY(collection_id) REFERENCES collections(collection_id),
   FOREIGN KEY(arme_id) REFERENCES armes(arme_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS images;
CREATE TABLE images(
    image_id INT AUTO_INCREMENT ,
    image_path VARCHAR(500) NOT NULL,
    collection_id INT NOT NULL,
    PRIMARY KEY(image_id),
    FOREIGN KEY(collection_id) REFERENCES collections(collection_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS icones;
CREATE TABLE icones(
                       icone_id INT AUTO_INCREMENT ,
                       icone_path VARCHAR(500) NOT NULL,
                       collection_id INT NOT NULL,
                       PRIMARY KEY(icone_id),
                       FOREIGN KEY(collection_id) REFERENCES collections(collection_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
