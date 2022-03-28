const container = document.querySelector('#container');

const drawContainer = document.createElement('div');
drawContainer.classList.add('draw-container');
container.appendChild(drawContainer);

let nGridSquares = 16;

for ( let i = 1; i <= nGridSquares; i++) {
    for (let j = 1; j <= i; j++){
        let gridSquares = document.createElement('div');
        gridSquares.classList.add('grid-squares');
        drawContainer.appendChild(gridSquares);
    }
}