const value = document.querySelector(".button");
const newValueBtn = document.querySelectorAll(".number");
const resetBtn = document.querySelector(".reset");
const deletePrevNumBtn = document.querySelector(".deletePrevNum");
const resultBtn = document.querySelector(".result");
const mathOperation = document.querySelector(".value");
const history = document.querySelector(".history");

const createHistoryRecord = (operation, result) => {
  const record = document.createElement("p");
  record.classList.add("record-item");
  const higlightResult = document.createElement("span");
  higlightResult.classList.add("higlight-result-item");
  higlightResult.textContent = `${result}`;
  record.textContent = `${operation} = `;
  record.append(higlightResult);
  history.append(record);
};

const handleOperationChange = (e) => {
  const newValue = e.target.closest(".number");
  const length = mathOperation.value.length;
  if (
    newValue.value == "+" ||
    newValue.value == "-" ||
    newValue.value == "*" ||
    newValue.value == "/" ||
    newValue.value == "%"
  ) {
    if (
      mathOperation.value.slice(-3) !== " + " &&
      mathOperation.value.slice(-3) !== " - " &&
      mathOperation.value.slice(-3) !== " * " &&
      mathOperation.value.slice(-3) !== " / " &&
      mathOperation.value.slice(-3) !== " % " &&
      length !== 0
    ) {
      mathOperation.value += ` ${newValue.value} `;
    }
  } else {
    mathOperation.value += `${newValue.value}`;
  }
};

const handleReset = () => {
  mathOperation.value = "";
};

const handleDeletePrevNum = () => {
  const operators = mathOperation.value.slice(-3);
  if (
    mathOperation.value.length >= 3 &&
    (operators == " + " ||
      operators == " - " ||
      operators == " / " ||
      operators == " * " ||
      operators == " % ")
  ) {
    mathOperation.value = mathOperation.value.slice(0, -3);
  } else {
    mathOperation.value = mathOperation.value.slice(0, -1);
  }
};

const handleCount = () => {
  if (mathOperation.value !== "") {
    createHistoryRecord(mathOperation.value, eval(mathOperation.value));
    mathOperation.value = eval(mathOperation.value);
  } else {
    null;
  }
};

window.onerror = function (e) {
  alert("Źle zapisane działanie matematyczne !");
};
for (let value of newValueBtn) {
  value.addEventListener("click", handleOperationChange);
}

resetBtn.addEventListener("click", handleReset);
deletePrevNumBtn.addEventListener("click", handleDeletePrevNum);
resultBtn.addEventListener("click", handleCount);
