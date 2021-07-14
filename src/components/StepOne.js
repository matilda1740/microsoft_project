import React from 'react'

export default function StepOne({currentStep, handleChange, values}) {

    if (currentStep !== 1){
        return null;
    }

    // FORM VALIDATION
    
    return (
        <div className="registration_form">
            <p>Step {currentStep}</p>
            <label className="form_labels">First Name:</label>
            <input 
                type="text" 
                className="form_inputs" 
                name="registerFname"
                value={values.registerFname}
                onChange={handleChange('registerFname')} 
            />
            <label className="form_labels">Last Name:</label>
            <input 
                type="text" 
                className="form_inputs" 
                name="registerLname" 
                value={values.registerLname}
                onChange={handleChange('registerLname')}
            />
            <label className="form_labels">Email:</label>
            <input 
                type="email"
                className="form_inputs" 
                name="registerEmail" 
                value={values.registerEmail}
                onChange={handleChange("registerEmail")}
            />
            <label className="form_labels">Password:</label>
            <input 
                type="password" 
                className="form_inputs" 
                name="registerPass" 
                value={values.registerPass}
                onChange={handleChange("registerPass")}
                password="" 
                autoComplete="new-password"
            />
            <label className="form_labels">Confirm Password:</label>
            <input 
                type="password" 
                className="form_inputs" 
                name="registerConfirmPass"
                value={values.registerConfirmPass}
                onChange={handleChange("registerConfirmPass")}
                password="" 
                 autoComplete="new-password"
                />

        </div>
    )
}
