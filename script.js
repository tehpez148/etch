const container = document.getElementById('grid');
var x = document.querySelector('#grid');
let colour = '#fa4';

document.addEventListener('DOMContentLoaded', function(){
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    
    makeDivs((10*10));
    x.style.setProperty('--x',(10));

    const items = document.querySelectorAll('.cells');

    items.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = colour;
        });
    });

});






const tenSides = document.getElementById('ten');
const twentySides = document.getElementById('twenty');
const thirtySides = document.getElementById('thirty');


tenSides.addEventListener('click', function(){
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    
    makeDivs((10*10));
    x.style.setProperty('--x',(10));

    const items = document.querySelectorAll('.cells');

    items.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = colour;
        });
    });


    console.log(items);

});

twentySides.addEventListener('click', function(){
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    
    makeDivs((20*20));
    x.style.setProperty('--x',(20));

    const items = document.querySelectorAll('.cells');

    items.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = colour;
        });
});

});

thirtySides.addEventListener('click', function(){
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    
    makeDivs((30*30));
    x.style.setProperty('--x',(30));

    const items = document.querySelectorAll('.cells');

    items.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = colour;
        });
    });
});





function makeDivs(numDivs) {
for (let d=0; d < numDivs; d++){


    const cells = document.createElement('div');
    cells.classList.add('cells');
    container.appendChild(cells);
}};





/**
function changeColor(){
    boxes.style.backgroundColor = "#fa4";
};


 Old way of making divs using slider/number input, not sure how to make it work lol 
const newGridButton = document.querySelector('#new');
newGridButton.addEventListener('click', function() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    
    makeDivs((s*s));
    console.log(s);;
});
**/