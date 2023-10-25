// This file contains the backend code to get answers to the MongoDB 'answers' collection.

import { connectToDatabase } from "../../server/db/conn";
import globalVal from "../../middleware/global";
import { useEffect } from "react";

export default async function handler(req, res) {
    const db = await connectToDatabase();
    const db_connect = db.database;

    /*let email = "";
    useEffect(() => {
        email = localStorage.getItem('email');
    })*/
    let email = req.headers.email;

    let rets = await db_connect.collection('answers').findOne({ userEmail: email });
    //console.log("Result from getAnswers/:")// + rets.answers)
    globalVal.answers = rets;
    return res.json({ answers: rets })
}