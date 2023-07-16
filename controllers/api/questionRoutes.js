const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Question } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const questionData = await Question.findAll();
        const question = questionData.map((question) =>
            question.get({ plain: true })
        );
        res.render('japanese', {
            question: questionData,
        });
        res.status();
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;
