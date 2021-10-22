import React from "react";
import "./nav.css"

const Navbar = () =>{
    return(
        <div className="root">
            {/* logo if any  */}
            <div className="sepration">
                
            </div>
            {/* categories */}
            <div className="sepration">
                {/* <div className="category">
                    About me
                </div> */}
                <div className="category">
                    Skills
                </div>
                <div className="category">
                    portfolio
                </div>
                <div className="category">
                   <div className="contact">
                        CONTACT ME
                   </div>
                </div>

            </div>
        </div>
       
    )
}

export default Navbar