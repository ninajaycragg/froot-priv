// This file contains the backend code to add answers to the MongoDB 'answers' collection.

import { connectToDatabase } from "../../server/db/conn";
const { Answers } = require('../../server/models/answers');
export default async function handler(req, response) {
    const db = await connectToDatabase();
    const db_connect = db.database;

    let answersExist = await db_connect.collection('answers').findOne({ userEmail: req.body.userEmail });

    const answersInstance = new Answers({
        userEmail: req.body.userEmail,
        answers: req.body.answers
    });
    if (answersExist == null) {
        await db_connect
            .collection('answers')
            .insertOne(answersInstance, function (err, res) {
                if (err) throw err;
                console.log('User answers added to database.');
                response.json(res);
            });
    }
    else {
        await db_connect.collection('answers').updateOne(
            { userEmail: answersInstance.userEmail },
            { $set: { answers: answersInstance.answers } },
            function (err, res) {
                if (err) throw err;
                console.log('User answers updated to database.');
                response.json(res);
            }
        );
    }

}
