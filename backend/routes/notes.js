const express = require('express');
const router = express.Router();

router.post('/fetchallnotes', (req, res) => {
    res.json([])
})
module.exports = router  