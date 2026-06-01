// Firebase Auth reference
const auth = firebase.auth();

// Signup
function signupUser(event) {
  event.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("✅ Account created successfully!");
      window.location.href = "login.html";
    })
    .catch(error => alert(error.message));
}

// Login
function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("✅ Login successful!");
      window.location.href = "index.html"; // Redirect to doctor list
    })
    .catch(error => alert(error.message));
}

// Logout
function logoutUser() {
  auth.signOut().then(() => {
    alert("👋 Logged out successfully!");
    window.location.href = "login.html";
  });
}

// Check login status (for booking & feedback pages)
function checkAuth() {
  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "login.html";
    } else {
      // Auto-fill user info
      const nameField = document.querySelector('input[name="patient_name"], input[name="name"]');
      const emailField = document.querySelector('input[name="patient_email"], input[name="email"]');
      if (nameField) nameField.value = user.displayName || "Logged-in User";
      if (emailField) emailField.value = user.email;
    }
  });
}
