var submitted = false;

document.getElementById('notifyForm').addEventListener('submit', function(event) {
    submitted = true;
});

function showThankYouMessage() {
    document.getElementById('message').textContent = 'Thank you! You will be notified when SafeKey is back in stock.';
    document.getElementById('notifyForm').reset(); // Clear the input field
}
