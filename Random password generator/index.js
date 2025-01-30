
// clicked the submit button
let generate = document.getElementById("btn");

// letters to use later
const arrnumbers = "0123456789";
const uc_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lc_letters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_-+=<>?/[]{}|~`";

// function that generates the password
generate.onclick = function () {
  const passwordlegnth = document.getElementById("passlen").value;
  const contain_numbers = document.getElementById("numbers").checked;
  const contain_uppercase = document.getElementById("uppercase").checked;
  const contain_lowercase = document.getElementById("lowercase").checked;
  const contain_symbols = document.getElementById("symbols").checked;
  const output = document.getElementById("result");

  const actualletters = [];
  const password = [];


  if (contain_numbers) {
    actualletters.push(arrnumbers);
  }
  if (contain_uppercase) {
    actualletters.push(uc_letters);
  }
  if (contain_lowercase) {
    actualletters.push(lc_letters);
  }
  if (contain_symbols) {
    actualletters.push(symbols);
  }

  if (passwordlegnth <= 0 ) {
    output.textContent = `Please Enter a positive password length`;
    return;
  }
  if (actualletters.length == 0) {
    output.textContent = `Password cant be empty! Please select some options`
  }
  for (let i = 0; i < passwordlegnth; i++) {
    const cnt = actualletters.length;
    const curr = Math.floor(Math.random() * cnt);
    const pushednum = Math.floor(Math.random() * actualletters[curr].length);
    password.push(actualletters[curr][pushednum]);
  }

  output.textContent = `Your password is : ${password.join("")} `;
};


