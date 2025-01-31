function update() {
  const timee = new Date();
  const hrs = timee.getHours().toString().padStart(2, 0);
  const mins = timee.getMinutes().toString().padStart(2, 0);
  const secs = timee.getSeconds().toString().padStart(2, 0);
  const output = `${hrs}:${mins}:${secs}`;
  document.getElementById("clock").textContent = output;
}
update();
setInterval(update, 1000);
