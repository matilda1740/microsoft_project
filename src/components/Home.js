import React from 'react'
import './Home.css'

import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom';

export default function Home() {

    const { currentUser, logoutUser } = useAuth();

    const handleLogOut = async () => {

        try {
            await logoutUser();
        }catch(error){
            console.log("LOGOUT ERROR: ", error)
        }
    }

    return (
        <section className="home_page_section">
            <p>Hello, { currentUser ? currentUser.email : 
            `Guest` }
            </p>

            {
                currentUser ? 
                <button onClick={handleLogOut}>Logout</button>
                : 
                <>
                <Link to="/register">
                <button>Sign Up</button></Link>
                <Link to="/login">
                <button>Sign In</button>
                </Link>
                </>

            }
            




        </section>
    )
}
