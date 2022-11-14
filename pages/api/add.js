import { connectToDatabase } from "../../server/db/conn";
var bcrypt = require('bcryptjs');
const { User, validateUser } = require('../../server/models/user');
export default async function handler(req, response) {

    const db = await connectToDatabase();
    const db_connect = db.database;

    const { error } = validateUser(req.body[0]);

    if (error) {
        return response.status(409).json({ message: error.details[0].message });
    }

    // let db_connect = dbo.getDb();

    let userExists = await db_connect.collection('users').findOne({ email: req.body[0].email });

    // Check necessary fields
    if (req.body[1].confirmPassword !== req.body[0].password) {
        return response.status(409).json({ message: 'Confirm password does not match your password.' });
    }
    if (req.body[1].agree === false) {
        return response.status(409).json({ message: 'Please agree to the terms and conditions of Froot.' });
    }
    if (userExists) {
        return response.status(409).json({ message: 'Email already in use!' });
    }

    // Create user
    else {
        const salt = await bcrypt.genSalt(10);
        let suPassHash = await bcrypt.hash(req.body[0].password, salt);
        let newUser = new User({
            email: req.body[0].email,
            password: suPassHash,
            firstName: req.body[0].firstName,
            lastName: req.body[0].lastName,
            questions: req.body[0].questions,
        });

        await db_connect.collection('users').insertOne(newUser, function (err, res) {
            if (err) throw err;
            console.log("User added to database.");
            response.json(res);
        });
    }
}