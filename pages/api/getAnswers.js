// This file contains the backend code to get answers to the MongoDB 'answers' collection.

import { connectToDatabase } from "../../server/db/conn";
import globalVal from "../middleware/global";
const { Answers } = require('../../server/models/answers');

export default async function handler(req, response) {
    const db = await connectToDatabase();
    const db_connect = db.database;

    let res = await db_connect.collection('answers').findOne({ userEmail: "sowerschloe@gmail.com" });
    console.log("Result:" + res)
    globalVal.answers = res;
}