import React from "react";
import './language.css'

const LanguageBlock = ( {text, image}) =>{
    return(
        <div className="language">
            <img className="langugeImage" src={image}/>
            <div className="languageText">
                {text}
            </div>
        </div>
                
        
    )
}

export default LanguageBlock