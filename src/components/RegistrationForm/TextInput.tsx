import React, {ChangeEvent} from "react";
import './textInput.scss'

interface Props {
    name: string,
    label: string,
    placeholder: string,
    onChange: (inputName: string, inputValue: any) => void
    value: string
}

export const TextInput: React.FC<Props> = ({
                                               name,
                                               label,
                                               placeholder,
                                               onChange,
                                               value
                                       }) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        onChange(e.target.name,  e.target.value)
    }
    return (
        <div className={'text-input'}>
            <label htmlFor={name}>{label}</label>
            <input name={name} value={value} placeholder={placeholder} onChange={handleChange}/>
        </div>
    );
};
