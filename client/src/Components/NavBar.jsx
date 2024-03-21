import React from "react";
import {Link} from "react-router-dom";
import styles from "./NavBar.module.css";



function NavBar(){
    return(
        <nav className={styles.nav}>
            <a className={styles.site_name} href="/">Financy</a>
            <ul>
                <li className={styles.active}>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;