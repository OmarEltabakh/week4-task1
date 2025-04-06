

import chairIamge from "../../assets/flashProductImage/chair.png";
import TVScreenImage from "../../assets/flashProductImage/TVScreen.png";
import playStationControllerImage from "../../assets/flashProductImage/PlayStation Controller.png";
import keyboard from "../../assets/flashProductImage/keyboard.png";

export const timeUnits = [
    { label: "Days", value: "03" },
    { label: "Hours", value: "23" },
    { label: "Minutes", value: "19" },
    { label: "Seconds", value: "56" },
];


export const products = [
    {
        id: 1,
        title: "HAVIT HV-G92 Gamepad",
        image: playStationControllerImage,
        discount: "-40%",
        price: "$120",
        oldPrice: "$160",
        rating: 4.5,
        reviews: 88,
    },
    {
        id: 2,
        title: "AK-900 Wired Keyboard",
        image: keyboard,
        discount: "-35%",
        price: "$960",
        oldPrice: "$1160",
        rating: 4.0,
        reviews: 75,
    },
    {
        id: 3,
        title: "IPS LCD Gaming Monitor",
        image: TVScreenImage,
        discount: "-30%",
        price: "$370",
        oldPrice: "$400",
        rating: 4.8,
        reviews: 99,
    },
    {
        id: 4,
        title: "S-Series Comfort Chair",
        image: chairIamge,
        discount: "-25%",
        price: "$375",
        oldPrice: "$400",
        rating: 4.6,
        reviews: 99,
    },
    {
        id: 5,
        title: "S-Series Comfort Chair",
        image: chairIamge,
        discount: "-25%",
        price: "$375",
        oldPrice: "$400",
        rating: 4.6,
        reviews: 99,
    },
];
