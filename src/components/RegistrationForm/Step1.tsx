import React from "react";
import {TextInput} from "./TextInput";

interface Props {
    onChange: (inputName: string, inputValue: any) => void
    inputValues: any
}

export const Step1: React.FC<Props> = ({
                                           onChange,
                                           inputValues,
                                       }) => {

    return (
        <div>
            <TextInput name={"firstName"}
                       label={'First Name'}
                       placeholder={'Enter your First Name'}
                       onChange={onChange}
                       value={inputValues.firstName}/>

            <TextInput name={"lastName"}
                       label={'Last Name'}
                       placeholder={'Enter your Last Name'}
                       onChange={onChange}
                       value={inputValues.lastName}/>

            <TextInput name={"email"}
                       label={'E-mail'}
                       placeholder={'Enter your E-mail address'}
                       onChange={onChange}
                       value={inputValues.email}/>

            <TextInput name={"password"}
                       label={'Password'}
                       placeholder={'Enter your Password'}
                       onChange={onChange}
                       value={inputValues.password}/>

            <TextInput name={"passwordConfirm"}
                       label={'Confirm Password'}
                       placeholder={'Repeat your password'}
                       onChange={onChange}
                       value={inputValues.passwordConfirm}/>

        </div>
    );
};
