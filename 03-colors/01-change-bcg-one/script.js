/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Changement rouge
    var bgRed = document.getElementById("red");         // On sélectionne le bouton rouge
    bgRed.addEventListener ("click", backgroundRed);    // On fait attache l'évènement au click et à la fonction

    function backgroundRed(){                           // Fonction qui change la couleur
      document.body.style.backgroundColor = "red";
    }

    // Changement Vert
    var bgGreen = document.getElementById("green");
    bgGreen.addEventListener ("click", backgroundGreen);

    function backgroundGreen(){
      document.body.style.backgroundColor = "green";
    }

    // Changement Jaune
    var bgYellow = document.getElementById("yellow");
    bgYellow.addEventListener ("click", backgroundYellow);

    function backgroundYellow(){
      document.body.style.backgroundColor = "yellow";
    }

    // Changement Bleu
    var bgBlue = document.getElementById("blue");
    bgBlue.addEventListener ("click", backgroundBlue);

    function backgroundBlue(){
      document.body.style.backgroundColor = "blue";
    }



})();
