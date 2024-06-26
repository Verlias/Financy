import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import styles from "./Log-In.module.css";
import NavBar from "../Components/NavBar";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router


function LogIn() {
    // State to store form data
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Function to handle changes in form fields
    const handleChange = (e) => {
        // Update formData state with the new value of the changed input field
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            // Send form data to the backend using Axios POST request
            const response = await axios.post("http://localhost:3000/api/login", formData);
            console.log(response.data); // Log response from the backend
            const { token } = response.data
            localStorage.setItem('token', token);
            navigate('/my-courses');
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

  return (
    <>
      <NavBar />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <h1 className={styles.header}>Log In</h1>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="cancel" onClick={() => {}}>
            Cancel
          </button>
          <button type="login" className={styles.login}>Log in</button>
        </div>
      </form>
    </>
  );
}

export default LogIn;
