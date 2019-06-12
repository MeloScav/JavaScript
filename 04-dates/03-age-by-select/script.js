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

   var bouton = document.getElementById("run");
   bouton.addEventListener("click", calculAge);

   function calculAge(){
  // On recupère les valeurs
    var jour = parseInt(document.getElementById("dob-day").value);
    var mois = parseInt(document.getElementById("dob-month").value);
    var annee = parseInt(document.getElementById("dob-year").value);


  // On reprend la date actuelle
    var d = new Date();
    var djour = d.getDate();    // Jour du mois
    var dmois = d.getMonth()+1;   // Le mois, +1 pcq va de 0 à 11
    var dannee = d.getFullYear()  // Année

    var ageAnnee = 0;
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


/*  var ageMois = 0;
  var ageJour = 0;*/
/*  if (dmois >= mois){         // Si mois actu > ou = mois naissance
     ageMois = dmois - mois;  // mois actu - mois naissance
  }
  else{   // si mois actu < mois naissance
    ageMois = dmois + (12- mois);   // mois actu + nbr total de mois où l'on soustrait mois de naissance
    ageAnnee = (dannee - annee)-1;  // on retire donc 1 à l'année
  }

  if (djour >= jour){

  }*/
