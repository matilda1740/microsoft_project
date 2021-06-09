import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
    const history = useHistory();

    const { loginUser } = useAuth(); 

    const [ loginEmail, setLoginEmail ] = useState();
    const [ loginPass, setLoginPass] = useState();
    const [ loginError, setLoginError] = useState();


    const loginDetails = document.querySelectorAll(".login_form #form_input")

    const handleLogIn = async e => {
        e.preventDefault()

        loginDetails.forEach( data => {
            if(data.name === 'login_email'){
                setLoginEmail(data.value)
            }else if (data.name === 'login_pass'){
                setLoginPass(data.value)
            }
        });

        try{
            await loginUser(loginEmail, loginPass)
            console.log('Login Email: ', loginEmail, 'Login Pass: ', loginPass);
            history.push("/");

        }catch(error){
            console.log(error)
            setLoginError(error)
        }

    }
    return (
        <section className="login_section">
            <h2>Farmer Log In</h2>

            {/* <h3>{loginError}</h3> */}
            <form className="login_form" onSubmit={handleLogIn}>
                <div className="form_row">
                    <label className="form_labels">Email:</label>
                    <input type="email" id="form_input" className="form_inputs" name="login_email"/>
                    <label className="form_labels">Password:</label>
                    <input type="password" id="form_input" className="form_inputs" name="login_pass" password=""/>
                </div>
                <div className="form_row solo_form_btn">
                    <button type="submit" className="form_btn ">Log In</button>
                </div>
            </form>

            <p><Link to='/'>Forgot Password</Link></p>
            <p>Are you a new user? <Link to='/register'>Sign Up</Link></p>
        </section>
    )
}
