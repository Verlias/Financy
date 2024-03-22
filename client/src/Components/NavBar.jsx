import React from "react";
import {Link} from "react-router-dom";
import styles from "./NavBar.module.css";

  

function NavBar(){
    return(
        <>
            <nav className={styles.nav}>
                <Link to="/" className={styles.site_name}>Financy</Link>
                <ul>
                    <li className={styles.active}>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/learn">Learn</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;