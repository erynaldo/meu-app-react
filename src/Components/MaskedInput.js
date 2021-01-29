import React from 'react';
import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInput = ({ placeholder, className, value, onChange }) => {

    function handleChange(event) {
        onChange({
            ...event,
            target: {
                ...event.target,
                value: onlyNumbers(event.target.value),
            }
        });
    }

    return (
        <InputMask 
            mask="999.999.999-99"
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    );
};

export default MaskedInput;