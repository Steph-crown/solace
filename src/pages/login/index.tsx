import { FC, useState } from "react";
import { useHistory } from "react-router";

import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../services";
import { RadiologistStepContainer } from "../../components/Radiologist/RadiologistStepContainer";
import { LoginContainer } from "./login-container";
import { InputFlex } from "../../components/styled-components/input-flex";
import { InputGroup } from "../../components/input-group";
import { LoginValidation } from "./validation";
import { DataLogin } from "../../services/types/register.types";
import { ThemeButton } from "../../components/button";
import { ReactComponent as Emoji } from "../../assets/icons/emoji-wave.svg";
import { LoginStyle } from "./style";
import { Link } from "react-router-dom";
import {
    updateRadiologistProfile,
    updateRadiologistToken,
} from "../../slices/radiologist-user";
import { setCookie } from "../../utils/cookies";

export const Login: FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState<boolean>(false);

    const [login] = useLoginMutation();

    const formik = useFormik({
        initialValues: {
            email: "",
            type: "",
            password: "",
        } as DataLogin,
        onSubmit: async (values) => {
            if (!role) {
                setRoleError(true);
            } else {
                setLoading(true);

                try {
                    await login({ ...values, type: role })
                        .unwrap()
                        .then((data) => {
                            setLoading(false);
                            console.log(data);

                            // save user token to redux store
                            dispatch(updateRadiologistToken(data.data?.token));

                            // save user object to redux store
                            dispatch(updateRadiologistProfile(data.data?.user));

                            // Saves the user to cookies
                            setCookie("gist", JSON.stringify(data.data));

                            history.push(
                                data.data?.user?.role === "radiologist"
                                    ? `/radiologist/dashboard`
                                    : `radiology/dashboard`
                            );
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
            }
        },
        validationSchema: LoginValidation,
    });

    const [role, setRole] = useState<DataLogin["type"]>("");
    const [roleError, setRoleError] = useState<boolean>(false);

    return (
        <LoginContainer>
            <LoginStyle>
                <header>
                    <Emoji className="wave" />
                    <h1>Welcome back!</h1>
                </header>
                <p>Let's get some results..</p>

                <form action="" onSubmit={formik.handleSubmit}>
                    <InputFlex>
                        <section className="select-role">
                            <small>Select role to sign in</small>
                            <aside className="role-buttons">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setRole("user");
                                        setRoleError(false);
                                    }}
                                    className={`${
                                        role === "user" ? "active" : ""
                                    }`}
                                >
                                    Radiologist
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setRole("org");
                                        setRoleError(false);
                                    }}
                                    className={`${
                                        role === "org" ? "active" : ""
                                    }`}
                                >
                                    Radiology Department
                                </button>
                            </aside>
                            {roleError && (
                                <small className="error">
                                    You need to select a role
                                </small>
                            )}
                        </section>
                        <InputGroup
                            label="E-mail "
                            placeholder="Enter your email"
                            name="email"
                            value={formik.values.email}
                            width="100%"
                            handleChange={formik.handleChange}
                            error={
                                formik.errors.email &&
                                formik.touched.email &&
                                formik.errors.email
                            }
                        />

                        <InputGroup
                            label="Password"
                            placeholder="Enter your password"
                            name="password"
                            value={formik.values.password}
                            width="100%"
                            handleChange={formik.handleChange}
                            type="password"
                            error={
                                formik.errors.password &&
                                formik.touched.password &&
                                formik.errors.password
                            }
                        />
                    </InputFlex>

                    <aside className="forgot">
                        <Link to="/login">Forgot Password</Link>
                    </aside>

                    <div className="button">
                        <ThemeButton type="submit" disabled={loading}>
                            {loading ? "Validating your account ..." : "Login"}
                        </ThemeButton>
                    </div>
                </form>
            </LoginStyle>
        </LoginContainer>
    );
};
