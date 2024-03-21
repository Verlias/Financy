import React from "react";
import {Link} from "react-router-dom";
import styles from "./Home-Page.module.css";
import NavBar from "../Components/NavBar";

function Home(){

    return(
        <>
            <NavBar />
            <p>Home Page</p>
        </>
    )
}

export default Home;