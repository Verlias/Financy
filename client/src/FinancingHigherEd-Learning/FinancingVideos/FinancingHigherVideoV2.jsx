import React from "react";
import NavBar from "../../Components/NavBar";
import styles from "./FinancingHigherVideo.module.css"

function FinancingHigherVideoV2(){
    return(
        <>
            <NavBar />
            <iframe width="800" height="515" src="https://www.youtube.com/embed/6-Lf4ETeiAQ?si=QccnrpGQjQkrbYpr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </>
    )
};

export default FinancingHigherVideoV2; 