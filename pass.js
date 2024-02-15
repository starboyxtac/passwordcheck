<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Password Checking</title>
</head>
<body>
  <script>
    var correctPassword = "your_password";  // Replace with your actual password
    var maxAttempts = 3;
    var attempts = 0;
    var isBlocked = false;

    function checkPassword() {
      if (isBlocked) {
        alert("Account is blocked. Please contact support.");
        return;
      }

      var enteredPassword = prompt("Enter your password:");

      if (enteredPassword === correctPassword) {
        alert("Thank you for logging in.");
      } else {
        attempts++;

        if (attempts < maxAttempts) {
          alert("Incorrect password. " + (maxAttempts - attempts) + " attempt(s) remaining.");
        } else {
          alert("Account blocked. Please contact support.");
          isBlocked = true;
        }
      }
    }

    // Uncomment the line below if you want to call the function automatically
    // checkPassword();
  </script>
</body>
</html>
