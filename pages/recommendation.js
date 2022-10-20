import React, { useEffect } from "react";
import Image from "next/image"
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function Recommendation() {
    let name = "Nina"
    let arrRecommendations = [
        {
            brandName: "brand name",
            braDescription: "simple description of the bra brand from their website.",
            size: "30 F",
            price: "$60",
            type: "lingerie",
            feel: "comfort",
            end: "high end"
        },
        {
            brandName: "brand name",
            braDescription: "simple description of the bra brand from their website.",
            size: "30 F",
            price: "$60",
            type: "lingerie",
            feel: "comfort",
            end: "high end"
        }
    ]
    function braRecommendation(r) {
        return (
            <div className="bra-rec-wrapper">
                <img className="rec-bra-image" src="braRecommendation.jpeg"></img>
                <div className="rec-bra-info">
                    <div className="rec-bra-name">{r.brandName}</div>
                    <div className="rec-bra-description">{r.braDescription}</div>
                    <div className="rec-bra-info-wrap">
                        <div className="rec-bra-info-button">{r.size}</div>
                        <div className="rec-bra-info-button">{r.size}</div>
                        <div className="rec-bra-info-button">{r.price}</div>
                    </div>
                    <div className="rec-bra-info-wrap">
                        <div className="rec-bra-info-button">{r.type}</div>
                        <div className="rec-bra-info-button">{r.feel}</div>
                        <div className="rec-bra-info-button">{r.end}</div>
                    </div>
                </div>
            </div>
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
                <div className="rec-results">{arrRecommendations.length.toString()} results</div>
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