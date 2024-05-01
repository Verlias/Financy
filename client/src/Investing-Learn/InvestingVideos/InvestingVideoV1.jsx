import React from "react";
import styles from "./InvestingVideo.module.css"
import NavBar from "../../Components/NavBar";

function InvestingVideoV1(){
    return(
        <>
            <NavBar />
            
            <section>
            <iframe width="800" height="515" src="https://www.youtube.com/embed/qIw-yFC-HNU?si=gR0D4yCj0Add3nmR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </section>
        </>
    )
}

export default InvestingVideoV1;