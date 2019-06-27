/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
        const getPromTableau = async ()=>{
            try{                                                  // Quand ok
              const tableau = await window.lib.getPersons();
              console.log(tableau);
            }
            catch(erreur){                            // Quand pas ok
               console.error("Erreur :(");
            }
        };
        getPromTableau();
    });
})();
