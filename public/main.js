const gridSize = 16;

const table = document.querySelector("table");
const button = document.querySelector("button");

for (let r = 0; r < gridSize; r++) {
    const row = document.createElement("tr");
    for (let c = 0; c < gridSize; c++) {
        const cell = document.createElement("td");
        cell.className = "cell";
        cell.addEventListener("click", () => {
            cell.classList.toggle("filled");
        });
        row.appendChild(cell);
    }
    table.appendChild(row);
}

button.addEventListener("click", () => {
    const filledCells = document.querySelectorAll(".filled");

    for (let cell of filledCells) {
        cell.classList.remove("filled");
    }
});
