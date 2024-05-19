// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsMDC9RA-NlpZB3l2JNOcPzCmXGGmhu0k",
    authDomain: "safekey-2285f.firebaseapp.com",
    projectId: "safekey-2285f",
    storageBucket: "safekey-2285f.appspot.com",
    messagingSenderId: "518367541621",
    appId: "1:518367541621:web:0c4d3495035495c078fb3c",
    measurementId: "G-9K5FVJQCTW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

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
