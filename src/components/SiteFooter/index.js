import React from "react";
import './sitefooter.css'

import Up from './images/up-chevron.png'
import facebok from './images/facebook.png'
import linkedin from './images/linkedin.png'
import mail from './images/mail.png'
import instagram from './images/instagram.png'


const SiteFooter = () =>{
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
    return (
        <div className="footerContainerBlock">
            <div onClick={scrollToTop} className="footerBackToHome">
                <img className="upImage" src={Up}/>
                <div className="BackToHomeText" >
                     BACK TO TOP
                </div>
            </div>
            <div className="socialMedia">
                {/* faceebook */}
                <a  
                    style={{backgroundColor:'rgba(0, 0, 0, 0)'}}
                    href="https://www.facebook.com/rushi.bhandare.353/"
                    target="_blank"
                >
                    <img className="socialMediaImages" src={facebok}/>
                </a>
                {/* linked in  */}
                <a  
                    style={{backgroundColor:'rgba(0, 0, 0, 0)'}}
                    href="https://www.linkedin.com/in/rushikesh-bhandare-34a8981a3"
                    target="_blank"
                >
                    <img className="socialMediaImages" src={linkedin}/>
                </a>

                {/* instagram  */}
                <a  
                    style={{backgroundColor:'rgba(0, 0, 0, 0)'}}
                    href="https://www.instagram.com/sunny__bhandare/"
                    target="_blank"
                >
                    <img className="socialMediaImages" src={instagram}/>
                 </a>
                 {/* mail */}
                 <a  
                    style={{backgroundColor:'rgba(0, 0, 0, 0)'}}
                    href="mailto:rushikeshbhandare54@gmail.com"
                    target="_blank"
                >
                    <img className="socialMediaImages" src={mail}/>
                </a>
            </div>
            <div className="CopyrightInfo">
                 @2022 Rushikesh Bhandare All Rights Reserved
            </div>
        </div>
    )
}

export default SiteFooter