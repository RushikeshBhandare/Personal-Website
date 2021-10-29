import React, { useEffect,useLayoutEffect, useWindowSize,useState } from "react";
import './home.css'

//images 
import down from './down.png'
import male from './computerMan.png'

import Navbar from "../Navbar";
import MobileNavbar from "../MobileNavBar";
import GetWindowSize from "../GetWindowSize";
 


const HomePage = ( ) =>{
    const [height, width] = GetWindowSize();   
    const renderNavbar = () =>{
        if(width > 500){
            return <Navbar/>
        }else{
            return <MobileNavbar/>
        }
    }

    const renderAvtar=()=>{
        if(width > 650){
            return(
                <div className="avtarContainer">
                <img 
                    className="avtarImage"
                    src={male}
                />
            </div>
            )
        }
    }

    return(
        <div style={{flex: 1, backgroundColor: 'orange ', justifyContent: 'center', alignItems:'center'}}> 
           

            <div className="rootContainer">
                {/* name and options */}
                
                <div className="HomeSepration">
                    <div className="ImageAndTextSaprator">
                        <div className="aboutTextSection">
                            {/* About Information */}
                            <div className="hi">
                                Hi, I am 
                            </div>

                            <div className="nameText">
                                Rushikesh Bhandare
                            </div>
                        
                            <div className="ReactText">
                                i build website and mobile app 
                            </div>
                        </div>
                        {renderAvtar()}
                       
                    </div>

                    {/* down arrow */}
                    <div className="DownArraow">
                        <img
                            className="downImage"
                            src={down}
                        />
                    </div>
                </div> 
            
            </div>
        </div>
    )
}

export default HomePage