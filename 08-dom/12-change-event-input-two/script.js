/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let inputPass = document.getElementById("pass-one");    // On récupère le mot de passe
    let validite = document.getElementById("validity");     // On récupère le texte qui valide
  // let nbr = /.*[0-9].*[0-9].*/;
    let nbr = /.*\d.*\d.*/;            // 2 nombres de 0 à 9 n'importe où

    inputPass.addEventListener("input", ()=>{                      // lorsqu'on ajoute ou supprime du texte
        let resultNbrs = nbr.test(inputPass.value);
        if(inputPass.value.length >= 8 && resultNbrs == true){      // si 8 caractères avec au moins 2 chiffres
            validite.textContent = "ok";
        }
        else{
            validite.textContent = "Pas ok";
        }
    });
})();
