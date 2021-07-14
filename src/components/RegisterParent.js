import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

import { db } from '../firebase'

export default class RegisterParent extends Component {
    constructor(props) {
    super(props);

    this.state = {
        currentStep: 1, 
        user: {
        // FORM 1
        registerFname: '',
        registerLname: '',
        registerEmail: '',
        registerPass: '',
        registerConfirmPass: '',
        // FORM 2
        register_phone: '',
        register_dob: '',
        register_gender: '',
        register_county: '',
        register_subCounty: '',

        }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this) 
    this.postUsers= this.postUsers.bind(this)

    };

    // DATABASE FUNCTIONS

    
    postUsers(){
        const {registerFname, registerLname, registerEmail,registerPass, registerConfirmPass, register_phone, register_dob, register_gender,register_county, register_subCounty } = this.state.user;
       

        db.collection("registration_users").add({registerFname, registerLname, registerEmail, registerPass, registerConfirmPass, register_phone, register_dob, register_gender,register_county, register_subCounty})
            .then( data => {
                this.props.history.push("/")
                console.log("SUCCESS! DATA SENT TO DATABASE")
            })
            .catch( error => console.log("EROR: ", error))
            

        console.log("Submitted", registerFname, registerLname, registerEmail,registerPass, registerConfirmPass, register_phone, register_dob, register_gender,register_county, register_subCounty )
        }
    // REACT FUNTIONS
    handleChange = input => e => {
        // localStorage.setItem(`${input}`,  e.target.value)
        localStorage.setItem('user', JSON.stringify(this.state.user));
        this.setState({
            user: {
            ...this.state.user,
            [input]: e.target.value 
        }}, () => {
            localStorage.setItem('user', JSON.stringify(this.state.user));
            console.log(this.state.user, e.target.value, e.target.value.length);
        })
    };

    handlePrevious(){
        let currentStep = this.state.currentStep;
        currentStep = currentStep < 1 ? 1 : currentStep - 1
        this.setState({ currentStep : currentStep })
    }
    handleNext(){
        let currentStep = this.state.currentStep;
        currentStep = currentStep > 2 ? 3 : currentStep + 1
        this.setState({ currentStep : currentStep })
    }

    handleSubmit(e){
        e.preventDefault();
        this.postUsers();
    }
    activatePrevious = () => {
        let currentStep = this.state.currentStep;
        if(currentStep !== 1){
            return ( <button onClick={this.handlePrevious} type="button" className="form_btn">Previous</button> )
        }
            return null
    }
    activateNext = () => {
        let currentStep = this.state.currentStep;
        if(currentStep < 3){
            return (
            <button onClick={this.handleNext} type="button" className="form_btn">Next</button>
        )}
            return null;
    }
    activateSubmit = () => {
        let currentStep = this.state.currentStep;
        return currentStep === 3 
            && <button type="submit" className="form_btn">Submit Details</button>
    }
    // useEffect = () => {
    //     , []}
    render() {
        const {registerFname, registerLname, registerEmail,registerPass, registerConfirmPass, register_phone, register_dob, register_gender,register_county, register_subCounty } = this.state.user;

        const { currentStep } = this.state;
        const values = { registerFname, registerLname, registerEmail,registerPass, registerConfirmPass, register_phone, register_dob, register_gender,register_county, register_subCounty };

        return (
        <form className="registeration_parent" onSubmit={this.handleSubmit}>
            <div className="login_logo">
            <img src="/images/logo.png" alt="Site Logo" />
            </div>
            <h2>Farmer Sign Up</h2>

            <StepOne 
            currentStep={currentStep}
            handleChange={this.handleChange}
            values={values}
            />
            <StepTwo  
            currentStep={currentStep}
            handleChange={this.handleChange}
            values={values}
            />
            <StepThree
            currentStep={currentStep}
            handleChange={this.handleChange}
            values={values}
            />

            <div className="reg_nav_btns">
            { this.activatePrevious()}
            { this.activateNext()}
            { this.activateSubmit()}
            </div>

            <div className="login_footer">
            <p>Already have an account? <Link to='/login'>Log In</Link></p>
            </div>
        </form>
        );
    }
}

