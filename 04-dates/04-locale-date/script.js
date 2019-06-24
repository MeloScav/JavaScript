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
    let contenu = document.getElementById("target");      // On recupère le p à changer

    let date = new Date();              // ON crée un nouveau objet Date
    let dateY = date.getFullYear();     // Année
    let dateM = date.getMonth();        // Le mois : de 0 à 11
    let dateJ = date.getDay();          // Le jour de la semaine : de 0 à 6
    let dateD = date.getDate();          // jour du mois

    // On utilise les informations qu'on a récupéré comme des indices pour les tableaux et récupérer les info en Français
    let mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    let jour = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

    function heure(){
	     let d = new Date();
	     contenu.innerHTML ="Nous sommes le " + jour[dateJ] + " " + dateD + " " + mois[dateM] + " " + dateY +
        ", il est " + d.toLocaleTimeString();
     }
    let tempsM = setInterval(heure, 1000);
})();
