exports.Index = (req, res) => {
  res.render("../views/temps/index");
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

exports.SkinDetail = (req, res) => {
  const skininfo = req.query.id;
	const imageinfo = req.query.id;

	Promise.all([GetSkinById(skininfo), GetImageById(imageinfo)])
		.then(([skin, image]) => {
			res.render(`../views/temps/skindetail`, { skin, image});
		})
		.catch((error) => {
			console.log("error : " + error);
		});
};

async function GetSkinById(id) {
  try {
    const data = await fetch(`http://localhost:4000/skin/${id}`);
		return data.json();
	} catch (error) {
    console.log(error);
  }
}

async function GetImageById(id) {
  try {
    const data = await fetch(`http://localhost:4000/image/${id}`);
    // data.imagePath = `http://localhost:4000/backend/api/img/${data.path}`;
    return data.json();
  } catch (error) {
    console.log(error);
  }
}
