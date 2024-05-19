function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var form = event.target;
    var submitted = false;

    // Create a new FormData object to hold the form data
    var formData = new FormData(form);

    // Send the form data using fetch
    fetch(form.action, {
        method: form.method,
        body: formData,
        mode: 'no-cors' // Important: Use 'no-cors' to prevent CORS issues
    }).then(function() {
        // Display the success message
        document.getElementById('message').textContent = 'Thank you! You will be notified when SafeKey is back in stock.';
        form.reset(); // Clear the input field
    }).catch(function(error) {
        console.error('Error:', error);
    });

    return false; // Prevent the default form submission
}
