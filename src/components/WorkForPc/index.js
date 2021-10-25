import React from "react"
import WorkBlock from "../WorkBlock"

import Recipe from './images/Recipe.jpg'
import RecipeBack from './images/RecipeBack.jpg'
import GK from './images/GKnoladge.jpg'

import './style.css'

const WorkForPc = () =>{
    return(
        <div className="scrollMainBlockContainer">
            {/* title for work  */}
            <div className="skillContainer">
                <div className="skillBlock">
                     work  
                </div>
             
            </div>
            {/* works that i do  */}
            <div className="workForPCContainer">
                <div className="scrollChild">
                    <WorkBlock 
                        name='Recipe'
                        image={Recipe}
                    />
                </div>
                <div className="scrollChild">
                    <WorkBlock 
                        name='Quize'
                        image={GK}
                    />
                </div>
                <div className="scrollChild">
                    <WorkBlock 
                        name='Recipe Back'
                        image={RecipeBack}
                    />
                </div>
            </div>
        </div>
       
    )
}

export default WorkForPc