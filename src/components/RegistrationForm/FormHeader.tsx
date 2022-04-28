import React, {useEffect, useState} from "react";
import './registrationForm.scss'
import {Step1} from "./Step1";
import {Step2} from "./Step2";
import {Step3} from "./Step3";
import {Step4} from "./Step4";

interface Props {
    currentStep: number
}

export const FormHeader: React.FC<Props> = ({currentStep}) => {

    return (
        <div className="registration-form__header">
            {({
                1: <div>General Info</div>,
                2: <div>About</div>,
                3: <div>Experience</div>,
                4: <div>Contacts</div>
            }[currentStep])}
        </div>
    );
}