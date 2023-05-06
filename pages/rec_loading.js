import globalVal from "../middleware/global";
import { useRouter } from "next/router";
import React, { useEffect } from "react";


async function getanswers() {
    let answers = [];
    const router = useRouter();
    useEffect(() => {
        fetch('http://localhost:3000/api/getAnswers', {
            headers: {
                'Email': localStorage.getItem('email')
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log("DATA:", data)
                answers = data.answers.answers;
                globalVal.answers = answers;
            }).then(() => {
                router.push('/recommendation');
            })
    })
}

export default function Rec_Loading() {

    getanswers();

    return (
        // <div className="recommendation-wrapper">
        <>
            <div className="rec-row1">
                <div className="recommendation">Recommendation Loading...</div>
            </div>
        </>
    )
}