import React from "react";
import {Link} from "react-router-dom";
import styles from "../User-Dash.module.css";
import NavBar from "../../Components/NavBar";

function Courses(){

    return(
        <>
            <NavBar />
            <div class={styles.container}>
                <div className={styles.header}>
                    <img src="profile-pic.jpg" alt="Profile Picture"></img>
                    <h1>Welcome Zacharius</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.sidebar}>
                    <h2 className={styles.sidebar_h2}>
                        Dashboard
                    </h2>
                    <ul>
                        <li>
                            <Link to="/my-courses">My Courses</Link>
                        </li>
                        <li>
                            <Link to="/recommended">Recommended</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li><a href="">Log out</a></li>
                    </ul>
                    </div>
                    <div className={styles.profile_info}>
                        <h2>My Courses</h2>
                            <ul>
                                <li>Completed Courses</li>
                                <li>In Progress</li>
                            </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses;