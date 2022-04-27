import React from "react";
import './textInput.scss'

interface Props {
    name: string,
    label: string,
    placeholder: string,
    onChange: (inputName: string, inputValue: any) => void
    value: string,
    options: any
}

export const SingleSelect: React.FC<Props> = ({
                                                  name,
                                                  label,
                                                  placeholder,
                                                  onChange,
                                                  value,
                                                  options
                                              }) => {

    return (
        <div className={'text-input'}>
            <label htmlFor={name}>{label}</label>
            <select name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.name, e.target.value)}>
                <option disabled>{'Please select at least one option'}</option>
                {options.map((option: { key: string | number, value: string | number }) => <option
                    key={option.key}>{option.value}</option>)}
            </select>
        </div>
    );
};
