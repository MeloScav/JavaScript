/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(() => {
    function recherche(){
        let anneeD = parseInt(document.getElementById("year").value);
        let tableau = [];
        for(month=1; month<=12; month++){
            let d = new Date(anneeD, month , 13);

            if (d.getDay() == 5){
                tableau.push(d);
            }
        }
        let result = "";
        for (i=0; i<tableau.length; i++){
            result += format(tableau[i]) + "\n";
        }
        alert(result);

    }

    function format(date){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    }

    let bouton = document.getElementById("run");
    bouton.addEventListener("click", recherche);


})();
