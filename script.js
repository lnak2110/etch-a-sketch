const container = document.querySelector('#container');

const drawContainer = document.createElement('div');
drawContainer.classList.add('draw-container');
container.appendChild(drawContainer);

let nGridSquares = 16;
for (let i = 1; i <= nGridSquares; i++) {
    for (let j = 1; j <= nGridSquares; j++){
        gridSquares = document.createElement('div');
        gridSquares.classList.add('grid-squares');
        drawContainer.appendChild(gridSquares);
    }
}

drawContainer.style.gridTemplateColumns = 'repeat(' + nGridSquares + ', 1fr)';