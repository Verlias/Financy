import React, { useState } from "react";
import axios from "axios";
import styles from "./Sign-Up.module.css";
import NavBar from "../Components/NavBar";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/signup", formData);
      console.log(response.data); // Handle response from the backend
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <>
      <NavBar />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <h1 className={styles.header}>Sign Up</h1>

          <label className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

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

          <label className={styles.label}>Re-enter Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="button" onClick={() => {}}>
            Cancel
          </button>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
}

export default SignUp;
