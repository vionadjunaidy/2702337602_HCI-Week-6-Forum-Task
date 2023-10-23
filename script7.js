document.addEventListener("DOMContentLoaded", function () {
    const amountInput = document.getElementById("amountInput");
    const currencySpan = document.querySelector(".currency");

    amountInput.addEventListener("input", function () {
        currencySpan.style.visibility = this.value ? "hidden" : "visible";
    });
});
