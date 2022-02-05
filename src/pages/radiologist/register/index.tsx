import { FC, useState } from "react";
import { ThemeButton } from "../../../components/button";
import { InputGroup } from "../../../components/input-group";
import { InputFlex } from "../../../components/styled-components/input-flex";
import { useHistory } from "react-router";
import { useQuery } from "../../hooks/use-query";
import { RadiologistStepContainer } from "../../../components/Radiologist/RadiologistStepContainer";

import { useFormik } from "formik";
import { ValidateRadiologistRegisterForm } from "./validation";
import { useRegisterRadiologistMutation } from "../../../services";
import toast from "react-hot-toast";
import { setCookie } from "../../../utils/cookies";
import { useDispatch } from "react-redux";
import {
    updateRadiologistProfile,
    updateRadiologistToken,
} from "../../../slices/radiologist-user";
// import { useCookies } from "react-cookie";

export const RegisterRadiologist: FC = () => {
    const history = useHistory();
    const work = useQuery("work");
    const dispatch = useDispatch();

    const [register] = useRegisterRadiologistMutation();

    const [loading, setLoading] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            role: "radiologist",
            password: "",
        },
        onSubmit: async (values) => {
            setLoading(true);
            try {
                await register(values)
                    .unwrap()
                    .then((data) => {
                        setLoading(false);

                        // save user token to redux store
                        dispatch(updateRadiologistToken(data.data?.token));

                        // save user object to redux store
                        dispatch(updateRadiologistProfile(data.data?.user));

                        // Saves the user to cookies
                        setCookie("gist", JSON.stringify(data.data));

                        history.push(`/radiologist/register/dep-1`);
                    })
                    .catch((err) => {
                        setLoading(false);
                        console.log(err);
                        toast.error(
                            (err?.data?.data && err?.data?.data[0]?.msg) ||
                                err?.data?.message ||
                                "An error occured while processing your request",
                            {
                                duration: 4_000,
                            }
                        );
                    });
            } catch (err: any) {
                setLoading(false);
                console.log(err);
                toast.error(
                    err?.data?.message ||
                        "An error occured while processing your request",
                    {
                        duration: 7_000,
                    }
                );
            }
        },
        validationSchema: ValidateRadiologistRegisterForm,
    });

    return (
        <RadiologistStepContainer showStep={false} step={0}>
            <h1>Create your account</h1>
            <p>It's free and easy.</p>

            <form action="" onSubmit={formik.handleSubmit}>
                <InputFlex>
                    <InputGroup
                        label="Full name"
                        placeholder="Enter your full name"
                        name="fullName"
                        value={formik.values.fullName}
                        width="48%"
                        handleChange={formik.handleChange}
                        error={
                            formik.errors.fullName &&
                            formik.touched.fullName &&
                            formik.errors.fullName
                        }
                    />
                    <InputGroup
                        label="E-mail "
                        placeholder="Enter your email"
                        name="email"
                        value={formik.values.email}
                        width="48%"
                        handleChange={formik.handleChange}
                        error={
                            formik.errors.email &&
                            formik.touched.email &&
                            formik.errors.email
                        }
                    />
                    <InputGroup
                        label="Phone number"
                        placeholder="Type your phone number"
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        width="48%"
                        handleChange={formik.handleChange}
                        error={
                            formik.errors.phoneNumber &&
                            formik.touched.phoneNumber &&
                            formik.errors.phoneNumber
                        }
                    />
                    <InputGroup
                        label="Password"
                        placeholder="Enter your password"
                        name="password"
                        value={formik.values.password}
                        width="48%"
                        handleChange={formik.handleChange}
                        type="password"
                        error={
                            formik.errors.password &&
                            formik.touched.password &&
                            formik.errors.password
                        }
                    />
                </InputFlex>

                <div className="button">
                    <ThemeButton type="submit" disabled={loading}>
                        {loading ? "Setting up ..." : "Register"}
                    </ThemeButton>
                </div>
            </form>
        </RadiologistStepContainer>
    );
};
