import React from 'react'

export default function StepTwo({currentStep, handleChange, values }) {
    const {register_phone, register_dob, register_gender,register_county, register_subCounty } = values;

    if (currentStep !== 2){
        return null;
    }
    return (
        <div className="registration_form">
            <p>Step {currentStep}</p>
            <label className="form_labels">Phone Number:</label>
            <input 
            type="text" 
            id="form_input" 
            className="form_inputs"          
            name="register_phone" 
            value={register_phone}
            onChange={handleChange('register_phone')} 
            />
            <label className="form_labels">Date of Birth:</label>
            <input 
            type="date" id="form_input" className="form_inputs" name="register_dob" 
            value={register_dob} 
            onChange={handleChange('register_dob')}

            />
            <label className="form_labels">Gender:</label>
            <input type="text" id="form_input" className="form_inputs" name="register_gender" value={register_gender} onChange={handleChange('register_gender')}/>
            <label className="form_labels">County:</label>
            <input type="text" id="form_input" className="form_inputs" name="register_county" value={register_county}  onChange={handleChange('register_county')}/>
            <label className="form_labels">Sub-County:</label>
            <input type="text" id="form_input" className="form_inputs" name="register_subCounty" value={register_subCounty} onChange={handleChange('register_subCounty')}/>

        </div>
    )
}
