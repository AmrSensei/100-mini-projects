const deg = document.getElementById("temp");
const first = document.getElementById("celto");
const second = document.getElementById("fahrto");
const result = document.getElementById("trans");
let ahh = document.getElementById("submit");
let degg;
ahh.onclick = function () {
  if (deg.value == "") {
    result.textContent = "Please Enter a number";
    return;
  }
  degg = Number(deg.value);
  if (first.checked) {
    degg = (degg * 9) / 5 + 32;
    result.textContent = degg.toFixed(2) + "℉";
  } else if (second.checked) {
    degg = (degg - 32) * (5 / 9);
    result.textContent = degg.toFixed(2) + "℃";
  } else {
    result.textContent = "Please select an option";
  }
};
