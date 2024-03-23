import React from "react";
import {Link} from "react-router-dom";
import styles from "./Learn.module.css";
import NavBar from "../Components/NavBar";
import Dropdown from './DropDown.jsx';




function Learn(){

  
    return(
        <>
            <NavBar />
            <section className={styles.LearnSection}>
                <div>
                    <h2>
                        <Dropdown 
                            ButtonName="1) Banking"
                            content="Banking Education"
                            linkUrl="/BankingR1"
                        />
                    </h2>
                </div>
                <div>
                    <h2>
                        <Dropdown 
                            ButtonName="2) Personal Finance"
                            content="Personal Finance Education"
                            linkUrl="/BankingR1"
                            />
                            </h2>
                    </div>
                <div>
                    <h2>
                        <Dropdown 
                            ButtonName="3) Investing"
                            content="Investing Education"
                            linkUrl="/BankingR1"
                        />
                        </h2>
                    </div>
                <div>
                    <h2>
                        <Dropdown 
                            ButtonName="4) Asset Managment"
                            content="Asset Managment Education"
                            linkUrl="/BankingR1"
                        />
                        </h2>
                    </div>
                <div>
                    <h2>
                        <Dropdown 
                        ButtonName="5) Retirement"
                        content="Retirement Education"
                        linkUrl="/BankingR1"
                        />
                        </h2>
                    </div>
            </section>
        </>
    )
}

export default Learn;