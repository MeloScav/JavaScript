/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let image = document.querySelector("img");
    let temp = "";
    image.addEventListener("mouseover", ()=>{
          temp = image.src;
          image.src = image.dataset.hover;
    });
    image.addEventListener("mouseout", ()=>{
          image.src = temp ;
    });
})();
