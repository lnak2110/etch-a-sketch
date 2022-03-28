const container = document.querySelector('#container');

const drawContainer = document.createElement('div');
drawContainer.classList.add('draw-container');
container.appendChild(drawContainer);

let nGridSquares = 16;

for (let i = 1; i <= nGridSquares; i++) {
    for (let j = 1; j <= nGridSquares; j++){
        const gridSquares = document.createElement('div');
        gridSquares.classList.add('grid-squares');
        drawContainer.appendChild(gridSquares);
    }
}

let color = 'blue';

drawContainer.style.gridTemplateColumns = 'repeat(' + nGridSquares + ', 1fr)';

const gridSquares = document.querySelectorAll('.grid-squares');
gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = color;
    });
});
    
