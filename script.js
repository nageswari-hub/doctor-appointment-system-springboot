(function() {
  emailjs.init("EJ14pUEqEvc4J2I5t"); // Your EmailJS Public Key
})();

// ---- BOOKING FORM ----
const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
  const params = new URLSearchParams(window.location.search);
  document.getElementById("doctor").value = params.get("doctor");
  document.getElementById("doctor_email").value = params.get("doctor_email");

  bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_wmvpl38", "template_h2aynf4", bookingForm)
      .then(() => {
        document.getElementById("acknowledgement").innerText =
          "✅ Doctor booked successfully! Email sent to the doctor.";
        bookingForm.reset();
      }, (err) => {
        alert("Error: " + JSON.stringify(err));
      });
  });
}

// ---- FEEDBACK FORM ----
const feedbackForm = document.getElementById("feedback-form");
if (feedbackForm) {
  const params = new URLSearchParams(window.location.search);
  document.getElementById("doctor").value = params.get("doctor");
  document.getElementById("doctor_email").value = params.get("doctor_email");

  feedbackForm.addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_wmvpl38", "template_tqdveal", feedbackForm)
      .then(() => {
        document.getElementById("feedback-msg").innerText =
          "🙏 Thanks for your feedback! It has been sent to the doctor.";
        feedbackForm.reset();
      }, (err) => {
        alert("Error: " + JSON.stringify(err));
      });
  });
}
  