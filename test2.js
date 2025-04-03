// QTE Game Logic (script.js)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); 
const totalRounds = 15;
let currentRound = 0;
let score = 0;
let targetLetter = '';
let letterSequence = [];
let timerInterval;
let timeLeft = 10;  // 10 seconds per round
let timerStarted = false;  // Flag to check if timer has started
let gameOver = false;  // Flag to check if game is over

// Function to initialize the game in a specific container
function createQTEGame(container) {
    // Create the necessary HTML elements for the QTE game
    container.innerHTML = `
        <h1>Quick Time Event - Press the Letters!</h1>
        <div id="letter-display">Press: </div>
        <div id="timer">Time: 10s</div>
        <div id="status">Press the right letter to begin!</div>
        <div id="score">Score: 0</div>
        <div id="fail-message" class="hidden">YOU DIED</div>
        <div id="win-message" class="hidden">You Won!</div>
        <div id="win-image" class="hidden"></div>
        <!-- Failure sound -->
        <audio id="failure-sound" src="elden-ring-death-sound-made-with-Voicemod.mp3" preload="auto"></audio>
        <!-- Victory sound -->
        <audio id="victory-sound" src="hooray-made-with-Voicemod.mp3" preload="auto"></audio>
    `;
  
    // Select HTML elements inside the container
    const letterDisplay = container.querySelector('#letter-display');
    const statusDisplay = container.querySelector('#status');
    const scoreDisplay = container.querySelector('#score');
    const timerDisplay = container.querySelector('#timer');
    const failMessage = container.querySelector('#fail-message');
    const winMessage = container.querySelector('#win-message');
    const winImage = container.querySelector('#win-image');
    const failureSound = container.querySelector('#failure-sound');
    const victorySound = container.querySelector('#victory-sound');
  
    // Variables for game logic
    let currentRound = 0;
    let score = 0;
    let targetLetter = '';
    let letterSequence = [];
    let timerInterval;
    let timeLeft = 10;
    let timerStarted = false;
    let gameOver = false;
  
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
  
    // Start the game
    generateLetterSequence();
    nextRound();
}