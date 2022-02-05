import { FC } from "react";
// import { Progress } from "./progress";
import { StyledRadiologistHeader } from "./styled-components/StyledRadiologistHeader";

export interface RadiologistHeaderProps {
    handleSkipStep?: () => void;
    step: number;
    total_steps: number;
}

const RadiologistHeader: FC<RadiologistHeaderProps> = ({
    handleSkipStep,
    step,
    total_steps,
}) => {
    return (
        <StyledRadiologistHeader>
            <label htmlFor="step">Step {step}</label>
            <progress id="step" value={step} max={total_steps}></progress>
            {/* <div className="progress">
                <Progress value={step} max={total_steps} />
            </div> */}

            {handleSkipStep && (
                <button
                    className="skip"
                    onClick={() => {
                        handleSkipStep();
                    }}
                >
                    Skip this step
                </button>
            )}
        </StyledRadiologistHeader>
    );
};

export default RadiologistHeader;
