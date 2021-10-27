import React, { useState } from "react";
import './style.css'

const WorkBlock = ({name, link, about, image}) =>{
    const [moreInfo, setmoreInfo] = useState('')
    const mouseEnter = () =>{
        console.log('hji')
        setmoreInfo(about)
    } 
    const mouseLeave = () =>{
        setmoreInfo('')
    }
    return(
        <div 
            onMouseEnter={()=>{mouseEnter()}}
            onMouseLeave={()=>{mouseLeave()}} 
            className="WorkBlockContainer"
        >
            <div className="workImageBlock">
                <img
                    className="workImage"
                    src={image}
                />
            </div>
            <div className="projectName">
                {name}
            </div>
            <div className="MoreInformation">
                {moreInfo}
            </div>
            <div className="GitLinkBlock">
                CODE ON GIT
            </div>
        </div>
    )
}
 
export default WorkBlock