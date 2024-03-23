import React, { useState } from 'react';
import {Link} from "react-router-dom";

//Drop Down Feature Takes in Parameters 
function ButtonElementRenderer({ButtonName,content,linkUrl}) {
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
                    <div>{content}</div>
                    <Link to={linkUrl}>Reading 1</Link>
                        
                    
                </div>
            )}
            

        </>
    );
}

export default ButtonElementRenderer;
