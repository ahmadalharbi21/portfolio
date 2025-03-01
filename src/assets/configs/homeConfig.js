import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiArtificialIntelligence} from "react-icons/gi";
import {FaDatabase} from "react-icons/fa";
import { BiBrain } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Ahmad Alharbi</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Specialist",
        "An NLP Researcher",
        "A Data Analyst",
    ],
    about: {
        start: "I'm a recent graduate in Data Science with experience in NLP, time series analysis, and data processing. " +
            "Capable of gathering data, developing AI solutions, and deploying predictive models that yield actionable insights.",
        exit: "I'm proficient in Python, SQL, web scraping, deep learning, and GIS tools, with a passion for optimizing processes " +
            "and creating meaningful impact through data-driven approaches."
    },
    workTimeline: [ 
               {
            id: "work-2",
            title: "Data Science & Machine Learning Bootcamp",
            company: "Tuwaiq Academy",
            description: "Completed an intensive program covering machine learning, deep learning, and practical data science applications.",
            date: "01/2025 - 03/2025",
            icon: <BiBrain/>,
            tags: ["ml", "data science", "python", "deep learning"]
        },

        {
            id: "work-1",
            title: "Data Science CO-OP Trainee",
            company: "Aramco, Advanced Research Center",
            description: "Developed real-time data insights using motion detection algorithms with OpenCV. Built a chatbot for EXPEC ARC employees using OpenAI API and explored Retrieval-Augmented Generation (RAG).",
            date: "09/2024 - 10/2024",
            icon: <GiArtificialIntelligence/>,
            tags: ["python", "opencv", "nlp", "rag", "openai", "time series"],
            backgroundImage: "vniversity_of_jeddah_banner.png"
        },
                {
            id: "work-0",
            title: "Bachelor's in Data Science",
            company: "University of Jeddah",
            description: "Graduated with Second Honors. Focused on machine learning, deep learning, and GIS applications in data science.",
            date: "01/2020 - 12/2024",
            icon: <FaDatabase/>,
            tags: ["data science", "machine learning", "python", "sql"]
        },

    ]
}

export default homeConfig;
