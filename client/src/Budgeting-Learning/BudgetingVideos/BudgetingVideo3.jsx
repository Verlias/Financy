import React from "react";
import NavBar from "../../Components/NavBar";
import styles from "./BudgetingVideo.module.css"


function BudgetingVideoV3(){

    return(
        <>
            <NavBar />
            <iframe width="900" height="515" src="https://www.youtube.com/embed/wuVpU-HXtjU?si=3ZM_NJORF6Lc7Pji" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            
        </>
    )
};


export default BudgetingVideoV3;