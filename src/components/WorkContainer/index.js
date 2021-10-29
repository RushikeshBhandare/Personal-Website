import React from "react";
import './style.css'

import rec from './recipeApp.jpg'
import git from './git.png'
import download from './download.png'

const WorkContainer = ({image, name, info, technology, gitLink, downloadLink}) =>{
    return(
        <div className="WorkContainerRootContainer">
            <div className="innerContainer">
                {/* image */}
                <div className="WorkContainerImageContainer"> 
                    <img
                        className="workcontainerImage"
                        src={image}
                    />
                </div>
                <div className="WorkContainerInfo">
                    <div className="projectName">
                        {name}
                    </div>
                    <div className="projectDetail">
                        {info}
                    </div>
                    <div className="ProgtammingLanguages">
                        Technology :  {technology}
                    </div>

                    <div className="Links">
                        {/* git link */}
                        <a  
                            style={{backgroundColor:'rgba(0, 0, 0, 0)'}}
                            href={gitLink}
                            alt="Git"
                            target="_blank"
                        >
                            <img className="socialMediaImages" src={git}/>
                        </a>
                        {/* donload link */}
                        <a  
                            style={{backgroundColor:'rgba(0, 0, 0, 0)'}}
                            href={downloadLink}
                            target="_blank"
                            alt="Download"

                        >
                            <img 
                                className="socialMediaImages" 
                                src={download}
                                alt="Download"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkContainer