/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

      var nbs = document.getElementById("numbers").value.split(",");  // split : séparer la chaîne
      for(i=0; i<nbs.length; i++){    // Boucle for pour sélectionner chaque cellule du tableau
          nbs[i] = parseInt(nbs[i]);  // On écrase chaque cellule avec la nouvelle
      }

      nbs.sort(function(a,b){   // On met par ordre croissant
        return a-b;
      })
      alert(nbs);   // On affiche
    });
})();
