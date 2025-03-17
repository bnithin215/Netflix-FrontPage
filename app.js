document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector("#emailInput");
    const getStartedBtn = document.querySelector("#getStarted");
    const languageSelect = document.querySelector("select");

    // Email validation
    getStartedBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents unwanted redirection

        const email = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {
            alert("Email field cannot be empty!");
            return;
        }

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address!");
            return;
        }

        alert("Welcome to Netflix! Redirecting...");
        window.location.href = "https://www.netflix.com";
    });

    // Language change event
    languageSelect.addEventListener("change", function () {
        alert(`Language changed to: ${this.value}`);
    });
});
