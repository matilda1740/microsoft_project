import React from 'react'
import { Link } from 'react-router-dom'
import './SignInOptions.css'
import { MailRounded, CallRounded } from '@material-ui/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

// CONFIGURE SIGN UP OPTIONS

export default function SignInOptions() {
    return (
        <section className="signInOptions_section">
            <div className="login_logo">
            <img src="/images/logo.png" alt="Site Logo" />
            </div>
            <h2>Sign In Options</h2>

            <div className="options_div">
            <Link to="/login" className="signInbtns mail_icon">
                <MailRounded/>
                Continue with Email
            </Link>
            <Link to="/" className="signInbtns google_icon">
                <FontAwesomeIcon icon={faGoogle} size="10px"/>
                Continue with Google
            </Link>
            <Link to="/" className="signInbtns phone_icon">
                <CallRounded/>
                Continue with Phone Number
            </Link>     
            <Link to="/" className="signInbtns fb_icon">
                <FontAwesomeIcon icon={faFacebook} size="10px"/>
                Continue with Facebook
            </Link> 
            </div>
         
            <div className="login_footer">
                <p>Are you a new user? <Link to='/register'>Sign Up</Link></p>
                <p><Link to='/'>Back to Home</Link></p>
            </div>
        </section>
    )
}
