// This file contains the backend code to edit a user's information and re-add it to the MongoDB 'users' collection.
import { connectToDatabase } from "../../server/db/conn";
var bcrypt = require('bcryptjs');

export default async function handler(req, response) {

    const db = await connectToDatabase();
    const db_connect = db.database;

    let user = await db_connect.collection('users').findOne({ email: req.body.origEmail });
    if (!user) {
        return response.status(409).json({ message: `Account does not exist. ${req.body.origEmail}` });
    }
    let myQuery = { email: user.email };

    let new_email = user.email, new_firstName = user.firstName, new_lastName = user.lastName, new_password = user.password;

    if (req.body.email !== undefined) {
        new_email = req.body.email;
    }
    if (req.body.firstName !== undefined) {
        new_firstName = req.body.firstName;
    }
    if (req.body.lastName !== undefined) {
        new_lastName = req.body.lastName;
    }

    if (req.body.password !== undefined && req.body.password.length >= 5) {
        const salt = await bcrypt.genSalt(10);
        let suPassHash = await bcrypt.hash(req.body.password, salt);
        new_password = suPassHash;
    }

    let newValues = {
        $set: { email: new_email, firstName: new_firstName, lastName: new_lastName, password: new_password }
    };
    console.log(newValues);
    db_connect.collection('users').updateOne(myQuery, newValues, function (err, res) {
        if (err) throw err;
        console.log("updated");
        response.json(res);
    });
}
