document.addEventListener('DOMContentLoaded', function() {

    // Getting the container element
    const container = document.getElementById('container');

    // Creating 16x16 grid
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }

    // Adding the container class to the container element
    container.classList.add('container');

});
