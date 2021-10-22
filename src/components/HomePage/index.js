import React from "react";
import './home.css'
import model from './model.jpg'

const HomePage = ( ) =>{
    return(
        <div style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            {/* Navigation Opions */}
            <div className="NavigationContainer">
                <div className="navOptionsBlock">
                    About
                </div>
                <div className="navOptionsBlock">
                    Portfolio
                </div>
                <div className="navOptionsBlock">
                    CONTACT 
                </div>
            </div>
            <div className="rootContainer">
                {/* name and options */}
                
                <div className="HomeSepration">
                    
                    <div className="aboutTextSection">
                        {/* About Information */}
                        <div className="hi">
                            Hi, I am 
                        </div>

                        <div className="nameText">
                            Rhikesh Bhandare
                        </div>
                        <div className="ReactText">
                            React / React native Devloper 
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default HomePage