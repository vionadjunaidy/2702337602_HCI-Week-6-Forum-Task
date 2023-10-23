const balanceValue = document.getElementById("balanceValue");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function() {
    if (balanceValue.style.display === "none") {
        balanceValue.style.display = "inline";
        toggleButton.textContent = "Hide";
    } else {
        balanceValue.style.display = "none";
        toggleButton.textContent = "Show";
    }
});