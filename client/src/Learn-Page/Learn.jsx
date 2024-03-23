import React from "react";
import {Link} from "react-router-dom";
import styles from "./Learn.module.css";
import NavBar from "../Components/NavBar";
import Dropdown from './DropDown.jsx';




function Learn(){

    const BankingEducation = [
        { content: "Banking Reading 1", linkUrl: "/BankingR1" },
        { content: "Banking  Reading 2", linkUrl: "/reading2" },
        { content: "Banking  Reading 3", linkUrl: "/reading3" },
        // Add more reading items as needed
    ];

    const PersonalFinanceEducation = [
        { content: "Personal Finance Reading 1", linkUrl: "/reading1" },
        { content: "Personal Finance Reading 2", linkUrl: "/reading2" },
        { content: "Personal Finance Reading 3", linkUrl: "/reading3" },
        // Add more reading items as needed
    ];

    const InvestingEducation = [
        { content: "Investing Reading 1", linkUrl: "/reading1" },
        { content: "Investing Reading 2", linkUrl: "/reading2" },
        { content: "Investing Reading 3", linkUrl: "/reading3" },
        // Add more reading items as needed
    ];

    const AssetManagementEducation = [
        { content: "Asset Management Reading 1", linkUrl: "/reading1" },
        { content: "Asset Management Reading 2", linkUrl: "/reading2" },
        { content: "Asset Management Reading 3", linkUrl: "/reading3" },
        // Add more reading items as needed
    ];

    const RetirementEducation = [
        { content: "Retirement Reading 1", linkUrl: "/reading1" },
        { content: "Retirement Reading 2", linkUrl: "/reading2" },
        { content: "Retirement Reading 3", linkUrl: "/reading3" },
        // Add more reading items as needed
    ];
  
    return(
        <>
            <NavBar />
            <section className={styles.LearnSection}>
                <div>
                    <h2>
                        <Dropdown 
                            ButtonName="1) Banking"
                            content={BankingEducation}
    
                        />
                    </h2>
                </div>
                <div>
                    <h2>
                        <Dropdown 
                            ButtonName="2) Personal Finance"
                            content={PersonalFinanceEducation}
                            />
                            </h2>
                    </div>
                <div>
                    <h2>
                        <Dropdown 
                            ButtonName="3) Investing"
                            content={InvestingEducation}
                        />
                        </h2>
                    </div>
                <div>
                    <h2>
                        <Dropdown 
                            ButtonName="4) Asset Management"
                            content={AssetManagementEducation}
                        />
                        </h2>
                    </div>
                <div>
                    <h2>
                        <Dropdown 
                        ButtonName="5) Retirement"
                        content={RetirementEducation}
                        />
                        </h2>
                    </div>   
            </section>
        </>
    )
}

export default Learn;