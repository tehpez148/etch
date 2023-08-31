const container = document.getElementById('grid');

var s = parseInt(document.getElementById("sides").value);

const newGridButton = document.querySelector('#new');
newGridButton.addEventListener('click', function() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    
    makeDivs((s*s));
    console.log(s);
});
var x = document.querySelector('#grid');
x.style.setProperty('--x',(s));



function makeDivs(numDivs) {
for (let d=0; d < numDivs; d++){


    const cells = document.createElement('div');
    cells.classList.add('cells');
    container.appendChild(cells);
}};


