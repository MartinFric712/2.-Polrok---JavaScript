const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const error = document.getElementById("error");
const counter = document.getElementById("counter");

// Nacitanie ulozenych uloh
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Pridanie ulohy
button.addEventListener("click", addTask);

// Enter key
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const text = input.value.trim();

    // kontrola prazdneho inputu
    if (text === "") {
        error.textContent = "Zadaj úlohu!";
        return;
    }

    error.textContent = "";

    const task = {
        text: text,
        done: false
    };

    tasks.push(task);
    saveTasks();
    renderTasks();

    input.value = "";
}

// klik na ulohu
function createTaskElement(task, index) {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) {
        li.classList.add("done");
    }

    // klik = hotove / zrusenie
    li.addEventListener("click", () => {
        tasks[index].done = !tasks[index].done;
        saveTasks();
        renderTasks();
    });

    // pravy klik = vymazanie
    li.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    });

    return li;
}

// render
function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = createTaskElement(task, index);
        list.appendChild(li);
    });

    updateCounter();
}

// localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// pocitadlo
function updateCounter() {
    counter.textContent = "Máš " + tasks.length + " úloh";
}