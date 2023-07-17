const router = require('express').Router();
const homeRoutes = require('./html/homeRoutes');

router.use("/", homeRoutes);

router.use((req, res) => res.send('<h1>Oops! Wrong Route!</h1>'));

module.exports = router;