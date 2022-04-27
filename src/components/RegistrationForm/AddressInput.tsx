import React from "react";
import {TextInput} from "./TextInput";
import './addressInput.scss'

interface Props {
    onChange: (inputName: string, inputValue: any) => void
    inputValues: any
}

export const AddressInput: React.FC<Props> = ({
                                                  onChange,
                                                  inputValues
                                              }) => {
    const handleChange = (name: string, value: string) => {
        onChange("userAddress", {...inputValues.userAddress, [name]: value})
    }

    return (
        <div className={'address-input'}>
            <TextInput name={"street"} label={"Street"} placeholder={"Street"} onChange={handleChange}
                       value={inputValues.userAddress.street}/>
            <div className={'address-input__row'}>
                <TextInput name={"city"} label={"City"} placeholder={"City"} onChange={handleChange}
                           value={inputValues.userAddress.city}/>
                <TextInput name={"region"} label={"Region"} placeholder={"Region"} onChange={handleChange}
                           value={inputValues.userAddress.region}/>
            </div>
            <div className={'address-input__row'}>
                <TextInput name={"country"} label={"Country"} placeholder={"Country"} onChange={handleChange}
                           value={inputValues.userAddress.country}/>
                <TextInput name={"zipCode"} label={"Zip Code"} placeholder={"Zip Code"} onChange={handleChange}
                           value={inputValues.userAddress.zipCode}/>
            </div>
        </div>
    );
};
