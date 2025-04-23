function createQTEGame(container, totalRounds = 15, timeLimit = 10) {
    // Clear anything previously in container
    container.innerHTML = '';

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let currentRound = 0;
    let score = 0;
    let targetLetter = '';
    let letterSequence = [];
    let timerInterval;
    let timeLeft = timeLimit;
    let timerStarted = false;
    let gameOver = false;

    // DOM Elements (created dynamically)
    const qteBox = document.createElement('div');
    const letterDisplay = document.createElement('h2');
    const statusDisplay = document.createElement('p');
    const scoreDisplay = document.createElement('p');
    const timerDisplay = document.createElement('p');
    const failMessage = document.createElement('div');
    const winMessage = document.createElement('div');
    const winImage = document.createElement('img');

    qteBox.id = 'qte-box';
    failMessage.id = 'fail-message';
    winMessage.id = 'win-message';
    winImage.id = 'win-image';
    winImage.src = 'https://via.placeholder.com/150'; // Example win image

    failMessage.textContent = "❌ You failed!";
    winMessage.textContent = "✅ You won!";
    failMessage.style.display = 'none';
    winMessage.style.display = 'none';
    winImage.style.display = 'none';

    // Append elements to container
    container.appendChild(qteBox); // Append the game box
    qteBox.append(letterDisplay, statusDisplay, scoreDisplay, timerDisplay, failMessage, winMessage, winImage);

    // Generate random letters
    function generateLetterSequence() {
        letterSequence = Array.from({ length: totalRounds }, () => letters[Math.floor(Math.random() * letters.length)]);
    }

    function nextRound() {
        if (currentRound < totalRounds && !gameOver) {
            targetLetter = letterSequence[currentRound];
            letterDisplay.textContent = `Press: ${targetLetter}`;
            statusDisplay.textContent = `Round ${currentRound + 1} / ${totalRounds}`;
        } else {
            endGame();
        }
    }

    function startTimer() {
        if (timerStarted) return;
        timerStarted = true;
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                stopTimer();
                handleFailure();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        timerDisplay.textContent = `⏱ Time left: ${timeLeft}s`;
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function handleFailure() {
        failMessage.style.display = 'block';
        gameOver = true;
        playSound('fail'); // Play failure sound
    }

    function handleVictory() {
        winMessage.style.display = 'block';
        winImage.style.display = 'block';
        playSound('win'); // Play win sound
    }

    function playSound(result) {
        const sound = new Audio(result === 'win' ? 'https://www.soundjay.com/button/beep-07.wav' : 'https://www.soundjay.com/button/beep-05.wav');
        sound.play();
    }

    function endGame() {
        gameOver = true;
        stopTimer();
        letterDisplay.textContent = '';
        statusDisplay.textContent = `Game Over! Score: ${score}`;
    }

    function handleCorrectKeyPress() {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        currentRound++;
        if (currentRound < totalRounds) {
            nextRound();
        } else {
            handleVictory();
            endGame();
        }
    }

    function handleWrongKeyPress() {
        if (timeLeft > 0) {
            timeLeft = Math.max(timeLeft - 1, 0); // Reduce time by 1, but don't go below 0
            updateTimerDisplay();
            playSound('fail'); // Play wrong key sound
        }
    }

    // Add the event listener for keydown events
    document.addEventListener('keydown', (event) => {
        if (gameOver) return;
        if (!timerStarted) startTimer();

        if (event.key.toUpperCase() === targetLetter) {
            handleCorrectKeyPress();
        } else {
            handleWrongKeyPress();
        }
    });

    // Start the game when the start button is pressed
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', () => {
        // Show the game box and hide the start button
        qteBox.style.display = 'block'; // Show the game box
        startButton.style.display = 'none'; // Hide the start button
        generateLetterSequence();
        nextRound();
        updateTimerDisplay();
    });
}

// Ensure the game is created after the page loads
window.onload = () => {
    const container = document.getElementById('game-container');
    createQTEGame(container);
};
