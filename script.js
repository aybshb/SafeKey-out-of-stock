document.getElementById('notifyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    db.collection("emails").add({
        email: email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        document.getElementById('message').textContent = 'Thank you! You will be notified when SafeKey is back in stock.';
        document.getElementById('notifyForm').reset(); // Clear the input field
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        document.getElementById('message').textContent = 'An error occurred. Please try again.';
    });
});

