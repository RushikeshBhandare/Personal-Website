import React, { useState } from "react";
import './language.css'

const LanguageBlock = ( {text, image, colorImage}) =>{
    const [currentImage, setCurrentImage] = useState(image)
    return(
        <div 
            onMouseEnter={()=>{
                setCurrentImage(colorImage)
            }} 

            onMouseLeave={()=>{
                setCurrentImage(image)
            }}

            className="language"
        >
            <img className="langugeImage" src={currentImage}/>
            <div className="languageText">
                {text}
            </div>
        </div>
                
        
    )
}

export default LanguageBlock 