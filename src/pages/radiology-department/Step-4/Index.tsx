import { FC, FormEventHandler } from "react";
import { useHistory } from "react-router";
import { ThemeButton } from "../../../components/button";
import { InputGroup } from "../../../components/input-group";
import { RadiologistStepContainer } from "../../../components/Radiologist/RadiologistStepContainer";
import { InputFlex } from "../../../components/styled-components/input-flex";

export const RadiologistDeptStep4: FC = () => {
    const history = useHistory();

    const handleSkipStep = () => {
        history.push(`/radiology/register/step-5`);
    };

    const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        history.push(`/radiology/register/step-5`);
    };

    return (
        <RadiologistStepContainer step={4} handleSkipStep={handleSkipStep}>
            <h1>Add a diagnostic center</h1>
            <p>Send your invitation to your team.</p>

            <form action="">
                <InputFlex>
                    <InputGroup
                        label="Name"
                        placeholder="Enter full name"
                        name="name"
                        value={""}
                        width="48%"
                    />
                    <InputGroup
                        label="Email Address"
                        placeholder="Enter their email"
                        name="email"
                        value={""}
                        width="48%"
                    />
                    <InputGroup
                        label="Roles"
                        placeholder="Select Specialities"
                        name="roles"
                        value={""}
                        width="48%"
                    />
                </InputFlex>

                <div className="button">
                    <ThemeButton
                        onClick={submitForm}
                        // disabled={selectedValue === ""}
                    >
                        Add to List
                    </ThemeButton>
                </div>
            </form>
        </RadiologistStepContainer>
    );
};
