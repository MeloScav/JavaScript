/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    var contenu = document.getElementById("target");

    var date = new Date();
    var dateY = date.getFullYear();
    var dateM = date.getMonth();    // de 0 à 11
    var dateJ = date.getDay();      // de 0 à 6
    var dateD = date.getDate();

    // On utilise les informations qu'on a récupéré comme des indices pour les tableaux et récup les info en Français
    var mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    var jour = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];


    contenu.innerHTML = "Nous sommes le " + jour[dateJ] + " " + dateD + " " + mois[dateM] + " " + dateY;
})();
