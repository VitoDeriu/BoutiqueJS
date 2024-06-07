const express = require('express');
const app = express();

const bodyParser = require("body-parser"); //lire mon body qui vient d'un formulaire par exemple d'apres julien

const cors = require('cors');
const router = require("./router/router");

//Reglage du serveur
app.set("view engine", "ejs");
app.use("/public/", express.static("assets"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); //truc de julien 
app.use(cors());
app.use(router);//bien appeller le routeur après toutes les reglages si non ca sert a rien 

const port =  3000;
const host = 'localhost';

app.listen(port, host, () => console.log(`server front listening on port http://${host}:${port}`));