

// Select size input

const sizePicker = document.getElementById('sizePicker');

// Select color input

const colorPicker = document.getElementById('colorPicker');

// When size is submitted by the user, call makeGrid()

const pixelCanvas = document.getElementById('pixel_canvas');


function makeGrid() {

    pixelCanvas.innerHTML = "";

    const gridWidth = document.getElementById('input_width').value;

    const gridHeight = document.getElementById('input_height').value;

    for(let i = 0; i < gridHeight; i++){

        const tableRow = document.createElement("TR");

        for(let j = 0; j < gridWidth; j++){

            const tableCell = document.createElement("TD");

            tableRow.appendChild(tableCell);
        }

        pixelCanvas.appendChild(tableRow);
    }

}

sizePicker.addEventListener('click', function(event){
    event.preventDefault();
    console.log('click');
    if(event.target.type === 'submit'){
        console.log('submit');
        makeGrid();

    }
});

pixelCanvas.addEventListener('click', function(event){
    event.preventDefault();
    event.target.style.background = colorPicker.value;
});






