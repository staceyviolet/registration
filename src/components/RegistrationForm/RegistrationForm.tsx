import React, {useEffect, useState} from "react";
import './registrationForm.scss'
import FormBody from "./FormBody";
import {FormFooter} from "./FormFooter";

import {useNavigate} from "react-router";

const RegistrationForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1)

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/" + currentStep);
    }, [currentStep]);

    return (
        <div className={'registration-form'}>
            <div className={'registration-form__header'}>
                We're happy to see you here!
            </div>
            <FormBody currentStep={currentStep}/>
            <FormFooter currentStep={currentStep} setCurrentStep={setCurrentStep}/>
        </div>
    );
}

export default RegistrationForm;