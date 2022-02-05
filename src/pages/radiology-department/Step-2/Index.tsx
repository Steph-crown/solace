import { FC } from "react";
import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
import { ThemeButton } from "../../../components/button";
import { RadiologistStepContainer } from "../../../components/Radiologist/RadiologistStepContainer";

export const RadiologistDeptStep2: FC = () => {
    const history = useHistory();

    const handleSkipStep = () => {
        history.push(`/radiology/register/step-4`);
    };

    const goNext = () => {
        history.push(`/radiology/register/step-3`);
    };

    return (
        <RadiologistStepContainer step={2} handleSkipStep={handleSkipStep}>
            <form action="">
                <h1>Invite a Radiologist</h1>
                <p>
                    Now that you have created a radiology group, let us invite
                    radiologists to your account so you can share studies for
                    viewing and reporting
                </p>
                <div className="button">
                    <ThemeButton onClick={goNext}>
                        Invite Radiologist
                    </ThemeButton>
                </div>
            </form>
        </RadiologistStepContainer>
    );
};
