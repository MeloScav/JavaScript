/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Chien extends Animal {
        constructor (name){
            super();                                  // Pour "appeler" le parent
            this.name = name;
            this.constructor.greeting = "Wouf";     // Ajouter "constructor" pour le rendre statique
        }
    }

    class Chat extends Animal{
        constructor (name){
            super();
            this.name = name;
            this.constructor.greeting = "Miaou";
        }
    }

    document.getElementById("run").addEventListener("click", ()=>{
         let chienW = new Chien ("Watson");         // On crée un nouveau chien
         let chatB = new Chat ("Bubulle");
         console.log(chienW.sayHello());        // utiliser le nom de la variable ! 
         console.log(chatB.sayHello())
    });
})();
