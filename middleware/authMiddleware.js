const jwt = require('jsonwebtoken');

function protectRoute(req, res, next) {
    const authHeader = req.headers.authorization;

    // 1️⃣ Check if token exists
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token, access denied 🚫' });
    }

    // 2️⃣ Get token string
    const token = authHeader.split(' ')[1];

    try {
        // 3️⃣ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // attach decoded data to request
        next(); // pass control to next middleware or route
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token ❌' });
    }
}

module.exports = protectRoute;
