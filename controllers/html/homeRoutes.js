const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { User } = require('../../models/User');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
          attributes: { exclude: ['password'] },
          order: [['name', 'ASC']],
        });
    
        const users = userData.map((project) => project.get({ plain: true }));
    
        res.render('main', {
          users,
          // Pass the logged in flag to the template
          logged_in: req.session.logged_in,
        });
      } catch (err) {
        res.status(500).json(err);
      }
});


router.get('/french', withAuth, async (req, res) => {
    try {
        const users = userData.map((project) => project.get({ plain: true }));
    res.render('french', {
        users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    })
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/spanish', withAuth, async (req, res) => {
    try {
    const users = userData.map((project) => project.get({ plain: true }));
    res.render('spanish', {
        users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    })
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/japanese', withAuth, async (req, res) => {
    try {
    const users = userData.map((project) => project.get({ plain: true }));
    res.render('japanese', {
        users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    })
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;