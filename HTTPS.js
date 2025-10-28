const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data (for demo)
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// GET - Retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET - Retrieve single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST - Create a new user
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT - Replace entire user (by ID)
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) return res.status(404).json({ error: 'User not found' });
  if (!name) return res.status(400).json({ error: 'Name is required' });

  users[userIndex] = { id: parseInt(id), name };
  res.json(users[userIndex]);
});

// PATCH - Partially update user
app.patch('/users/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const user = users.find(u => u.id === parseInt(id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  Object.assign(user, updates);
  res.json(user);
});

// DELETE - Remove user
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  
  if (userIndex === -1) return res.status(404).json({ error: 'User not found' });
  
  const deletedUser = users.splice(userIndex, 1);
  res.json({ message: 'User deleted', user: deletedUser[0] });
});

// OPTIONS - List allowed methods
app.options('/users/:id', (req, res) => {
  res.set('Allow', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.send();
});

// HEAD - Same as GET but no body
app.head('/users', (req, res) => {
  res.set('X-Total-Count', users.length);
  res.send();
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Try these routes:');
  console.log('GET    /users');
  console.log('GET    /users/1');
  console.log('POST   /users');
  console.log('PUT    /users/1');
  console.log('PATCH  /users/1');
  console.log('DELETE /users/1');
  console.log('OPTIONS /users/1');
  console.log('HEAD   /users');
});
