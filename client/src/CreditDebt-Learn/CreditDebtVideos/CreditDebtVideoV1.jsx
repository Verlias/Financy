import React from "react";
import NavBar from "../../Components/NavBar";
import styles from "./CreditDebtVideo.module.css"

function CreditDebtVideoV1(){
    return(
        <>
            <NavBar />
            <iframe width="800" height="515" src="https://www.youtube.com/embed/62Tf35ne4jI?si=42sdHuY7iuJSbjUh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        
            
        </>
    );
};

export default CreditDebtVideoV1