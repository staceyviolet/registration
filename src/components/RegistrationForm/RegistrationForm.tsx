import React, { useEffect, useState } from "react";
import FormBody                       from "./FormBody";
import { FormFooter }                 from "./FormFooter";
import { useNavigate }                from "react-router";
import { FormHeader }                 from "./FormHeader";
import './registrationForm.scss'

const RegistrationForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [inputValues, setInputValues] = useState({
                                                       firstName: "",
                                                       lastName: "",
                                                       email: "",
                                                       password: "",
                                                       passwordConfirm: "",
                                                       skills: [] as any[],
                                                       about: "",
                                                       userEducation: [{
                                                           id: 1,
                                                           title: "",
                                                           name: "",
                                                           startYear: "",
                                                           startMonth: "",
                                                           endYear: "",
                                                           endMonth: "",
                                                       }],
                                                       userJobs: [{
                                                           id: 1,
                                                           title: "",
                                                           name: "",
                                                           startYear: "",
                                                           startMonth: "",
                                                           endYear: "",
                                                           endMonth: "",
                                                       }],
                                                       phone: "",
                                                       userAddress: {},
                                                       referrer: "",
                                                       userPurpose: "",
                                                   })

    const handleChange = (inputName: string, inputValue: any) => {
        setInputValues({ ...inputValues, [inputName]: inputValue })
    }

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/" + currentStep);
    }, [currentStep, navigate]);

    const handleSubmit = () => {
        setCurrentStep(5)
        // POST request to backend
    }

    return (
        <div className={'registration-form'}>
            <FormHeader currentStep={currentStep}/>
            <FormBody currentStep={currentStep} inputValues={inputValues} onChange={handleChange}/>
            <FormFooter currentStep={currentStep} setCurrentStep={setCurrentStep} onSubmit={handleSubmit}/>
        </div>
    );
}

export default RegistrationForm;