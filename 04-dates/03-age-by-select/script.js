/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   let bouton = document.getElementById("run");
   bouton.addEventListener("click", calculAge);

   function calculAge(){
  // On recupère les valeurs
    let jour = parseInt(document.getElementById("dob-day").value);
    let mois = parseInt(document.getElementById("dob-month").value);
    let annee = parseInt(document.getElementById("dob-year").value);

  // On reprend la date actuelle
    let d = new Date();
    let djour = d.getDate();    // Jour du mois
    let dmois = d.getMonth()+1;   // Le mois, +1 pcq va de 0 à 11
    let dannee = d.getFullYear()  // Année

    let ageAnnee = 0;
    if (dmois < mois){                            // Si mois actu < mois naissance
      ageAnnee = (dannee - annee)-1;              // on fait annee actu - annee naissance, le tout -1
    }else if (dmois == mois && djour < jour){         // si mois actu = mois naissance ET jour actu < jour naissance
      ageAnnee = (dannee - annee)-1;                  // on fait annee actu - annee naissance et le tout -1
    }
    else{
      ageAnnee = dannee - annee;    // Au sinon on fait juste l'annee actu - l'année de naissance
    }
    console.log("super, vous avez " + ageAnnee + " ans!");
    alert("Super, vous avez " + ageAnnee + " ans!");
  }
})();
