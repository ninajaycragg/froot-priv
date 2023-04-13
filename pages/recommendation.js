import React, { useEffect } from "react";
import Image from "next/image"
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const userEmail = "sowerschloe@gmail.com"

async function get_answers() {
    let ans = await fetch(`/api/getAnswers`, {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('token')
        },
    }).then(res => res.json())
        .then(data => {
            return data;
        })
    return ans;
}

// Defining the recommendation page
export default function Recommendation() {

    let answers = [
        'Chloe',
        '21',
        ['Cisgender', 'Female'],
        ['None'],
        [
            'Push-up ~ Pulls breasts upward then inward bringing breasts closer.'
        ],
        ['Romantic ~ Lots of lace.'],
        ['Skin Tones'],
        'Yes, all of them',
        'Yes, all of them',
        'Full on Bottom ~ Nipples are Above Dotted Line.',
        'Outer Fullness ~ Nipples are Towards each other.',
        'Soft ~ Fingers do not bounce back, indent is made in your skin in response to finger.',
        '1',
        ['High ~ Above your elbows.'],
        ['Shallow ~ Breast tissue spread closer to body.'],
        [
            'Narrow Width ~ Breats are more narrow at the top than the bottom.'
        ],
        ['Round ~ Equally full at the top and bottom.'],
        '30',
        '29',
        '28',
        '35',
        '34',
        '34',
        '30',
        'Yes',
        'Round ~ Equally full at the top and bottom.'
    ]

    useEffect(() => {
        //answers = get_answers();
    }, []);

    let quiz_answers = {
        name: answers[0],
        age: answers[1],
        gender: answers[2],
        medical: answers[3],
        types: answers[4],
        styles: answers[5],
        colors: answers[6],
        underwire: answers[7],
        padding: answers[8],
        top_bottom: answers[9],
        outer_inner: answers[10],
        density: answers[11],
        fingers_between: answers[12],
        height: answers[13],
        projection: answers[14],
        width: answers[15],
        type: answers[16],
        loose_underbust: answers[16],
        snug_underbust: answers[17],
        tight_underbust: answers[18],
        standing_bust: answers[19],
        leaning_bust: answers[20],
        lying_bust: answers[21],
        favorite_brand: "",
        favorite_style: "",
        favorite_size_band: answers[22],
        favorite_size_cup: ""
    };

    let name = quiz_answers.name;
    let size = [];
    let arrProfile = [];
    let arrStyles = [];
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
    let styles_map_arr = [
        ["T-shirt", "A t-shirt bra is a mid-coverage padded, underwire bra. It's known as a t-shirt bra because they are supposed to disappear elegantly under even the thinnest of shirts."],
        ["Balconette", "A balconette bra provides less coverage, with lower cut cups. The straps are wide set and provide an open necklace. A balconette bra will lift your breasts up, not together."],
        ["Demi", "A demi bra has lower cut cups, even underwire, and partial coverage to emphasize natural cleavage."],
        ["Push-up", "Push-up bras have extra padding and underwire to provide more cleavage and places breasts closer together."],
        ["Vertical Seams", "Vertical seamed bras provide more lift to the breasts. They lift the breasts up and off the ribcage."],
        ["Horizontal Seams", "Horizontal seams offer a more conical shape to the breast (think bullet-bra but less pronounced). Typically they are in the form of a balconette bra without padding."],
        ["Bralette", "Bralettes come in a range of styles, from halter neck, to triangle top. They are typically wireless. They provide little support and can be used to hide nipples, or add style to an outfit."],
        ["Contoured", "Contoured bras enhance your curves by sculpting your breasts for a symmetrical, rounded shape. It provides a natural lift, and it's designed with a layer of padding in the cup. "],
        ["Stretch lace / fabric", "The top cups are stretchy, so you're still getting the lift and stability from the bottom. The lace gives a smooth finish under clothes. It molds to a breast's natural shape and is good for breasts that change size during your period."],
        ["Full coverage", "Full Coverage bras are also designed with more coverage in the cups to fully contain breast tissue and prevent breasts from spilling out of the cups along the neckline and underarm."],
        ["Molded", "A molded bra gives your breasts a round shape. They are typically seamless."],
        ["Elastic neckline", "Elastic neckline"],
        ["Close-set straps", "Close-set straps"],
        ["Seamed bra", "Seamed bra"],
        ["Removable padding", "Removable padding"],
        ["Soft seams", "Soft seams"],
        ["Wide underband", "Wide underband"],
        ["Deep front / side panels", "Deep front / side panels"],
        ["Full cups", "Full cups"],
        ["Wireless", "Wireless rely on the cut of the fabric and stitching to create shape and provide support. They provide less shape and lift, but can be comfortable for smaller-medium breasted women who need less support and don't like underwires."],
        ["Plunge", "Plunge bras draw your breasts together from the center of the cup. They have a low v-cut, with limited padding but offer support."],
        ["Racerback bra", "Racerback bras are good for posture, because they let your shoulders sit naturally and take the weight off of them. The straps add an angle of lift to your bra, which offers more support. They also prevent strap slipping."],
        ["Cut and sew bras", "Cut and sew bras offer a unique support, and are best for larger-breasted women. They directed seams lift the breasts up, without added pudding. They often also have beautiful embroidery added."],
        ["Longline plunge bra", "Longline bras provide more support because they have a wider band. It can actually help improve posture. The plunge version also brings the breasts together offering side support."],
        ["Front-closure bra", "Front-closure bra"],
        ["Lace racerback bra", "Similar to the racerback bra function, but with an added touch of style being the lace-look which is nice if you need to wear a bra and want it to accessorize your outfit."],
        ["Unlined plunge bra", "An unlined plunge bra offers support from the sides, drawing the breasts up and together. Because it is padding-free, it mimics the breasts natural shape more, but with a little lift."],
        ["Strapless bra", "Strapless bras are great for tops with thin straps or no straps. It is best to get these with smaller bands to make sure they stay up properly."],
        ["Re-usable pasties", "Re-usable pasties cover just your nipples. They come in a range of skin tones and have a rubber consistency. They are sticky on the back and attach comfortably + directly to your nipples."],
        ["Disposable pasties", "Disposable pasties cover your nipples. They typically come in a range of shapes, like hearts, stars, and flowers, and can be either practical or fun under a sheer top."],
    ]
    const styles_map = new Map(styles_map_arr);
    let images_map_arr = [
        ["T-shirt", "styles/t-shirt-bra.png"],
        ["Balconette", "styles/balconette-bra.png"],
        ["Demi", "styles/demi-bra.png"],
        ["Push-up", "styles/plunge-bra.png"],
        ["Vertical Seams", "styles/vertical-seamed-bra.png"],
        ["Horizontal Seams", "styles/horizontal-seamed-bra.png"],
        ["Bralette", "styles/bralette.png"],
        ["Contoured", "styles/contour-bra.png"],
        ["Stretch lace / fabric", "styles/stretch-lace-fabric.png"],
        ["Full coverage", "styles/full-coverage.png"],
        ["Molded", "styles/plunge-bra.png"],
        ["Elastic neckline", "styles/plunge-bra.png"],
        ["Close-set straps", "styles/plunge-bra.png"],
        ["Seamed bra", "styles/plunge-bra.png"],
        ["Removable padding", "styles/plunge-bra.png"],
        ["Soft seams", "styles/plunge-bra.png"],
        ["Wide underband", "styles/plunge-bra.png"],
        ["Deep front / side panels", "styles/plunge-bra.png"],
        ["Full cups", "styles/full-coverage.png"],
        ["Wireless", "styles/strapless-bra.png"],
        ["Plunge", "styles/plunge-bra.png"],
        ["Racerback bra", "styles/racerback-bra.png"],
        ["Cut and sew bras", "styles/cut-and-sew-bra.png"],
        ["Longline plunge bra", "styles/longline-plunge.png"],
        ["Front-closure bra", "styles/plunge-bra.png"],
        ["Lace racerback bra", "styles/stretch-lace-fabric.png"],
        ["Unlined plunge bra", "styles/unlined-plunge.png"],
        ["Strapless bra", "styles/strapless-bra.png"],
        ["Re-usable pasties", "styles/re-usable-pasties.png"],
        ["Disposable pasties", "styles/disposable-pasties.png"],
    ]
    const images_map = new Map(images_map_arr);
    const profile_options = [
        {
            find: 'Full on Bottom ~ Nipples are Above Dotted Line.',
            attribute: 'Full on Bottom',
            description: 'Nipples are Above Dotted Line.',
            link: 'Fullness',
            image: '/question19/full_on_bottom.png'
        },
        {
            find: 'Full on Top ~ Nipples are Below Dotted Line.',
            attribute: 'Full on Top',
            description: 'Nipples are Below Dotted Line.',
            link: 'Fullness',
            image: '/question19/full_on_top.png'
        },
        {
            find: 'Even Distribution ~ Nipples are at the Dotted Lines.',
            attribute: 'Even Distribution',
            description: 'Nipples are at the Dotted Lines.',
            link: 'Fullness',
            image: '/question19/even_dist.png'
        },
        {
            find: 'Outer Fullness ~ Nipples are Towards each other.',
            attribute: 'Outer Fullness',
            description: 'Nipples are Towards each other.',
            link: 'Fullness',
            image: '/question20/outer_fullness.png'
        },
        {
            find: 'Inner Fullness ~ Nipples are Opposite of Each Other.',
            attribute: 'Inner Fullness',
            description: 'Nipples are Opposite of Each Other.',
            link: 'Fullness',
            image: '/question20/inner_fullness.png'
        },
        {
            find: 'Even Distribution ~ Nipples are pointed straight forward.',
            attribute: 'Even Distribution',
            description: 'Nipples are pointed straight forward.',
            link: 'Fullness',
            image: '/question20/even_dist.png'
        },
        {
            find: 'High ~ Above your elbows.',
            attribute: 'High',
            description: 'Above your elbows.',
            link: 'Height',
            image: '/question23/high.png'
        },
        {
            find: 'Medium ~ At elbows.',
            attribute: 'Medium',
            description: 'At elbows.',
            link: 'Height',
            image: '/question23/medium.png'
        },
        {
            find: 'Low ~ Below elbows.',
            attribute: 'Low',
            description: 'Below elbows.',
            link: 'Height',
            image: '/question23/low.png'
        },
        {
            find: 'Shallow ~ Breast tissue spread closer to body.',
            attribute: 'Shallow',
            description: 'Breast tissue spread closer to body.',
            link: 'Projection',
            image: '/question24/shallow.png'
        },
        {
            find: 'Projected ~ Stick out more in the front.',
            attribute: 'Projected',
            description: 'Sticks out more in the front.',
            link: 'Projection',
            image: '/question24/projected.png'
        },
        {
            find: 'Medium ~ Sticks out equally.',
            attribute: 'Medium',
            description: 'Sticks out equally.',
            link: 'Projection',
            image: '/question24/medium_projection.png'
        },
        {
            find: 'Narrow Width ~ Breasts are more narrow at the top than the bottom.',
            attribute: 'Narrow Width',
            description: 'Breasts are more narrow at the top than the bottom.',
            link: 'Width',
            image: '/question25/narrow_width.png'
        },
        {
            find: 'Medium Width ~ Even at the top and bottom.',
            attribute: 'Medium Width',
            description: 'Even at the top and bottom.',
            link: 'Width',
            image: '/question25/medium_width.png'
        },
        {
            find: 'Wide Width ~ Breasts are wider at the top.',
            attribute: 'Wide Width',
            description: 'Breasts are wider at the top.',
            link: 'Width',
            image: '/question25/wide_width.png'
        },
        {
            find: 'Round ~ Equally full at the top and bottom.',
            attribute: 'Round',
            description: 'Equally full at the top and bottom.',
            link: 'Shape',
            image: '/question26/round.png'
        },
        {
            find: 'Athletic ~ Wider, more muscular with less soft tissue.',
            attribute: 'Athletic',
            description: 'Wider, more muscular with less soft tissue.',
            link: 'Shape',
            image: '/question26/athletic.png'
        },
        {
            find: 'East West ~ Bra lifts boobs upwards, not inwards.',
            attribute: 'East West',
            description: 'Bra lifts boobs upwards, not inwards.',
            link: 'Shape',
            image: '/question26/east-west.png'
        },
        {
            find: 'Side Set ~ Wide space between breasts.',
            attribute: 'Side Set',
            description: 'Wide space between breasts.',
            link: 'Shape',
            image: '/question26/side-set.png'
        },
        {
            find: 'Bell ~ Slimmer at the top, fuller at the bottom.',
            attribute: 'Bell',
            description: 'Slimmer at the top, fuller at the bottom.',
            link: 'Shape',
            image: '/question26/bell.png'
        },
        {
            find: 'Teardrop ~ Round but slightly less full at the top.',
            attribute: 'Teardrop',
            description: 'Round but slightly less full at the top.',
            link: 'Shape',
            image: '/question26/teardrop.png'
        },
        {
            find: 'Tubular ~ Elongated, narrow, and cylindrical shape.',
            attribute: 'Tubular',
            description: 'Elongated, narrow, and cylindrical shape.',
            link: 'Shape',
            image: '/question26/tuberous.png'
        },
        {
            find: 'Relaxed ~ Breasts with lax tissue nipples pointed downwards.',
            attribute: 'Relaxed',
            description: 'Breasts with lax tissue nipples pointed downwards.',
            link: 'Shape',
            image: '/question26/relaxed.png'
        },
        {
            find: 'Slender ~ Thin breasts, nipples pointed downward.',
            attribute: 'Slender',
            description: 'Thin breasts, nipples pointed downward.',
            link: 'Shape',
            image: '/question26/slender.png'
        },
        {
            find: 'Asymetric ~ One breast is larger than the other.',
            attribute: 'Asymetric',
            description: 'One breast is larger than the other.',
            link: 'Shape',
            image: '/question26/asymetric.png'
        },
        {
            find: 'Mastectomy ~ Breasts that have been surgically removed.',
            attribute: 'Mastectomy',
            description: 'Breasts that have been surgically removed.',
            link: 'Shape',
            image: '/question26/mastectomy.png'
        },
    ]
    function get_styles() {
        let styles = []
        if (quiz_answers.medical != null && quiz_answers.medical.find(a => a.includes("Mastectomy")) != undefined) {
            styles.push("Soft seams");
            styles.push("Wide underband");
            styles.push("Deep front");
            styles.push("Deep side");
            styles.push("Full cups");
            styles.push("Wireless");
            styles.push("Soft");
            styles.push("Wide");
            styles.push("Deep");
        }
        if (quiz_answers.type != null) {
            if (quiz_answers.type.find(a => a.includes("Round")) != undefined) {
                styles.push("T-shirt");
                styles.push("Balconette");
                styles.push("Plunge");
            }
            if (quiz_answers.type.find(a => a.includes("Athletic")) != undefined) {
                styles.push("Demi");
                styles.push("Push-up");
                styles.push("Vertical seam");
                styles.push("No horizontal seam");
                styles.push("Bralette");
                styles.push("Plunge");
                styles.push("T-shirt");
            }
            if (quiz_answers.type.find(a => a.includes("East West")) != undefined) {
                styles.push("Contoured");
            }
            if (quiz_answers.type.find(a => a.includes("Side Set")) != undefined) {
                styles.push("Plunge");
            }
            if (quiz_answers.type.find(a => a.includes("Bell")) != undefined) {
                styles.push("Balconette");
                styles.push("Plunge");
                styles.push("Stretch");
                styles.push("Stretched");
                styles.push("Full coverage");
                styles.push("Full");
                styles.push("T-shirt");
            }
            if (quiz_answers.type.find(a => a.includes("Teardrop")) != undefined) {
                styles.push("Balconette");
                styles.push("Demi");
            }
            if (quiz_answers.type.find(a => a.includes("Tubular")) != undefined) {
                styles.push("Molded");
                styles.push("Push-up");
                styles.push("Contoured");
            }
            if (quiz_answers.type.find(a => a.includes("Relaxed")) != undefined) {
                styles.push("Elastic");
                styles.push("Elastic Neckline");
                styles.push("Close-set");
                styles.push("Close-set straps");
                styles.push("T-shirt");
                styles.push("Contoured");
            }
            if (quiz_answers.type.find(a => a.includes("Slender")) != undefined) {
                styles.push("Seamed");
                styles.push("Seamed bra");
            }
            if (quiz_answers.type.find(a => a.includes("Asymetric")) != undefined) {
                styles.push("T-shirt");
                styles.push("Stretch");
                styles.push("Stretched");
                styles.push("Molded");
                styles.push("Removable Padding");
            }
        }
        styles = [...new Set(styles)];
        return styles;
    }
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

        let num_style = 0;
        let styles_match = styles.concat(quiz_answers.types)
        styles_match.forEach(element => {
            if (bra.style.toLowerCase().includes(element.toLowerCase())) {
                num_style += 1;
            }
        });

        let ribcage = 0;
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
        if (quiz_answers.gender != null && !(quiz_answers.gender.includes("Transgender") || quiz_answers.gender.includes("Transsexual")) && !quiz_answers.gender.includes("Female")) {
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

        let map = new Map();
        all_bras.forEach(element => {
            let match = get_percent(element, bandsize, cupsize_int);
            element.match = match;
        });

        let ordered = [...all_bras].sort((a, b) => b.match - a.match);
        let ret = ordered.slice(0, 5);

        arrRecommendations = [];
        for (let val of ret) {
            arrRecommendations.push(val);
        }

    }
    function get_style_arr() {
        arrStyles = [];
        styles.forEach(st => {
            arrStyles.push({
                style: st,
                description: styles_map.get(st),
                image: images_map.get(st)
            });
        });
    }
    function get_profile_arr() {
        arrProfile = [];
        let profile = [quiz_answers.top_bottom].concat([quiz_answers.outer_inner], quiz_answers.height, quiz_answers.projection, quiz_answers.width, quiz_answers.type)
        profile.forEach(pr => {
            let el = profile_options.find(a => a.find == pr)
            if (el != undefined) {
                arrProfile.push(el)
            }
        });
    }
    function breastProfile(r) {
        return (
            <div className="rec-profile">
                <img className="rec-style-image" src={r.image}></img>
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
    const styles = get_styles();
    match();
    get_style_arr();
    get_profile_arr();

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
                        <div className="rec-sizing-description">Because you have {quiz_answers.shape} shaped breasts, a {styles[0]} or {styles[1]} will fit best. </div>
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
                        <div className="rec-sizing-description">Because you have {quiz_answers.shape} shaped breasts, {styles[0]} will fit best. {styles_map.get(styles[0])} </div>
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