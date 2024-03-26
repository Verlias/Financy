import React, { useState } from 'react';
import styles from "./Learn.module.css"
import {Link} from "react-router-dom";

//Drop Down Feature Takes in Parameters 
function ButtonElementRenderer({ButtonName,content}) {
    // isVisible is set initally to false by state managment and updated through setIsVisible
    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        // Allows for Button to be Toggled using Logic gate NOT "!"
        setIsVisible(!isVisible);
    };

    return (
        <>
            <button className={styles.button} onClick={handleButtonClick}>{ButtonName}</button>
            {isVisible && (
                <div>
                    {/*Iterate through a List */}
                    {content.map((content, index) => (
                        <div className={styles.EducationSection} key={index}>
                            <Link className={styles.EducationLink} to={content.linkUrl}>{content.content}</Link>
                        </div>
                    ))}
                        
                    
                </div>
            )}
            

        </>
    );
}

export default ButtonElementRenderer;
