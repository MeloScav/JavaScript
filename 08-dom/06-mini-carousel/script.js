/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    let index = 0;        // On crée une variable index pour changer l'image
    document.getElementById("next").addEventListener("click", ()=>{
        let image = document.querySelector("img");      // On sélectionne l'image
        image.src = gallery[index];   // On remplace le src par l'élément du tableau suivant le numéro d'index
        index+=1;                         // On ajoute 1 à chaque fois
        if(index >= gallery.length){      // Lorsqu'on dépasse la longueur du tableau, on redémarre à zéro
            index = 0;
        }
    });
})();
