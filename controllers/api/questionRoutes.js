const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Question } = require('../../models');

router.get('/japanese', async (req, res) => {
    try {
        const questionData = await Question.findAll();
        const questions = questionData.map((question) =>
            question.get({ plain: true })
        );
        res.render('japanese', { questions });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/french', async (req, res) => {
    try {
        const questionData = await Question.findAll();
        const questions = questionData.map((question) =>
            question.get({ plain: true })
        );
        res.render('french', { questions });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/spanish', async (req, res) => {
    try {
        const questionData = await Question.findAll();
        const questions = questionData.map((question) =>
            question.get({ plain: true })
        );
        res.render('spanish', { questions });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;
