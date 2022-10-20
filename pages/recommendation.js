import React, { useEffect } from "react";
import Image from "next/image"
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function Recommendation() {
    let name = "Nina"
    let arrRecommendations = [
        {
            brandName: "brand name",
            braDescription: "description",
            size: "30 F",
            price: "$60",
            type: "lingerie",
            feel: "comfort",
            end: "high-end"
        },
        {
            brandName: "brand name",
            braDescription: "description",
            size: "30 F",
            price: "$60",
            type: "lingerie",
            feel: "comfort",
            end: "high-end"
        }
    ]
    function braRecommendation(r) {
        return (
            <>
                <img src="lingerieshadow.svg"></img>
                <>
                    <div>{r.brandName}</div>
                    <div>{r.braDescription}</div>
                    <div>
                        <div>{r.size}</div>
                        <div>{r.size}</div>
                        <div>{r.price}</div>
                    </div>
                    <div>
                        <div>{r.type}</div>
                        <div>{r.feel}</div>
                        <div>{r.end}</div>
                    </div>
                </>
            </>
        )
    }
    return (
        // <div className="recommendation-wrapper">
        <>
            <div className="rec-row1">
                <div className="recommendation">Recommendation</div>
                <div className="recommendation-made">Made for {name}</div>
                <div className="recommendation-description">Your recommendation is based on your breast profile. This consists of breast shape, density, and your preference for how you want your bras to feel and look.</div>
                <div className="recommendation">SAY HELLO TO YOUR PERFECT BRA</div>
                <div className="rec-img-wrapper"><img className="rec-down-arrow" src="downArrow.svg"></img></div>
                <div className="rec-img-wrapper"><img className="rec-bra-shadow-hand" src="braShadowHand.jpeg"></img></div>
                <hr className="rec-line"></hr>
                <div className="recommendation">Recommendation</div>
                <div className="recommendation-made">Brands for {name}</div>
            </div>
            <div className="rec-row2">
                <div className="rec-filter">Filter</div>
                <div>
                    <button className="rec-filter-button">Size</button>
                    <button className="rec-filter-button">Sister Size</button>
                    <button className="rec-filter-button">Style</button>
                    <button className="rec-filter-button">Cost</button>
                    <button className="rec-filter-button">Type</button>
                </div>
                <hr ></hr>
                <div>{arrRecommendations.length.toString()} results</div>
                {
                    Array.from(arrRecommendations).map((r) => {
                        return (braRecommendation(r));
                    })
                }
            </div>
        </>
        // {/* </div > */ }
    )
}