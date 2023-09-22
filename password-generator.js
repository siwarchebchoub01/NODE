const generatePassword = require("generate-password");

// Function to generate and log a random password
function generateAndLogPassword() {
  const password = generatePassword.generate({
    length: 12, // Adjust the length of the password as needed
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });

  console.log("Generated Password:", password);
}

// Call the function to generate and log a password
generateAndLogPassword();
