// script.js

let scores = [];

function updateScore(score) {
  scores.push(score);
}

function finishRound() {
  // Display the chart with scores
  const chartContainer = document.getElementById("score-chart");
  const newGameIndex = scores.length;

  const newGame = document.createElement("div");
  newGame.textContent = `Game ${newGameIndex + 1}: ${scores.join(', ')}`;

  chartContainer.appendChild(newGame);

  // Clear the scores for the next round
  scores = [];
}
