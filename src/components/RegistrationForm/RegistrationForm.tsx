import React, { useEffect, useState } from "react";
import FormBody                       from "./FormBody";
import { FormFooter }                 from "./FormFooter";
import { useNavigate }                from "react-router";
import { FormHeader }                 from "./FormHeader";
import './registrationForm.scss'

const RegistrationForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1)

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/" + currentStep);
    }, [currentStep, navigate]);

    return (
        <div className={'registration-form'}>
            <FormHeader currentStep={currentStep}/>
            <FormBody currentStep={currentStep}/>
            <FormFooter currentStep={currentStep} setCurrentStep={setCurrentStep}/>
        </div>
    );
}

export default RegistrationForm;