import React from "react";
import {Link} from "react-router-dom";
import styles from "./Home-Page.module.css";
import NavBar from "../Components/NavBar";
import InvestIQImage from "../assets/InvestIQ.jpg";
import InvestFinanceImage from "../assets/InvestFinance.jpg"

function Home(){

    return(
        <>
            <NavBar />
            <div className={styles.Headline}>
                <h1 className={styles.Header}>
                Empower Your Financial Future: Learn, Grow, and Succeed with Financy
                </h1>
                <Link className={styles.GetStartedButton}>
                    Get Started
                </Link>
            </div>

            {/*Images */}

            <div className={styles.ImageContainer}>

                <img 
                className={styles.InvestFinanceImage} 
                src={InvestFinanceImage}>

                </img>

                <img
                className={styles.InvestIQImage} src={InvestIQImage}>

                </img>
                

            </div>

            <div className={styles.BeliefSection}>
                <div className={styles.BeliefHeadline}>    
                    What we believe
                </div>
                <div className={styles.BeliefContent}>

                    <div className={styles.BeliefContentHeader}>
                        Empowering Financial Literacy for Every Generation.
                    </div>

                    <div>
                        At Financy, we believe in democratizing financial knowledge, making it accessible to all ages and backgrounds. Our mission is to empower individuals with the essential skills and understanding needed to navigate the complexities of personal finance confidently. We're committed to fostering a culture of lifelong learning, where everyone has the opportunity to achieve financial well-being and build a secure future. Through engaging courses, interactive tools, and a supportive community, we're here to guide you on your journey to financial literacy and success. Join us and take control of your financial future today.

                    </div>
                    
                </div>
            </div>
            <footer className={styles.HomeFooter}>
                
            </footer>
        </>
    )
}

export default Home;