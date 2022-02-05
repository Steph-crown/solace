import { FC, useReducer, useState } from "react";
import { ThemeButton } from "../../../components/button";
import { InputGroup } from "../../../components/input-group";
import { InputFlex } from "../../../components/styled-components/input-flex";
import { useQuery } from "../../hooks/use-query";
import { FileUpload } from "../../../components/image-upload";
import { useHistory } from "react-router";
import { RadiologistStepContainer } from "../../../components/Radiologist/RadiologistStepContainer";
import { useFormik } from "formik";
import { useAppSelector } from "../../../Hooks/typed-hooks";
import {
    // radiologistToken,
    radiologistUserObject,
} from "../../../slices/radiologist-user";
import { ValidateRadiologistStep1Form } from "./validation";
import toast from "react-hot-toast";
import { usePostRadiologistStep1Mutation } from "../../../services";

// reducing function that will process and return the new state
const reducer = (
    state: { document: any[]; presenceOfUnsupportedFiles: boolean },
    action: { type: "UPDATE_FILE" | "UNSUPPORTED_FILES"; payload: any }
) => {
    switch (action?.type) {
        // Updates the file
        case "UPDATE_FILE":
            return { ...state, document: action.payload };
        case "UNSUPPORTED_FILES":
            return { ...state, presenceOfUnsupportedFiles: action.payload };
        default:
            return state;
    }
};

