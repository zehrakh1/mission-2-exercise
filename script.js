let currentValue = 0;
let previousValue = 0;
// store the selected arithmetic operator
let operator;

const result = document.getElementById("result");
const openJumpscareButton = document.getElementById("open-button");
const closeJumpscareButton = document.getElementById("close-button");
const jumpscare = document.getElementById("jumpscare");

// ========== CALCULATOR ============== //

const displayValue = (value) => {
  // set the display value to the current value
  result.value = value;
};

// clears all the values and resets the display
const clearValues = () => {
  currentValue = 0;
  previousValue = 0;
  displayValue(currentValue);
};

// adding a digit to the current value 
const addDigitToValue = (event) => {
  // convert the data-value attribute to a number
  // data-value is the value of the digit just pressed
  const dataValue = Number(event.target.attributes['data-value'].value);
  // adds the input value to current value
  // is multiplied by 10 in order to shift the new digit one place to the left
  currentValue = currentValue * 10 + dataValue;
  displayValue(currentValue);
};

// is called when '+' digit is clicked
const addition = () => {
  // store the current value as the previous value
  previousValue = currentValue;
  // reset the current value for the next input
  currentValue = 0;
  // operator that is applied to values (addition in this case)
  operator = "+";
  displayValue(currentValue);
};

// is called when '-' digit is clicked
const subtract = () => {
  previousValue = currentValue;
  currentValue = 0;
  operator = "-";
  displayValue(currentValue);
};

// is called when '/' digit is clicked
const division = () => {
  previousValue = currentValue;
  currentValue = 0;
  operator = "/";
  displayValue(currentValue);
};

// is called when '*' digit is clicked
const multiplication = () => {
  previousValue = currentValue;
  currentValue = 0;
  operator = "*";
  displayValue(currentValue);
};

// is called when '=' digit is clicked
const executeEquals = () => {
  if (operator === "+") {
    // executes the addition operator and updates the current and previous value
    const result = currentValue + previousValue;
    currentValue = result;
    // reset the prev value to 0
    previousValue = 0;
  }
  else if (operator === "-") {
    // executes the subtract operator and updates the current and previous value
    const result = previousValue - currentValue;
    currentValue = result;
    previousValue = 0;
  }
  else if (operator === "/") {
    // executes the division operator and updates the current and previous value
    const result = previousValue / currentValue;
    currentValue = result;
    previousValue = 0;
  }

  else if (operator === "*") {
    // executes the multiplication operator and updates the current and previous value
    const result = previousValue * currentValue;
    currentValue = result;
    previousValue = 0;
  }
  // displays the updated current value
  displayValue(currentValue);
}

// EVENT LISTENERS
// clear button click event
document.getElementById("clearCalc").addEventListener("click", clearValues);
// digit buttons click events
const digitButtons = document.getElementsByClassName("digit");
for (const digitButton of digitButtons) {
  digitButton.addEventListener("click", addDigitToValue)
}

// operator buttons
document.getElementById("add").addEventListener("click", addition);

document.getElementById("equals").addEventListener("click", executeEquals);

document.getElementById("subtract").addEventListener("click", subtract);

document.getElementById("multiply").addEventListener("click", multiplication);

document.getElementById("divide").addEventListener("click", division);


// ======== JUMPSCARE ============ //

openJumpscareButton.addEventListener("click", () => {
  // add the jumpscare element to the open class in css
  jumpscare.classList.add("open")
})

closeJumpscareButton.addEventListener("click", () => {
  // remove the jumpscare element from the open class in css
  jumpscare.classList.remove("open")
})

// sound will play when button is clicked
const audio = new Audio();
audio.src = "moo-sound.mp3";