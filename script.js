document.querySelector('form').addEventListener('submit', function(event) {
    document.getElementById('message').textContent = 'Thank you! You will be notified when SafeKey is in stock.';
    document.querySelector('form').reset(); // Clear the input field
});
