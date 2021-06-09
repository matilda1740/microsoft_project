import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register';

import { AuthProvider } from "./contexts/AuthContext"
import Home from './components/Home';

export default function App() {
  return (
     <Router>
      <section className="main_app">
      <AuthProvider>
      <Switch>
         <Route exact path="/" component={Home}/> 
        <Route path="/register" component={Register}/> 
        <Route path="/login" component={Login}/> 
      </Switch>
      </AuthProvider>

      </section>
    </Router>     
  )
}

