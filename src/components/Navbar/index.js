import React from "react";
import "./nav.css"

const Navbar = () =>{
    return(
        <div className="root">
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
        </div>
       
    )
}

export default Navbar