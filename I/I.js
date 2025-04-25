document.addEventListener("DOMContentLoaded", () => {
    let sequence = [];
    let currentIndex = 0;
    let timeRemaining = 0;
    let gameStarted = false;
    let timeLimit = 10000;  // Default 10 seconds
    let sequenceLength = 15;
    let lastTimestamp = 0; // Store the last timestamp to calculate time deltas
    let isGameOver = false; // Flag to track if the game is over
  
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const statusDiv = document.getElementById("status");
    const sequenceDiv = document.getElementById("sequence");
    const winSound = document.getElementById("winSound");
    const loseSound = document.getElementById("loseSound");
    const timerDiv = document.getElementById("timer");
    const resultMessageDiv = document.getElementById("resultMessage");
  
    // Add listener to the Start button
    const startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", startQTE);
  
    // Function to reset the game state
    function resetGame() {
      sequence = [];
      currentIndex = 0;
      timeRemaining = 0;
      gameStarted = false;
      isGameOver = false;
      sequenceDiv.textContent = "";
      statusDiv.textContent = "Press the keys in order!";
      timerDiv.textContent = "Time Left: 00:00";
      resultMessageDiv.classList.add("hidden"); // Hide the result message on reset
      resultMessageDiv.textContent = ""; // Clear any previous text
    }
  
    // Function to start the game
    function startQTE() {
      // Reset the game state before starting a new one
      resetGame();
  
      // Set difficulty
      const difficulty = document.getElementById("difficulty").value;
      switch (difficulty) {
        case "easy":
          sequenceLength = 10;
          timeLimit = 15000;
          break;
        case "medium":
          sequenceLength = 15;
          timeLimit = 10000;
          break;
        case "hard":
          sequenceLength = 20;
          timeLimit = 7000;
          break;
      }
  
      // Generate new sequence
      for (let i = 0; i < sequenceLength; i++) {
        sequence.push(letters[Math.floor(Math.random() * letters.length)]);
      }
  
      sequenceDiv.textContent = sequence.join(" ");
      statusDiv.textContent = "Press the keys in order!";
      timeRemaining = timeLimit;
      gameStarted = false; // Reset gameStarted before beginning new game
      lastTimestamp = 0; // Reset last timestamp
      isGameOver = false;
    }
  
    // Timer update function using requestAnimationFrame
    function updateTimer(timestamp) {
      if (isGameOver) return; // Stop the timer once the game is over
  
      if (!lastTimestamp) lastTimestamp = timestamp; // Initialize last timestamp on first call
  
      // Calculate elapsed time
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
  
      // Decrease the time by the elapsed time in milliseconds
      timeRemaining -= delta;
  
      if (timeRemaining <= 0) {
        timeRemaining = 0; // Ensure it doesn't go negative
        endGame(false); // Trigger game over if timer hits 0
      }
  
      // Update timer display
      const minutes = Math.floor(timeRemaining / 60000);
      const seconds = Math.floor((timeRemaining % 60000) / 1000);
      timerDiv.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
      // Continue the timer loop if the game is not over
      if (!isGameOver) {
        requestAnimationFrame(updateTimer);
      }
    }
  
    // Key press listener
    document.addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();
  
      // If the game hasn't started yet, start the timer when the first correct key is pressed
      if (!gameStarted && key === sequence[0]) {
        gameStarted = true;
        lastTimestamp = 0; // Reset timestamp when game starts
        requestAnimationFrame(updateTimer);  // Start the timer loop
      }
  
      // Check if the key matches the current sequence key
      if (key === sequence[currentIndex]) {
        currentIndex++;
        statusDiv.textContent = `✔️ Correct: ${key}`;
  
        // Remove the pressed key from the sequence
        sequence[currentIndex - 1] = ""; // Replace the pressed key with an empty string
  
        // Update the sequence display without the pressed key
        sequenceDiv.textContent = sequence.join(" ");
  
        // Check if the player completed the sequence
        if (currentIndex === sequence.length) {
          endGame(true); // End game if the sequence is completed
        }
      } else {
        // If incorrect, penalize 1 second and continue the game
        timeRemaining -= 1000;
        if (timeRemaining <= 0) timeRemaining = 0; // Ensure it doesn't go negative
        statusDiv.textContent = `❌ Wrong Key: ${key}`;
        sequenceDiv.textContent = sequence.join(" ");
      }
    });
  
    // Function to handle end of game
    function endGame(won) {
      isGameOver = true;
  
      // Stop the timer
      cancelAnimationFrame(lastTimestamp);
  
      // Show the result message
      resultMessageDiv.classList.remove("hidden");
  
      if (won) {
        // Player won, show win message and play sound
        resultMessageDiv.textContent = "YOU WIN!";
        resultMessageDiv.classList.add("success");
        winSound.play();  // Play win sound
      } else {
        // Player lost, show loss message and play sound
        resultMessageDiv.textContent = "YOU LOSE!";
        resultMessageDiv.classList.add("failure");
        loseSound.play();  // Play lose sound
      }
    }
  });