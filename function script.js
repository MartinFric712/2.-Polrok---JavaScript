/*function calculate(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        if (b === 0) {
            return "Invalid number"
        }
        else {
            return a / b;
        }
    } else {
        return "Invalid operator";
    }
}*/

function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Invalid number";
            } else {
                return a / b
            }
        default:
            return "Invalid operator";
    }
}


function handleCalculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result = calculate(num1, num2, operator);

    document.getElementById("result").textContent = result;
}