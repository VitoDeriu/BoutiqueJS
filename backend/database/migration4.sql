CREATE TABLE types(
    id_type INT AUTO_INCREMENT UNIQUE NOT NULL,
    name_type VARCHAR(255) NOT NULL,
    PRIMARY KEY(id_type)
);

CREATE TABLE armes(
    id_arme INT AUTO_INCREMENT UNIQUE NOT NULL,
    name_arme VARCHAR(255) NOT NULL,
    description_arme TEXT NOT NULL,
    fire_rate INT NOT NULL,
    damage_per_bullet INT NOT NULL,
    reload_speed INT NOT NULL,
    penetration INT NOT NULL,
    id_type INT NOT NULL,
    PRIMARY KEY(id_arme),
    FOREIGN KEY(id_type) REFERENCES types(id_type)
);

CREATE TABLE collections(
    id_collection INT AUTO_INCREMENT UNIQUE NOT NULL,
    name_collection VARCHAR(255) NOT NULL,
    PRIMARY KEY(id_collection)
);

CREATE TABLE couleurs(
    id_couleur INT AUTO_INCREMENT UNIQUE NOT NULL,
    name_couleur VARCHAR(255) NOT NULL,
    hexa VARCHAR(255) NOT NULL,
    PRIMARY KEY(id_couleur)
);

CREATE TABLE icones(
    id_icone INT AUTO_INCREMENT UNIQUE NOT NULL,
    path VARCHAR(255) NOT NULL,
    alt VARCHAR(255) NOT NULL, 
    PRIMARY KEY(id_icone)
);

CREATE TABLE variantes(
    id_variante INT AUTO_INCREMENT UNIQUE NOT NULL,
    name_variante VARCHAR(255) NOT NULL,
    id_couleur INT NOT NULL,
    id_icone INT NOT NULL,
    PRIMARY KEY(id_variante),
    FOREIGN KEY(id_couleur) REFERENCES couleurs(id_couleur),
    FOREIGN KEY(id_icone) REFERENCES icones(id_icone)
);

CREATE TABLE skins(
    id_skin INT AUTO_INCREMENT UNIQUE NOT NULL,
    name_skin VARCHAR(255) NOT NULL,
    prix INT NOT NULL,
    reduction INT,
    description_skin TEXT NOT NULL,
    rarete INT NOT NULL,
    id_variante INT NOT NULL,
    PRIMARY KEY(id_skin),
    FOREIGN KEY(id_variante) REFERENCES variantes(id_variante)
);

CREATE TABLE images(
    id_image INT AUTO_INCREMENT UNIQUE NOT NULL,
    path VARCHAR(255) NOT NULL,
    alt VARCHAR(255) NOT NULL,
    id_skin INT NOT NULL,
    PRIMARY KEY(id_image),
    FOREIGN KEY(id_skin) REFERENCES skins(id_skin)
);

CREATE TABLE armes_skins(
    id_arme INT,
    id_skin INT,
    PRIMARY KEY(id_arme, id_skin),
    FOREIGN KEY(id_arme) REFERENCES armes(id_arme),
    FOREIGN KEY(id_skin) REFERENCES skins(id_skin)
);

CREATE TABLE collections_variantes(
    id_collection INT,
    id_variante INT,
    PRIMARY KEY(id_collection, id_variante),
    FOREIGN KEY(id_collection) REFERENCES collections(id_collection),
    FOREIGN KEY(id_variante) REFERENCES variantes(id_variante)
);
