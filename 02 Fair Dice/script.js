/* Fair Dice Script */

let roll = document.querySelector("#firstroll");            /* Game 1 : 6-sided dice */

roll.addEventListener("click", function () {
  let output = document.querySelector("#output1");
  let result = Math.ceil(Math.random() * 6);

  output.innerText = result;
 }
);

let secondroll = document.querySelector("#secondroll");     /* Game 2 : 24-sided dice */

secondroll.addEventListener("click", function () {
  let output2 = document.querySelector("#output2");
  let result2 = Math.ceil(Math.random() * 24);

  output2.innerText = result2;
 }
);

let min = 12;                                                /* Game 3 : 133-sided dice */
let max = 144;
let thirdroll = document.querySelector("#thirdroll");

thirdroll.addEventListener("click", function () {
  let output3 = document.querySelector("#output3");
  let result3 = Math.floor(Math.random() * (max - min + 1)) + min;
  output3.innerText = result3;
 }
);