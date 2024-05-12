document
  .getElementById("payment-form-instagram")
  .addEventListener("submit", function (event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Redirect to payment.html
    window.location.href = "payment.html";
  });
