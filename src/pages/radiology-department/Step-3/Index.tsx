import { FC, FormEventHandler } from "react";
import { useHistory } from "react-router";
import { ThemeButton } from "../../../components/button";
import { InputGroup } from "../../../components/input-group";
import { RadiologistStepContainer } from "../../../components/Radiologist/RadiologistStepContainer";
import { InputFlex } from "../../../components/styled-components/input-flex";

export const RadiologistDeptStep3: FC = () => {
    const history = useHistory();

    const handleSkipStep = () => {
        history.push(`/radiology/register/step-4`);
    };

    const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        history.push(`/radiology/register/step-4`);
    };

    return (
        <RadiologistStepContainer step={3} handleSkipStep={handleSkipStep}>
            <h1>Add Radiologist</h1>
            <p>We’d love to know them better.</p>

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
                        label="Specialities"
                        placeholder="Select Specialities"
                        name="specialities"
                        value={""}
                        width="48%"
                    />
                    <InputGroup
                        label="State or Region"
                        placeholder="Select their state or region"
                        name="email"
                        value={""}
                        width="48%"
                    />
                </InputFlex>

                <div className="button">
                    <ThemeButton
                        onClick={submitForm}
                        // disabled={selectedValue === ""}
                    >
                        Add Radiologist
                    </ThemeButton>
                </div>
            </form>
        </RadiologistStepContainer>
    );
};
