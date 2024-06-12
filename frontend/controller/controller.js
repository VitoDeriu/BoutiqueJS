    exports.Index = (req, res) => {
    res.render("../views/temps/index");
    // document.addEventListener("DOMContentLoaded", getSkins);
};

exports.SkinDetail = (req, res) => {
    res.render("../views/temps/skindetail");
};

exports.Armes = (req, res) => {
    GetArmes().then(armes => {
        console.log("arme : ", armes)
        res.render('../views/temps/armes', {armes});
    })    
    .catch(error => {
        console.log("error : " + error);
    });
}

async function GetArmes(){
    try {
        const data = await fetch('http://localhost:4000/armes');
        return data.json();
    } catch (error) {
        console.log(error)
    }
};




async function getSkins() {
    fetch(`${baseUrl}/skins`)
    .then(response =>{
        return response.json();
    })
    .then(data => {
        console.log(data, 'ca marche ?');
    })
    .catch(error => {
        console.log("error : " + error);
    });
};