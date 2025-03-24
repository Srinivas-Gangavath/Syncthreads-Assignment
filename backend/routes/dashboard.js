const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/dashboard', authMiddleware, (req, res) => {
    const cards = [
        { id: 1, title: 'Card One', description: 'Details about card one.' },
        { id: 2, title: 'Card Two', description: 'Details about card two.' },
        { id: 3, title: 'Card Three', description: 'Details about card three.' }
    ];
    res.json(cards);
});

module.exports = router;
