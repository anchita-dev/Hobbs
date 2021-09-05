function loginBtn() {
  document.getElementById("loginModal").style.display = "block";
}

function registerBtn() {
  document.getElementById("registrationModal").style.display = "block";
  document.getElementById("loginModal").style.display = "none";
}

function signup() {
  // fetch email-ID and password
  var email = document.getElementById("userID").value;
  var pw = document.getElementById("signup_pw").value;
  // Step 1 : Create an account in database
  // Step 2 : Send the verification link on email-ID
  // Step 3 : If user verifies the email go to the dashboard page
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pw)
    .then((success) => {
      // Deactivate the signup container and activate the verification container
      alert("Account created successfully");
      document.getElementById("verificationModal").style.display = "block";
    })
    .catch((error) => {
      // alert("Something wrong");
      alert("Something wrong");
    });
}

function login() {
  var email = document.getElementById("login_userID").value;
  var pw = document.getElementById("login_pw").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, pw)
    .then((success) => {
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert("Incorrect credentials");
    });
}

function sendemail() {
  var user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(function () {
      alert("Verification mail sent successfully");
    })
    .catch(function (error) {
      alert("Something wrong");
    });
}

var logModal = document.getElementById("loginModal");
var regModal = document.getElementById("registrationModal");
var regClose = document.getElementById("regClose");
var logClose = document.getElementById("logClose");

logClose.onclick = function () {
  logModal.style.display = "none";
};

regClose.onclick = function () {
  regModal.style.display = "none";
};
