import React, { useState } from 'react'
import './Register.css'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

/* 

FARMER ACCOUNT
1. First and last name 
2. Areas of Interest: Crops, 
3. Region - County, Sub county
4. Phone Number, Confirm and Email Password 
5. DOB, Gender, 
6. 

PARENT COMPONENT 

*/
export default function Register() {

    const { registerUser } = useAuth(); 
    const [ registerEmail, setRegisterEmail ] = useState("");
    const [ registerPass, setRegisterPass] = useState("");
    // const [registerEmailError, setRegisterEmailError] = useState();
    // const [registerPassError, setRegisterPassError] = useState();
    const history = useHistory();

    const registerDetails = document.querySelectorAll(".registration_form #form_input")

    const handleRegister = async e => {
        e.preventDefault();

        registerDetails.forEach( data => {
            if(data.name === 'register_email'){
            setRegisterEmail(data.value)
            }else if (data.name === 'register_pass'){
            setRegisterPass(data.value)
            }
        });
     

        try {

            await registerUser(registerEmail, registerPass)

            console.log('Email: ', registerEmail, 'Pass: ', registerPass);

            history.push("/");

        }catch(error){

            // HANDLE FIREBASE REGISTERATION ERRORS
            if(error.code === "auth/email-already-in-use"){
                history.push("/");

            }
            else if(error.code === "auth/auth/invalid-email"){
                // setRegisterEmailError(error.message)
            }else if(error.code === "auth/weak-password"){
                // setRegisterPassError(error.message)
            }
            console.log("ERROR REGISTERING: ", error)
        }
    }

    return (
        <section className="registeration_section">
            <div className="login_logo">
            <img src="/images/logo.png" alt="Site Logo" />
            </div>
            <h2>Farmer Sign Up</h2>
            <form className="registration_form" onSubmit={handleRegister}>
                <label className="form_labels">First Name:</label>
                <input type="email" id="form_input" className="form_inputs" name="register_fname"/>
                <label className="form_labels">Last Name:</label>
                <input type="password" id="form_input" className="form_inputs" name="register_lname" password=""/>

                <label className="form_labels">Email:</label>
                <input type="email" id="form_input" className="form_inputs" name="register_email"/>
                <label className="form_labels">Password:</label>
                <input type="password" id="form_input" className="form_inputs" name="register_pass" password=""/>

                <div className="form_row">
                    <label className="form_labels">Date of Birth:</label>
                    {/* CALENDER SELECTION */}
                    <input type="password" id="form_input" className="form_inputs" name="register_pass" password=""/>

                    <label className="form_labels">Gender:</label>
                    {/* GENDER SELECTION */}
                    <input type="password" id="form_input" className="form_inputs" name="register_pass" password=""/>
                </div>
                <div className="form_row">
                    <label className="form_labels">Country:</label>
                    {/* CALENDER SELECTION */}
                    <input type="password" id="form_input" className="form_inputs" name="register_pass" password=""/>

                    <label className="form_labels">County:</label>
                    {/* GENDER SELECTION */}
                    <input type="password" id="form_input" className="form_inputs" name="register_pass" password=""/>
                </div>

                {/* FARMING AREAS OF INTEREST */}

                <button type="submit" className="form_btn ">Register</button>
            </form>
            <div className="login_footer">
            <p>Already have an account? <Link to='/login'>Log In</Link></p>
            </div>
           
        </section>
    )
}
