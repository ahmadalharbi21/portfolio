import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiMedium} from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png"
import diam from "./images/photo-1513775192371-1b9d33760c3f.avif"

const blogConfig = [
    {
        id: "blog-0 ",
        title: "Python’s MRO and Diamond Problem",
        links: [
            {
                name: "article",
                url: "https://medium.com/@aalharbi21/pythons-mro-and-diamond-problem-880f39858dc6",
                icon: <SiMedium/>
            }
        ],
        image: diam,
        description: "This article covers multiple inheritance, the Diamond Problem, and how Python handles method resolution using MRO and super().",
        target: "_blank"
    },
]

export default blogConfig