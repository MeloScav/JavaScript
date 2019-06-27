/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
      fetch("http://localhost:3000/heroes").then((response)=>{      // On récupère le chemin et on fait un premier then pour la promise
         response.json().then( (json)=>{          // On fait un .json() sur le response puis on refait un then dessus
            json.forEach(element =>{              // le json renvoie un tableau, donc on boucle dessus pour récupérer les éléments qu'on veut
                console.log(element.name);
            })
         });
      });
});


})();
