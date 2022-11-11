import { connectToDatabase } from "../../server/db/conn";

export default async function handler(req, res) {

    const db = await connectToDatabase();
    const db_connect = db.database;
    let myQuery = { email: req.body.email };
    let newValues = {
        $set: { questions: req.body.questions }
    };
    db_connect.collection('users').updateOne(myQuery, newValues, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
}