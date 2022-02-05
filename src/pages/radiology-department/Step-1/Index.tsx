import { FC, FormEventHandler, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ThemeButton } from "../../../components/button";
import { Checkbox } from "../../../components/checkbox";
import { InputGroup } from "../../../components/input-group";
import { RadiologistStepContainer } from "../../../components/Radiologist/RadiologistStepContainer";
import { InputFlex } from "../../../components/styled-components/input-flex";

// Radiology department registration page - step 1 - on route "/radiology/register"
export const RadiologistDeptStep1: FC = () => {
    const history = useHistory();

    const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        history.push(`/radiology/register/step-2`);
    };

    // Track if terms was agreed or not
    const [termsAgreed, setTermsAgreed] = useState<boolean>(false);

    return (
        <RadiologistStepContainer step={1}>
            <h1>Create your account</h1>
            <p>It's free and easy.</p>

            <form action="">
                <InputFlex>
                    <InputGroup
                        label="Your organization name"
                        placeholder="Enter your organization's name"
                        name="organization"
                        value={""}
                        width="48%"
                    />
                    <InputGroup
                        label="Full name"
                        placeholder="Enter your full name"
                        name="name"
                        value={""}
                        width="48%"
                    />
                    <InputGroup
                        label="Phone number"
                        placeholder="Type your phone number"
                        name="phone"
                        value={""}
                        width="48%"
                    />
                    <InputGroup
                        label="E-mail"
                        placeholder="Type your e-mail"
                        name="email"
                        value={""}
                        width="48%"
                    />
                    <InputGroup
                        label="State or Region"
                        placeholder="Enter your full name"
                        name="email"
                        value={""}
                        width="48%"
                    />
                    <InputGroup
                        label="Password"
                        placeholder="Enter your password"
                        name="password"
                        value={""}
                        width="48%"
                    />
                    <InputGroup
                        label="Website (optional)"
                        placeholder="Enter your website link"
                        name="website"
                        value={""}
                        width="48%"
                    />
                </InputFlex>

                <Checkbox
                    selected={termsAgreed}
                    setSelected={setTermsAgreed}
                    label={
                        <>
                            By creating an account means you agree to the{" "}
                            <Link to="/">Terms and Conditions</Link>, and our{" "}
                            <Link to="/">Privacy Policy</Link>
                        </>
                    }
                />

                <div className="button">
                    <ThemeButton onClick={submitForm} disabled={!termsAgreed}>
                        Register
                    </ThemeButton>
                </div>
            </form>
        </RadiologistStepContainer>
    );
};
