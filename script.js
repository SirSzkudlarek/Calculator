const value = document.querySelector(".button");
const newValueBtn = document.querySelectorAll(".number");
const resetBtn = document.querySelector(".reset");
const resultBtn = document.querySelector(".result");
const mathOperation = document.querySelector(".value");
let result = 0;

const handleOperationChange = (e) => {
  const newValue = e.target.closest(".number");
  if (
    newValue.value == "+" ||
    newValue.value == "-" ||
    newValue.value == "*" ||
    newValue.value == "/"
  ) {
    if (
      mathOperation.value.slice(-3) !== " + " &&
      mathOperation.value.slice(-3) !== " - " &&
      mathOperation.value.slice(-3) !== " * " &&
      mathOperation.value.slice(-3) !== " / "
      // ZA DUZO KROPEK
    ) {
      mathOperation.value += ` ${newValue.textContent} `;
    }
  } else {
    mathOperation.value += `${newValue.textContent}`;
  }
};

const handleReset = () => {
  mathOperation.value = "";
};

const handleCount = () => {
  result = eval(mathOperation.value);
  mathOperation.value = result;
  console.log(result);
};

for (let value of newValueBtn) {
  value.addEventListener("click", handleOperationChange);
}

resetBtn.addEventListener("click", handleReset);
resultBtn.addEventListener("click", handleCount);