export const DepStep1: FC = () => {
    const history = useHistory();
    const work: string | null = useQuery("work");

    const userObject: any = useAppSelector(radiologistUserObject);

    const handleSkipStep = () => {
        history.push(`/radiologist/register/dep-2`);
    };

    const [state, dispatch] = useReducer(reducer, {
        document: [],
        presenceOfUnsupportedFiles: false,
    });

    const [postStep1] = usePostRadiologistStep1Mutation();
    const [loading, setLoading] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            fullName: userObject?.fullName,
            phoneNumber: userObject?.phoneNumber,
            org: "",
            state: "",
            country: "",
            address: "",
            workingHours: "",
            qualification: "",
            sosSp: "",
            sosLp: "",
            yoe: "",
            role: "radiologist",
            specialites: "",
            document: undefined,
            website: "",
        },
        enableReinitialize: true,
        onSubmit: async (values) => {
            setLoading(true);
            // check for errors in the documents uploaded.
            if (state.presenceOfUnsupportedFiles) {
                setUploadError("Please remove all unsupported files");
            } else {
                if (state.document.length < 1) {
                    setUploadError("This field is required");
                } else {
                    const formData = new FormData();

                    for (const [key, value] of Object.entries(values)) {
                        formData.append(key as string, value as string | Blob);
                    }
                    formData.append("document", state.document[0]);
                    try {
                        await postStep1({
                            formData,
                            userId: userObject?.userId,
                        })
                            .unwrap()
                            .then((data) => {
                                setLoading(false);

                                console.log(data);
                                history.push(`/radiologist/register/dep-2`);
                            })
                            .catch((error) => {
                                console.log(error);
                                setLoading(false);
                                toast.error(
                                    error.message ||
                                        "An error occured while processing this information"
                                );
                            });
                    } catch (err: any) {
                        console.warn(err);
                        setLoading(false);
                        toast.error(
                            err?.message ||
                                "An error occured while processing this information"
                        );
                    }
                }
            }
        },
        validationSchema: ValidateRadiologistStep1Form,
    });

    const [uploadError, setUploadError] = useState("");

    return (
        <RadiologistStepContainer step={1} handleSkipStep={handleSkipStep}>
            <h1>Tell us about more about yourself</h1>
            <p>We'd love to know you better.</p>

            <form action="" onSubmit={formik.handleSubmit}>
                <InputFlex>
                    <InputGroup
                        handleChange={formik.handleChange}
                        label="Your organization name (optional)"
                        placeholder="Enter your organization's name"
                        name="org"
                        value={formik.values.org}
                        width="48%"
                        error={
                            formik.errors.org &&
                            formik.touched.org &&
                            formik.errors.org
                        }
                    />
                    <InputGroup
                        handleChange={formik.handleChange}
                        label="Website (optional)"
                        placeholder="Enter link to website"
                        name="website"
                        value={formik.values.website}
                        width="48%"
                        error={
                            formik.errors.website &&
                            formik.touched.website &&
                            formik.errors.website
                        }
                        type="url"
                    />
                    <InputGroup
                        handleChange={formik.handleChange}
                        label="Qualifications"
                        placeholder="Qualifications"
                        name="qualification"
                        value={formik.values.qualification}
                        width="48%"
                        error={
                            formik.errors.qualification &&
                            formik.touched.qualification &&
                            formik.errors.qualification
                        }
                    />
                    <InputGroup
                        handleChange={formik.handleChange}
                        label="Specialties"
                        placeholder="Type your specialties"
                        name="specialities"
                        value={formik.values.specialites}
                        width="48%"
                        error={
                            formik.errors.specialites &&
                            formik.touched.specialites &&
                            formik.errors.specialites
                        }
                    />
                    <FileUpload
                        label="Qualification Document"
                        document={state.document}
                        setDocument={(doc: any) => {
                            dispatch({ type: "UPDATE_FILE", payload: doc });
                        }}
                        maxSize={2_000_000}
                        multiple={true}
                        acceptableFiles={[
                            "image/jpeg",
                            "image/jpg",
                            "image/png",

                            "application/msword",
                            "application/vnd.ms-excel",
                            // "application/vnd.ms-powerpoint",
                            "application/pdf",
                            "image/*",
                        ]}
                        setPresenceOfUnsupportedFiles={(val: boolean) => {
                            dispatch({
                                type: "UNSUPPORTED_FILES",
                                payload: val,
                            });
                        }}
                        presenceOfUnsupportedFiles={
                            state.presenceOfUnsupportedFiles
                        }
                        error={uploadError}
                    />

                    <InputGroup
                        handleChange={formik.handleChange}
                        label="Years of Experience"
                        placeholder="Type your years of experience"
                        name="yoe"
                        value={formik.values.yoe}
                        width="100%"
                        error={
                            formik.errors.yoe &&
                            formik.touched.yoe &&
                            formik.errors.yoe
                        }
                    />
                    <InputGroup
                        handleChange={formik.handleChange}
                        label="State or region"
                        placeholder="Type your state"
                        name="state"
                        value={formik.values.state}
                        width="48%"
                    />
                    <InputGroup
                        handleChange={formik.handleChange}
                        label="Country"
                        placeholder="Type your country"
                        name="country"
                        value={formik.values.country}
                        width="48%"
                    />
                    <InputGroup
                        handleChange={formik.handleChange}
                        label="Address"
                        placeholder="Type your address"
                        name="address"
                        value={formik.values.address}
                        width="48%"
                    />
                    <InputGroup
                        handleChange={formik.handleChange}
                        label="Working hours"
                        placeholder="Type your availability"
                        name="workingHours"
                        value={formik.values.workingHours}
                        width="48%"
                    />
                    <InputGroup
                        handleChange={formik.handleChange}
                        label="Study Fee per study (small parts)"
                        placeholder="Type the amount"
                        name="sosSp"
                        value={formik.values.sosSp}
                        width="48%"
                    />
                    <InputGroup
                        handleChange={formik.handleChange}
                        label="Service Fee per study (large parts)"
                        placeholder="Type the amount"
                        name="sosLp"
                        value={formik.values.sosLp}
                        width="48%"
                    />
                </InputFlex>

                <div className="button">
                    <ThemeButton
                        onClick={() => {
                            (formik.errors?.yoe ||
                                state.presenceOfUnsupportedFiles ||
                                state.document.length < 1) &&
                                toast.error(
                                    "You missed some required fields or you have uploaded unsupported files",
                                    {
                                        duration: 4_000,
                                    }
                                );
                        }}
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Updating Profile..." : "Next"}
                    </ThemeButton>
                </div>
            </form>
        </RadiologistStepContainer>
    );
};
