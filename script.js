const container = document.getElementById('grid');
var x = document.querySelector('#grid');
let colour = '#fa4';

//creating grid of cells on loadup
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





// creating variable for all side button
const tenSides = document.getElementById('ten');
const twentySides = document.getElementById('twenty');
const thirtySides = document.getElementById('thirty');


// functions that activate when number of sides are picked
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




//function that make the grid with a given number of cells (same in x and y)
function makeDivs(numDivs) {
for (let d=0; d < numDivs; d++){


    const cells = document.createElement('div');
    cells.classList.add('cells');
    container.appendChild(cells);
}};


const orange = document.getElementById('orange'); 
const green = document.getElementById('green');
const random = document.getElementById('random');

green.addEventListener('click', function(){
    colour='green';
    console.log(colour);
});

orange.addEventListener('click', function(){
    colour='#fa4';
    console.log(colour);
})

random.addEventListener('click',function(){
    colour = randColour();
    console.log(colour);
})




function randColour(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}





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