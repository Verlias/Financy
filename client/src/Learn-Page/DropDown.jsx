import React, { useState } from 'react';
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
            <button onClick={handleButtonClick}>{ButtonName}</button>
            {isVisible && (
                <div>
                    {/*Iterate through a List */}
                    {content.map((content, index) => (
                        <div key={index}>
                            <div>{content.content}</div>
                            <Link to={content.linkUrl}>Reading {index + 1}</Link>
                        </div>
                    ))}
                        
                    
                </div>
            )}
            

        </>
    );
}

export default ButtonElementRenderer;
