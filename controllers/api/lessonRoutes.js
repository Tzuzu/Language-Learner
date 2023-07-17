const router = require('express').Router();
const sequelize = require('../../config/connection');
const {User, Lesson} = require('../../models');

//Grabs the lesson for the user
router.get('/', async (req, res) => {
    try {
    const lesson = await Lesson.findAll(req.body.lessonId, {
        //Lesson content
    })
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;