const router = require('express').Router();
const homeRoutes = require('./html/homeRoutes');
const apiRoutes = require('./api');

router.use(`/`, homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Oops! Wrong Route!'));

module.exports = router;