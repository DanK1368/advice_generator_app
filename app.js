const button = document.querySelector(".container__button");
const adviceNum = document.querySelector(".adviceID");
const adviceMsg = document.querySelector(".container__advice__text");

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
});
