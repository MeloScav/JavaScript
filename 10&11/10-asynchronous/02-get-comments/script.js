/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", ()=>{
      window.lib.getPosts((erreur, articles)=>{         // On récupère nos articles dans le fichier
          articles.forEach( element =>{                     // On boucle dessus
              window.lib.getComments(element.id, (erreur, tableau)=>{     // On récupère nos commentaire correspondant aux articles avec element.id
                    element.comments = tableau;                           // On ajoute les commentaires
              })
          });
          console.log(articles);    // On affiche
      });
  });
})();
