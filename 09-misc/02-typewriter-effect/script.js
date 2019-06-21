/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
      let aleatoire = Math.random()*(3000-1000) + 1000;     // nombre aléatoire
      let texte = document.getElementById("target");
      let lettre = texte.innerText.split("");                       // Séparer les lettres
      texte.textContent = "";           // Réinitialise le texte (on le fait disparaître)
      const machinE = (i, espace)=>{                        // On crée une fonction, i = position actuelle du tableau
        let espaceChar ="";
        if(espace == true){
          espaceChar += " ";    // Si espace = true, on stock un espace dans la variable
        }
        texte.innerHTML = texte.innerText + espaceChar +lettre[i];    // Récupération du texte + ajoute de la variable + ajoute de la lettre actuelle
        if(lettre[i] == " "){
            espace = true;
        }else{
          espace = false;
        }

        if(i<lettre.length){
          setTimeout(() => {machinE(i+=1, espace)  }, aleatoire);      // Appeler fonction + ajout 1 + setTimeout pour ajouter un délai
        }
      };
      machinE(0, false);

})();
