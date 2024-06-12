//Importation des modules 
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

//Crée une application express 
const app = express();
app.use(cors());
app.use("/asset", express.static(path.join(__dirname,"/asset"))); //crée la route static

//pour lire le body
app.use(express.json());

//pour lire un formulaire
app.use(express.urlencoded({extended:true}));

//Applique le limiteur de requete pour toutes les routes
// const rateLimit = require("./middlewares/rate-limit");
// app.use(rateLimit);

//automatiqe l'appel (l'initialisation) des routes dans l'application en créant des chemins absolut pour chaque fichier de router et en les intégrants dans l'application express
const boutiqueRoutes = path.join(__dirname, "./router/armes", "./router/arme/:id", "./router/skins", "./router/skin/:id", "./router/images", "./router/image/:id", "./router/variantes", "./router/variante/:id", "./router/armes/type/:id");


app.use('/', require('./router/router'));

module.exports = app;
