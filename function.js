let num1 = 20;
let num2 = 5;
let result = num1 + num2;
console.log("Result: ", result);

function add(a, b) {
    return a + b;
}
let addResult = add(10, 5);
console.log("Addition: ", addResult);

function calculate (a, b, operator) {
    if (operator === "+")
    {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else {
        return "Invalid operator";
    }
}

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
console.log(calculate(10, 5, "+"));