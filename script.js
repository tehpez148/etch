const container = document.getElementById('grid');


function makeDivs(numDivs) {
    for (let d = 0; d < numDivs; d++){
        let cells = document.createElement('div');
        container.appendChild(cells)    
        }
        }

makeDivs(256);