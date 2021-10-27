import React from "react"
import WorkBlock from "../WorkBlock"

import Recipe from './images/recipeApp.jpg'
import RecipeBack from './images/noteWeb.png'
import GK from './images/quize.jpg'

import './style.css'

const ScrolingWork = () =>{
    return(
        <div className="scrollMainBlockContainer">
            {/* title for work  */}
            <div className="skillContainer">
                <div className="skillBlock">
                     work  
                </div>
             
            </div>
            {/* works that i do  */}
            <div className="ScrollRootContainer">
                <div className="scrollChild">
                    <WorkBlock 
                        name='Recipe'
                        image={Recipe}
                        about="App that can gives you the result of all avalable recipes and thair ingredients, nutrition "
                        link="https://github.com/RushikeshBhandare/RecipeApp"
                    />
                </div>
                <div className="scrollChild">
                    <WorkBlock 
                        name='Quize'
                        image={GK}
                        about="its a simple quize app where you have to give the answer of 10 questions andd 4 answer"
                        link=''
                    />
                </div>
                <div className="scrollChild">
                    <WorkBlock 
                        name='Recipe Back'
                        image={RecipeBack}
                        about="in this website people can come and create thaire account and make personal notes"
                        link="https://github.com/RushikeshBhandare/TODO"

                    />
                </div>
            </div>
        </div>
       
    )
}

export default ScrolingWork