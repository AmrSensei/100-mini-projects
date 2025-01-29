let deccbtn = document.getElementById("dec");
let resetbtn = document.getElementById("reset");
let incbtn = document.getElementById("inc");
let numberr = document.getElementById("number");
let count = 0;
deccbtn.onclick = function () {
    count--;
    numberr.textContent = count;
};
incbtn.onclick = function () {
    count++;
    numberr.textContent = count;
};
resetbtn.onclick = function () {
    count = 0;
  numberr.textContent = count;
};
