var ajoutPanier = document.getElementById("ajout-panier");



ajoutPanier.addEventListner("click", ajoutSkin);


function ajoutSkin() {
    localStorage.setItem("skin", skin);
}
