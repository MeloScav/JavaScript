/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


var confirmation = (() => {
  do{
    var age = prompt("Quel âge avez-vous ?");
    var sex = prompt("De quel genre êtes vous ?");
    var city = prompt("Dans quelle ville habitez-vous ?");

     var conf = confirm("Veuillez confirmer vos informations :" +
                                "\n Age : " + age +
                                "\n Genre : " + sex +
                                "\n Ville : " + city);
  }
  while (conf === false);
})();
