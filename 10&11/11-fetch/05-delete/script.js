/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
        console.clear();
        let inputValueId = parseInt(document.getElementById("hero-id").value);
        let myInit = { method : "DELETE",     // On supprime
                      }
        inputValueId.split(",");
        inputValueId.forEach(element=>{       // Boucle pour en supprimer plusieurs en même temps
            fetch("http://localhost:3000/heroes/"+element, myInit)         // On fait une requête + la valeur de l'input et on ajoute notre variable
        });

        setTimeout(()=>{                                            // On met un timer
          fetch("http://localhost:3000/heroes").then((response)=>{       // On fait notre fetch + boucle pour afficher
              response.json().then( (json)=>{
                  json.forEach(element=>{
                       console.log(element);
                  })
              });
          });
        }, 1000)

    });
})();
