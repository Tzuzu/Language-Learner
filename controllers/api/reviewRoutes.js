const router = require('express').Router();
const sequelize = require('../../config/connection');
const {User} = require('../../models');

router.post('/', async (req, res) => {
    try {

    }
    catch (error) {
     console.log(error);
    res.status(500).json(error);
    }
});

module.exports = router;