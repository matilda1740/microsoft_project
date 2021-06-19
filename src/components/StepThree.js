import React from 'react'

export default function StepThree({currentStep, handleChange, values}) {
  
    const {registerFname, registerLname, registerEmail,registerPass, registerConfirmPass, register_phone, register_dob, register_gender,register_county, register_subCounty } = values;

    if (currentStep !== 3){
        return null;
    }
    return (
        <div className="registration_form">
            <p>Step {currentStep}</p>
            
                <p>{registerFname}</p>
                <p>{registerLname}</p>
                <p>{registerEmail}</p>
                <p>{registerPass}</p>
                <p>{registerConfirmPass}</p>
                <p>{register_phone}</p>
                <p>{register_dob}</p>
                <p>{register_gender}</p>
                <p>{register_county}</p>
                <p>{register_subCounty}</p>
                
            
        </div>
    )
}
