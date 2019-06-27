/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
        let promesse = window.lib.getPersons();   // On crée une variable contenant la Promise
        promesse.then((tableau)=>{                // On lui dit que si c'est ok
                console.log(tableau);             // Tu affiche le tableau
        }).catch((erreur)=>{                      // Si erreur
              console.error("Erreur :(");          // Tu affiches l'erreur
        });
    });

})();
