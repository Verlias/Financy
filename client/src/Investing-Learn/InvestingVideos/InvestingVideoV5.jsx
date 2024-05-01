import React from "react";
import styles from "./InvestingVideo.module.css"
import NavBar from "../../Components/NavBar";

function InvestingVideoV5(){
    return(
        <>
            <NavBar />
            <iframe width="800" height="515" src="https://www.youtube.com/embed/vAdn7aLHpO0?si=u0xjXud0DwgvF1rj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
        </>
        );
}

export default InvestingVideoV5;