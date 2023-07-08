const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Review } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newReview = await Review.create({
            user_id: req.params.user_id,
            user_name: req.params.user_name,
            review_text: req.params.review_text,
        });
        res.status(201).json(newReview);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const reviews = await Review.findAll({
            include: [{ model: User, attributes: ['user_name'] }],
        });
        res.status(201).json(reviews);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.delete('/:review_id', async (req, res) => {
    try {
        const deletedReview = await Review.destroy({
            where: {
                id: req.params.review_id,
                userId: req.params.user_id,
            },
        });

        if (!deletedReview[0])
            return res
                .status(406)
                .json({ message: 'this request cannot be completed' });
        res.status(202).json(deletedReview);
    } catch {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;
