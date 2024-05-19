document.getElementById('notifyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const formData = new FormData();
    formData.append('entry.1308858926', email);

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSfiH7H7I5SivNjoakOYrw6uWtTZcythHqFJAXzTjv_0a6H5Zg/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(response => {
        // As no-cors mode won't give us response data, we assume success
        document.getElementById('message').textContent = 'Thank you! You will be notified when SafeKey is back in stock.';
        document.getElementById('notifyForm').reset(); // Clear the input field
    })
    .catch(error => {
        document.getElementById('message').textContent = 'An error occurred. Please try again.';
    });
});
