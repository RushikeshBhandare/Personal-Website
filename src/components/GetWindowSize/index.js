import React from "react"
import { useEffect, useState } from "react"

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

export default GetWindowSize