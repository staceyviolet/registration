import React             from "react";
import { Step1 }         from "./Step1";
import { Step2 }         from "./Step2";
import { Step3 }         from "./Step3";
import { Step4 }         from "./Step4";

import './formBody.scss'
import { SuccessScreen } from "./SuccessScreen";

interface Props {
    currentStep: number
    onChange: (inputName: string, inputValue: any) => void
    inputValues: any
}

const FormBody: React.FC<Props> = ({ currentStep, onChange, inputValues }) => {
    return (
        <form className="registration-form__body">
            {({
                1: <Step1 onChange={onChange} inputValues={inputValues}/>,
                2: <Step2 onChange={onChange} inputValues={inputValues}/>,
                3: <Step3 onChange={onChange} inputValues={inputValues}/>,
                4: <Step4 onChange={onChange} inputValues={inputValues}/>,
                5: <SuccessScreen/>
            }[currentStep])}
        </form>
    );
}

export default FormBody;