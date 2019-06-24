/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
      let mdp = document.getElementById("pass-one");      // On récupère les inputs
      let mdpC = document.getElementById("pass-two");

    /*  mdp.type = "password";
      mdp.type = "password";*/

      if(mdp.value != mdpC.value){                  // Si différent, bordure rouge
          mdp.style.border= "2px solid red";
          mdpC.style.border = "2px solid red";
      }
      else{                                         // Si égaux, bordure silver
        mdp.style.border= "1px solid silver";
        mdpC.style.border = "1px solid silver";
      }

    });

})();
