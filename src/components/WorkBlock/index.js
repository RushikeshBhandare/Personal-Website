import React from "react";
import './style.css'

const WorkBlock = ({name, link, image}) =>{
    return(
        <div className="WorkBlockContainer">
            <div className="workImageBlock">
                <img
                    className="workImage"
                    src={image}
                />
            </div>
            <div className="projectName">
                {name}
            </div>
            <div className="GitLinkBlock">
                CODE ON GIT
            </div>
        </div>
    )
}

export default WorkBlock