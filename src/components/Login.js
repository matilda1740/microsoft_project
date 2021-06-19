import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { useAuth } from '../contexts/AuthContext'


/* SIGN WITH GOOGLE, EMAIL(USERNAME), PHONE NUMBER, FACEBOOK
*/
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
            <div className="login_logo">
            <img src="/images/logo.png" alt="Site Logo"/>
            </div>
            <h2>Farmer Log In</h2>
            {/* <h3 className="login_error">Lorem ipsum dolor sit amet!</h3> */}
            <form className="login_form" onSubmit={handleLogIn}>

                <label className="form_labels">Email:</label>
                <input type="email" id="form_input" className="form_inputs" name="login_email"/>
                <label className="form_labels">Password:</label>
                <input type="password" id="form_input" className="form_inputs" name="login_pass" password=""/>

                <button type="submit" className="form_btn ">Log In</button>
            </form>

            <div className="login_footer">
                <p>Are you a new user? <Link to='/register'>Sign Up</Link></p>
                <p><Link to='/'>Forgot Password?</Link></p>
            </div>
        </section>
    )
}
