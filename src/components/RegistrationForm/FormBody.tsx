import React, {useState} from "react";
import './formBody.scss'
import {Step1} from "./Step1";
import {Step2} from "./Step2";
import {Step3} from "./Step3";
import {Step4} from "./Step4";

interface Props {
    currentStep: number
}

const FormBody: React.FC<Props> = ({currentStep}) => {
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
        setInputValues({...inputValues, [inputName]: inputValue})
    }

    return (
        <form className="registration-form__body">
            {({
                1: <Step1 onChange={handleChange} inputValues={inputValues}/>,
                2: <Step2 onChange={handleChange} inputValues={inputValues}/>,
                3: <Step3 onChange={handleChange} inputValues={inputValues}/>,
                4: <Step4 onChange={handleChange} inputValues={inputValues}/>
            }[currentStep])}
        </form>
    );
}

export default FormBody;