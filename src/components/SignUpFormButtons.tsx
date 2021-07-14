import React from "react";

const SignUpFormButtons = ({onNextStep, onPrevStep, currentStep, steps}: {onNextStep: () => void, onPrevStep: () => void, currentStep: number, steps: number}) => {

    const canGoBack = () => currentStep > 0;
    const canGoNext = () => currentStep < steps - 1;

    return (
        <div className="d-flex justify-content-around">
            { canGoNext() ? <button className="btn btn-lg btn-primary order-1"
                                    type="button"
                                    onClick={onNextStep}>Next</button> : null}
            { canGoBack() ? <button className="btn btn-lg btn-outline-secondary order-0"
                                    type="button"
                                    onClick={onPrevStep}>Back</button> : null}
        </div>
    );
};

export default SignUpFormButtons;
