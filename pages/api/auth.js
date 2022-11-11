
const jwt = require('jsonwebtoken');

export default function handler(req, res) {
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
            return res.json({ isLoggedIn: true, email: req.user.email })
        })
    }
    else {
        res.json({ message: "Incorrect token given", isLoggedIn: false })
    }
}
