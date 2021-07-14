import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login'
// import Register from './components/Register';

import { AuthProvider } from "./contexts/AuthContext"
import Home from './components/Home';
// import Header from './components/Header';
import SignInOptions from './components/SignInOptions';
import RegisterParent from './components/RegisterParent';
import Weather from './components/Weather';

export default function App() {
  return (
    <Router>
      <section className="main_app">
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signinoptions" component={SignInOptions} />
            {/* <Route path="/register" component={Register}/>  */}
            <Route path="/register" component={RegisterParent} />

            <Route path="/login" component={Login} />
            <Route path="/weather" component={Weather}/> 
          </Switch>
                      
        </AuthProvider>

      </section>
    </Router>
  )
}

