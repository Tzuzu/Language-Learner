const router = require('express').Router();
const sequelize = require('../../config/connection');
const {User, Review} = require('../../models');

router.post('/', async (req, res) => {
    try {
    const newReview = await Review.create({
        user_id: req.params.user_id,
        user_name: req.params.user_name,
        user_email: req.params.user_email,
        review_text: req.params.review_text
    });
    res.status(201).json(newReview);
    }
    catch (error) {
     console.log(error);
    res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {   
    const reviews = await Review.findAll({
        include: [
            {model: User, attributes: ['user_name'] },
        ],
    });
    res.status(201).json(reviews);
    }
    catch (error) {
        console.log(error);
       res.status(500).json(error);
       }
});


module.exports = router;