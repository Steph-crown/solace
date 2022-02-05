import { FC, FormEventHandler } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../../hooks/use-query";
import { InputFlex } from "../../../components/styled-components/input-flex";
import { InputGroup } from "../../../components/input-group";
import { ThemeButton } from "../../../components/button";
import { RadiologistStepContainer } from "../../../components/Radiologist/RadiologistStepContainer";

export const DeptStep4: FC = () => {
    const history = useHistory();
    const work = useQuery("work");

    const handleSkipStep = () => {
        history.push(`/radiologist/register/dep-5`);
    };

    const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        history.push(`/radiologist/register/dep-5`);
    };

    return (
        <RadiologistStepContainer step={4} handleSkipStep={handleSkipStep}>
            <h1>Add Your Colleagues</h1>
            <p>Send an invitation to your dream.</p>

            <form onSubmit={submitForm}>
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
                        placeholder="Enter their email address"
                        name="email"
                        value={""}
                        width="48%"
                        type="email"
                    />
                    <InputGroup
                        label="Role"
                        placeholder="Specialities"
                        name="role"
                        value={""}
                        width="100%"
                    />
                </InputFlex>

                <div className="button">
                    <ThemeButton onClick={submitForm}>Add to list</ThemeButton>
                </div>
            </form>
        </RadiologistStepContainer>
    );
};
