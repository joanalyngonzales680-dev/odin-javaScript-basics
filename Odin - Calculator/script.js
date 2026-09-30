let firstNumber = "";
let operator = "";
let secondNumber = "";

let displayValue = "";
let displayResult = false;

//Fuunction for basic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) { //if the denominator is 0, return an error message
        alert("Error: Division by zero is not allowed.");
        return null;
    }
    return a / b;
}

//Operate function
function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

// Document object model (DOM) manipulation
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector("#clear");
const decimalButton = document.querySelector("#decimal");
const backspaceButton = document.querySelector("#backspace");

//Number button event listeners
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if(displayResult) {
            displayValue = "";
            firstNumber = "";
            operator = "";
            secondNumber = "";
            displayResult = false;
        }

        displayValue += button.textContent;
        updateDisplay();
    });
});



// Operator button event listeners
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {

       
        if (displayValue === "" && firstNumber === "") {
            return;
        }

      
        if (firstNumber !== "" && displayValue !== "" && operator !== "") {
            secondNumber = Number(displayValue);

            let result = operate(
                operator,
                Number(firstNumber),
                secondNumber
            );

            if (typeof result === "number") {
                result = roundResult(result);

                displayValue = String(result);
                updateDisplay();

                firstNumber = displayValue;
                secondNumber = "";
            } else {
                displayValue = "";
                firstNumber = "";
                secondNumber = "";
                operator = "";

                display.textContent = "0";
                return;
            }
        }

       
        if (firstNumber === "") {
            firstNumber = displayValue;
        }

        
        operator = button.textContent;

       
        displayValue = "";
        displayResult = false;


        display.textContent = "";
    });
});
//Equals BUtton event listener
equalsButton.addEventListener("click", () => {
    if(firstNumber === "" || operator === "" || displayValue === "") {
        return; // Prevent calculation if any required value is empty
    }

    secondNumber = Number(displayValue);
    let result = operate(operator, Number(firstNumber), secondNumber);

    if(typeof result === "number") {
        result = roundResult(result);

        displayValue = String(result);
        updateDisplay();

        firstNumber = displayValue;
        operator = "";
        secondNumber = "";
        displayResult = true;
    } else {
        displayValue = "";
        firstNumber = "";
        operator = "";
        secondNumber = "";
        updateDisplay();
    }
});

//Round long decimal results
function roundResult(result) {
    if (!Number.isFinite(result)) {
        return result;
    }
    return Math.round(result * 100000000) / 100000000;
}

//clear button event listener
clearButton.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    displayValue = "";
    displayResult = false;
    updateDisplay();
});

//Decimal button event listener
decimalButton.addEventListener("click", () => {
    if (displayValue.includes(".")) {
        return;
    }

    if(displayValue === "") {
        displayValue = "0";
    }
    displayValue += ".";
    updateDisplay();
});

//Backspace button event listener
backspaceButton.addEventListener("click", () => {
    if(displayResult) {
        return;
    }
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
});

//Update display function
function updateDisplay() {
    if(displayValue === "") {
        display.textContent = "0";
    } else {
        display.textContent = displayValue;
    }
}