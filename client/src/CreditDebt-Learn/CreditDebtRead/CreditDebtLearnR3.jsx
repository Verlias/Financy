import React from "react";
import NavBar from "../../Components/NavBar";
import styles from "./CreditDebtRead.module.css"



function CreditDebtR3(){

    return(
        <>
            <NavBar />
            <h1>Credit Card Statements</h1>
            <hr></hr>
            <section>
                <p>
                Your credit card statement provides a comprehensive overview of your credit card activity and account details. It begins with personal information like your name, address, and account number, followed by a summary of your account activity for the billing cycle. This includes your previous balance, payments and credits, purchases, balance transfers, cash advances, fees charged, interest charges, and your new balance. The statement also outlines payment information, including your minimum payment and due date, along with any warnings or advice regarding payment strategies. Additionally, it may include notifications of changes to your card's terms, ongoing informational notices, and details of transactions made during the billing cycle. Interest charges, fees, and interest rates are typically listed separately, along with rewards information if applicable. It's important to review your statement for accuracy and unauthorized transactions, and while you may not need to keep physical copies for long periods, it's wise to retain them in case of disputes or for tax purposes. Monitoring your credit report alongside your credit card statements can provide a comprehensive view of your financial health.
                </p>
                
            </section>
            <ul>
                <h3>Key Takeaways</h3>
                <li>Account Activity Summary: Understand your previous balance, payments, purchases, balance transfers, cash advances, fees charged, interest charges, and new balance for the billing cycle.</li>
                <li>Payment Information: Note your minimum payment, due date, and potential consequences of not making timely payments.</li>
                <li>Account Notifications: Stay informed about any changes to your card's terms, ongoing notifications, and details of automatic payments.</li>
            </ul>
        </>
    )
};

export default CreditDebtR3;