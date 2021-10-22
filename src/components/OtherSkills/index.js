import React from "react";
import LanguageBlock from "../LanguageBlock/LanguageBlock";
import './other.css'

import cpp from './images/cpp.png'
import nodeJs from './images/node-js.png'
import UE from './images/unreal-engine.png'
import mongodb from './images/mongodb.png'
import git from './images/git.png'

const OtherSkills = () =>{
    return(
        <div>
             <div className="otherSkills">
                    OTHER SKILLS
            </div>  
            <div className="otherSkillsLanguages">
                <LanguageBlock text="C++" image={cpp}/>
                <LanguageBlock text="NODE JS" image={nodeJs}/>
                <LanguageBlock text="UE 4" image={UE}/>
                <LanguageBlock text="MONGO DB" image={mongodb}/>
                <LanguageBlock text="Git" image={git}/>
            </div>
        </div>
    )
}

export default OtherSkills