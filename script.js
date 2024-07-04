document.addEventListener('DOMContentLoaded', function() {
  // Fetch the phone number input field
  var phoneNumberInput = document.getElementById('phoneNumber');

  // Add an event listener for input changes
  phoneNumberInput.addEventListener('input', function() {
    var phoneNumber = phoneNumberInput.value.trim();

    // Validate the phone number format
    if (phoneNumber.length > 9 && phoneNumber.length <= 10 && phoneNumber === '123456789') {
      displayError('phoneError', 'Invalid phone number format');
    } else {
      displayError('phoneError', '');
    }
  });
});

function validateForm() {
  // Fetching form elements
  var fullName = document.getElementById('fullName').value.trim();
  var email = document.getElementById('email').value.trim();
  var phoneNumber = document.getElementById('phoneNumber').value.trim();
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Error flags
  var hasError = false;

  // Reset previous error messages
  resetErrors();

  // Validation for Full Name
  if (fullName.length < 5) {
    displayError('fullNameError', 'Name must be at least 5 characters');
    hasError = true;
  }

  // Validation for Email
  if (!email.includes('@')) {
    displayError('emailError', 'Enter a valid email address');
    hasError = true;
  }

  // Validation for Phone Number
  if (phoneNumber.length !== 10 || phoneNumber === '1234567890' || isNaN(phoneNumber) || phoneNumber === '123456789') {
    displayError('phoneError', 'Enter a valid 10-digit phone number');
    hasError = true;
  }

  // Validation for Password
  if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
    displayError('passwordError', 'Password must be at least 8 characters and not be "password" or your name');
    hasError = true;
  }

  // Validation for Confirm Password
  if (password !== confirmPassword) {
    displayError('confirmPasswordError', 'Passwords do not match');
    hasError = true;
  }

  // Prevent form submission if there are errors
  if (hasError) {
    return false;
  }

  return true;
}

// Function to display error messages
function displayError(id, errorMessage) {
  var errorElement = document.getElementById(id);
  errorElement.innerHTML = errorMessage;
}

// Function to reset all error messages
function resetErrors() {
  var errorElements = document.querySelectorAll('.error');
  errorElements.forEach(function(element) {
    element.innerHTML = '';
  });
}

  