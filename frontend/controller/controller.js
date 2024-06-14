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

exports.Armesbyid = (req,res) => {
    GetArmesById(req.query.id).then(armes => {
        console.log("arme : ", armes)
        res.render(`../views/temps/armesdetail/`, {armes});
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

async function GetArmesById(id){
    try {
        const data = await fetch(`http://localhost:4000/armes/${id}`);
        console.log(data)   
        return data.json();
    } catch (error) {
        console.log(error)
    }
};


async function GetSkins() {
    try {
        const data = await fetch('http://localhost:4000/skins');
        return data.json();
    } catch (error) {
        console.log(error)
    }
};

async function GetSkinById(id){
    try {
        const data = await fetch(`http://localhost:4000/skin/${id}`);
        console.log(data)   
        return data.json();
    } catch (error) {
        console.log(error)
    }
};