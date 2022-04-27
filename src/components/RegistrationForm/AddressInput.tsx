import React, {ChangeEvent, useEffect, useState} from "react";
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
    return (
        <div className={'address-input'}>
            <TextInput name={"street"} label={"Street"} placeholder={"Street"} onChange={onChange}
                       value={inputValues.userAddress.street}/>
            <div className={'address-input__row'}>
                <TextInput name={"city"} label={"City"} placeholder={"City"} onChange={onChange}
                           value={inputValues.userAddress.city}/>
                <TextInput name={"region"} label={"Region"} placeholder={"Region"} onChange={onChange}
                           value={inputValues.userAddress.region}/>
            </div>
            <div className={'address-input__row'}>
                <TextInput name={"country"} label={"Country"} placeholder={"Country"} onChange={onChange}
                           value={inputValues.userAddress.country}/>
                <TextInput name={"zipCode"} label={"Zip Code"} placeholder={"Zip Code"} onChange={onChange}
                           value={inputValues.userAddress.zipCode}/>
            </div>
        </div>
    );
};
