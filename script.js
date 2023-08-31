const container = document.getElementById('grid');


var s = parseInt(document.getElementById("sides").value);


var x = document.querySelector('#grid');
x.style.setProperty('--x',(s));



function makeDivs(numDivs) {
for (let d=0; d < numDivs; d++){


    const cells = document.createElement('div');
    cells.classList.add('cells');
    container.appendChild(cells);

}
}


makeDivs((s*s))



