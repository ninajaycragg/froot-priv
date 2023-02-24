import React, { useEffect } from "react";
import Image from "next/image"
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

// Defining the recommendation page
export default function Recommendation() {
    let name = "Nina";
    let size = ['30F', '32E'];
    let arrProfile = [
        {
            attribute: 'Teardrop',
            description: 'Round but slightly less full at the top',
            link: 'Shape',
            image: '/asymmetric.svg'
        },
        {
            attribute: 'Asymmetric',
            description: 'One breast is larger than the other.',
            link: 'Shape',
            image: '/asymmetric.svg'
        },
        {
            attribute: 'Projected',
            description: 'Your breasts extend outwards from your chest a lot.',
            link: 'Projection',
            image: '/asymmetric.svg'
        },
        {
            attribute: 'Teardrop',
            description: 'Round but slightly less full at the top',
            link: 'Shape',
            image: '/asymmetric.svg'
        },
        {
            attribute: 'Asymmetric',
            description: 'One breast is larger than the other.',
            link: 'Shape',
            image: '/asymmetric.svg'
        },
    ]
    let arrStyles = [
        {
            style: 'Plunge',
            description: 'Plunge bras draw your breasts together from the center of the cup. They have a low v-cut, with limited padding but offer support.',
            image: '/plunge.svg',
        },
        {
            style: 'T-shirt',
            description: 'A t-shirt bra is a mid-coverage padded, underwire bra. It’s supposed to disappear elegantly under even the thinnest of shirts.',
            image: '/plunge.svg',
        },
        {
            style: 'Plunge',
            description: 'Plunge bras draw your breasts together from the center of the cup. They have a low v-cut, with limited padding but offer support.',
            image: '/plunge.svg',
        },
        {
            style: 'T-shirt',
            description: 'A t-shirt bra is a mid-coverage padded, underwire bra. It’s supposed to disappear elegantly under even the thinnest of shirts.',
            image: '/plunge.svg',
        }
    ]
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
    ];
    function match() {
        // get user's answers 
        // map answers to bra data
        // find % match
        // populate arrRecommendations
    }
    function breastProfile(r) {
        return (
            <div className="rec-profile">
                <img className="rec-profile-image" src={r.image}></img>
                <div className="rec-profile-info-wrapper">
                    <div className="rec-size-title">{r.attribute}</div>
                    <div className="rec-profile-description">{r.description}</div>
                    <div className="rec-size-link">{r.link}</div>
                </div>
            </div>
        )
    }
    function styleRecommendation(r) {
        return (
            <div className="rec-style">
                <img className="rec-style-image" src={r.image}></img>
                <div className="rec-style-info-wrapper">
                    <div className="rec-size-title">{r.style}</div>
                    <div className="rec-style-description">{r.description}</div>
                </div>
            </div>
        )
    }
    function braRecommendation(r) {
        return (
            <div className="rec-style">
                <img className="rec-style-image" src={r.image}></img>
            </div>
            // have reccomendation data that matches FIGMA
        )
    }
    return (
        // <div className="recommendation-wrapper">
        <>
            <div className="rec-row1">
                <div className="recommendation">Recommendation</div>
                <div className="recommendation-made">Made for <em>{name}</em></div>
                <div className="recommendation-description">Your recommendation is based on your breast profile. This consists of breast shape, density, and your preference for how you want your bras to feel and look.</div>
                <div className="recommendation">SAY HELLO TO YOUR PERFECT BRA</div>
                <div className="rec-img-wrapper"><img className="rec-down-arrow" src="downArrow.svg"></img></div>
                <div className="rec-img-wrapper"><img className="rec-bra-shadow-hand" src="braShadowHand.jpeg"></img></div>
                <hr className="rec-line"></hr>
                {/* Breast profile */}
                <div className="recommendation">A Little About You</div>
                <div className="recommendation-made"><em>{name}'s</em> Breast Profile</div>
                <div className="rec-sizing-wrapper">
                    <div className="rec-sizing-block">
                        <div className="rec-sizing-title">What does your bra size mean?</div>
                        <div className="rec-sizing-description">You probably have a size you’ve been wearing for awhile and this size might look a little different. Given that there isn’t a standard across bra sizes, we make our recommendations based on your measurements, and our research about brands.</div>
                        <img className="rec-retake" src="/retake.svg"></img>
                    </div>
                    <div className="rec-sizing-square">
                        <div className="rec-size">{size[0]}</div>
                        <div className="rec-info-wrapper">
                            <div className="rec-size-title">Bra Size</div>
                            <div className="rec-size-description">This is the primary bra size that we will base your recommendations off of.</div>
                            <div className="rec-size-link">Size</div>
                        </div>
                    </div>
                    <div className="rec-sizing-square">
                        <div className="rec-size-sister">{size[1]}</div>
                        <div className="rec-info-wrapper">
                            <div className="rec-size-title">Sister Size</div>
                            <div className="rec-size-description">This option will fit you less snugly, and will be an option in your recommendations.</div>
                            <div className="rec-size-link">Sister Size</div>
                        </div>
                    </div>
                </div>
                <div className="rec-profile-wrapper">
                    <div className="rec-sizing-block">
                        <div className="rec-sizing-title">What is a breast profile?</div>
                        <div className="rec-sizing-description">Everything you need to know about the shape of your breasts and how we are making your recommendations.</div>
                        <img className="rec-change" src="/retake.svg"></img>
                    </div>
                    <div className="rec-profile-scroll">
                        {
                            Array.from(arrProfile).map((r) => {
                                return (breastProfile(r));
                            })
                        }
                    </div>
                </div>
                <hr className="rec-line"></hr>
                <div className="recommendation">let's help find your fit</div>
                <div className="recommendation-made"><em>Bra Style</em> Recommendations</div>
                <div className="rec-style-wrapper">
                    <div className="rec-sizing-block">
                        <div className="rec-sizing-title">How does bra style affect fit?</div>
                        <div className="rec-sizing-description">Because you have teardrop shaped breasts, an underwired balconette or demi cup bra with a vertical seam will fit bests. If you want to lift the breasts and make them look fuller on the top, aim for a vertical seam.</div>
                        <img className="rec-change" src="/retake.svg"></img>
                    </div>
                    <div className="rec-profile-scroll">
                        {
                            Array.from(arrRecommendations).map((r) => {
                                return (braRecommendation(r));
                            })
                        }
                    </div>

                </div>
                <hr className="rec-line"></hr>
                <div className="recommendation">let's help find your fit</div>
                <div className="recommendation-made"><em>Best</em> Bra Types for {name}</div>
                <div className="rec-style-wrapper">
                    <div className="rec-sizing-block">
                        <div className="rec-sizing-title">How does bra style affect fit?</div>
                        <div className="rec-sizing-description">Because you have teardrop shaped breasts, an underwired balconette or demi cup bra with a vertical seam will fit bests. If you want to lift the breasts and make them look fuller on the top, aim for a vertical seam.</div>
                        <img className="rec-change" src="/retake.svg"></img>
                    </div>
                    <div className="rec-profile-scroll">
                        {
                            Array.from(arrStyles).map((r) => {
                                return (styleRecommendation(r));
                            })
                        }
                    </div>
                </div>
                <hr className="rec-line"></hr>
                <div className="recommendation">let's make this easy</div>
                <div className="recommendation-made">Bra Size <em>Search</em></div>
            </div>
        </>
        // NEED TO DO BRA SIZE SEARCH
        // {/* </div > */ }
    )
}