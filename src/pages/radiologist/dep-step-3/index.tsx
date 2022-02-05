import { FC } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../../hooks/use-query";
// import { Link } from "react-router-dom";
import { RadiologistStepContainer } from "../../../components/Radiologist/RadiologistStepContainer";
import { ThemeButton } from "../../../components/button";

export const DeptStep3: FC = () => {
    const history = useHistory();
    const work = useQuery("work");

    const handleSkipStep = () => {
        history.push(`/radiologist/register/dep-4`);
    };

    const goNext = () => {
        history.push(`/radiologist/register/dep-3/add`);
    };

    return (
        <RadiologistStepContainer step={3} handleSkipStep={handleSkipStep}>
            <form action="">
                <h1>Invite a radiologist</h1>
                <p>
                    Now that you have created a radiology group, let's invite
                    radiologists to your account so you can share studies for
                    viewing and reporting
                </p>
                <div className="button">
                    {" "}
                    <ThemeButton onClick={goNext}>
                        {" "}
                        Invite Radiologist
                    </ThemeButton>
                </div>
            </form>
        </RadiologistStepContainer>
    );
};
