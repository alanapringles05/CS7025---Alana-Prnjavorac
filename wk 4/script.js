document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const errorMessage = document.getElementById("errorMessage");

    // Basic validation
    if (name === "" || email === "" || phone === "") {
        errorMessage.textContent = "All fields are required.";
    } else if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email.";
    } else {
        errorMessage.textContent = "Form submitted successfully!";
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
