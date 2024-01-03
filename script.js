const inputBox = document.getElementById("input-box");
const label = document.querySelector("#input-container label");

inputBox.addEventListener("input", () => {
  if (inputBox.value.length > 0) {
    label.classList.add("active");
  } else {
    label.classList.remove("active");
  }
});

let typingTimer;
const doneTypingInterval = 10000; // 10 saniye

function startOrResetTimer() {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(startAnimation, doneTypingInterval);
}

function startAnimation() {
  document.getElementById("input-label").classList.add("active");
}
