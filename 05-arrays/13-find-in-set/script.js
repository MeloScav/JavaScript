/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    document.getElementById("run").addEventListener("click", ()=>{
       let nbr = people.size;                           // Taille
       let recherche = people.has("Alexandre");         // Recherche si Alexandre est présent, renvoie un booléen
       console.log(`Nombre de personne : ${nbr}`);
       if (recherche == true){
          console.log("Alexandre fait parti du Set");
       }
       else{
          console.log("Alexandre ne fait pas parti du Set");
       }
    });

})();
