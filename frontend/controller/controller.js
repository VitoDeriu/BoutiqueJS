const baseUrl = ''

exports.Index = (req, res) => {
    res.render("../views/temps/index");
};

exports.SkinDetail = (req, res) => {
    res.render("../views/temps/skindetail");
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