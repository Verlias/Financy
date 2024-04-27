import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./Learn.module.css";
import NavBar from "../Components/NavBar";
import Dropdown from './DropDown.jsx';
import { useEffect } from "react";

function Learn(){

    const BankingEducation = [
        { content: "What is Banking?", linkUrl: "/BankingR1" },
        { content: "What is Banking Video ", linkUrl: "/BankingV1" },
        { content: "Types of Banks & Financial institutions", linkUrl: "/BankingR2" },
        { content: "Types of Banks", linkUrl: "/BankingV2" },
        { content: "The role banks play in the economy", linkUrl: "/BankingR3" },
        { content: "Bank Roles Video", linkUrl: "/BankingV3" },
        { content: "Interactive Activity", linkUrl: "/reading3" },
        // Add more reading items as needed
    ];

    const Budgeting = [
        { content: "How to utilize banks", linkUrl: "/BudgetingR1" },
        { content: "Personal Finance Video", linkUrl: "/BudgetingV1" },
        { content: "Personal Banking", linkUrl: "/BudgetingR2" },
        { content: "Managing a Bank Account Video", linkUrl: "/BudgetingV2" },
        { content: "Purpose of Budgeting", linkUrl: "/BudgetingR3" },
        { content: "Why you should budget Video", linkUrl: "/BudgetingV3" },
        { content: "Limiting expenses and Budgeting tools", linkUrl: "/reading3" },
        { content: "How to Do a Monthly Budget Video", linkUrl: "/BudgetingV4" },
        { content: "Interactive Activity", linkUrl: "/reading3" },
        // Add more reading items as needed
    ];

    const InvestingEducation = [
        { content: "Investing Reading 1", linkUrl: "/reading1" },
        { content: "Investing Reading 2", linkUrl: "/reading2" },
        { content: "Investing Reading 3", linkUrl: "/reading3" },
        // Add more reading items as needed
    ];

    const CreditDebt = [
        { content: "Asset Management Reading 1", linkUrl: "/reading1" },
        { content: "Asset Management Reading 2", linkUrl: "/reading2" },
        { content: "Asset Management Reading 3", linkUrl: "/reading3" },
        // Add more reading items as needed
    ];

    const FinancingHigherEducation = [
        { content: "Retirement Reading 1", linkUrl: "/reading1" },
        { content: "Retirement Reading 2", linkUrl: "/reading2" },
        { content: "Retirement Reading 3", linkUrl: "/reading3" },
        // Add more reading items as needed
    ];

    /*const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/log-in');
        }
    }, [navigate]);*/
  
    return(
        <>
            <NavBar />
            <div className={styles.HeadlineLearn}>
                <h1 className={styles.LearnHeadLineContent}>Curriculum</h1>
                <hr className={styles.LineBreak}></hr>
            </div>
            <main className={styles.MainLearnSection}>
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
                                ButtonName="2) Budgeting"
                                content={Budgeting}
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
                                ButtonName="4) Credit & Debt"
                                content={CreditDebt}
                            />
                            </h2>
                        </div>
                    <div>
                        <h2>
                            <Dropdown 
                            ButtonName="5) Financing Higher Education"
                            content={FinancingHigherEducation}
                            />
                            </h2>
                        </div>   
                </section>
            </main>
        </>
    )
}

export default Learn;