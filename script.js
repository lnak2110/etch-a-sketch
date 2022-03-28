const container = document.querySelector('#container');

const drawContainer = document.createElement('div');
drawContainer.classList.add('draw-container');

let nGridSquares = 16;

for ( let i = 1; i <= nGridSquares; i++) {
    for (let j = 1; j <= i; j++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        drawContainer.appendChild(gridSquare);
    }
}