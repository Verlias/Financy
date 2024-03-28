import React from "react";
import NavBar from "../../Components/NavBar";
import styles from "./BankingVideo.module.css"

function BankingVideoV1(){
    return(
        <>
            <NavBar />
            <iframe  classname={styles.YoutubeVideo} width="800" height="515" src="https://www.youtube.com/embed/aJJoV0xSDqA?si=DkUeGkW9kynlDWji" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </>
    );
};

export default BankingVideoV1