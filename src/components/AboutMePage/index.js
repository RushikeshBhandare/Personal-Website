import React from "react";
import './about.css'

const AboutMePage = ( ) =>{
    return(
       <div className="aboutContainer">
           {/* about me logo */}
           <div className="aboutBlock">
                ABOUT  ME
           </div>
            {/* soem information about me  */}
           <div className="aboutInfo">
           Pascal van Gemert is a Netherlands-based web developer, whose personal website shows how easy it is to include a lot of information on a singl
           </div>
        
            {/* exlpore logo */}
            <div style={{flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
                <div className="exploreBlock">
                        Explore
                </div>
            </div>
       </div>
    )
}

export default AboutMePage