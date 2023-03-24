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
    ]
    let brandSizes = [
        {
            name: "",
            band_min: 0.0,
            band_max: 0.0,
            cup_min: 0,
            cup_max: 0
        }
    ]
    let arrAnswers = [
        {
            name: "",
            age: 0,
            email: "",
            gender: ["", ""],
            medical: ["", ""],
            types: ["", ""],
            styles: ["", ""],
            colors: ["", ""],
            underwire: "",
            padding: "",
            top_bottom: "",
            outer_inner: "",
            density: "",
            fingers_between: "",
            projection: "",
            width: "",
            type: "",
            loose_underbust: 0.0,
            snug_underbust: 0.0,
            tight_underbust: 0.0,
            standing_bust: 0.0,
            leaning_bust: 0.0,
            lying_bust: 0.0,
            favorite_brand: "",
            favorite_style: "",
            favorite_size_band: 0,
            favorite_size_cup: "",
        }
    ];
    class Bra {
        /*constructor() {
            this.brandName = "";
            this.style = "";
            this.size = "";
            this.fits_ribcage = 0.0;
            this.stretched_band = 0.0;
            this.band_length = 0.0;
            this.cup_width = 0.0;
            this.cup_depth = 0.0;
            this.wire_length = 0.0;
            this.gore_height = 0.0;
            this.wing_height = 0.0;
            this.cup_sep = 0.0;
            this.cup_height = 0.0;
            this.hooks = 0;
            this.bras = 0;
        }*/
        constructor(bN, st, si, fr, sb, bl, cw, cd, wl, gh, wh, cs, ch, h, b) {
            this.brandName = bN;
            this.style = st;
            this.size = si;
            this.fits_ribcage = fr;
            this.stretched_band = sb;
            this.band_length = bl;
            this.cup_width = cw;
            this.cup_depth = cd;
            this.wire_length = wl;
            this.gore_height = gh;
            this.wing_height = wh;
            this.cup_sep = cs;
            this.cup_height = ch;
            this.hooks = h;
            this.bras = b;
        }
    }
    function get_percent(bra, potential_brands, bandsize, cupsize_int) {
        if (!potential_brands.includes(bra.brandName)) {
            return 0.0;
        }

        var num_style = 0;
        if (arrAnswers.medical.includes("Mastectomy")) {
            arrAnswers.styles.push("Soft seams");
            arrAnswers.styles.push("Wide underband");
            arrAnswers.styles.push("Deep front");
            arrAnswers.styles.push("Deep side");
            arrAnswers.styles.push("Full cups");
            arrAnswers.styles.push("Wireless");
            arrAnswers.styles.push("Soft");
            arrAnswers.styles.push("Wide");
            arrAnswers.styles.push("Deep");
        }
        if (arrAnswers.type.includes("Round")) {
            arrAnswers.styles.push("T-shirt");
            arrAnswers.styles.push("Balconette");
            arrAnswers.styles.push("Plunge");
        }
        if (arrAnswers.type.includes("Athletic")) {
            arrAnswers.styles.push("Demi");
            arrAnswers.styles.push("Push-up");
            arrAnswers.styles.push("Vertical seam");
            arrAnswers.styles.push("No horizontal seam");
            arrAnswers.styles.push("Bralette");
            arrAnswers.styles.push("Plunge");
            arrAnswers.styles.push("T-shirt");
        }
        if (arrAnswers.type.includes("East West")) {
            arrAnswers.styles.push("Contoured");
        }
        if (arrAnswers.type.includes("Side Set")) {
            arrAnswers.styles.push("Plunge");
        }
        if (arrAnswers.type.includes("Bell")) {
            arrAnswers.styles.push("Balconette");
            arrAnswers.styles.push("Plunge");
            arrAnswers.styles.push("Stretch");
            arrAnswers.styles.push("Stretched");
            arrAnswers.styles.push("Full coverage");
            arrAnswers.styles.push("Full");
            arrAnswers.styles.push("T-shirt");
        }
        if (arrAnswers.type.includes("Teardrop")) {
            arrAnswers.styles.push("Balconette");
            arrAnswers.styles.push("Demi");
        }
        if (arrAnswers.type.includes("Tubular")) {
            arrAnswers.styles.push("Molded");
            arrAnswers.styles.push("Push-up");
            arrAnswers.styles.push("Contoured");
        }
        if (arrAnswers.type.includes("Relaxed")) {
            arrAnswers.styles.push("Elastic");
            arrAnswers.styles.push("Elastic Neckline");
            arrAnswers.styles.push("Close-set");
            arrAnswers.styles.push("Close-set straps");
            arrAnswers.styles.push("T-shirt");
            arrAnswers.styles.push("Contoured");
        }
        if (arrAnswers.type.includes("Slender")) {
            arrAnswers.styles.push("Seamed");
            arrAnswers.styles.push("Seamed bra");
        }
        if (arrAnswers.type.includes("Asymetric")) {
            arrAnswers.styles.push("T-shirt");
            arrAnswers.styles.push("Stretch");
            arrAnswers.styles.push("Stretched");
            arrAnswers.styles.push("Molded");
            arrAnswers.styles.push("Removable Padding");
        }

        arrAnswers.styles.forEach(element => {
            if (bra.style.toLowerCase().includes(element.toLowerCase())) {
                num_style += 1;
            }
        });

        var ribcage = 0;
        if ((bra.fits_ribcage <= (arrAnswers.snug_underbust + 1)) && (bra.fits_ribcage >= (arrAnswers.snug_underbust - 1))) {
            ribcage = 1;
        }

        var size = 0;
        var bra_band = bra.size.slice(0, 2);
        var bra_cup = "";
        if (bra.size.length == 3) {
            bra_cup = bra.size.slice(-1);
        }
        else if (bra.size.length == 4) {
            bra_cup = bra.size.slice(-2);
        }
        else {
            bra_cup = bra.size.slice(-3);
        }

        var size_match = 0;
        if (bra_band == bandsize) {
            size_match += 10;
        }
        else if (bra_band == bandsize - 1 || bra_band == bandsize + 1) {
            size_match += 5;
        }
        else {
            return 0.0;
        }

        if (bra_cup == cupsize_int) {
            size_match += 10;
        }
        else if (bra_cup == cupsize_int - 1 || bra_cup == cupsize_int + 1) {
            size_match += 5;
        }
        else {
            return 0.0;
        }

        return (75 + size_match + style_match) % 100;
    }
    function get_cupsize(bust) {
        var cupsize = ""
        if (bust < 1) {
            cupsize == "AA"
        }
        else if (bust == 1) {
            cupsize == "A"
        }
        else if (bust <= 2) {
            cupsize == "B"
        }
        else if (bust <= 3) {
            cupsize == "C"
        }
        else if (bust <= 4) {
            cupsize == "D"
        }
        else if (bust <= 5) {
            cupsize == "DD"
        }
        else if (bust <= 6) {
            cupsize == "DDD"
        }
        else if (bust <= 7) {
            cupsize == "E"
        }
        else if (bust <= 8) {
            cupsize == "F"
        }
        else if (bust <= 9) {
            cupsize == "FF"
        }
        else if (bust <= 10) {
            cupsize == "G"
        }
        else if (bust <= 11) {
            cupsize == "GG"
        }
        else if (bust <= 12) {
            cupsize == "H"
        }
        else if (bust <= 13) {
            cupsize == "HH"
        }
        else if (bust <= 14) {
            cupsize == "J"
        }
        else if (bust <= 15) {
            cupsize == "JJ"
        }
        else if (bust <= 16) {
            cupsize == "K"
        }
        else if (bust <= 17) {
            cupsize == "KK"
        }
        else if (bust <= 18) {
            cupsize == "L"
        }
        else if (bust <= 19) {
            cupsize == "LL"
        }
        else if (bust <= 20) {
            cupsize == "M"
        }
        else {
            cupsize == "MM"
        }
        return cupsize;
    }
    function match() {
        // get user's answers 
        // map answers to bra data
        // find % match
        // populate arrRecommendations

        // get band size
        var bandsize = 2 * Math.round(arrAnswers.snug_underbust / 2);
        if (Math.abs(arrAnswers.snug_underbust - arrAnswers.loose_underbust) < 2.0) {
            bandsize = bandsize + 2;
        }
        if (Math.abs(arrAnswers.snug_underbust - arrAnswers.loose_underbust) > 4.0) {
            bandsize = bandsize - 2;
        }
        // get cup size
        var bust = 0.0;
        // this assumes any one that is not a transgender man was assigned female at birth
        if (!(arrAnswers.gender.includes("Transgender") || arrAnswers.gender.includes("Transsexual")) && !arrAnswers.gender.includes("Female")) {
            if (Math.abs(arrAnswers.leaning_bust - arrAnswers.lying_bust) > 2.5) {
                bust = (arrAnswers.leaning_bust + arrAnswers.lying_bust + arrAnswers.standing_bust) / 3
            }
            else {
                bust = arrAnswers.leaning_bust
            }
        }
        else {
            bust = (arrAnswers.leaning_bust + 2 * arrAnswers.lying_bust + 2 * arrAnswers.standing_bust) / 5
        }
        bust = bust - arrAnswers.loose_underbust

        var band_diff = Math.abs(bandsize - arrAnswers.loose_underbust)
        if (bandsize > arrAnswers.loose_underbust) {
            bust = bust - band_diff;
        }
        if (bandsize < arrAnswers.loose_underbust) {
            bust = bust + band_diff;
        }

        var cupsize_int = bust;
        var cupsize = get_cupsize(bust);

        // get list of potential brands based on size
        var potential_brands = []
        brandSizes.forEach(element => {
            if (element.band_min <= bandsize && element.band_max >= bandsize && element.band_max <= cupsize_int && element.cup_max >= cupsize_int) {
                potential_brands.push(element.name)
            }
        });

        let all_bras = []
        let map = new Map();
        all_bras.forEach(element => {
            var match = get_percent(element, potential_brands, bandsize, cupsize_int);
            map.set(element, match);
        });
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