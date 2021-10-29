import React from "react";
import WorkContainer from "../WorkContainer";
import {recipeApp, quizApp, noteWeb} from '../../assets/images'


const data = [
    {
        projectName: 'Recipe App',
        projectDetail: 'Recipe app that give you access to all the recipes and their nutrition facts ',
        image: recipeApp,
        technology: 'React Native, edamam api',
        gitLink: 'https://github.com/RushikeshBhandare/RecipeApp',
        downloadLink: 'https://drive.google.com/file/d/1RjrddLOpMlC8P35wxIEfi2QRCF7z_Dqf/view?usp=sharing'
    },
    {
        projectName: 'Note Website',
        projectDetail: 'this websit give you the ability to store notes in this website ',
        image: noteWeb,
        technology: 'React, Node js, Express, MongoDB',
        gitLink: 'https://github.com/RushikeshBhandare/TODO',
        downloadLink: 'https://personalnoteapp.herokuapp.com/'
    },
    {
        projectName: 'Quize App',
        projectDetail: 'its a simple game where you can play quize game with diffrent categories',
        image: quizApp,
        technology: 'React Native',
        gitLink: 'https://github.com/RushikeshBhandare/QuizeApp',
        downloadLink: 'https://drive.google.com/file/d/1VjXq09XPjnqwQpSWEUPYPy12ndmMSoQK/view?usp=sharing'
    },
]   

const Work = () =>{
    const renderWork =()=>{
        return data.map((item)=>{
            console.log(item)
            return(
                <WorkContainer 
                    name={item.projectName}
                    info={item.projectDetail}
                    image={item.image} 
                    gitLink={item.gitLink}
                    downloadLink={item.downloadLink}
                    key={item.projectName}
                    technology={item.technology}
                />
            )
        })
    }
    return(
        <div className="WorkMainContainer">
            {renderWork()}
        </div>
    )
}

export default Work