// npm init -y
// npm install -S express
// endpoints
// refactoring
// handling undefined routes

// initializing the app
const express = require('express');
const user = require('./user.controller');
const app = express();
const port = 3000;

// endpoint
app.get('/', user.list);
app.get('/:id', user.get);
app.post('/', user.create);
app.put('/:id', user.update);
app.patch('/:id', user.update);
app.delete('/:id', user.destroy);

// undefined routes
app.get('*', (req, res) => {
  res.status(404).send('This page does not exist');
});

app.post('*', (req, res) => {
  res.status(404).send('This page does not exist');
});

// run the app
app.listen(port, () => {
  console.log('Launching the app');
});
