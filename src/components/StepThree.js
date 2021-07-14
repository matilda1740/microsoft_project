import React from 'react'

export default function StepThree({currentStep, handleChange, values}) {
  
    const {registerFname, registerLname, registerEmail, register_phone, register_dob, register_gender,register_county, register_subCounty } = values;

    if (currentStep !== 3){
        return null;
    }
    return (
        
        <div className="registration_form">
            <p>Step {currentStep}</p>
                <div className="form_row">
                    <label className="display_labels">Full Names:</label>
                    <p  className="display_inputs" >{registerFname + " " + registerLname}</p>
                </div>
                <div className="form_row">
                    <label className="display_labels">Email:</label>
                    <p className="display_inputs">{registerEmail}</p>
                </div>

                <div className="form_row">
                    <label className="display_labels">Phone Number:</label>
                    <p className="display_inputs">{register_phone}</p>
                </div>
                <div className="form_row">
                    <label className="display_labels">Date of Birth:</label>
                    <p className="display_inputs">{register_dob}</p>
                    <label className="display_labels">Gender:</label>
                     <p className="display_inputs">{register_gender}</p>
                </div>

                <div className="form_row">
                    <label className="display_labels">County:</label>
                    <p className="display_inputs">{register_county}</p>
                    <label className="display_labels">Sub County:</label>
                    <p className="display_inputs">{register_subCounty}</p>
                </div>        
            
        </div>
    )
}
