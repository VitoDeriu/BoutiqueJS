exports.Index = (req, res) => {
  res.render("../views/temps/index");
};

exports.SkinDetail = (req, res) => {
  elem = GetSkinById(req.query.id);
  img = GetImageById(req.query.id);
  res.render("../views/temps/skindetail", elem, img);
};

exports.Armes = (req, res) => {
  GetArmes()
    .then((armes) => {
      console.log("arme : ", armes);
      res.render("../views/temps/armes", { armes });
    })
    .catch((error) => {
      console.log("error : " + error);
    });
};

exports.Armesbyid = (req, res) => {
  GetArmesById(req.query.id)
    .then((armes) => {
      console.log("arme : ", armes);
      res.render(`../views/temps/armesdetail/`, { armes });
    })
    .catch((error) => {
      console.log("error : " + error);
    });
};

async function GetArmes() {
  try {
    const data = await fetch("http://localhost:4000/armes");
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

async function GetArmesById(id) {
  try {
    const data = await fetch(`http://localhost:4000/armes/${id}`);
    console.log(data);
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

async function GetSkins() {
  try {
    const data = await fetch("http://localhost:4000/skins");
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

async function GetSkinById(id) {
  try {
    await fetch(`http://localhost:4000/skin/${id}`).then(console.log("test"));
  } catch (error) {
    console.log(error);
  }
}

async function GetImageById(id) {
  try {
    const data = await fetch(`http://localhost:4000/image/${id}`);
    console.log(data.json);
    return data.json();
  } catch (error) {
    console.log(error);
  }
}
