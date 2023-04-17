import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ButtonBase from '@mui/material/ButtonBase';
import { boolean, func} from 'joi';
import ProgressBar from './Progress_bar';
import brands from "/public/Brands_Styles.json";


if(typeof window !== 'undefined') {
    const userEmail = localStorage.getItem('email');
}

/*
* TODO:
*   - make sure on question 8 that other produces a text bar that allows user to enter in type
*   -  delay: add in a process to authenticate way user enters information and clean up CSS file */


export default function Questions() {

    let [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [sel, setSel] = useState('');
    const [sel2, setSel2] = useState('');
    const [answers, setAnswers] = useState([]);
    const [multAnswers, setMult] = useState([]);
    const [hasTaken, setHasTaken] = useState(false);
    const [styles, setStyles] = useState([]);
    const router = useRouter();

    // Route to recommendation page upon completion of quiz
    function handleRedirection(e) {
        e.preventDefault();
        router.push('/recommendation');
    }

    // call on ProgressBar component to show user progress at bottom of quiz
    function displayPBar() {
        return <ProgressBar bgcolor="#670224" progress={Math.round(progress)} height={30} />
    }

    var brands_json = brands;
    let brands_styles = {};

    // Create the brands and styles dictionary
    for(let i = 0; i < brands_json.length; i++) {
        let item = brands_json[i];

        let brand = item["Brand Name"];
        let style = item["Bra Style"];

        if(brand in brands_styles) {
            let curr_styles = brands_styles[brand];
            curr_styles.push(style);

            brands_styles[brand] = curr_styles;
        }
        else {
            let curr_styles = [];
            curr_styles.push(style);

            brands_styles[brand] = curr_styles;
        }
    }

    console.log(brands_styles["Freya"]);
    // state objects to handle brands/styles search
    const [brandsQ, setBrandsQ] = useState({
        query: "",
        list: Object.keys(brands_styles)
    });
    const [stylesQ, setStylesQ] = useState("");

    // Array of questions
    const questionsArray = [
        {
            question: 'Welcome to Froot',
            subtext: true,
            text: "The following questionnaire helps our team at Froot best understand your size, desired fit, and style. Please take this test in a private and comfortable setting as you will have to undress for the self-sizing portion of our quiz.",
            type: 'break',
            image: '/WelcomeToFroot.jpeg'
        },
        {
            question: 'Let’s get to know you!',
            subtext: true,
            text: "The Froot team realizes that knowing a bit about who you are, not just your boobs, can help us find your perfect bra. So let's get to know you with a few key questions!",
            type: 'break',
            image: '/LetGetToKnowYou.jpeg'
        },
        {
            question: 'What\'s your name?',
            subtext: true,
            text: 'This helps us understand your breast type.',
            type: 'text'
        },
        {
            question: 'How old are you?',
            subtext: true,
            text: 'This helps us understand your breast type.',
            type: 'dropdown',
            options: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"],
            select: 'one'
        },
        {
            question: 'What gender do you identify with?',
            subtext: true,
            text: 'Select all that apply! This can affect how a bra fits and what we recommend!',
            type: 'tag',
            options: ["Cisgender", "Female", "Male", "Fluid", "Genderqueer", "Transsexual", "Non-binary", "Gender Neutral", "Other", "Prefer Not to Say"],
            select: 'multiple'
        },
        {
            question:
                'Any medical concerns regarding your breasts that you would like us to know?',
            subtext: true,
            text: 'Select all that apply! Knowing this can help us recommend the right bra to you. If none do, select that.',
            type: 'tag',
            options: ["None", "Breast Augmentation", "Shoulder Pain", "Nerve Pain", "Sensitive Skin", "Mastectomy", "Breast Cancer", "Fabric / Material Allergy", "Back Issues", "Pregnant", "Breastfeeding", "Breast Pain", "Other", "Prefer not to say", "Breast Size Fluctiations"],
            select: 'multiple'
        },
        {
            question: 'Figuring Out Your Style',
            subtext: true,
            text: 'Knowing the shape and size of your breasts is critical. But we also want to know what bras you actually want to wear.',
            type: 'break',
            image: '/hanging-pink-tops.jpeg'
        },
        {
            question: 'What types of bras are you looking for?',
            subtext: true,
            text: 'We offer a lot of choices. Please pick as many as you like! Read more about each type on our website!',
            type: 'image',
            optionsText: 'Choose as many as you like.',
            options: [
                'Push-up ~ Pulls breasts upward then inward bringing breasts closer.',
                'Front-fastening ~ Opens in the front.',
                'Balconette ~ Bra lifts boobs upwards not inwards.',
                'Tube ~ A strapless strip of stretchy fabric with a thick band on top and bottom.',
                'T-shirt ~ Smooth cup bra, usually underwired, that has padded or molded cups.',
                'Sports Bra ~ Keeps breasts firmly placed and restricts breast movement.',
                'Strapless ~ Designed to be worn with no shoulder straps.',
                'Plunge ~ Draws your breasts together from the center of the cup.',
                'Multi-way ~ Straps remove or can be reattached to wear with different clothes.',
                'Halter ~ A strap that fits around your neck.',
                'Stick-on ~ A bra without a band or straps that sticks to your breasts.',
                'Nursing ~ Unlatches to expose nipples to breastfeed. It gives extra support.',
                'Racerback ~ Straps cross each other or meet in a "T" shape across the back.',
                'Pasties ~ Small adhesive cups designed to conceal the nipple and areola.',
                "Bralette ~ Unlined, usually doesn't have underwire or lots of padding.",
                'Other ~ You can write in the comments section what this type of bra is.',
            ],
            select: 'multiple',
            imageNames: [
                '/question12/push_up.jpeg',
                '/question12/front_fastening.png',
                '/question12/balconette.jpeg',
                '/question12/tube.jpeg',
                '/question12/t_shirt.jpeg',
                '/question12/sports_bra.jpeg',
                '/question12/strapless.jpeg',
                '/question12/plunge.png',
                '/question12/multi_way.jpeg',
                '/question12/halter.jpeg',
                '/question12/stick_on.jpeg',
                '/question12/nursing.jpeg',
                '/question12/racerback.png',
                '/question12/pasties.jpeg',
                '/question12/bralette.png',
                '/testing.png',
            ],
            link: false,
        },
        {
            question: "What style(s) do you want your bras to have?",
            subtext: true,
            text: "It's important to understand what you are interested in wearing, aesthetically! Choose as many as you like.",
            type: 'image',
            optionsText: 'Choose as many as you like',
            options: [
                'Romantic ~ Lots of lace.',
                'Minimalist ~ Super simple. Muted Colors.',
                'Sport ~ Splash of colors and possibly a logo.',
                'Vintage ~ Shape and Structure remind us of Past Decades.',
                'Modern ~ Classic with a twist.',
                'Classic ~ Shape of a siimple bra.',
            ],
            select: 'multiple',
            imageNames: [
                '/question13/romantic.jpeg',
                '/question13/minimalist.jpeg',
                '/question13/sport.jpeg',
                '/question13/vintage.jpeg',
                '/question13/modern.jpeg',
                '/question13/classic.png',
            ],
            link: false,
        },
        {
            question: 'Pick the colors you would like for your bra(s)',
            subtext: true,
            text: 'This will help us narrow down what colors of bras to recommend. We can always re-adjust this later. Choose as many as you like.',
            type: 'image',
            optionsText: 'Choose as many as you like',
            options: [
                'Skin Tones',
                'Warm',
                'Blacks',
                'Pink and Blue',
                'Cold',
                'Bright Yellows',
                'Whites',
            ],
            select: 'multiple',
            imageNames: [
                '/question14/skin_tones.png',
                '/question14/warm.png',
                '/question14/blacks.png',
                '/question14/pink_and_blue.png',
                '/question14/cold.png',
                '/question14/bright_yellows.png',
                '/question14/whites.png',
            ],
            link: false,
        },
        {
            question: 'Do you want your bras to have underwire?',
            subtext: true,
            text: 'Underwire bras do provide a bit more support, structure, and shape. Yet some feel the wireless bra is more comfortable. Ultimately, the choice is yours. If you need help with your choice, we have just the article for you.',
            type: 'mc',
            options: ['Yes, all of them', 'Some should', 'None at all'],
            select: 'one',
        },
        {
            question: 'Do you want padding?',
            subtext: true,
            text: 'Padding can be for support or to make you look bustier. Most bras can have padding. But, we want to know your thoughts on padding. If you want some more clarity on padding, check out our article.',
            type: 'mc',
            options: ['Yes, all of them', 'Some should', 'None at all'],
            select: 'one',
        },
        {
            question: 'Factors Beyond Size Measuring',
            subtext: true,
            text: 'Before we measure you, there are a few other factors regarding your boobs the Froot team must ask about to find the best bra(s) for you. We explain these factors in-depth on our website.',
            type: 'break',
            image: '/FactorsBeyondSizing.jpeg',
        },
        {
            question: 'What is your breast fullness (top or bottom)?',
            subtext: true,
            text: "Your nipples' location on your breasts indicates where most of your breast tissue is location. Pick the image that best represents your breasts. If you want more info regarding fullness, check out our article.",
            type: 'image',
            optionsText: '',
            options: [
                'Full on Bottom ~ Nipples are Above Dotted Line.',
                'Full on Top ~ Nipples are Below Dotted Line.',
                'Even Distribution ~ Nipples are at the Dotted Lines.',
            ],
            select: 'one',
            imageNames: [
                '/question19/full_on_bottom.png',
                '/question19/full_on_top.png',
                '/question19/even_dist.png',
            ],
            link: false,
        },
        {
            question: 'What is your breast fullness (outer or inner)?',
            subtext: true,
            text: "Your nipples' location on your breasts indicates where most of your breast tissue is located. Pick the image that best represents your breasts. If you want more info regarding fullness, check out our article.",
            type: 'image',
            optionsText: '',
            options: [
                'Outer Fullness ~ Nipples are Towards each other.',
                'Inner Fullness ~ Nipples are Opposite of Each Other.',
                'Even Distribution ~ Nipples are pointed straight forward.',
            ],
            select: 'one',
            imageNames: [
                '/question20/outer_fullness.png',
                '/question20/inner_fullness.png',
                '/question20/even_dist.png',
            ],
            link: false,
        },
        {
            question: 'Are your breasts soft or firm?',
            subtext: true,
            text: 'Use your fingers to tape on one of your breasts. Watch if your breast ripples in response to your touch. The results will determine the softness or firmness of your breast tissue. Breast firmness or softness may change',
            type: 'image',
            optionsText: '',
            options: [
                'Soft ~ Fingers do not bounce back, indent is made in your skin in response to finger.',
                'Medium ~ Finger does not bounce back and ripple is super quick yet still noticeable.',
                'Firm ~ No ripple is created and your finger bounces back.',
            ],
            select: 'one',
            imageNames: [
                '/question21/soft.svg',
                '/question21/medium.svg',
                '/question21/firm.svg',
            ],
            link: false,
        },
        {
            question: 'Lay your hands on your chest, how many fingers fit between your breasts?',
            subtext: true,
            text: 'Use your fingers to measure the space between your breast as shown in the image to your right.',
            type: 'mc',
            options: ['0', '1', '2', '3+'],
            select: 'one',
        },
        {
            question:
                'Let\'s determine your breast height',
            subtext: true,
            text: 'Your breast root is the point on the body where your breast tissue starts and ends.',
            type: 'image',
            optionsText: 'Breast Height',
            imageNames: [
                '/question23/high.png',
                '/question23/medium.png',
                '/question23/low.png',
                '/question24/not_sure.png'
            ],
            options: [
                'High ~ Above your elbows.',
                'Medium ~ At elbows.',
                'Low ~ Below elbows.',
                'Not sure ~ It\'s okay not to know. If you need some help, click here! '],
            link: true,
            select: 'multiple',
        },
        {
            question:
                'Let\'s determine your breast projection',
            subtext: true,
            text: 'Project is how much your breasts stick out in proportion to how much surface area they take up on your chest.',
            type: 'image',
            optionsText: 'Breast Projection',
            imageNames: [
                '/question24/shallow.png',
                '/question24/projected.png',
                '/question24/medium_projection.png',
                '/question24/not_sure.png',
            ],
            options: [
                'Shallow ~ Breast tissue spread closer to body.',
                'Projected ~ Stick out more in the front.',
                'Medium ~ Sticks out equally.',
                'Not sure ~ It\'s okay not to know. If you need some help, click here!'],
            link: true,
            select: 'multiple',
        },
        {
            question:
                'Let\'s determine your breast width',
            subtext: true,
            text: 'Project is how much your breasts stick out in proportion to how much surface area they take up on your chest.',
            type: 'image',
            optionsText: 'Breast Width',
            imageNames: [
                '/question25/narrow_width.png',
                '/question25/medium_width.png',
                '/question25/wide_width.png',
                '/question24/not_sure.png',
            ],
            options: [
                'Narrow Width ~ Breats are more narrow at the top than the bottom.',
                'Medium Width ~ Even at the top and bottom.',
                'Wide Width ~ Breats are wider at the top.',
                'Not sure ~ It\'s okay not to know. If you need some help, click here!'],
            link: true,
            select: 'multiple',
        },
        {
            question:
                'What is your breast type?',
            subtext: true,
            text: 'We offer a lot of choices. Please pick as many as you like! Read more about each type on our website!',
            type: 'image',
            optionSubtext: 'Choose as many as you would like.',
            imageNames: [
                '/question26/round.png',
                '/question26/athletic.png',
                '/question26/east-west.png',
                '/question26/side-set.png',
                '/question26/bell.png',
                '/question26/teardrop.png',
                '/question26/tuberous.png',
                '/question26/relaxed.png',
                '/question26/slender.png',
                '/question26/asymetric.png',
                '/question26/mastectomy.png',
                '/question24/not_sure.png'
            ],
            options: ['Round ~ Equally full at the top and bottom.',
                'Athletic ~ Wider, more muscular with less soft tissue.',
                'East West ~ Bra lifts boobs upwards, not inwards.',
                'Side Set ~ Wide space between breasts.',
                'Bell ~ Slimmer at the top, fuller at the bottom.',
                'Teardrop ~ Round but slightly less full at the top.',
                'Tubular ~ Elongated, narrow, and cylindrical shape.',
                'Relaxed ~ Breasts with lax tissue nipples pointed downwards.',
                'Slender ~ Thin breasts, nipples pointed downward.',
                'Asymetric ~ One breast is larger than the other.',
                'Mastectomy ~ Breasts that have been surgically removed.',
                'Other ~ Please send us a message if we are missing a breast type.'],
            link: true,
            select: 'multiple',
        },

        {
            question: 'Measuring Your Breasts',
            subtext: true,
            text: 'For this portion of our quiz, you will need to be in a private setting in order to complete your self-sizing. All measurements should be taken on naked breasts. We will provide instructional videos for each step. Please take your soft measuring tape provided in the packaging and input your measurements according to the question. Please use inches when measuring. This will take about five minutes. Your responses are confidential.',
            type: 'break',
            image: '/MeasuringYourBreasts.jpeg'
        },
        {
            question: 'Loose Underbust',
            subtext: true,
            text: 'Loose measurement in inches.',
            type: 'half-break',
            image: '/Measurement.png'
        },
        {
            question: 'Snug Underbust',
            subtext: true,
            text: 'Snug measurement in inches.',
            type: 'half-break',
            image: '/Measurement.png'
        },
        {
            question: 'Tight underbust',
            subtext: true,
            text: 'Tight measurement in inches.',
            type: 'half-break',
            image: '/Measurement.png'
        },
        {
            question: 'Standing bust',
            subtext: true,
            text: 'Standing measurement in inches.',
            type: 'half-break',
            image: '/Measurement.png'
        },
        {
            question: 'Leaning bust',
            subtext: true,
            text: 'Leaning measurement in inches.',
            type: 'half-break',
            image: '/Measurement.png'
        },
        {
            question: 'Laying down bust',
            subtext: true,
            text: 'Laying measurement in inches.',
            type: 'half-break',
            image: '/Measurement.png'
        },
        {
            question: 'What is the brand of your favorite bra?',
            subtext: true,
            text: 'This helps us understand your breast type.',
            type: 'dropdown',
            options: Object.keys(brands_styles).sort(),
            select: 'one',
        },
        {
            question: "What is the style of your favorite bra?",
            subtext: true,
            text: "This helps us understand your breast type.",
            type: "dropdown",
            options: ["Please choose a brand on the previous page."]
        },
        {
            question: 'What is the size of your favorite bra?',
            subtext: true,
            text: 'This helps us understand your breast type.',
            type: 'multDropdowns',
            options: [{
                key: "Band Size",
                value: ['24', '26', '28', '30', '32', '34', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56', '58', '60']
            },
               {
                key: "Cup Size",
                value: ['AA', 'A', 'B', 'C', 'D', 'DD', 'E', 'F', 'FF', 'G', 'GG', 'H', 'HH', 'I', 'J', 'JJ', 'K', 'KK', 'L', 'LL', 'M', 'MM', 'N', 'O', 'OO']
            }]
        },
        // {
        //     question: 'Have you taken the /ABraThatFits quiz?',
        //     subtext: true,
        //     text: 'This is the most accurate bra measurement that we base our sizes off of.',
        //     type: 'mc',
        //     options: ['Yes', 'No'],
        //     select: 'one',
        // },
        // {
        //     question: 'Let\'s figure out your bra size',
        //     subtext: true,
        //     text: 'Please fill this out according to your size.',
        //     type: 'iframe'
        // },
        // {
        //     question: 'Enter your /ABraThatFits size.',
        //     subtext: true,
        //     text: 'This should be based on your already taken quiz, please use US or UK sizes.',
        //     type: 'multDropdowns',
        //     options: [{
        //         key: "Band Size",
        //         value: ['28', '30', '32', '34', '36', '38', '40', '42', '44', '46']
        //     }, {
        //         key: "Cup Size",
        //         value: ['AA', 'A', 'B', 'C', 'D', 'DD', 'DDD']
        //     }
        //     ],
        //     select: 'one',
        // },
        {
            question: 'Quiz Complete!',
            subtext: true,
            text: 'Now it is time to get your results! Create your account and if you need to change any of your answers in the future you can access the quiz through your profile.',
            type: 'break',
            image: '/QuizComplete.jpeg',
            // select: 'one',
        },
    ];

    // end of question array
    // function to grab change on text input
    const handleChange = (e) => {
        setSel(e.target.value);
        console.log("answers: " + answers);

        if(index === 28) {
            const newStyles = brands_styles[e.target.value];
            setStyles(newStyles);

            console.log(styles);
        }
    };

    // render elements for brands/styles search
    const handleBrands = (e) => {
        let brands = Object.keys(brands_styles);
        const results = brands.filter(post =>
        {
            if(e.target.value=== "") return brands
            return post.toLowerCase().includes(e.target.value.toLowerCase())
        })

        results.sort();
        setBrandsQ({
            query: e.target.value,
            list: results
        })
    };

    const handleStyles = (e) => {
        const results = styles.filter(post =>
        {
            if(e.target.value=== "") return styles
            return post.toLowerCase().includes(e.target.value.toLowerCase())
        })
        results.sort();
        setStylesQ(e.target.value);
        setStyles(results);
    };

    // function to handle Why We Ask
    const displayPopUp = (e) => {
        let popup = document.getElementById("popup");
        popup.classList.add("open-popup");
    };

    const closePopUp = (e) => {
        let popup = document.getElementById("popup");
        popup.classList.remove("open-popup");
    };

    // function to grab selection of dropdown menu
    const handleOtherDropdown = (e) => {
        setSel2(e.target.value);
    };

    // function to grab selection of question answers
    const handleClick = () => {
        console.log("answers: " + answers)
        if (index <= answers.length) {
            const newAnswers = [...answers];
            if (index == answers.length - 1) {
                const temp = [sel, sel2];
                newAnswers[index] = temp;
            }
            else {
                newAnswers[index] = sel;
            }
            setAnswers(newAnswers);
            setIndex((index += 1));
            if (index < questionsArray.length - 1) {
                setProgress((index+1) / questionsArray.length * 100);

                console.log("Progress: " + progress);
            }
            setSel('');
        } else {
            setAnswers([...answers, sel]);
            setIndex((index += 1));

            setSel('');
        }
        if (answers[index]) {
            if (questionsArray[index].select === 'multiple') {
                setMult(answers[index]);
                setSel(multAnswers);
            } else {
                if (index === answers.length - 1) {
                    setSel(answers[index][0]);
                    setSel2(answers[index][1]);
                }
                else {
                    setSel(answers[index]);
                }
            }
        } else {
            if (questionsArray[index].select === 'multiple') {
                setMult([]);
                setSel([]);
            } else {
                setSel([]);
                setSel2([]);
            }
        }
    };
    useEffect(() => {
        const listener = (event) => {
            if (event.code === 'Enter') {
                event.preventDefault();
                handleClick();
            }
        };
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener('keydown', listener);
        };
    });

   // document.addEventListener('keydown', readBrandsFile);

    const handleChoose = (i) => {
        if (questionsArray[index].question === 'Have you taken the /ABraThatFits quiz?'
            && i === 'Yes') {
            setHasTaken(true);
        }
        else if (questionsArray[index].question === 'Have you taken the /ABraThatFits quiz?'
            && i === 'No') {
            setHasTaken(false);
        }

        if (questionsArray[index].select === 'multiple') {
            if (multAnswers.includes(i)) {
                const copy = multAnswers.filter((choice) => choice !== i);
                setMult(copy);
                setSel(multAnswers);
            } else {
                setMult([...multAnswers, i]);
                setSel(multAnswers);
            }
        } else if (i !== sel) {
            setSel(i);
        }
    };

    // function to handle going back a question
    const handleBack = () => {
        if (hasTaken) {
            setIndex(index -= 1);
        }
        setIndex((index -= 1));
        if(index > 0) {
            setProgress((index-1) / questionsArray.length * 100);
            console.log("Progress: " + progress);
        }
        if (questionsArray[index].select === 'multiple') {
            setMult(answers[index]);
            setSel(multAnswers);
        } else {
            if (index === answers.length - 1) {
                setSel(answers[index][0]);
                setSel2(answers[index][1]);
            }
            else {
                setSel(answers[index]);
            }
        }
        //handleProgress();
    };


    useEffect(() => {
        setSel(multAnswers);
    }, [multAnswers]);
    console.log(questionsArray[index].question);

    // Setting display of break style questions
    if (questionsArray[index].type === "break") {
        return (
            <div className="question1-wrapper">
                <img className="hanging-pink-tops" src={questionsArray[index].image}></img>
                <div className=
                    {
                        true ? "question1_body" : null
                    }
                >
                    <div id="scroll"></div>
                    {/* Defining first intro question */}
                    {/* end */}
                    <div className="question_break_block">
                        <div className="question_container">
                            <div className="question_container2">
                                {/* like the question title */}
                                <h1 className="question_title">
                                    {questionsArray[index].question}
                                </h1>
                                {/* denotes the paragraph (question body) */}
                                <p
                                    style={{
                                        fontFamily: 'Inter',
                                    }}
                                >
                                    {questionsArray[index].subtext ? questionsArray[index].text : ''}
                                </p>
                            </div>
                        </div>
                        <div className={
                            questionsArray[index].type === 'break'
                                ? "question_break_container"
                                : "question_no_break_container"
                        }
                        >
                            {index === questionsArray.length - 1 ? (
                                <div
                                    // onClick={postUser}
                                    variant="filled"
                                    className="question-end-button"
                                    role="button"
                                    onClick={() => {
                                        handleRedirection
                                        let allAnswers = [...answers, sel, sel2, ...multAnswers];
                                        let answersForPassing = []
                                        for (let i = 0; i < allAnswers.length; i++) {
                                            if (allAnswers[i] != '')
                                                answersForPassing.push(allAnswers[i])
                                        }
                                        const addAnswers = {
                                            userEmail: userEmail,
                                            answers: answersForPassing
                                        }
                                        fetch(`/api/addAnswers`, {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify(addAnswers),
                                        }).then(res => res.json())
                                            .catch((error) => {
                                                window.alert("Catch: " + error.message);
                                                return;
                                            });
                                    }}
                                >
                                    Get Recommendations!
                                </div>
                            ) : (
                                <div className="question_next_container">
                                    <Link href="#scroll">
                                        <div className="question-break-button" role="button" onClick={handleClick}>OK <CheckIcon />
                                        </div>
                                    </Link>

                                    <h1 className="question_next_enter"
                                    >
                                        press <b>Enter</b>
                                    </h1>


                                </div> )}

                        </div>
                        {index === 0 ? null : (
                            <div className="question_back_button_wrap">
                                <Link href="#scroll">
                                    <div className="question-break-back-button" role="button" onClick={handleBack}>BACK <ArrowBackIcon />
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div >
            </div >

        )
    }
    // setting display of iframe embed question if hasTaken
    else if (questionsArray[index].type === 'iframe' && hasTaken) {
        setIndex((index += 1));

        return (null);
    }
    // setting display for half page questions
        // todo: update styling of images to still show navigation text clearly
    else if(questionsArray[index].type === 'half-break') {
        return (
            <div className="question1-wrapper">
                <img className="hanging-pink-tops" src={questionsArray[index].image}></img>
                <div className=
                         {
                             true ? "question1_body" : null
                         }
                >
                    <div className="question_count_container">
                        <h1 className="question_count">{index + 1}/{questionsArray.length}</h1>
                        <ArrowForwardIcon className="question_count_arrow" />
                  </div>
                    <div id="scroll"></div>

                    <div className="question_break_block">
                        <div className="question_container">
                            <div className="question_container2">
                                {/* like the question title */}
                                <h1 className="question_title">
                                    {questionsArray[index].question}
                                </h1>
                                {/* denotes the paragraph (question body) */}
                                <p
                                    style={{
                                        fontFamily: 'Inter',
                                    }}
                                >
                                    {questionsArray[index].subtext ? questionsArray[index].text : ''}
                                </p>
                                <div className="question_text_options_container"
                                >
                                    <TextField
                                        onChange={handleChange}
                                        value={sel}
                                        id="standard-basic"
                                        input="text"
                                        variant="standard"
                                        placeholder="Type your answer here..."
                                        className="question_text_box"
                                    />

                                </div>

                            </div>
                        </div>
                        <div className={
                            questionsArray[index].type === 'break'
                                ? "question_break_container"
                                : "question_no_break_container"
                        }
                        >
                            {index === questionsArray.length - 1 ? (
                                <div
                                    // onClick={postUser}
                                    variant="filled"
                                    className="question-end-button"
                                    role="button"
                                    onClick={handleRedirection}
                                >
                                    Get Recommendations!
                                </div>
                            ) : (
                                <div className="question_next_container">
                                    <Link href="#scroll">
                                        <div className="question-break-back-button" role="button" onClick={handleClick}>OK <CheckIcon />
                                        </div>
                                    </Link>

                                    <h1 className="question_next_enter"
                                    >
                                        press <b>Enter</b>
                                    </h1>
                                </div>
                            )}
                        </div>
                        {index === 0 ? null : (
                            <div className="question_back_button_wrap">
                                <Link href="#scroll">
                                    <div className="question-break-back-button" role="button" onClick={handleBack}>BACK <ArrowBackIcon />
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div >
                <div> {displayPBar()} </div>
            </div >
        );
    }
    else if(questionsArray[index].question === 'What is the style of your favorite bra?') {
        console.log("Here with " + styles.length);
        return (
            <div className="question_body">
                <div id="scroll"></div>
                <div className="question_count_container">
                    <h1 className="question_count">{index + 1}/{questionsArray.length}</h1>
                    <ArrowForwardIcon className="question_count_arrow" />
                </div>
                <div className="question_block">
                    <div className="question_container">
                        <div className="question_container2">
                            {/* like the question title */}
                            <h1 className="question_title">
                                {questionsArray[index].question}
                            </h1>
                            {/* denotes the paragraph (question body) */}
                            <p
                                style={{
                                    fontFamily: 'Inter',
                                }}
                            >
                                {questionsArray[index].subtext ? questionsArray[index].text : ''}
                            </p>
                        </div>
                    </div>
                    {styles.length === 0 ? (
                        <div className="question_text_options_container"
                        >
                            <Select
                                className="question_dropdown"
                                value={sel}
                                label="Age"
                                onChange={handleChange}
                            >
                                {questionsArray[index].options.map((choices) => (
                                    <MenuItem value={choices}>{choices}</MenuItem>
                                ))}
                            </Select>

                        </div>
                    ) : null}
                    { styles.length !== 0 ? (
                        <div className="question_text_options_container"
                        >
                                <label htmlFor={"brands-search"}>
                                    <input
                                        type="search"
                                        name="style-search"
                                        id="style-search"
                                        className={"brands-search"}
                                        placeholder="Search for styles (Do not hit enter!) ..."
                                        value={stylesQ}
                                        onChange={handleStyles}/>
                                </label>
                                <Select
                                    className="question_dropdown_ver2"
                                    value={sel}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    {styles.map((choices) => (
                                        <MenuItem value={choices}>{choices}</MenuItem>
                                    ))}
                                </Select>
                        </div>
                    ) : null}
                    <div className="question_next_container">
                        <Link href="#scroll">
                            <div className="sample-button" role="button" onClick={handleClick}>OK <CheckIcon />
                            </div>
                        </Link>

                        <h1 className="question_next_enter"
                        >
                            press <b>Enter</b>
                        </h1>
                    </div>
                    {(index ===28 || index === 29) ?
                        (<div className="whyWeAsk">
                                <button type="button" className="wwa_btn" onClick={displayPopUp}>WHY WE ASK</button>
                                <div className="popup" id="popup" >
                                    <button type="button" className="exit" onClick={closePopUp}>X</button>
                                    <h2>Why We Ask</h2>
                                    <p>We ask this so we can make recommendations based on how this bra fits you.</p>
                                    <button type="button" className="cont_btn" onClick={closePopUp}>CONTINUE</button>
                                </div>
                            </div>
                        ) : null}

                    {/* enable back button if index is not 0 */}
                    {
                        index === 0 ? null : (
                            <div className="question_back_button_wrap">
                                <Link href="#scroll">
                                    <div className="question-back-button" role="button" onClick={handleBack}>BACK <ArrowBackIcon />
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div >
                <div> {displayPBar()} </div>
            </div >

        );

    }
    else if(questionsArray[index].question === 'What is the brand of your favorite bra?') {
        return (
            <div className="question_body">
                <div id="scroll"></div>
                <div className="question_count_container">
                    <h1 className="question_count">{index + 1}/{questionsArray.length}</h1>
                    <ArrowForwardIcon className="question_count_arrow" />
                </div>
                <div className="question_block">
                    <div className="question_container">
                        <div className="question_container2">
                            {/* like the question title */}
                            <h1 className="question_title">
                                {questionsArray[index].question}
                            </h1>
                            {/* denotes the paragraph (question body) */}
                            <p
                                style={{
                                    fontFamily: 'Inter',
                                }}
                            >
                                {questionsArray[index].subtext ? questionsArray[index].text : ''}
                            </p>
                        </div>
                    </div>
                        <div className="question_text_options_container"
                        >
                            <label htmlFor={"brands-search"}>
                            <input
                                type="search"
                                name="brands-search"
                                id="brands-search"
                                className={"brands-search"}
                                placeholder="Search for brands (Do not hit enter!)..."
                                value={brandsQ.query}
                                onChange={handleBrands}/>
                             </label>
                            <Select
                                className="question_dropdown_ver2"
                                value={sel}
                                label="Age"
                                onChange={handleChange}
                            >
                                {brandsQ.list.map((choices) => (
                                    <MenuItem value={choices}>{choices}</MenuItem>
                                ))}
                            </Select>
                        </div>
                    <div className="question_next_container">
                        <Link href="#scroll">
                            <div className="sample-button" role="button" onClick={handleClick}>OK <CheckIcon />
                            </div>
                        </Link>

                        <h1 className="question_next_enter"
                        >
                            press <b>Enter</b>
                        </h1>
                    </div>
                    {(index ===28 || index === 29) ?
                        (<div className="whyWeAsk">
                                <button type="button" className="wwa_btn" onClick={displayPopUp}>WHY WE ASK</button>
                                <div className="popup" id="popup" >
                                    <button type="button" className="exit" onClick={closePopUp}>X</button>
                                    <h2>Why We Ask</h2>
                                    <p>We ask this so we can make recommendations based on how this bra fits you.</p>
                                    <button type="button" className="cont_btn" onClick={closePopUp}>CONTINUE</button>
                                </div>
                            </div>
                        ) : null}

                    {/* enable back button if index is not 0 */}
                    {
                        index === 0 ? null : (
                            <div className="question_back_button_wrap">
                                <Link href="#scroll">
                                    <div className="question-back-button" role="button" onClick={handleBack}>BACK <ArrowBackIcon />
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div >
                <div> {displayPBar()} </div>
            </div >

        );
    }
    // setting frontend display of all other types of questions (dropdown, mc, image, tag)
    else {
        return (
        <div className="question_body">
            <div id="scroll"></div>
            <div className="question_count_container">
                <h1 className="question_count">{index + 1}/{questionsArray.length}</h1>
                <ArrowForwardIcon className="question_count_arrow" />
            </div>
            <div className="question_block">
                <div className="question_container">
                    <div className="question_container2">
                        {/* like the question title */}
                        <h1 className="question_title">
                            {questionsArray[index].question}
                        </h1>
                        {/* denotes the paragraph (question body) */}
                        <p
                            style={{
                                fontFamily: 'Inter',
                            }}
                        >
                            {questionsArray[index].subtext ? questionsArray[index].text : ''}
                        </p>
                    </div>
                </div>
                {/* displays question text or nothing */}
                {questionsArray[index].type === 'text' ||
                    questionsArray[index].type === 'textIMG' ? (
                    <div className="question_text_options_container"
                    >
                        <TextField
                            onChange={handleChange}
                            value={sel}
                            id="standard-basic"
                            input="text"
                            variant="standard"
                            placeholder="Type your answer here..."
                            className="question_text_box"
                        />

                    </div>
                ) : null}
                {questionsArray[index].type === 'dropdown' ? (
                    <div className="question_text_options_container"
                    >
                        <Select
                            className="question_dropdown"
                            value={sel}
                            label="Age"
                            onChange={handleChange}
                        >
                            {questionsArray[index].options.map((choices) => (
                                <MenuItem value={choices}>{choices}</MenuItem>
                            ))}
                        </Select>

                    </div>
                ) : null}
                {questionsArray[index].type === 'multDropdowns' ? (
                    <div className="question_dropdown_options_container">
                        {/* {questionsArray[index].options.map((choices) => ( */}
                        <div className="question_dropdown_sub_options_container"
                        >
                            <InputLabel id={questionsArray[index].options[0].key}>{questionsArray[index].options[0].key}</InputLabel>
                            <Select
                                labelId={questionsArray[index].options[0].key}
                                className="question_dropdown"
                                value={sel}
                                onChange={handleChange}
                            >
                                {questionsArray[index].options[0].value.map((choice) => (
                                    <MenuItem value={choice}>{choice}</MenuItem>
                                ))}
                            </Select>

                        </div>
                        <div className="question_dropdown_sub_options_container"
                        >
                            <InputLabel id={questionsArray[index].options[1].key}>{questionsArray[index].options[1].key}</InputLabel>
                            <Select
                                labelId={questionsArray[index].options[1].key}
                                className="question_dropdown"
                                value={sel2}
                                onChange={handleOtherDropdown}
                            >
                                {questionsArray[index].options[1].value.map((choice) => (
                                    <MenuItem value={choice}>{choice}</MenuItem>
                                ))}
                            </Select>

                        </div>
                        {/* ))} */}


                    </div>
                ) : null}
                {questionsArray[index].type === 'tag' ? (
                    <div className="question_tags_container">
                        {questionsArray[index].options.map((choices) => (
                            <div
                                variant="outlined"
                                key={choices}
                                id={choices}
                                className={
                                    sel === choices || (questionsArray[index].select === 'multiple' &&
                                        multAnswers.includes(choices))
                                        ? "question_tag_selected"
                                        : "question_tag"
                                }
                                onClick={() => handleChoose(choices)}
                            >
                                {choices}
                            </div>
                        ))}

                    </div>
                ) : null}
                {questionsArray[index].type == 'iframe' ? (
                    <div>
                        <iframe src="https://www.abrathatfits.org/calculator.php" height={500} width={500} />

                    </div>

                ) : null}

                {/* displays multiple choices or not */}
                {questionsArray[index].type === 'mc' ? (
                    <div className="question_mc_container">
                        {questionsArray[index].options.map((choices) => (
                            <div
                                variant="outlined"
                                role="button"
                                key={choices}
                                id={choices}
                                className={
                                    sel === choices
                                        ? "question_mc_selected"
                                        : "question_mc"
                                }
                                onClick={() => handleChoose(choices)}
                            >
                                {choices}
                            </div>
                        ))}
                    </div>
                ) : null}
                {/* displays image */}
                {questionsArray[index].type === 'image' ? (
                    <>
                        <div className="question_choose">{questionsArray[index].optionsText}</div>
                        <div className="question_images_container"
                        >
                            {questionsArray[index].options.map((choices) => (
                                <div
                                    onClick={() => handleChoose(choices)}
                                    key={choices}
                                    id={choices}
                                    className={
                                        sel === choices ||
                                            (questionsArray[index].select === 'multiple' &&
                                                multAnswers.includes(choices))
                                            ? "question_image_selected" : "question_image_unselected"
                                    }
                                >
                                    <div className="question_image_container">
                                        <Image
                                            src={
                                                questionsArray[index].imageNames[
                                                questionsArray[index].options.indexOf(choices)
                                                ]
                                            }
                                            layout="fill"
                                            background-color={"#C5D6E5"}
                                        ></Image>
                                    </div>

                                    <h3 className="question_image_title">
                                        {choices.split('~')[0]}
                                    </h3>
                                    <h3 className="question_image_text">
                                        {choices.split('~')[1]}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </>
                ) : null}
                {/*todo: figure out what this is supposed to be linking to*/}
                {questionsArray[index].type === 'image' && questionsArray[index].link ? (<div className="quiz-link">More Info</div>) : null}
                <div className={
                    questionsArray[index].type === 'break'
                        ? "question_break_container"
                        : "question_no_break_container"
                }
                >
                    {/* if next question is valid, not the end: display next button */}
                    <div className="question_next_container">
                        <Link href="#scroll">
                            <div className="sample-button" role="button" onClick={handleClick}>OK <CheckIcon />
                            </div>
                        </Link>

                        <h1 className="question_next_enter"
                        >
                            press <b>Enter</b>
                        </h1>
                    </div>


                </div>
                {(index ===5) ?
                    (<div className="whyWeAsk">
                            <button type="button" className="wwa_btn" onClick={displayPopUp}>WHY WE ASK</button>
                            <div className="popup" id="popup" >
                                <button type="button" className="exit" onClick={closePopUp}>X</button>
                                <h2>Why We Ask</h2>
                                <p>Bras affect the body in a variety of ways. Wearing a bra that doesn't fit can cause pain and posture-issues. We want to make sure that our recommendations are taking that into account, if those are symptoms you experience.</p>
                                <button type="button" className="cont_btn" onClick={closePopUp}>CONTINUE</button>
                            </div>
                        </div>
                    ) : null}
                {(index ===28 || index === 29) ?
                    (<div className="whyWeAsk">
                            <button type="button" className="wwa_btn" onClick={displayPopUp}>WHY WE ASK</button>
                            <div className="popup" id="popup" >
                                <button type="button" className="exit" onClick={closePopUp}>X</button>
                                <h2>Why We Ask</h2>
                                <p>We ask this so we can make recommendations based on how this bra fits you.</p>
                                <button type="button" className="cont_btn" onClick={closePopUp}>CONTINUE</button>
                            </div>
                        </div>
                    ) : null}
                {/* enable back button if index is not 0 */}
                {
                    index === 0 ? null : (
                        <div className="question_back_button_wrap">
                            <Link href="#scroll">
                                <div className="question-back-button" role="button" onClick={handleBack}>BACK <ArrowBackIcon />
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div >
                <div> {displayPBar()} </div>
            </div >
    );

    }
}
