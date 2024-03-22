import React from "react";
import {Link} from "react-router-dom";
import styles from "./About.module.css";
import NavBar from "../Components/NavBar";

function About(){

    return(
        <>
            <NavBar />
            <p>Hello world this is about page</p>
        </>
    )
} 

export default About;