
let display = document.querySelector('.display');

let nums = document.querySelectorAll('.nums');
let operators = document.querySelectorAll('.operator');

let equalBtn = document.querySelector('.equal-btn');
let clearBtn = document.querySelector('#clear');
let acBtn = document.querySelector('#ac');

let firstNumber;
let operator;
let secondNumber;

let isResultDisplayed = false;

// 1. Number buttons
nums.forEach((num) => {
    num.addEventListener('click', () => {

        if (isResultDisplayed) {
            display.textContent = "";
            isResultDisplayed = false;
        }

        display.textContent += num.textContent;

    });
});


// 2. Operator buttons + Decimal
operators.forEach((op) => {
    op.addEventListener('click', () => {

        // Decimal logic
        if (op.textContent === ".") {

            if (isResultDisplayed) {
                display.textContent = "";
                isResultDisplayed = false;
            }

            if (!display.textContent.includes(".")) {
                display.textContent += ".";
            }

            return;
        }

        // Operator logic
        if (display.textContent === "" || display.textContent === "Cannot divide by 0") {
            return;
        }

        firstNumber = Number(display.textContent);
        operator = op.textContent;

        display.textContent = "";

        isResultDisplayed = false;

    });
});


// 3. Equal button
equalBtn.addEventListener('click', () => {

    if (display.textContent === "" || operator === undefined) {
        return;
    }

    secondNumber = Number(display.textContent);

    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    }

    else if (operator === "-") {
        result = firstNumber - secondNumber;
    }

    else if (operator === "x") {
        result = firstNumber * secondNumber;
    }

    else if (operator === "/") {

        if (secondNumber === 0) {
            result = "Cannot divide by 0";
        }

        else {
            result = firstNumber / secondNumber;
        }
    }

    else {
        result = "Error";
    }

    display.textContent = result;

    isResultDisplayed = true;

    // Store result for next calculation
    firstNumber = (typeof result === "number") ? result : undefined;

    operator = undefined;

});


// 4. C button - Clear display
clearBtn.addEventListener('click', () => {

    display.textContent = "";
    isResultDisplayed = false;

});


// 5. AC button - Reset everything
acBtn.addEventListener('click', () => {

    display.textContent = "";

    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;

    isResultDisplayed = false;

});
