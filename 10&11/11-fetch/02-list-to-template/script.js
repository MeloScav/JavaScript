/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", ()=>{
    let template = document.getElementById("tpl-hero");           // On récupère le template
    let target = document.getElementById("target");               // On récupère le target

    fetch("http://localhost:3000/heroes").then((response)=>{      // On récupère le chemin
       response.json().then( (json)=>{          // On récupère le tableau des héros

          json.forEach((element) =>{                                    // On boucle dessus
              let cloneTemplate = template.content.cloneNode(true);       // On clone le template

              cloneTemplate.querySelector(".name").innerText = element.name;      // On récupère les noms
              cloneTemplate.querySelector(".alter-ego").innerText = element.alterEgo;     // On récupère les alter-egos
              cloneTemplate.querySelector(".powers").innerText = element.abilities;     // On récupère les pouvoirs

              target.appendChild(cloneTemplate);      // On met les informations dans le target l'un en dessous de l'autre

          })

       });
    });
});
})();
