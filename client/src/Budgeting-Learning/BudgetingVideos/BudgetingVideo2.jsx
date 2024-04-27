import React from "react";
import NavBar from "../../Components/NavBar";
import styles from "./BudgetingVideo.module.css"


function BudgetingVideoV2(){

    return(
        <>
            <NavBar />
            <iframe width="900" height="515" src="https://www.youtube.com/embed/CgM06P_6Lr0?si=7FgZysTOvkQmi18C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        </>
    )
};


export default BudgetingVideoV2;