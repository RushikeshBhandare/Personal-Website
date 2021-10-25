import React from "react";
import LanguageBlock from "../LanguageBlock/LanguageBlock";
import './skill.css'

import html from './images/html5.png'
import css from './images/css.png'
import js from './images/javascript.png'
import react from './images/react.png'

// color images
import htmlColor from './images/html5Color.png'
import cssColor from './images/cssColor.png'
import jsColor from './images/javascriptColor.png'
import reactColor from './images/reactColor.png'

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
                <LanguageBlock text="HTML" image={html} colorImage={htmlColor}/>
                <LanguageBlock text="CSS" image={css} colorImage={cssColor}/>
                <LanguageBlock text="REACT" image={react} colorImage={reactColor}/>
                <LanguageBlock text="JS" image={js} colorImage={jsColor}/>
                <LanguageBlock text="REACT NATIVE" image={react} colorImage={reactColor}/>
             </div>
        </div>

    )
}

export default SkillPage