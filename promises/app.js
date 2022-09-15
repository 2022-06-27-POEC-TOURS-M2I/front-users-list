// Promesse : Venir te rendre visite le "lundi" à 19h00'
// -> Pending(En attente)
// -> Tenue(resolue)
// -> Echec

// tenue : resolve
// echec : reject
const rendreVisiteAMonAmi = new Promise((tenue, echec) => {
  const heure = 16;
  if (heure > 19) {
    echec("Desole, je ne saurais pas venir");
  } else {
    tenue("J'arrive, je suis déjà en route");
  }
});

//1
console.log("1.Bonjour");

//2
let resultat = "";
rendreVisiteAMonAmi
  .then((valeur) => {
    console.log(valeur);
    resultat = valeur;
    console.log("Resultat : ", resultat); //A faire
  })
  .catch((erreur) => {
    console.error(erreur);
  });
console.log("Resultat : ", resultat); //A ne pas faire
//3
console.log("2.Bonsoir");
