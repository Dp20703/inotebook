const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


//Create a user using POST: "api/auth/createuser" // No login required
router.post('/createuser',
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    [body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 }),
    ], async (req, res) => {
        //If there are errors,return Bad request and the errors:
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //Check weather the user with this email exists already 
        try {
            let user = await User.findOne({ email: req.body.email });
            console.log(user)
            if (user) {
                return res.status(400).json({ error: "Sorry a user with this email already exits" })
            }
            //Create a new user:
            user = await Userd.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            res.json(user)
        }
        //Catch errors:
        catch (error) {
            console.error(error.message)
            res.status(500).json("Some error occured")
        }
    })
module.exports = router