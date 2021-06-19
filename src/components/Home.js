import React from 'react'
import './Home.css'
import Header from './Header';
import { EcoRounded } from '@material-ui/icons';
import { useAuth } from '../contexts/AuthContext'

export default function Home() {

    const { currentUser } = useAuth();

    return (
        <section className="home_page_section">
            <Header />

            <div className="home_main_section">
                <div className="home_left">
                    <div className="greeting_section">
                        <h3>Welcome, { currentUser ? currentUser.email :  `Guest` }
                        </h3>
                    </div>
                    <img src="/images/fact.jpeg" alt="farm" srcset="" />
                </div>

                <div className="home_right">

                    <h3>OUR <br /> PROJECT</h3> 
                    <div className="selection_box">
                        <div className="select_box_left">
                            <EcoRounded />
                        </div>
                        <div className="select_box_right">
                            <h5>Project One</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, expedita.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, alias.</p>
                        </div>
                    </div>

                    <div className="selection_box">
                        <div className="select_box_left">
                            <EcoRounded />
                        </div>
                        <div className="select_box_right">
                            <h5>Project Two</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, expedita.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, alias.</p>
                        </div>
                    </div>

                    <button className="btn">Explore</button>                   
                </div>
            </div>
        </section>
    )
}
