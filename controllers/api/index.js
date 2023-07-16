const router = require('express').Router();

const apiRoutes = require('.');
const htmlRoutes = require('../html');

router.use('/', htmlRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => res.send('<h1>Oops! Wrong Route!</h1>'));

module.exports = router;
