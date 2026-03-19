const categoryInput = document.getElementById("categoryInput");
const addCategoryBtn = document.getElementById("addCategoryBtn");
const categoriesContainer = document.getElementById("categoriesContainer");
const error = document.getElementById("error");

// Načítanie dát
let data = JSON.parse(localStorage.getItem("todoData")) || [];

// Pridanie kategórie
addCategoryBtn.addEventListener("click", () => {
    const name = categoryInput.value.trim();
    if (!name) {
        error.textContent = "Zadaj názov kategórie!";
        return;
    }
    data.push({ name, tasks: [], isExpanded: true });
    saveData();
    categoryInput.value = "";
    error.textContent = "";
    render();
});

function saveData() {
    localStorage.setItem("todoData", JSON.stringify(data));
}

function render() {
    categoriesContainer.innerHTML = "";

    data.forEach((category, i) => {
        const catDiv = document.createElement("div");
        catDiv.className = "category-card";

        // Hlavička kategórie
        const header = document.createElement("div");
        header.className = "category-header";

        const title = document.createElement("div");
        title.className = "category-title";
        title.textContent = (category.isExpanded ? "▼ " : "▶ ") + category.name;
        title.addEventListener("click", () => {
            category.isExpanded = !category.isExpanded;
            saveData();
            render();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-cat";
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", () => {
            if (confirm("Naozaj vymazať celú kategóriu?")) {
                data.splice(i, 1);
                saveData();
                render();
            }
        });

        header.append(title, deleteBtn);
        catDiv.appendChild(header);

        // Telo kategórie
        if (category.isExpanded) {
            const body = document.createElement("div");
            body.className = "category-body";

            const taskInputGroup = document.createElement("div");
            taskInputGroup.className = "task-input-group";

            const taskInput = document.createElement("input");
            taskInput.type = "text";
            taskInput.placeholder = "Nová úloha...";

            const addTaskBtn = document.createElement("button");
            addTaskBtn.textContent = "Pridať";
            addTaskBtn.addEventListener("click", () => {
                const text = taskInput.value.trim();
                if (text) {
                    category.tasks.push({ text, done: false });
                    saveData();
                    render();
                }
            });

            taskInputGroup.append(taskInput, addTaskBtn);
            body.appendChild(taskInputGroup);

            const ul = document.createElement("ul");
            category.tasks.forEach((task, j) => {
                const li = document.createElement("li");
                li.textContent = task.text;
                if (task.done) li.classList.add("done");

                li.addEventListener("click", () => {
                    task.done = !task.done;
                    saveData();
                    render();
                });

                li.addEventListener("contextmenu", (e) => {
                    e.preventDefault();
                    category.tasks.splice(j, 1);
                    saveData();
                    render();
                });

                ul.appendChild(li);
            });

            body.appendChild(ul);
            catDiv.appendChild(body);
        }

        categoriesContainer.appendChild(catDiv);
    });
}

render();