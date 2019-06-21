/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let inputPass = document.getElementById("pass-one");    // On récupère l'inputPass
    let compteur = document.getElementById("counter");      // On récupère le compteur
    inputPass.setAttribute("maxlength", "10");              // nombre max = 10
    inputPass.addEventListener("input", ()=>{                       // lorsqu'on ajoute ou supprime du texte
        compteur.textContent = (inputPass.value.length) + "/10";    // Le compter augmente ou diminue
    });
})();
