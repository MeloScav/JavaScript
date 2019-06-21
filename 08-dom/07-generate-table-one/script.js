/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
      let t = document.getElementById("target").innerHTML = "<table id='tableau'></table>";

      /*function ajoutLigne(tableID){
          let table = document.getElementById(tableID);   // On va chercher la table
          let newLigne = table.insertRow(-1);             // On insère une ligne à la fin
          let newCell = newLigne.insertCell(-1);          // On ajoute une cellule à la ligne indice -1
          let newText = document.createTextNode("Nouvelle ligne");    // On crée un noeud texte
          newCell.appendChild(newText);                               // On ajoute le texte dans la cellule
      }
      ajoutLigne("tableau");    // On appelle la fonction*/

      function creationTableau(id, ligne, colonne){
          let table = document.getElementById(id);
          for(iLigne = 0 ; iLigne < ligne; iLigne++){
              let newLign = table.insertRow(-1);

              for(iColonne = 0; iColonne < colonne; iColonne++){
                  let newCellule = newLign.insertCell(-1);
                  newCellule.textContent = iLigne + ":" + iColonne;
              }
          }
      }
      creationTableau("tableau", 10, 1);

})();
