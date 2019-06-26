/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
        window.lib.getPosts();

        const getPromTab = async()=>{                          // déclaration fonction async et stockage dans une constante
            const tableau = await window.lib.getPosts();   // On lui dit d'attendre que la promesse soit résolu pour afficher
            console.log(tableau);                          // On affiche
        }
        getPromTab();      // On appelle la fonction

    });
})();
