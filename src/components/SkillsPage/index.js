import React from "react";
import LanguageBlock from "../LanguageBlock/LanguageBlock";
import './skill.css'

import html from './images/html5.png'
import css from './images/css.png'
import js from './images/javascript.png'
import react from './images/react.png'
import reactNative from './images/reactNative.png'

const SkillPage = ( ) =>{
    return(
        <div>
            <div className="skillContainer">
                <div className="skillBlock">
                     skills  
                </div>
             
            </div>
            {/* <div className="usingNowText">
                     USING NOW
            </div>      */}
             {/* showing the list items */}
             <div className="UsingNowBlock">
                <LanguageBlock text="HTML" image={html}/>
                <LanguageBlock text="CSS" image={css}/>
                <LanguageBlock text="REACT" image={react}/>
                <LanguageBlock text="JS" image={js}/>
                <LanguageBlock text="REACT NATIVE" image={react}/>
             </div>
        </div>

    )
}

export default SkillPage