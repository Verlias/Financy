import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../User-Dash.module.css";
import NavBar from "../../Components/NavBar";

function SettingsUpdate() {

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    const handleChange = (e) => {
        // Update formData state with the new value of the changed input field
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();try {
            // Send form data to the backend using Axios POST request
            const response = await axios.post("http://localhost:3000/api/settings", formData);
            console.log(response.data); // Log response from the backend
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const redirectToSettings = (e) => {
        e.preventDefault();
        window.location = "/settings";
    };

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src="profile-pic.jpg" alt="Profile Picture" />
                    <h1>Welcome {formData.name}</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.sidebar}>
                        <h2 className={styles.sidebar_h2}>Dashboard</h2>
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
                            <li>
                                <a href="">Log out</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.profileInfo}>
                        <h2>Settings</h2>
                        <h3>Update Info</h3>
                        <form onSubmit={handleSubmit}>
                            <label className={styles.label}>Name:</label>
                            <div className={styles.user}>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                />
                            <label className={styles.label}>Email:</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    value={formData.email} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <button type="submit">Save</button>
                            <button onClick={redirectToSettings} className={styles.cancelButton}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SettingsUpdate;
