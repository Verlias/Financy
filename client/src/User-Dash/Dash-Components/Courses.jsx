import React from "react";
import {Link} from "react-router-dom";
import styles from "../User-Dash.module.css";
import NavBar from "../../Components/NavBar";
import Course1Img from "../../assets/courseDash1.jpg";

function Courses(){

    const inProgressCourses = [
        { name: "Course 1", progress: 80, image: Course1Img },
        { name: "Course 2", progress: 50, image: Course1Img },
        { name: "Course 3", progress: 21, image: Course1Img },
        { name: "Course 4", progress: 76, image: Course1Img }
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
                    <h2>My Courses</h2>
                    <ul>
                        <li>In Progress</li>
                        <ul className={styles.dashCoursesList}>
                            {inProgressCourses.map(course => (
                                <li key={course.name} className={styles.course}>
                                    <div className={styles.courseContainer}>
                                        <img src={course.image} alt={course.name} className={styles.dashCoursesImg}></img>
                                        <span className={styles.courseName}>{course.name}</span>
                                        <progress value={course.progress} max="100" className={styles.progress}></progress>
                                        <span className={styles.courseProgress}>{course.progress}%</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <li>Completed Courses</li>
                        <ul className={styles.dashCoursesList}>
                            {inProgressCourses.map(course => (
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

export default Courses;