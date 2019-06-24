/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var bouton = document.getElementById("run");
    bouton.addEventListener("click", changeColor);

    function changeColor(){
      var lettres = "0123456789ABCDEF";   // Les lettres et chiffres à utiliser pour la couleur
      var couleur = "#";      // Le # de départ auquel on ajoutera les 6 chiffres&lettres

      for (i=0; i<6; i++){
          couleur += lettres[Math.floor(Math.random()*16)];   // Math.floor ==> arrondi inférieur
                                                            // Math.random ==> chiffre aléatoire entre 0 et 1
                                                            // Nombre obtenu va récupérer une partie du letters
      }
      document.querySelector("html").style.backgroundColor = couleur;
    }
})();
