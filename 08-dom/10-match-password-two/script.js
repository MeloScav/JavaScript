/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
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

    if(mdp.value != mdpC.value){                  // Si différent, on ajoute la classe
        mdp.classList.add("error");
        mdpC.classList.add("error");
    }
    else{                                         // Si égaux, enlève la classe
      mdp.classList.remove("error");
      mdpC.classList.remove("error");
    }

  });
})();
