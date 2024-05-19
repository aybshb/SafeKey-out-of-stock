// Variable to track form submission
var submitted = false;

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    submitted = true; // Set the submitted flag to true
    document.getElementById('notifyForm').submit(); // Submit the form
}

// Function to display the success message after the form is submitted
function displaySuccessMessage() {
    if (submitted) {
        document.getElementById('message').textContent = 'Thank you! You will be notified when SafeKey is back in stock.';
        document.getElementById('notifyForm').reset(); // Clear the input field
        submitted = false; // Reset the submitted flag
    }
}

// Add an event listener to the iframe to call displaySuccessMessage on load
document.getElementById('hidden_iframe').addEventListener('load', displaySuccessMessage);
