const score = document.getElementById("score");
const numOne = document.getElementById("num_one");
const numTwo = document.getElementById("num_two");
const form = document.getElementById("form");
const input = document.querySelector(".inp");

let count = JSON.parse(localStorage.getItem('score'));

if(!count) {
   count = 0;
}

score.innerText = count;

window.addEventListener("load", (e) => {
    getRandomNUm();
    input.focus();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

  let one = numOne.textContent;
  let two = numTwo.textContent;

  let result = one * two;
  console.log(result);
  let value = +input.value;
  console.log(value);

 if (value === result) {
    count++;
    updateLocalStorage();
  } else {
    count--;
    updateLocalStorage();
  }

  score.innerText = count;
//   console.log(count);

  input.value = "";

  getRandomNUm();

  if (count <= 0) {
    score.innerHTML = `<span id="game_over">GAME OVER !</span>`;
    input.disabled = true;
  }
});

function getRandomNUm() {
  numOne.textContent = Math.floor(Math.random() * 10);
  numTwo.textContent = Math.floor(Math.random() * 5);
}

function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(count));
}
