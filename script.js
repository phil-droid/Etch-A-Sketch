document.getElementById('new-grid').addEventListener('click', function() {
    // Get the number of squares per side from the user
    const numberOfSquares = parseInt(prompt('Enter the number of squares for the new grid (max 100):'));

    // Check if the number is valid
    if (numberOfSquares < 1 || numberOfSquares > 100) {
        alert('Invalid number of squares per side.');
        return;
    }

    // Remove the existing grid
    const container = document.getElementById('container');
    container.innerHTML = '';

    // Create a new grid
    for (let i = 0; i < numberOfSquares; i++) {
        for (let j = 0; j < numberOfSquares; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            //square.style.backgroundColor = rgb(random(), random(), random());
            container.appendChild(square);
        }
    }
    container.classList.add('container');
});
