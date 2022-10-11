const jwt = require('jsonwebtoken');
function verifyJWT(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    console.log(`Token:  ${token}`)
    if (token !== undefined) {
        jwt.verify(token, "secret", (err, decoded) => {
            console.log(err);
            if (err) return res.json({
                isLoggedIn: false,
                message: "Failed to authenticate."
            })

            req.user = {}
            req.user.email = decoded.email
            next();
        })
    }
    else {
        res.json({ message: "Incorrect token given", isLoggedIn: false })
    }
}

exports.verifyJWT = verifyJWT;