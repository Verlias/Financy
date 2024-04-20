import React from "react";
import {Link} from "react-router-dom";
import styles from "../User-Dash.module.css";
import NavBar from "../../Components/NavBar";

function Settings(){

    const redirectToUpdate = (e) => {
        e.preventDefault();
        window.location = "/settingsnew";
    };

    return(
        <>
            <NavBar />
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
                <div className={styles.profileInfo}>
                    <h2>Profile Info</h2>
                    <ul>
                        <li>Name:</li>
                        <li>Email:</li>
                    </ul>
                    <button onClick={redirectToUpdate} className={styles.updateButton}>
                        Update Profile
                    </button>
                </div>
            </div>
        </>
    )
}

export default Settings;