const button = document.querySelector(".container__button");
const adviceNum = document.querySelector(".adviceID");
const adviceMsg = document.querySelector(".container__advice__text");
const dice = document.querySelector(".dice");

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  const data = await response.json();
  const adviceText = await data.slip.advice;
  const adviceID = await data.slip.id;

  return { adviceText, adviceID };
};

const updateUI = (data) => {
  const { adviceText, adviceID } = data;

  adviceMsg.innerHTML = `
  <p class="--advice-text-style">${adviceText}</p>`;

  adviceNum.textContent = `${adviceID}`;
};

button.addEventListener("click", () => {
  //update UI with new advice
  getAdvice().then((data) => updateUI(data));

  //animate dice
  if (dice.classList.contains("animate1")) {
    dice.classList.add("animate2");
    dice.classList.remove("animate1");
  } else {
    dice.classList.remove("animate2");
    dice.classList.add("animate1");
  }
});
