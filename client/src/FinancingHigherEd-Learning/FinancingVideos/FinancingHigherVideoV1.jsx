import React from "react";
import NavBar from "../../Components/NavBar";
import styles from "./FinancingHigherVideo.module.css"

function FinancingHigherVideoV1(){
    return(
        <>
            <NavBar />
            <iframe width="800" height="515" src="https://www.youtube.com/embed/RRVaqkiYQdc?si=8FIKliha439IXzr2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </>
    )
};

export default FinancingHigherVideoV1; 