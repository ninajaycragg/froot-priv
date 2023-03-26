import React, { useEffect } from "react";
import Image from "next/image"
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

// Defining the recommendation page
export default function Recommendation() {
    let quiz_answers = {
        name: "Chloe",
        age: 0,
        email: "",
        gender: ["Female"],
        medical: ["Masectomy"],
        types: ["Sports Bra"],
        styles: [""],
        colors: ["", ""],
        underwire: "",
        padding: "",
        top_bottom: "",
        outer_inner: "",
        density: "",
        fingers_between: "",
        projection: "",
        width: "",
        type: "Bell",
        loose_underbust: 29.0,
        snug_underbust: 29.0,
        tight_underbust: 27.0,
        standing_bust: 33.0,
        leaning_bust: 35.0,
        lying_bust: 34.0,
        favorite_brand: "",
        favorite_style: "",
        favorite_size_band: 0,
        favorite_size_cup: ""
    };
    let name = quiz_answers.name;
    let size = [];
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
    ];
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
    ];
    let arrRecommendations = [
        {
            brandName: "brand name",
            braDescription: "simple description of the bra brand from their website.",
            size: "30 F",
            price: "$60",
            type: "lingerie",
            feel: "comfort",
            end: "high end",
            image: '/plunge.svg',
        },

    ];
    let all_bras = [
        {
            brandName: "Freya",
            style: "Deco Moulded Plunge Bra (4234)",
            size: "30F",
            fits_ribcage: 29.4,
            stretched_band: 31.7,
            band_length: 26.0,
            description: "Freya Plunge Bra",
            price: "$50",
            type: "Plunge Bra",
            feel: "Comfotable",
            end: "Middle End",
            image: "/plunge.svg"
        },
        {
            brandName: "Panache Sport",
            style: "Sports Bra (5021)",
            size: "30E",
            fits_ribcage: 28.5,
            stretched_band: 29.9,
            band_length: 25.1,
            description: "Panache Spports Bra",
            price: "$50",
            type: "Sports Bra",
            feel: "Comfotable",
            end: "Middle End",
            image: "/plunge.svg"
        },
        {
            brandName: "Natori",
            style: "Feathers Contour Plunge Bra (730023)",
            size: "30DD",
            fits_ribcage: 28.3,
            stretched_band: 29.8,
            band_length: 21.6,
            description: "Natori Plunge Bra",
            pprice: "$50",
            type: "Plunge Bra",
            feel: "Comfotable",
            end: "Middle End",
            image: "/plunge.svg"
        },
        {
            brandName: "Brand",
            style: "Bra",
            size: "32DDD",
            fits_ribcage: 28.3,
            stretched_band: 29.8,
            band_length: 21.6,
            description: "Bra 1",
            pprice: "$50",
            type: "Bra",
            feel: "Comfotable",
            end: "Middle End",
            image: "/plunge.svg"
        },
        {
            brandName: "Brand",
            style: "Bra",
            size: "30D",
            fits_ribcage: 28.3,
            stretched_band: 29.8,
            band_length: 21.6,
            description: "Bra 2",
            pprice: "$50",
            type: "Bra",
            feel: "Comfotable",
            end: "Middle End",
            image: "/plunge.svg"
        },
        {
            brandName: "Brand",
            style: "Stretched T-Shirt",
            size: "30C",
            fits_ribcage: 29,
            stretched_band: 30,
            band_length: 22,
            description: "Bra 3",
            pprice: "$50",
            type: "Bra",
            feel: "Comfotable",
            end: "Middle End",
            image: "/plunge.svg"
        },
        {
            brandName: "Brand",
            style: "Sports Bra",
            size: "34D",
            fits_ribcage: 29,
            stretched_band: 30,
            band_length: 22,
            description: "Bra 4",
            pprice: "$50",
            type: "Bra",
            feel: "Comfotable",
            end: "Middle End",
            image: "/plunge.svg"
        },
        {
            brandName: "Brand",
            style: "Bra",
            size: "34DD",
            fits_ribcage: 29,
            stretched_band: 30,
            band_length: 22,
            description: "Bra 5",
            pprice: "$50",
            type: "Bra",
            feel: "Comfotable",
            end: "Middle End",
            image: "/plunge.svg"
        },
        {
            brandName: "Brand",
            style: "Bra",
            size: "34DDD",
            fits_ribcage: 29,
            stretched_band: 30,
            band_length: 22,
            description: "Bra 6",
            pprice: "$50",
            type: "Bra",
            feel: "Comfotable",
            end: "Middle End",
            image: "/plunge.svg"
        },
    ];
    function get_cupsize(bust) {
        let cupsize = ""
        if (bust < 1) {
            cupsize = "AA"
        }
        else if (bust == 1) {
            cupsize = "A"
        }
        else if (bust <= 2) {
            cupsize = "B"
        }
        else if (bust <= 3) {
            cupsize = "C"
        }
        else if (bust <= 4) {
            cupsize = "D"
        }
        else if (bust <= 5) {
            cupsize = "DD"
        }
        else if (bust <= 6) {
            cupsize = "DDD"
        }
        else if (bust <= 7) {
            cupsize = "E"
        }
        else if (bust <= 8) {
            cupsize = "F"
        }
        else if (bust <= 9) {
            cupsize = "FF"
        }
        else if (bust <= 10) {
            cupsize = "G"
        }
        else if (bust <= 11) {
            cupsize = "GG"
        }
        else if (bust <= 12) {
            cupsize = "H"
        }
        else if (bust <= 13) {
            cupsize = "HH"
        }
        else if (bust <= 14) {
            cupsize = "J"
        }
        else if (bust <= 15) {
            cupsize = "JJ"
        }
        else if (bust <= 16) {
            cupsize = "K"
        }
        else if (bust <= 17) {
            cupsize = "KK"
        }
        else if (bust <= 18) {
            cupsize = "L"
        }
        else if (bust <= 19) {
            cupsize = "LL"
        }
        else if (bust <= 20) {
            cupsize = "M"
        }
        else {
            cupsize = "MM"
        }
        return cupsize;
    }
    function get_cupsize_int(cupsize) {
        switch (cupsize) {
            case "AA":
                return 0;
            case "A":
                return 1;
            case "B":
                return 2;
            case "C":
                return 3;
            case "D":
                return 4;
            case "DD":
                return 5;
            case "DDD":
                return 6;
            case "E":
                return 7;
            case "F":
                return 8;
            case "FF":
                return 9;
            case "G":
                return 10;
            case "G":
                return 11;
            case "H":
                return 12;
            case "HH":
                return 13;
            case "J":
                return 14;
            case "JJ":
                return 15;
            case "K":
                return 16;
            case "KK":
                return 17;
            case "L":
                return 18;
            case "LL":
                return 19;
            case "M":
                return 20;
            case "MM":
                return 21;
            default:
                return 22;
        }
    }
    function get_percent(bra, bandsize, cupsize_int) {
        /*if (!potential_brands.includes(bra.brandName)) {
            return 0.0;
        }*/

        let num_style = 0;
        if (quiz_answers.medical.includes("Mastectomy")) {
            quiz_answers.styles.push("Soft seams");
            quiz_answers.styles.push("Wide underband");
            quiz_answers.styles.push("Deep front");
            quiz_answers.styles.push("Deep side");
            quiz_answers.styles.push("Full cups");
            quiz_answers.styles.push("Wireless");
            quiz_answers.styles.push("Soft");
            quiz_answers.styles.push("Wide");
            quiz_answers.styles.push("Deep");
        }
        if (quiz_answers.type.includes("Round")) {
            quiz_answers.styles.push("T-shirt");
            quiz_answers.styles.push("Balconette");
            quiz_answers.styles.push("Plunge");
        }
        if (quiz_answers.type.includes("Athletic")) {
            quiz_answers.styles.push("Demi");
            quiz_answers.styles.push("Push-up");
            quiz_answers.styles.push("Vertical seam");
            quiz_answers.styles.push("No horizontal seam");
            quiz_answers.styles.push("Bralette");
            quiz_answers.styles.push("Plunge");
            quiz_answers.styles.push("T-shirt");
        }
        if (quiz_answers.type.includes("East West")) {
            quiz_answers.styles.push("Contoured");
        }
        if (quiz_answers.type.includes("Side Set")) {
            quiz_answers.styles.push("Plunge");
        }
        if (quiz_answers.type.includes("Bell")) {
            quiz_answers.styles.push("Balconette");
            quiz_answers.styles.push("Plunge");
            quiz_answers.styles.push("Stretch");
            quiz_answers.styles.push("Stretched");
            quiz_answers.styles.push("Full coverage");
            quiz_answers.styles.push("Full");
            quiz_answers.styles.push("T-shirt");
        }
        if (quiz_answers.type.includes("Teardrop")) {
            quiz_answers.styles.push("Balconette");
            quiz_answers.styles.push("Demi");
        }
        if (quiz_answers.type.includes("Tubular")) {
            quiz_answers.styles.push("Molded");
            quiz_answers.styles.push("Push-up");
            quiz_answers.styles.push("Contoured");
        }
        if (quiz_answers.type.includes("Relaxed")) {
            quiz_answers.styles.push("Elastic");
            quiz_answers.styles.push("Elastic Neckline");
            quiz_answers.styles.push("Close-set");
            quiz_answers.styles.push("Close-set straps");
            quiz_answers.styles.push("T-shirt");
            quiz_answers.styles.push("Contoured");
        }
        if (quiz_answers.type.includes("Slender")) {
            quiz_answers.styles.push("Seamed");
            quiz_answers.styles.push("Seamed bra");
        }
        if (quiz_answers.type.includes("Asymetric")) {
            quiz_answers.styles.push("T-shirt");
            quiz_answers.styles.push("Stretch");
            quiz_answers.styles.push("Stretched");
            quiz_answers.styles.push("Molded");
            quiz_answers.styles.push("Removable Padding");
        }

        quiz_answers.styles = [...new Set(quiz_answers.styles)];

        quiz_answers.styles.forEach(element => {
            if (bra.style.toLowerCase().includes(element.toLowerCase())) {
                num_style += 1;
            }
        });

        let ribcage = 0;
        /*if ((bra.fits_ribcage <= (quiz_answers.snug_underbust + 1)) && (bra.fits_ribcage >= (quiz_answers.snug_underbust - 1))) {
            ribcage = 1;
        }*/
        let ribcage_diff = Math.abs(bra.fits_ribcage - quiz_answers.snug_underbust);
        if (ribcage_diff == 0) {
            ribcage = 10;
        }
        else if (ribcage <= 1) {
            ribcage = Math.round((ribcage_diff * 5) + 5);
        }
        else {
            ribcage = 5 / ribcage_diff;
        }

        let size = 0;
        let bra_band = parseInt(bra.size.slice(0, 2));
        let bra_cup = "";
        if (bra.size.length == 3) {
            bra_cup = bra.size.slice(-1);
        }
        else if (bra.size.length == 4) {
            bra_cup = bra.size.slice(-2);
        }
        else {
            bra_cup = bra.size.slice(-3);
        }

        let size_match = 0;
        if (bra_band == bandsize) {
            size_match += 10;
        }
        else if (bra_band == bandsize - 2 || bra_band == bandsize + 2) {
            size_match += 5;
        }
        else {
            return 0.0;
        }

        let bra_cup_int = get_cupsize_int(bra_cup);
        let cupsize = Math.ceil(cupsize_int);
        if (cupsize_int < 1) cupsize = 0;

        if (bra_cup_int == cupsize) {
            size_match += 10;
        }
        else if (bra_cup_int == cupsize - 1 || bra_cup_int == cupsize + 1) {
            size_match += 5;
        }
        else {
            return 0.0;
        }

        let match = (65 + size_match + num_style + ribcage);
        if (match > 100) match = 100;

        return match;
    }
    function match() {
        // get user's answers 
        // map answers to bra data
        // find % match
        // populate arrRecommendations

        // get band size
        let bandsize = 2 * Math.round(quiz_answers.snug_underbust / 2);
        if (Math.abs(quiz_answers.snug_underbust - quiz_answers.loose_underbust) < 2.0) {
            bandsize = bandsize + 2;
        }
        if (Math.abs(quiz_answers.snug_underbust - quiz_answers.loose_underbust) > 4.0) {
            bandsize = bandsize - 2;
        }
        // get cup size
        let bust = 0.0;
        // this assumes any one that is not a transgender man was assigned female at birth
        if (!(quiz_answers.gender.includes("Transgender") || quiz_answers.gender.includes("Transsexual")) && !quiz_answers.gender.includes("Female")) {
            // assigned female at birth
            if (Math.abs(quiz_answers.leaning_bust - quiz_answers.lying_bust) > 2.5) {
                bust = (quiz_answers.leaning_bust + quiz_answers.lying_bust + quiz_answers.standing_bust) / 3
            }
            else {
                bust = quiz_answers.leaning_bust
            }
        }
        else {
            // assigned male at birth
            bust = (quiz_answers.leaning_bust + 2 * quiz_answers.lying_bust + 2 * quiz_answers.standing_bust) / 5
        }
        bust = bust - quiz_answers.loose_underbust

        let band_diff = Math.round(Math.abs(bandsize - quiz_answers.loose_underbust)) / 2
        if (bandsize > quiz_answers.loose_underbust) {
            bust = bust - band_diff;
        }
        if (bandsize < quiz_answers.loose_underbust) {
            bust = bust + band_diff;
        }

        let cupsize_int = bust;
        let cupsize = get_cupsize(bust);

        size.push("" + bandsize + cupsize);
        size.push("" + (bandsize + 2) + get_cupsize(bust + 1));

        // get list of potential brands based on size
        /*let potential_brands = []
        brandSizes.forEach(element => {
            if (element.band_min <= bandsize && element.band_max >= bandsize && element.band_max <= cupsize_int && element.cup_max >= cupsize_int) {
                potential_brands.push(element.name)
            }
        });*/

        let map = new Map();
        all_bras.forEach(element => {
            let match = get_percent(element, bandsize, cupsize_int);
            //map.set(element, match);
            element.match = match;
        });

        let ordered = [...all_bras].sort((a, b) => b.match - a.match);
        let ret = ordered.slice(0, 5);

        arrRecommendations = [];
        for (let val of ret) {
            arrRecommendations.push(val);
        }

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
                <div className="rec-style-info-wrapper">
                    <div className="rec-size-title">{r.description}</div>
                    <div className="rec-style-description">{"Match: " + r.match + "%\n" + r.size + "\n\nNote 1\nNote 2\n Note 3"}</div>
                </div>
            </div>
            // have reccomendation data that matches FIGMA
        )
    }
    match();
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
                        <div className="rec-sizing-description">You probably have a size you've been wearing for awhile and this size might look a little different. Given that there isn't a standard across bra sizes, we make our recommendations based on your measurements, and our research about brands.</div>
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
                        <div className="rec-sizing-description">Because you have teardrop shaped breasts, an underwired balconette or demi cup bra with a vertical seam will fit bests. If you want to lift the breasts and make them look fuller on the top, aim for a vertical seam.</div>
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