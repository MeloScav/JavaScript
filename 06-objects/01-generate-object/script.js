/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
        let presentation = {
            lastname : "Scavezzoni",      // propriété
            firstname : "Méloé",
            age : 24,
            city: "Trooz",
            country : "Belgique",

        function identite(obj){                                     // méthode
            return "Nom de famille : " + obj.lastname +
                   "\nPrénom : " + obj.firstname +
                   "\nÂge : " + obj.age +
                   "\nVille : " + obj.city +
                   "\nPays : " + obj.country;
        }

        console.log(identite(presentation));
    });

})();
