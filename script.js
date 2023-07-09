const counterValueElement = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const countHistory = document.getElementById("countHistory");

// initial counter value
let counter = 0;
let intervalId = null;

// Function to update the counter value
function updateCounterValue() {
  counterValueElement.textContent = counter;
}

// increment function
function incrementOrResetCounter() {
  counter++;
  updateCounterValue();
  updateCountHistory();

  // I Clear the previous interval timer and set a new one
  clearInterval(intervalId);
  intervalId = setInterval(resetCounter, 5000);
}

function resetCounter() {
  counter = 0;
  updateCounterValue();
  updateCountHistory();
  countHistory.value = "";
}

// Function to update the count history
function updateCountHistory() {
  countHistory.value += "         " + "hit me " + counter + "\n";
}

// event listener
incrementBtn.addEventListener("click", incrementOrResetCounter);

// Start the interval timer
intervalId = setInterval(resetCounter, 5000);

// Attach event listeners to reset the interval timer on user activity
window.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(resetCounter, 5000);
});
window.addEventListener("keydown", () => {
  clearInterval(intervalId);
  intervalId = setInterval(resetCounter, 5000);
});
window.addEventListener("mousemove", () => {
  clearInterval(intervalId);
  intervalId = setInterval(resetCounter, 5000);
});
window.addEventListener("touchmove", () => {
  clearInterval(intervalId);
  intervalId = setInterval(resetCounter, 5000);
});
