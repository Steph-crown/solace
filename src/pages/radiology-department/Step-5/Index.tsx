import { FC, FormEventHandler } from "react";
import { ThemeButton } from "../../../components/button";
import { RadiologistStepContainer } from "../../../components/Radiologist/RadiologistStepContainer";

export const RadiologistDeptStep5: FC = () => {
    const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log("yes");
    };

    return (
        <RadiologistStepContainer step={5}>
            <form action="">
                <h1>Success!</h1>
                <p>
                    You are all set. Thank you for creating an account with us.
                    You can now access your account.
                </p>
                <div className="button">
                    <ThemeButton onClick={submitForm}>Let's go</ThemeButton>
                </div>
            </form>
        </RadiologistStepContainer>
    );
};
