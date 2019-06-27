/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
      // On récupère les inputs
      let inputName = document.getElementById("hero-name").value;
      let inputAlterEgo = document.getElementById("hero-alter-ego").value;
      let inputPower = document.getElementById("hero-powers").value;

      // On défini
      let myInit = { method : "POST",     // Façon d'envoyer
                     headers : {
                       "Accept" : "application/json",            // quelles types de données on accepte
                       "Content-type" : "application/json"      // quelle types de données on envoit (json ici)
                     },
                     body : JSON.stringify({             // Transforme l'objet en chaîne de caractère JSON
                                  name : inputName,
                                  alterEgo : inputAlterEgo,
                                  abilities : inputPower.split(","),      // Sous forme de tableau
                     })

                    }

     fetch("http://localhost:3000/heroes", myInit)         // On fait une requête et on ajoute notre variable
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
