const express = require('express');
const app = express();

// A simple logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

// A custom header middleware
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'MyAwesomeApp');
  next();
});

// A route handler
app.get('/', (req, res) => {
  res.send('Hello from the main route!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
