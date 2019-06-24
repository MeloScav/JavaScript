/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {
    for(i=0; i<100; i++){
      if (i%3 === 0 && i%5 === 0){        // multiple de 3 ET 5 ==> modulo pour voir le reste. Toujours celui là en premier
          console.log("FizzBuzz");
      }
      else if (i%5 === 0){                // multiple de 5
          console.log("Buzz");
      }
      else if (i%3 === 0){                // multiple de 3
          console.log("Fizz");
      }
      else{
          console.log(i);
      }
    }
})();


/*
Version 2
(()=> {
    let x = 1;
    for(i=0; i<100; i++){
        let msg = "";
        if(x % 3 === 0){      // fera Fizz
          msg += "Fizz";
        }
        if(x % 5 === 0){      // Fera Buzz et si egale au deux ça fera les deux collés
          msg += "Buzz";
        }
        if(msg === ""){
          msg = x;
      }
      console.log(msg);
    }
})();
*/
