/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  class Person{
      constructor(firstname, lastname){
          this.firstname = firstname;     // propriétés
          this.lastname = lastname;
      }
      get name(){                                       // Récupère une valeur
        return this.firstname + " "+ this.lastname;
      }
      set name(chaine){                                 // Met une nouvelle valeur
        let res = chaine.split(" ");            // Tableau
        this.firstname = res[0];                // Met le firstname au début
        this.lastname = res[1];                 // Met le lastname à la fin
      }
  }

  document.getElementById("run").addEventListener("click", ()=>{
        let personL = new Person("Lulu", "LeFou");      // On crée une nouvelle personne
        console.log(personL.name);
        personL.name="Gizmo Scav";        // On remplace
        console.log(personL.name);

  });
})();
