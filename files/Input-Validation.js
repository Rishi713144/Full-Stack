const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json()); // To parse JSON request bodies

app.post(
  '/register',
  [
    // Validate email
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email address')
      .normalizeEmail(), // Sanitizes the email (e.g., lowercase)

    // Validate password
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // If validation passes, process the registration
    const { email, password } = req.body;
    // In a real application, you would hash the password and save it to a database
    console.log(`User registered: Email - ${email}, Password - ${password}`);
    res.status(200).send('Registration successful!');
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
