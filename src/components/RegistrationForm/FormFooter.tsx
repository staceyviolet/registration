import React from "react";
import './formFooter.scss'

interface Props {
    currentStep: number;
    setCurrentStep: (step: number) => void;
    onSubmit: () => void;
}

export const FormFooter: React.FC<Props> = ({
                                                currentStep,
                                                setCurrentStep,
                                                onSubmit,
                                            }) => {
    const nextStep = () => {
        if (currentStep > 4) {
            return;
        }
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div className="registration-form__footer">
            {currentStep !== 1 &&
             <div className="registration-form__footer__button button-back">
                 <button onClick={prevStep}>
                     <i className="fa fa-arrow-left"/> Back
                 </button>
             </div>
            }

            {currentStep < 5 && <div className="registration-form__footer__button button-next">
                {currentStep < 4 &&
                 <button onClick={nextStep}>
                     Next
                 </button>
                }
                {currentStep === 4 && <button onClick={onSubmit}>
                    Register
                </button>
                }
            </div>}
        </div>
    );
};
