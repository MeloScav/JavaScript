/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Récupération des boutons
      let bouton1 = document.getElementById("fix-part-one");
      let bouton2 = document.getElementById("fix-part-two");
      let bouton3 = document.getElementById("fix-part-three");
      let bouton4 = document.getElementById("fix-part-four");
    // Récupération des inputs
      let input1 = document.getElementById("part-one");
      let input2 = document.getElementById("part-two");
      let input3 = document.getElementById("part-three");
      let input4 = document.getElementById("part-four");

      const defilement = (input)=>{
          let valeur = parseInt(input.value);
          valeur += 1;
          if(valeur > input.dataset.max){
              valeur = input.datasetmin;
           }
          input.textContent = valeur;          
      };



})();
