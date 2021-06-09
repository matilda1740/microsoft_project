import React, { useState } from 'react'
import './Register.css'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

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
            <h5>Farmer Sign Up</h5>
            <form className="registration_form" onSubmit={handleRegister}>
{/* 
                <div className="form_row">
                    <label className="form_labels">First Name:</label>
                    <input className="form_inputs"/>
                    <label className="form_labels">Last Name:</label>
                    <input className="form_inputs"/>
                </div> */}
                <div className="form_row">
                    <label className="form_labels">Email:</label>
                    <input type="email" id="form_input" className="form_inputs" name="register_email"/>
                    <label className="form_labels">Password:</label>
                    <input type="password" id="form_input" className="form_inputs" name="register_pass" password=""/>
                </div>
                {/* <div className="form_row">
                    <label className="form_labels">Phone Number: </label>
                    <input className="form_inputs"/>
                </div>                      
                <div className="form_row">
                    <label className="form_labels">Email: </label>
                    <input className="form_inputs"/>
                </div>                                           <div className="form_row">
                    <label className="form_labels">Password: </label>
                    <input className="form_inputs"/>
                </div>      
                    <div className="form_row">
                    <label className="form_labels">Confrim Password: </label>
                    <input className="form_inputs"/>
                </div>   */}
                    {/* <div className="form_row">
                    <label className="">County: </label>
                    <input className=""/>
                </div>   
                <div className="form_row">
                    <label className="">Confrim Email: </label>
                    <input className=""/>
                </div>                                 */}
                <div className="form_row solo_form_btn">
                    <button type="submit" className="form_btn ">Register</button>
                </div>
                <div className="form_row">
                    <button>Login</button>

                    <button>
                        Cancel
                    </button>
                </div>
            </form>

            <p>Already have an account? <Link to='/login'>Log In</Link></p>
        </section>
    )
}
