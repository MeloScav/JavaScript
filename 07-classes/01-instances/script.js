/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    document.getElementById("run").addEventListener("click", ()=>{
          let catSkitty = new Cat("Skitty", 9);     // On crée un nouveau chat
          let catPixel = new Cat ("Pixel", 6);
          /*console.log(catSkitty);
          console.log(catPixel);*/
          console.log("Nouveau chat : " + catSkitty.name + " âgé de " + catSkitty.age + " ans" +
                      "\nNouveau chat : " + catPixel.name + " âgé de " + catPixel.age + " ans");
    });
})();
