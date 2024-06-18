exports.Index = (req, res) => {
  GetSkins()
  .then((skins)=>{
    res.render("../views/temps/index", {skins});
  })
};

exports.Armes = (req, res) => {
  GetArmes()
  .then((armes) => {
    // console.log("arme : ", armes);
    res.render("../views/temps/armes", { armes });
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
};

exports.Armesbyid = (req, res) => {
  Promise.all([GetArmesById(req.query.id),GetSkinsByArmeId(req.query.id)]) 
  .then(([armes, skins]) => {
    res.render(`../views/temps/armesdetail`, { armes, skins });
  })
  .catch((error) => {
    console.log("error : " + error);
  });
};

async function GetArmesById(id) {
  try {
    const data = await fetch(`http://localhost:4000/armes/${id}`);
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

async function GetSkinsByArmeId(armeid) {
  try {
    //on appel la table des relation armes_skins pour avoir les id des skins qui correspondent aux id des armes (ex pour l'id du sheriff on va avoir l'id des skins reaver sheriff etc)
    const response = await fetch(`http://localhost:4000/skinidbyarmeid/${armeid}`);
    
    //on convertit le truc en json
    const data = await response.json()
    
    //ensuite on récup que les id_skins dans l'ordre et on met ca dans un tableau pour s'en servir dans la fonction getskinbyid
    const skinIds = data.map(item => item.id_skin);
    
    //puis on va chercher pour chaque id de la map le skin qui lui correspond avec le promise.all
    const skinList = await Promise.all(skinIds.map( //marche comme un forEach sur chaque id dans la map
      async (id) => {
      try {
        //appel des info du skin et de l'image base correspondante
        const skinData = await GetSkinById(id);
        const skinImage = await GetBaseImageById(id);
        //on concatène les deux jsons
        const skinPreview = {...skinData, ...skinImage};
        //et on renvoi le tout
        return skinPreview;
      } catch (error) {
        console.error("error : ", error);
        //ici le return null permet a promise.all de continuer a attendre les promesses en cas d'erreur renvoyé par getskinbyid.
        return null;
      }
    }));
    //on renvoi skinList dans l'autre fonction pour l'envoyer dans le template
    return skinList;
	} catch (error) {
    console.log(error);
  }
};

//renvoi les infos et les image d'un skin grace a son id qui a été passé en query
exports.SkinDetail = (req, res) => {
	Promise.all([GetSkinById(req.query.id), GetImageById(req.query.id), GetIconeById(req.query.id)])
  .then(([skin, image, icone]) => {
    res.render(`../views/temps/skindetail`, { skin, image, icone});
  })
  .catch((error) => {
    console.log("error : " + error);
  });
};

async function GetSkins() {
  try {
    const response = await fetch(`http://localhost:4000/skins`);
    const data = await response.json();
		return data;
	} catch (error) {
    console.log(error);
  }
};

async function GetSkinById(id) {
  try {
    const response = await fetch(`http://localhost:4000/skin/${id}`);
    const data = await response.json();
		return data;
	} catch (error) {
    console.log(error);
  }
};

async function GetImageById(id) {
  try {
    const data = await fetch(`http://localhost:4000/image/${id}`);
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

async function GetBaseImageById(id) {
  try {
    const data = await fetch(`http://localhost:4000/baseimage/${id}`);
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

async function GetIconeById(id) {
  try {
    const response = await fetch(`http://localhost:4000/iconeid/${id}`);
    const data = await response.json()
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};