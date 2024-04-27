import React from "react";
import NavBar from "../../Components/NavBar";
import styles from "./BudgetingVideo.module.css"


function BudgetingVideoV4(){

    return(
        <>
            <NavBar />
            <iframe width="900" height="515" src="https://www.youtube.com/embed/Dhx8tFp6v6c?si=1bKUZHmNSEyqE7j-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            
        </>
    )
};


export default BudgetingVideoV4;