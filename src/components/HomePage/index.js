import React, { useEffect,useLayoutEffect, useWindowSize,useState } from "react";
import './home.css'
import model from './model.jpg'

import Navbar from "../Navbar";
import MobileNavbar from "../MobileNavBar";

const GetWindowSize = () =>{
    const [size, setSize] = useState([window.innerHeight, window.innerWidth])
    useEffect(()=>{
        const handleResise = ( ) =>{
            setSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener('resize', handleResise)
        return ()=>{
            window.removeEventListener('resize', handleResise)
        } 
        
    }, [])
    
    return size
}


const HomePage = ( ) =>{
    const [height, width] = GetWindowSize();   
    const renderNavbar = () =>{
        if(width > 500){
            return <Navbar/>
        }else{
            return <MobileNavbar/>
        }
    }
    return(
        <div style={{flex: 1, justifyContent: 'center', alignItems:'center'}}> 
            {/* Navigation Opions */}
          
           {
               renderNavbar()
           }

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