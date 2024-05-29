const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


//Create a user using POST: "api/auth" //Doesn't require auth
router.post('/',
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    [body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 }),
    ], (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }).then(user => res.json(user)).catch(err => {
            console.log(err); res.json({ error: 'please enter a  unique value for email id', message: err.message })
        })

        // console.log(req.body)
        // const user=User(req.body)
        // user.save();
        // res.send(req.body)
        // res.send('hello') 

    })
module.exports = router