const router = require('express').Router();
const htmlRoutes = require('../html');

router.use('/', htmlRoutes);

router.use((req, res) => res.send('<h1>Oops! Wrong Route!</h1>'));

module.exports = router;