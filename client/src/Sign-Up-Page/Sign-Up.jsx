import React from "react";
import {Link} from "react-router-dom";
import styles from "./Sign-Up.module.css";
import NavBar from "../Components/NavBar";



function SignUp(){

    return(
        <>
            <NavBar />
            <form action="sign-up.php" method="post">
                <div class="container">
                    <h1>Sign Up</h1>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required/>

                    <label for="password">Re-enter Password:</label>
                    <input type="password" id="password" name="password" required/>

                    <button type="cancel">Cancel</button>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </>
    )
}

export default SignUp;