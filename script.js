const container = document.querySelector('#container');
const size = document.getElementById('size');
const drawContainer = document.createElement('div');
const clear = document.createElement('button');

drawContainer.classList.add('draw-container');
clear.classList.add('button');

clear.textContent = 'Clear';

container.appendChild(drawContainer);
container.appendChild(clear);

let nGridSquares = 16;
let color = 'black';

function createGrid(nGridSquares) {
    for (let i = 1; i <= (nGridSquares * nGridSquares); i++) {
        const gridSquares = document.createElement('div');
        drawContainer.style.gridTemplateColumns = `repeat(${nGridSquares}, 1fr)`;
        drawContainer.style.gridTemplateRows = `repeat(${nGridSquares}, 1fr)`;
        drawContainer.appendChild(gridSquares).classList.add('grid-squares');
    }    
}

createGrid(nGridSquares);

function paintGrid() {
    const gridSquares = document.querySelectorAll('.grid-squares');
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = color;
        });
    });
}

paintGrid();

function clearGrid() {
    const gridSquares = document.querySelectorAll('.grid-squares');
    gridSquares.forEach((gridSquare) => {
        gridSquare.remove();
    });
    createGrid(size.value);
    paintGrid();
}

clear.addEventListener('click', clearGrid);

function resize() {
    size.addEventListener('change', (e) => {
        clearGrid();
        createGrid(e.target.value);
        paintGrid();
    });
}

resize();