const firebaseConfig = {
    apiKey: "AIzaSyD4zCrEhn9YslYkM-k7oUxK224HA11ha5Q",
    authDomain: "outofstock-d3f1e.firebaseapp.com",
    databaseURL: "https://outofstock-d3f1e-default-rtdb.firebaseio.com",
    projectId: "outofstock-d3f1e",
    storageBucket: "outofstock-d3f1e.appspot.com",
    messagingSenderId: "197853445692",
    appId: "1:197853445692:web:c439869a957a70ab204d39",
    measurementId: "G-FMZ38QHY18"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference db
  var contactFormDB = firebase.database().ref('notifyForm')

  document.getElementById('notifyForm').addEventListener('submit',submitForm)
  
  function submitForm(e){
    e.preventDefault();
    var emailid = getElementVal ("emailid")

    saveMessages(emailid);

    //thank you message

    document.getElementById('thankYouMessage').style.display = 'block'

  }

  const saveMessages = (emailid) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        emailid : emailid
    })
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;  
}
