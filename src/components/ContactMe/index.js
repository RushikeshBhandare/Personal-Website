import React, { useState } from "react";
import emailjs from 'emailjs-com';

import './contact.css'

const ContactMe = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = async(e) =>{
        e.preventDefault()
        console.log(e.target)
        try{
            const send = await emailjs.sendForm('service_6se5rhe', 'template_9vsf43l', e.target, 'user_GvveanwHiHhA67xt6tVmd')
            console.log('send Email')

            console.log(send)
        }catch(error){
            console.log("Error while sending the mail ", error)
        }
        // e.target.reset()
    }
    return (
        <div className="constactRootContainer">
                <div className="skillBlock">
                     contact   
                </div>
               
                    <div className="formContainer">
                    <form
                        onSubmit={sendEmail}
                    >
                        <div className="formHeader">
                            Get in touch
                        </div>
                        <div className="form">
                            {/* Name */}
                            <div className="field">
                                <h3>Name*</h3>
                                <input
                                    name="name"
                                    value={name}
                                    className="input"
                                    placeholder="Enter Name"
                                    onChange={(e)=>{setName(e.target.value)}}
                                />
                            </div>

                            <div className="field">
                                <h3>E-Mail*</h3>
                                <input
                                    name="email"
                                    value={email}
                                    className="input"
                                    placeholder="enter email"
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    type="email"
                                    
                                />
                            </div>
                        </div>
                        <div className="field">
                                <h3>Message*</h3>
                                <input
                                    name="message"
                                    value={message}
                                    className="input"
                                    placeholder="message here"
                                    onChange={(e)=>{setMessage(e.target.value)}}
                                />
                        </div>

                        <input 
                            className="formButton"
                            type="submit"
                            placeholder="send"
                            value="Send"
                        />
                    </form> 
                    </div>

        </div>
    )
}

export default ContactMe