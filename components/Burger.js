import React from 'react';
import Link from 'next/link';
import { auth } from '../firebase-config';

export default function Burger() {
    // add auth checks to display different menu
    const user = auth.currentUser;
    return (
        <div className="menu-items">
            <div className="item">Breast Profile</div>
            <hr />
            <div className="item">The Froot Salad</div>
            <hr />
            <Link href="/quizIntro">Quiz</Link>
            <hr />
            <div className="item">Store</div>
            <hr />
            <Link href="/about">About Us</Link>
        </div>
    )
}