const express = require('express');
const protectRoute = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/secret', protectRoute, (req, res) => {
    res.json({ message: `Welcome, user ${req.user.userId} 🎉` });
});

module.exports = router;
