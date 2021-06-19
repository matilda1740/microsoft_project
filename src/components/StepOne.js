import React from 'react'

// {currentStep, handleChange}
export default function StepOne({currentStep, handleChange, values}) {

    if (currentStep !== 1){
        return null;
    }
    return (
        <div className="registration_form">
            <p>Step {currentStep}</p>
            <label className="form_labels">First Name:</label>
            <input 
                type="text" 
                className="form_inputs" 
                name="registerFname" 
                onChange={handleChange('registerFname')} 
            />
            <label className="form_labels">Last Name:</label>
            <input type="text" className="form_inputs" name="registerLname" onChange={handleChange('registerLname')}/>
            <label className="form_labels">Email:</label>
            <input type="email"className="form_inputs" name="registerEmail" onChange={handleChange("registerEmail")}/>
            <label className="form_labels">Password:</label>
            <input type="password" className="form_inputs" name="registerPass" password="" onChange={handleChange("registerPass")}/>
            <label className="form_labels">Confirm Password:</label>
            <input type="password" className="form_inputs" name="registerConfirmPass" password="" onChange={handleChange("registerConfirmPass")}/>

        </div>
    )
}
