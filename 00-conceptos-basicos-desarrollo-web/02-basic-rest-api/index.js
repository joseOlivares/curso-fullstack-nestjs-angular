const express = require('express');
const app = express();
app.use(express.json());

// Datos de ejemplo
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
  { id: 6, name: "Frank" },
  { id: 7, name: "Grace" },
  { id: 8, name: "Hannah" },
  { id: 9, name: "Ivy" },
  { id: 10, name: "Jack" },
];

// GET todos los usuarios
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET usuario específico
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuario no encontrado');
  res.json(user);
});

// POST crear nuevo usuario
app.post('/api/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.status(201).json(user);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor REST corriendo en http://localhost:${PORT}`);
});