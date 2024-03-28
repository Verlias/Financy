import React from "react";
import {Link} from "react-router-dom";
import styles from "./Sign-Up.module.css";
import NavBar from "../Components/NavBar";



function SignUp(){

    return(
        <>
            <NavBar />
            <form className={styles.form} action="sign-up.php" method="post">
                <div>
                    <h1 className={styles.header}>Sign Up</h1>

                    <label className={styles.label}>Name:</label>
                    <input type="text" id="name" name="name" required/>

                    <label className={styles.label}>Email:</label>
                    <input type="email" id="email" name="email" required/>

                    <label className={styles.label}>Password:</label>
                    <input type="password" id="password" name="password" required/>

                    <label className={styles.label}>Re-enter Password:</label>
                    <input type="password" id="password" name="password" required/>

                    <button type="cancel">Cancel</button>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </>
    )
}

export default SignUp;