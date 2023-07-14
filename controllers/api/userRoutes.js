const router = require('express').Router();
const sequelize = require('../../config/connection');
const {User} = require('../../models');


router.post('/', async (req, res) => {
    try {
const newUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
})
res.status(201).json(newUser);
    } catch (error) {
    console.log(error);
    res.status(500).json(error);
    }
});

router.get('/', async (res) => {
    try {
const users = await User.findAll({
    attributes: {
        exclude: ['password']
    },
});
res.status(200).json(users) 
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/:userId', async (req, res) => {
    try {
    const user = await User.findByPk(req.params.userId, {
        attributes: {
            exclude: ['password'],
        },
    });

    if (!user) return res.status(404).json({message: 'No user found.'})

    req.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// router.put('/userId', async (req, res) => {
//     try {
//        const updatedUser = await User.update(req.body, {
//         where: {
//             id: req.params.userId
//         },
//         individualHooks: true,
//        }); 

//        if (!updatedUser[0]) return res.status(404).json({message:
//         'No user found.'})

//        console.log(updatedUser);
//        res.status(202).json(updatedUser)
//     } catch (error) {
//         console.log(error);
//         res.status(500).json(error);
//     }
// });

module.exports = router;