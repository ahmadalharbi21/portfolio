import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import poetryRec from "./images/poetry_rec.png";
import chatbot from "./images/chatbot.jpg";
import pricePred from "./images/price_pred.jpg";
import bleScanner from "./images/ble_scanner.png";
import geminiExtension from "./images/gemini_extension.jpg";
import motionDetect from "./images/motion_detect.png";
import ledDisplay from "./images/led_display.avif";
import wells from "./images/wells.jpg"

import React from 'react';

const projectConfig = [
    {
        id: "project-1",
        title: "Wellbore and Production Prediction System",
        description: "Developed a prediction model for wellbore productivity using environmental and spatial data to assess oil and gas production potential.",
        highlights: [
            "Built a Gradient Boosting Regressor for production prediction.",
            "Visualized spatial data using GIS tools.",
            "Focused on environmental monitoring and risk assessment."
        ],
        tools: "Python, GIS, Gradient Boosting",
        links: [],
        image: wells,
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Poetry Recommendation System",
        links: [
            {
                name: "repo",
                url: "https://github.com/ahmadalharbi21/Poetry-recommendation-system",
                icon: <AiFillGithub/>
            }
        ],
        image: poetryRec,
        description: "Designed a recommendation system for Arabic poetry using clustering techniques on 100,000 poems scraped from AlDiwan.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Employee Assistance Chatbot",
        links: [
            {
                name: "repo",
                url: "https://github.com/ahmadalharbi21/Employee-Assistance-Chatbot",
                icon: <AiFillGithub/>
            }
        ],
        image: chatbot,
        description: "Built a chatbot to assist employees with petroleum research and personal development tasks.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "Product Price Prediction",
        links: [
            {
                name: "repo",
                url: "https://github.com/ahmadalharbi21/product-price-prediction",
                icon: <AiFillGithub/>
            }
        ],
        image: pricePred,
        description: "Built an LSTM model to predict product prices based on descriptions and country.",
        target: "_blank"
    },
    {
        id: "project-5",
        title: "BLE Device Scanner",
        links: [
            {
                name: "repo",
                url: "https://github.com/ahmadalharbi21/BLE_DEVICE_SCANNER",
                icon: <AiFillGithub/>
            }
        ],
        image: bleScanner,
        description: "A Python-based desktop application for discovering and interacting with nearby Bluetooth Low Energy (BLE) devices.",
        target: "_blank"
    },
    {
        id: "project-6",
        title: "Gemini Word Lookup Chrome Extension",
        links: [
            {
                name: "repo",
                url: "https://github.com/ahmadalharbi21/gemini-word-lookup-chrome-extension",
                icon: <AiFillGithub/>
            }
        ],
        image: geminiExtension,
        description: "A Chrome extension for quick word definitions and YouTube caption retrieval.",
        target: "_blank"
    },
    {
        id: "project-7",
        title: "Motion Detection with OpenCV",
        links: [
            {
                name: "repo",
                url: "https://github.com/ahmadalharbi21/motion-detection",
                icon: <AiFillGithub/>
            }
        ],
        image: motionDetect,
        description: "Detects motion in video streams by comparing consecutive frames and highlighting motion regions.",
        target: "_blank"
    },
    {
        id: "project-8",
        title: "Interactive LED Light System Based on Screen Color",
        links: [
            {
                name: "repo",
                url: "https://github.com/ahmadalharbi21/Interactive-Light-Display",
                icon: <AiFillGithub/>
            }
        ],
        image: ledDisplay,
        description: "Synchronizes LED light colors with screen colors in real-time for immersive experiences.",
        target: "_blank"
    }
]

export default projectConfig;
