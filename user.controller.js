// handler o controller
const User = {
  get: (req, res) => {
    res.status(200).send('Conectado con éxito');
  },
  list: (req, res) => {
    res.status(200).send('Hola usuario');
  },
  create: (req, res) => {
    res.status(201).send('Creando usuario');
  },
  update: (req, res) => {
    res.sendStatus(204);
  },
  destroy: (req, res) => {
    res.sendStatus(204);
  },
}

module.exports = User;
