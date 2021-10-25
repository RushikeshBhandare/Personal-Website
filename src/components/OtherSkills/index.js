import React from "react";
import LanguageBlock from "../LanguageBlock/LanguageBlock";
import './other.css'

import cpp from './images/cpp.png'
import nodeJs from './images/node-js.png'
import UE from './images/unreal-engine.png'
import mongodb from './images/mongodb.png'
import git from './images/git.png'

// Color Images
import cppColor from './images/cColor.png'
import nodeJsColor from './images/node-jsColor.png'
import UEColor from './images/unreal-engineColor.png'
import mongodbColor from './images/mongodbColor.png'
import gitColor from './images/gitColor.png'



const OtherSkills = () =>{
    return(
        <div>
             <div className="otherSkills">
                    OTHER SKILLS
            </div>  
            <div className="otherSkillsLanguages">
                <LanguageBlock text="C++" image={cpp} colorImage={cppColor}/>
                <LanguageBlock text="NODE JS" image={nodeJs} colorImage={nodeJsColor}/>
                <LanguageBlock text="UE 4" image={UE} colorImage={UEColor}/>
                <LanguageBlock text="MONGO DB" image={mongodb} colorImage={mongodbColor}/>
                <LanguageBlock text="Git" image={git} colorImage={gitColor}/>
            </div>
        </div>
    )
}

export default OtherSkills