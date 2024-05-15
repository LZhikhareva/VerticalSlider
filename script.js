const cards = document.querySelectorAll(".card");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
let cardIndex = 0;

function show(index) {
  cards[cardIndex].classList.remove("active");
  cards[index].classList.add("active");
  cardIndex = index;
}

downBtn.addEventListener("click", () => {
  let index = cardIndex - 1;

  if (index < 0) {
    index = cards.length - 1;
  }

  show(index);
});

upBtn.addEventListener("click", () => {
  let index = cardIndex + 1;
  if (index >= cards.length) {
    index = 0;
  }
  show(index);
});

document.addEventListener('keydown', 
event => {
    if (event.key === 'ArrowDown') {
        let index = cardIndex + 1;
  if (index >= cards.length) {
    index = 0;
  }
  show(index);
    } else if (event.key === 'ArrowUp') {
        let index = cardIndex - 1;

  if (index < 0) {
    index = cards.length - 1;
  }

  show(index);
    }
})

show(cardIndex);
