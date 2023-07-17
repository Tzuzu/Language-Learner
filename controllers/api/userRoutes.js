const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    // const { username, email, password } = req.body;
    const newUser = await User.create({ username: req.body.username, email: req.body.email, password: req.body.email });
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.loggedIn = true;
      res.status(201).json(newUser);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (!user) return res.status(400).json({ message: 'The email or password is incorrect.' })
    const validPassword = await user.checkPassword(req.body.password);
    if (!validPassword) return res.status(400).json({ message: 'The email or password is incorrect.'});
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.status(202).json(user);
      console.log(user);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  };
});

router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  };
})

module.exports = router;