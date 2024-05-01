import React from "react";
import styles from "./InvestingVideo.module.css"
import NavBar from "../../Components/NavBar";

function InvestingVideoV2(){
    return(
        <>
            <NavBar />
            <hr></hr>
            <section>
            <iframe width="900" height="515" src="https://www.youtube.com/embed/cJ3O3beBBw0?si=VdkHBRoycOl5hVHr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </section>
        </>
    )
}

export default InvestingVideoV2;