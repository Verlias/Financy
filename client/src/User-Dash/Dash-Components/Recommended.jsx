import React from "react";
import {Link} from "react-router-dom";
import styles from "../User-Dash.module.css";
import NavBar from "../../Components/NavBar";
import Course1Img from "../../assets/courseDash1.jpg";

function Recommended(){

    const recommendedCourses = [
        { name: "Course 1", image: Course1Img },
        { name: "Course 2", image: Course1Img },
        { name: "Course 3", image: Course1Img },
        { name: "Course 4", image: Course1Img }
    ];

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
                <div className={styles.dashInfo}>
                    <h2>Recommended Courses</h2>
                    <ul>
                        <ul className={styles.dashCoursesList}>
                            {recommendedCourses.map(course => (
                                <li key={course.name} className={styles.course}>
                                    <div className={styles.courseContainer}>
                                        <img src={course.image} alt={course.name} className={styles.dashCoursesImg}></img>
                                        <span className={styles.courseName}>{course.name}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Recommended;