/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let t = document.getElementById("target").innerHTML = "<table id='tableau'></table>";
  function creationTableau(id, ligne, colonne){
      let table = document.getElementById(id);
      for(iLigne = 0 ; iLigne < ligne; iLigne++){
          let newLign = table.insertRow(-1);
          if(iLigne == 0){
              newLign.style.backgroundColor = "rgb(179,125,186)";
          }
          if(iLigne != 0){
              newLign.style.backgroundColor = "#F7E9F9";
          }

          for(iColonne = 0; iColonne < colonne; iColonne++){
              let newCellule = newLign.insertCell(-1);
              newCellule.textContent = (iLigne+1)*(iColonne+1);
              if(iColonne == 0){
                  newCellule.style.backgroundColor = "rgb(179,125,186)";
              }
          }
      }
  }
  creationTableau("tableau", 10, 10);
})();
