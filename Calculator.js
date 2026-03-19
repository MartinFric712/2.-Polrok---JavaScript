let num1 = "";
let num2 = "";
let operator = "";
let history = [];

// Pridanie čísla
function addNumber(num){
    if(operator === ""){
        num1 += num;
        document.getElementById("display").value = num1;
    } else {
        num2 += num;
        document.getElementById("display").value = num2;
    }
}

// Nastavenie operátora
function setOperator(op){
    operator = op;
}

// Výpočet
function calculate(a, b, operator){
    switch(operator){
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/":
            if(b === 0) return "Error";
            return a / b;
        default: return "Invalid operator";
    }
}

// Výpočet výsledku a uloženie do histórie
function calculateResult(){
    if(num1 === "" || operator === "" || num2 === "") return;

    let result = calculate(Number(num1), Number(num2), operator);
    document.getElementById("display").value = result;

    // Pridanie do histórie
    let entry = `${num1} ${operator} ${num2} = ${result}`;
    history.unshift(entry);
    if(history.length > 10) history.pop();

    updateHistory();

    num1 = result.toString();
    num2 = "";
    operator = "";
}

// Aktualizácia zoznamu histórie
function updateHistory(){
    const list = document.getElementById("historyList");
    list.innerHTML = "";

    if(history.length === 0){
        const li = document.createElement("li");
        li.textContent = "No history yet";
        li.id = "noHistory";
        list.appendChild(li);
    } else {
        history.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });
    }
}

// Clear
function clearAll(){
    num1 = "";
    num2 = "";
    operator = "";
    document.getElementById("display").value = "";
}

// Backspace
function backspace(){
    if(operator === ""){
        num1 = num1.slice(0,-1);
        document.getElementById("display").value = num1;
    } else {
        num2 = num2.slice(0,-1);
        document.getElementById("display").value = num2;
    }
}