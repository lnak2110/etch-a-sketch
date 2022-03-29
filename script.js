const container = document.querySelector('#container');
const size = document.getElementById('size');
const drawContainer = document.createElement('div');
drawContainer.classList.add('draw-container');
container.appendChild(drawContainer);

let nGridSquares = 16;

let color = 'blue';

createGrid(nGridSquares);


function createGrid(nGridSquares) {
    for (let i = 1; i <= (nGridSquares * nGridSquares); i++) {
        const gridSquares = document.createElement('div');
        drawContainer.style.gridTemplateColumns = `repeat(${nGridSquares}, 1fr)`;
        drawContainer.style.gridTemplateRows = `repeat(${nGridSquares}, 1fr)`;
        drawContainer.appendChild(gridSquares).classList.add('grid-squares');
    }    
}

const gridSquares = document.querySelectorAll('.grid-squares');
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

function resize() {
    size.addEventListener('change', (e) => {
        clearGrid();
        createGrid(e.target.value);
        paintGrid();
    });
}

resize();

const clear = document.createElement('button');
clear.textContent = 'Clear';
clear.addEventListener('click', clearGrid);
container.appendChild(clear);



