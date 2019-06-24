/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let numero = document.getElementById("target");       // On récupère le numéro
    let bouton1 = document.getElementById("part-one");    // On récupère les boutons
    let bouton2 = document.getElementById("part-two");
    let bouton3 = document.getElementById("part-three");
    let bouton4 = document.getElementById("part-four");

    const boutonNum = (bouton)=>{
          let valeur = parseInt(bouton.innerText);
          valeur += 1;
          if(valeur > bouton.dataset.max){
                valeur = bouton.dataset.min;
          }
          else if (valeur < 10) {
              valeur = "0" + valeur;
          }
          bouton.textContent = valeur;
          numero.textContent = "+" + bouton1.innerText + bouton2.innerText + bouton3.innerText + bouton4.innerText;
    }
    bouton1.addEventListener("click", ()=>{
        boutonNum(bouton1);
    });
    bouton2.addEventListener("click", ()=>{
        boutonNum(bouton2);
    });
    bouton3.addEventListener("click", ()=>{
        boutonNum(bouton3);
    });
    bouton4.addEventListener("click", ()=>{
        boutonNum(bouton4);
    });

})();
