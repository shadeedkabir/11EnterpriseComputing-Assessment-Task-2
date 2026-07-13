// Getting the form
let form = document.getElementById("contactForm");

// Execute when the form is submitted
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get user input
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

        // Clear old messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    // Check if the form is valid
    let formIsValid = true;

    // Name validation
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Please enter your name.";
        formIsValid = false;
    }

    // Email validation
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Please enter your email.";
        formIsValid = false;
    }

    // Message validation
    if (message.trim() === "") {
        document.getElementById("messageError").innerText = "Please enter your message.";
        formIsValid = false;
    }

    // Success message
    if (formIsValid === true) {
        document.getElementById("successMessage").innerText =
        "Your message has been sent successfully!";
    }

});