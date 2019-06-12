/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var bouton = document.getElementById("run");      // On récupère le bouton
    bouton.addEventListener("click", changeBgColor);  // On attache l'évènement + fonction

    function changeBgColor(){                                      // Fonction pour changer de couleur
      var bgColor = document.getElementById("color").value;     // Dans la fonction pour prendre la couleur
      document.body.style.backgroundColor = bgColor;            // On récupère la couleur dans le input
    }


})();
