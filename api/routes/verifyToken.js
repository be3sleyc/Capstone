const jwt = require('jsonwebtoken');

const tokendb = require('../db/tokens');

module.exports = (req, res, next) => {
    const token = req.header('auth-token');

    // if there is no token, deny
    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    try {
        let blacklist = tokendb.lookup(token);
        blacklist.then(row => {
            if (row.length > 0) {
                return res.status(401).json({ message: 'Access Denied' });
            } else {
                jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
                    if (err) {

                        return res.status(401).json({ message: 'Invalid Token' });
                    } else {
                        req.user = payload;
                        next();
                    }
                });
            }
        });
    } catch (e) {
        return res.status(500).json({ route_error: e });
    }
}