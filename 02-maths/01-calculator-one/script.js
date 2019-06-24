/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        var x = document.getElementById("op-one").value;
        var y = document.getElementById("op-two").value;
        var somme = parseFloat(x)+parseFloat(y);  // Pour transformer le string en number
        alert("Résultat: \n" + somme);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        var x = document.getElementById("op-one").value;
        var y = document.getElementById("op-two").value;
        var soustraction = parseFloat(x) - parseFloat(y);
        alert("Résultat: \n" + soustraction);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        var x = document.getElementById("op-one").value;
        var y = document.getElementById("op-two").value;
        var multiplication = parseFloat(x) * parseFloat(y);
        alert("Résultat: \n" + multiplication);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        var x = document.getElementById("op-one").value;
        var y = document.getElementById("op-two").value;
        if(y!= 0){
          var division = parseFloat(x) / parseFloat(y);
          alert("Résultat: \n" + division);
        }
        else{
          alert("impossible de diviser par 0 !")
        }
    });
})();
