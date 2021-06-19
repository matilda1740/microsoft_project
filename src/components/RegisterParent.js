import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

export default class RegisterParent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        currentStep: 1, 
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
    this.handleChange = this.handleChange.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)

    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
        console.log(this.state)
    };

    handlePrevious() {
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

        const {registerFname, registerLname, registerEmail,registerPass, registerConfirmPass, register_phone, register_dob, register_gender,register_county, register_subCounty } = this.state;
        
        console.log("Submitted", registerFname, registerLname, registerEmail,registerPass, registerConfirmPass, register_phone, register_dob, register_gender,register_county, register_subCounty )

    }
    activatePrevious(){
        let currentStep = this.state.currentStep;
        if(currentStep !== 1){
            return ( <button onClick={this.handlePrevious} type="button" className="form_btn">Previous</button> )
        }
            return null
        
    }
    activateNext(){
        let currentStep = this.state.currentStep;
        if(currentStep < 3){
            return (
            <button onClick={this.handleNext} type="button" className="form_btn">Next</button>
        )}
            return null;

    }
    activateSubmit() {
        let currentStep = this.state.currentStep;
        return currentStep === 3 
            && <button type="submit" className="form_btn">Submit Details</button>
    }

    render() {
        const { currentStep, registerFname, registerLname, registerEmail,registerPass, registerConfirmPass, register_phone, register_dob, register_gender,register_county, register_subCounty } = this.state;

        const values = { currentStep, registerFname, registerLname, registerEmail,registerPass, registerConfirmPass, register_phone, register_dob, register_gender,register_county, register_subCounty };

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
            // registerFname={registerFname}
            // registerlname= {registerLname}
            // registerEmail={registerEmail}
            // registerPass ={registerPass}
            // registerConfirmPass ={registerConfirmPass}           
            />
            <StepTwo  
            currentStep={currentStep}
            handleChange={this.handleChange}
            values={values}

            // register_phone={register_phone}
            // register_dob={register_dob}
            // register_gender={register_gender}
            // register_county={register_county}
            // register_subCounty={register_subCounty}
            />
            <StepThree
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            values={values}

            // registerFname={registerFname}
            // registerlname= {registerLname}
            // registerEmail={registerEmail}
            // registerPass ={registerPass}
            // registerConfirmPass ={registerConfirmPass}  
            // register_phone={register_phone}
            // register_dob={register_dob}
            // register_gender={register_gender}
            // register_county={register_county}
            // register_subCounty={register_subCounty} 
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

