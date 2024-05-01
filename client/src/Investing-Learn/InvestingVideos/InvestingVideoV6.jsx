import React from "react";
import styles from "./InvestingVideo.module.css"
import NavBar from "../../Components/NavBar";

function InvestingVideoV6(){
    return(
        <>
            <NavBar />
            
            <section>
            <iframe width="800" height="515" src="https://www.youtube.com/embed/b1_1xywk_0c?si=KwYnEa4MHrpjrURk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </section>
        </>
    )
}

export default InvestingVideoV6;