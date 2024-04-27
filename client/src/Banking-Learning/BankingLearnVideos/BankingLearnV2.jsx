import React from "react";
import NavBar from "../../Components/NavBar";
import styles from "./BankingVideo.module.css"

function BankingVideoV2(){
    return(
        <>
            <NavBar />
            <iframe width="800" height="515" src="https://www.youtube.com/embed/jXPKbuk_m14?si=33xeRwGcC3TYKnxi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </>
    );
};

export default BankingVideoV2