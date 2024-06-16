const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', calculateSQROOT)
function calculateSQROOT(event) {
    event.preventDefault();
    const number = document.getElementById("number").value;
    const sqroot = Math.sqrt(number);
    const resultContainer = document.getElementById("result");
    const text = `The SQROOT of ${number} is ${sqroot}`;
    resultContainer.textContent = text;
  }
function onsubmit() {
  return false;
}


button.addEventListener('click', function (evnt) {
  button.textContent = 'Run Agian'
})
