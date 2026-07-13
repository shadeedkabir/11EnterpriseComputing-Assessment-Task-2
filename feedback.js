// Getting the form
let form = document.getElementById("feedbackForm");

// Execute when the form is submitted
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get user input
    let name = document.getElementById("name").value;
    let rating = document.getElementById("rating").value;
    let message = document.getElementById("message").value;

    // Clear old messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("ratingError").innerText = "";
    document.getElementById("messageError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    // Check if the form is valid
    let formIsValid = true;

    // Name validation
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Please enter your name.";
        formIsValid = false;
    }

    // Rating validation
    if (rating.trim() === "") {
        document.getElementById("ratingError").innerText = "Please enter a rating.";
        formIsValid = false;
    }

    // Message validation
    if (message.trim() === "") {
        document.getElementById("messageError").innerText = "Please enter your feedback.";
        formIsValid = false;
    }

    // Success message
    if (formIsValid === true) {
        document.getElementById("successMessage").innerText =
        "Thank you for your feedback!";
    }

});