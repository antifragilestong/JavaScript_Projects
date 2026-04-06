// Tictactoe game implementation in JavaScript

// Variable to keep track of whose turn it is
let activePlayer = 'X';

// Array to storm moves - use this to determine win conditions
let selectedSquares = [];

// Function to place an X or O in a square
function placeXOrO(squareNumber) {
    // Check if the square has already been selected
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //Variable to store the HTML element that was clicked
        let select = document.getElementById(squareNumber);
        //Determines the active player and places the icon
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //Adds the square number and active player to the array
        selectedSquares.push(squareNumber + activePlayer);
        //Calls a function to check for any win conditions
        checkWinConditions();
        //Switches active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //Function to play placement sound
        audio('./media/place.mp3');
        //Checks to see if it is the computer's turn
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 100);
        }
        //Returning true is needed for our checkWinConditions() function to work
        return true;
    }   

    //Pick a random square for the computer's turn
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to determin if there is a win condition.
//The drawline function is called to draw a line on the screen if the win condition is met.
function checkWinConditions() {
    // X 0,1,2 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3,4,5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6,7,8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }    
    // X 0,3,6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }    
    // X 1,4,7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2,5,8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 0,4,8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(50, 50, 558, 558) } 
    // X 6,4,2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(50, 558, 558, 50) }
    // O 0,1,2 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3,4,5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6,7,8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0,3,6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1,4,7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2,5,8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 0,4,8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(50, 50, 558, 558) }
    // O 6,4,2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(50, 558, 558, 50) }
    // This condition checks for a tie. If none of the above conditions are met and 9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //Function to play the tie game sound
        audio('./media/tie.mp3');
        //Function to reset the game in a tie
        setTimeout(function () { resetGame(); }, 1000);
    }

    //This function checks for each win condition as it parses the selectedSquares array. It returns true if all 3 conditions are met.
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; }
    }
}

//Clears the board and the array to restart the game after a win or tie
function resetGame() {
    //Loop to iterate through each HTML square element and remove the background image
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}

// Plays the auduio files
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//Function to draw the line across winning coordinates
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
}


function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    c.stroke();
    if (x1 <= x2 && y1 <= y2) {
        if (x < x2) { x += 10; }
        if (y < y2) { y += 10; }
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    }
    if (x1 <= x2 && y1 >= y2) {
        if (x < x2) { x += 10; }
        if (y > y2) { y -= 10; }
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }


//Clears the board after animation
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}


//Disables clicking for computer's turn
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}















