import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useAuth } from '../contexts/AuthContext'

export default function Header() {

    const { currentUser, logoutUser } = useAuth();

    const handleLogOut = async () => {

        try {
            await logoutUser();
        }catch(error){
            console.log("LOGOUT ERROR: ", error)
        }
    }
    return (
        <section className="header_section">
            <div className="header_logo">
                <img src="/images/logo.png" alt="Site Logo" srcset="" />
            </div>
            <div className="header_mid_nav">
            </div>
            {
                !currentUser ? 
                <div className="header_contact">
                <Link to="/signinoptions">Sign In</Link>/
                <Link to="/register">Sign Up</Link>
                </div>
                :
                <button className="header_contact" onClick={handleLogOut}> <p>Sign Out</p></button>
            }
        </section>
    )
}
