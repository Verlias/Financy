import React from "react";
import NavBar from "../../Components/NavBar";
import styles from "./CreditDebtVideo.module.css"

function CreditDebtVideoV4(){
    return(
        <>
            <NavBar />
            <iframe width="800" height="515" src="https://www.youtube.com/embed/9so90hH4vgc?si=3iUit0y1yI6ZRobQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        
            </>
    );
};

export default CreditDebtVideoV4;