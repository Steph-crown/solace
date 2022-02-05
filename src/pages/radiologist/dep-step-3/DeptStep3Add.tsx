import { FC, FormEventHandler, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../../hooks/use-query";
import { InputFlex } from "../../../components/styled-components/input-flex";
import { InputGroup } from "../../../components/input-group";
import { ThemeButton } from "../../../components/button";
import { RadiologistStepContainer } from "../../../components/Radiologist/RadiologistStepContainer";
import { Select } from "../../../components/select";
import { useAddRadiologistMutation } from "../../../services";
import { useFormik } from "formik";
import { DataAddRadiologist } from "../../../services/types/register.types";
import toast from "react-hot-toast";
import { addRadiologistValidation } from "./add-radiologist.validation";

const DeptStep3Add: FC = () => {
    const history = useHistory();

    const handleSkipStep = () => {
        history.push(`/radiologist/register/dep-5`);
    };

    const [loading, setLoading] = useState<boolean>(false);

    const [addRadiologist] = useAddRadiologistMutation();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            role: "radiologist",
        } as DataAddRadiologist,
        onSubmit: async (values) => {
            setLoading(true);
            try {
                await addRadiologist(values)
                    .unwrap()
                    .then((data) => {
                        setLoading(false);
                        toast.success(
                            "We have sent an email to the to the radiologist to get them onboard. You can add more radiologist or click 'Continue' to continue "
                        );
                    })
                    .catch((err: any) => {
                        setLoading(false);
                        console.log(err);
                        toast.error(
                            err.message ||
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
        validationSchema: addRadiologistValidation,
    });

    return (
        <RadiologistStepContainer step={3} handleSkipStep={handleSkipStep}>
            <h1>Add A Radiologist</h1>
            <p>We'd love to know them better.</p>

            <form onSubmit={formik.handleSubmit}>
                <InputFlex>
                    <InputGroup
                        label="Name"
                        placeholder="Enter full name"
                        name="name"
                        value={formik.values.name}
                        width="48%"
                        handleChange={formik.handleChange}
                        error={
                            formik.errors.name &&
                            formik.touched.name &&
                            formik.errors.name
                        }
                    />
                    <InputGroup
                        label="Email"
                        placeholder="Enter their email"
                        name="email"
                        value={formik.values.email}
                        width="48%"
                        type="email"
                        handleChange={formik.handleChange}
                        error={
                            formik.errors.email &&
                            formik.touched.email &&
                            formik.errors.email
                        }
                    />
                </InputFlex>

                <div className="button">
                    <ThemeButton type="submit" disabled={loading}>
                        {" "}
                        {loading ? "Sending a mail ..." : "Add radiologist"}
                    </ThemeButton>
                    <ThemeButton
                        type="button"
                        className="continue"
                        onClick={handleSkipStep}
                    >
                        {" "}
                        Continue
                    </ThemeButton>
                </div>
            </form>
        </RadiologistStepContainer>
    );
};

export default DeptStep3Add;
