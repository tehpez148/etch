const container = document.getElementById('grid');

for (const grid of document.querySelectorAll('#grid')) {
    grid.style.setProperty('--cols', Math.ceil(Math.sqrt(grid.children.length)));
  }

function makeDivs(numDivs) {
for (let d=0; d < numDivs; d++){


    const cells = document.createElement('div');
    cells.classList.add('cells');
    container.appendChild(cells);

}
}

makeDivs(9);



