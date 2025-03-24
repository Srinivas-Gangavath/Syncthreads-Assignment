const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/map', authMiddleware, (req, res) => {
    res.json({
        center: [20.5937, 78.9629],
        zoom: 4
    });
});

module.exports = router;
