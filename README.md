# BoutiqueJS

Bienvenue sur Valogear, boutique de vente de skin pour le jeu Valorant.

Installation du projet :

  1- Clonez le repo dans un de vos dossier local grâce à la commande 'git clone',
  2- verifiez quz vous avez installer un gestionaire de base de donnée comme Wampserveur par exemple (se référer au site https://wampserver.aviatechno.net/ pour l'installation de wampserveur)
  3- dans Wampserveur creez une nouvelle base de donnée et inserez y le code SQL présent dans '/backend/database/migration4.sql' pour creer les tables, puis le fichier '/backend/database/insertion4.sql' pour les insertions des tables créé précédement. 
  4- dans le dossier backend installez les dépendances présentent dans 'package.json'
  5- dans le dossier frontend installez les dépendances présentent dans 'package.json'
  6- creez un fichier .env et copier les données du .env.exemple puis remplacez par vos informations.
  7- lancez les serveurs front et back grace a la commande "npm start"
  8- Localhost:3000/index
