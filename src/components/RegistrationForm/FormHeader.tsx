import React from "react";
import './registrationForm.scss'

interface Props {
    currentStep: number
}

export const FormHeader: React.FC<Props> = ({ currentStep }) => {
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