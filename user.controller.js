// handler o controller
const User = {
  get: (req, res) => {
    res.status(200).send('Successfully connected');
  },
  list: (req, res) => {
    res.status(200).send('Hello user');
  },
  create: (req, res) => {
    res.status(201).send('Creating user');
  },
  update: (req, res) => {
    res.sendStatus(204);
  },
  destroy: (req, res) => {
    res.sendStatus(204);
  },
}

module.exports = User;
