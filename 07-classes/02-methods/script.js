/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person{
        constructor(lastname, firstname){
            this.firstname = firstname;     // propriétés
            this.lastname = lastname;
        }

        sayHello(){                                                   // Méthode
            return `Hello, ${this.firstname} ${this.lastname} !`;
        }
    }

   document.getElementById("run").addEventListener("click", ()=>{
            let newP = new Person ("Méloé", "Scavezzoni");    // Nouvelle personne
            console.log(newP.sayHello());
    });
})();
