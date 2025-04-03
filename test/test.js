// script.js
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const totalRounds = 1;
let currentRound = 0;
let score = 0;
let targetLetter = '';
let letterSequence = [];
let timerInterval;
let timeLeft = 10;  // 10 seconds per round
let timerStarted = false;  // Flag to check if timer has started
let gameOver = false;  // Flag to check if game is over

// Select HTML elements
const letterDisplay = document.getElementById('letter-display');
const statusDisplay = document.getElementById('status');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const failMessage = document.getElementById('fail-message');
const winMessage = document.getElementById('win-message');  // New Win Message
const winImage = document.getElementById('win-image');  // Background image for "You Won!"
const failureSound = document.getElementById('failure-sound');  // Failure sound element
const victorySound = document.getElementById('victory-sound');  // Victory sound element

// Start a new game
function startGame() {
    letterSequence = [];
    currentRound = 0;
    score = 0;
    timeLeft = 10;
    gameOver = false;
    hideMessages();  // Hide both fail and win messages at the start
    generateLetterSequence();
    nextRound();
}

// Hide messages
function hideMessages() {
    failMessage.classList.remove('visible');  // Hide the fail message
    winMessage.classList.remove('visible');  // Hide the win message
    winImage.classList.remove('visible');    // Hide the background image
    statusDisplay.textContent = `Press the right letter to begin!`;
}

// Generate a sequence of random letters
function generateLetterSequence() {
    letterSequence = Array.from({ length: totalRounds }, () => 
        letters[Math.floor(Math.random() * letters.length)]
    );
}

// Show the next round's target letter
function nextRound() {
    if (currentRound < totalRounds && !gameOver) {
        targetLetter = letterSequence[currentRound];
        letterDisplay.textContent = `Press: ${targetLetter}`;
        statusDisplay.textContent = `Round ${currentRound + 1} / ${totalRounds}. Press the right letter!`;
    } else {
        endGame();
    }
}

// Start the countdown timer
function startTimer() {
    if (timerStarted) return; // Prevent starting the timer again if it's already started

    timerStarted = true;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            stopTimer();
            playFailureSound();
            showFailureMessage();
        }
    }, 1000);
}

// Update the timer display
function updateTimerDisplay() {
    timerDisplay.textContent = `Time: ${timeLeft}s`;
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Show failure message when time is up
function showFailureMessage() {
    failMessage.classList.add('visible');
    statusDisplay.textContent = 'You Failed! Time ran out.';
}

// Play the failure sound
function playFailureSound() {
    failureSound.play();
}

// Show the win message and background image when all letters are pressed correctly
function showWinMessage() {
    winMessage.classList.add('visible');
    winImage.classList.add('visible');  // Show the background image
    statusDisplay.textContent = 'You Won! All letters pressed correctly!';
    playVictorySound();
}

// Play the victory sound
function playVictorySound() {
    victorySound.play();
}

// Pause the timer and end the game once all letters have been pressed
function endGame() {
    gameOver = true;
    stopTimer();
    statusDisplay.textContent = `Game Over! You scored: ${score}`;
    letterDisplay.textContent = '';
}

// Handle user input
document.addEventListener('keydown', (event) => {
    if (gameOver) return;  // Don't allow any input once the game is over

    if (!timerStarted) {
        startTimer();  // Start the timer on the first key press
    }

    if (event.key.toUpperCase() === targetLetter) {
        handleCorrectKeyPress();
    } else {
        handleWrongKeyPress();
    }
});

// Handle a correct key press
function handleCorrectKeyPress() {
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
    currentRound++;

    if (currentRound < totalRounds) {
        nextRound();
    } else {
        showWinMessage();
        stopTimer();
    }
}

// Handle a wrong key press
function handleWrongKeyPress() {
    timeLeft = Math.max(timeLeft - 2, 0);  // Prevent timer from going below 0
    updateTimerDisplay();
    statusDisplay.textContent = 'Wrong key pressed! Timer reduced by 2 seconds.';
}

// Start the game when the page is ready
startGame();