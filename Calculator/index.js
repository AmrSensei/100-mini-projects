const output = document.getElementById("result");

function update(input) {
  output.textContent += `${input}`;
}

function clearr() {
  output.textContent = ``;
}

function calc() {
  try {
    output.textContent = `${eval(output.textContent)}`;
  } catch (error) {
    output.textContent = `Input not valid`;
    return;
  }
}
