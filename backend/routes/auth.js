const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');


//ROUTE 1:Create a user using POST: "api/auth/createuser" // No login required
router.post('/createuser',
      [body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 }),
    ], async (req, res) => {

        //If there are errors,return Bad request and the errors:
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            //Check weather the user with this email exists already 
            let user = await User.findOne({ email: req.body.email });
            console.log(user)
            if (user) {
                return res.status(400).json({ error: "Sorry a user with this email already exits" })
            }
            //Create a new Password
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            //Create a new user:
            user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email,
            });
            const JWT_SECRET = "dpisgood$oy"
            const data = {
                user: {
                    id: user.id
                }
            }

            const Authtoken = jwt.sign(data, JWT_SECRET);
            res.json({ Authtoken })
            console.log(Authtoken)
            // res.json(user)
        }
        //Catch errors:
        catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error")
        }
    })

//ROUTE 2:Authenticate a user using POST: "api/auth/login" // No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannto be blank').exists(),],
    async (req, res) => {

        //If there are errors,return Bad request and the errors:
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ errors: "Please login with correct Crendentials" });
            }
            const comparePass = await bcrypt.compare(password, user.password);
            if (!comparePass) {
                return res.status(400).json({ errors: "Please login with correct Crendentials" });
            }
            const JWT_SECRET = "dpisgood$oy"
            const data = {
                user: {
                    id: user.id
                }
            }

            const Authtoken = jwt.sign(data, JWT_SECRET);
            res.json({ Authtoken })
            console.log(Authtoken)
        }
        //Catch errors:
        catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error")
        }
    })
//ROUTE 3:Get loggedin  user details using POST: "api/auth/getuser" // login required
router.post('/getuser', fetchuser, async (req, res) => {

    try {
        userid = req.user.id;
        const user = await User.findById(userid).select('-password');

        res.send(user)

    }
    //Catch errors:
    catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})
module.exports = router