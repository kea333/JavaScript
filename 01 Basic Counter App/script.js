/* Basic Counter App Script */

let add = document.querySelector("#add");             /* addition button */
let subtract = document.querySelector("#subtract");   /* subtraction button */

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  if (result > 100) {                                 /* reset to 0 if clicked above 100 */
    result = 0;
  }

  output.innerText = result;
});

subtract.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;

  if (result < -100) {                                /* reset to 0 if clicked below -100 */
    result = 0;
  }

  output.innerText = result;
});