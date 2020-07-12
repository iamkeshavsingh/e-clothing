import React from 'react';

import './form-input.scss';

const FormInput = ({ handleChange, label, value, ...otherprops }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherprops} />
            {label ? <label className={`${value.length > 1 ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
        </div>
    );
};


export default FormInput;