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


    /*bouton1.addEventListener("click", ()=>{
        let valeur1 = parseInt(bouton1.innerText);      // On récupère la valeur du bouton et on le transforme en nombre
        valeur1 += 1;                               // On ajoute +1 au clic
        if(valeur1 > bouton1.dataset.max){          // Si la valeur est plus grande que la valeur max
              valeur1 = bouton1.dataset.min;        // On retourne à la valeur de départ
        }
        bouton1.textContent = valeur1;      // on met la valeur1 dans le bouton1
        numero.textContent = bouton1.innerText + bouton2.innerText + bouton3.innerText + bouton4.innerText;    // On insère les modifications des boutons dans le numéro
    });
    bouton2.addEventListener("click", ()=>{
        let valeur2 = parseInt(bouton2.innerText);
        valeur2 += 1;
        if(valeur2 > bouton2.dataset.max){
              valeur2 = bouton2.dataset.min;
        }
        else if (valeur2 < 10) {
            valeur2 = "0" + valeur2;
        }
        bouton2.textContent = valeur2;
        numero.textContent = bouton1.innerText + bouton2.innerText + bouton3.innerText + bouton4.innerText;
    });
    bouton3.addEventListener("click", ()=>{
        let valeur3 = parseInt(bouton3.innerText);
        valeur3 += 1;
        if(valeur3 > bouton3.dataset.max){
              valeur3 = bouton3.dataset.min;
        }
        else if (valeur3 < 10) {
            valeur3 = "0" + valeur3;
        }
        bouton3.textContent = valeur3;
        numero.textContent = bouton1.innerText + bouton2.innerText + bouton3.innerText + bouton4.innerText;
    });
    bouton4.addEventListener("click", ()=>{
        let valeur4 = parseInt(bouton4.innerText);
        valeur4 += 1;
        if(valeur4 > bouton4.dataset.max){
              valeur4 = bouton4.dataset.min;
        }
        bouton4.textContent = valeur4;
        numero.textContent = bouton1.innerText + bouton2.innerText + bouton3.innerText + bouton4.innerText;
    });
*/

})();
