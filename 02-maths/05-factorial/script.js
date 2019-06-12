/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        var nbsInput = document.getElementById("number").value;   // Récupérer le nombre String
        var nbsT = parseInt(nbsInput);                             // Transformer en Nombre

        var result = 1;               // On donne une valeur de base à result
        for(i=1; i<=nbsT ;i++){     //   i doit être plus petit ou égal au nombre qu'on écrit
            result *= i;            // On fait le résultat = au résultat * le i à chaque fois
        }
        alert(result);              // On affiche le tout
    });
})();
