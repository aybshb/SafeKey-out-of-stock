// Variable to track form submission
var submitted = false;

// Add an event listener to the form to set the submitted flag to true on submit
document.getElementById('notifyForm').addEventListener('submit', function(event) {
    submitted = true;
});

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
