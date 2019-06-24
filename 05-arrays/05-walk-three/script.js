/* becode/javascript
 *
 * /05-arrays/05-walk-three/script.js - 5.5: parcours de tableau (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = [
        {
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
    ];

      let bouton = document.getElementById("run");
      bouton.addEventListener("click", ()=>{

            people.forEach(element =>{      // element devient chaque partie du tableau
                console.log(element.lastname);      // pour recupérer que les lastnames
            });
      });
})();

/*
let bouton = document.getElementById("run");
bouton.addEventListener("click", ()=>{

      people.forEach(element =>{
          console.log(element.firstname, element.lastname);
      });
});
*/

/*
let bouton = document.getElementById("run");
bouton.addEventListener("click", ()=>{

      people.forEach( ({firstname, lastname}) =>{
          console.log(firstname, lastname);
      });
});
*/

/*
let bouton = document.getElementById("run");
bouton.addEventListener("click", ()=>{

      people.forEach( (p) =>{
          const {firstname, lastname} = p;
          console.log(firstname, lastname);
      });
});
*/
