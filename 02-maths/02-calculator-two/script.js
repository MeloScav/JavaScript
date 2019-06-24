/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.








(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {

      let x = document.getElementById("op-one").value;
      let y = document.getElementById("op-two").value;

      switch (operation) {
        case "addition" :
          let somme = parseFloat(x)+parseFloat(y);  // Pour transformer le string en number
          alert("Résultat: \n" + somme);
          break;
        case "soustraction" :
          let soustraction = parseFloat(x) - parseFloat(y);
          alert("Résultat: \n" + soustraction);
          break;
        case "multiplication" :
          let multiplication = parseFloat(x) * parseFloat(y);
          alert("Résultat: \n" + multiplication);
          break;
        case "division" :
          let division = parseFloat(x) / parseFloat(y);
          alert("Résultat: \n" + division);
          break;
        default:
          alert("erreur");
      }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
