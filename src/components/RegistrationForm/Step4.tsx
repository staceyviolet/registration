import React from "react";
import './inputGroup.scss'
import {SingleSelect} from "./SingleSelect";
import {PhoneInput} from "./PhoneInput";
import {AddressInput} from "./AddressInput";

const userPurpose = [
    "Development of a professional network",
    "Attraction of clients",
    "Communication",
    "Consulting",
    "Other",
];

const referrer = [
    "Advertising",
    "Social network",
    "Friends' reference",
    "Other",
];

interface Props {
    onChange: (inputName: string, inputValue: any) => void
    inputValues: any
}

export const Step4: React.FC<Props> = ({
                                           onChange,
                                           inputValues,
                                       }) => {

    return (
        <div>
            <PhoneInput onChange={onChange} value={inputValues.phone}/>
            <AddressInput onChange={onChange} inputValues={inputValues}/>
            <SingleSelect name={"userPurpose"}
                          label={"What is your main purpose here?"}
                          placeholder={"Select at leas one option"}
                          onChange={onChange}
                          value={inputValues.userPurpose}
                          options={userPurpose.map(item => {
                              return {"key": item, "value": item}
                          })}/>
            <SingleSelect name={"referrer"}
                          label={"How did you find us?"}
                          placeholder={"Select at leas one option"}
                          onChange={onChange}
                          value={inputValues.referrer}
                          options={referrer.map(item => {
                              return {"key": item, "value": item}
                          })}/>
        </div>
    );
};
