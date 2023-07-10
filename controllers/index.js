const router = require('express').Router();
const homeRoutes = require('./html/homeRoutes');

router.use("/", homeRoutes)

module.exports = router;