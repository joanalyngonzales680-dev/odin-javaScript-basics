const container = document.querySelector("#container");

function createGrid(size) {
    const squareSize = 960 / size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

createGrid(16);

const resizeButton = document.querySelector("#resize-button");

resizeButton.addEventListener("click", () => {
    let size = prompt("Enter new grid size (1-100): ");

    size = Number(size);

    if(size >= 1 && size <= 100) {
        container.innerHTML = "";
        createGrid(size);
    } else {
        alert("Invalid size. Please enter a number between 1 and 100.");
    }
});