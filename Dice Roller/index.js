let clickedbutt = document.getElementById("submit");

clickedbutt.onclick = function () {
  const numdice = document.getElementById("number").value;
  const dice = document.getElementById("dice");
  const diceimages = document.getElementById("images");
  const values = [];
  const imagess = [];

  for (let i = 0; i < numdice; i++) {
    const valuee = Math.floor(Math.random() * 6) + 1;
    values.push(valuee);
    imagess.push(`<img src="./images/${valuee}.png" alt="">`);
  }
  if (numdice <= 0) {
    dice.textContent = `Please Choose a positive dice number`;
  } else {
    dice.textContent = `Dice : ${values.join(", ")}`;
    diceimages.innerHTML = imagess.join("");
  }
};
