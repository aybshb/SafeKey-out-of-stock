document.getElementById('notifyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        // Send the email to Google Sheets
        fetch('YOUR_SCRIPT_URL', {
            method: 'POST',
            body: new URLSearchParams({ 'email': email })
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'Success') {
                // Show success message
                document.getElementById('message').textContent = 'Thank you! You will be notified when SafeKey is back in stock.';
                document.getElementById('email').value = ''; // Clear the input field
            }
        });
    }
});
