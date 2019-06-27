/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
      document.getElementById("run").addEventListener("click", ()=>{
            const promArticle = async()=>{                          // Première fonction
                const article = await window.lib.getPosts();        // On attends puis on affiche

                article.forEach(element=>{      // On fait la boucle dessus
                    promComments(element);      // On appelle la deuxième fonction
                    console.log(element);       // On affiche
                })
            };

            const promComments = async(element)=>{        // On fait la deuxième fonction pour les comments
                const com = await window.lib.getComments(element.id);
                element.comments = com;               // on ajoute les comments
            };
            promArticle();

      });
})();
