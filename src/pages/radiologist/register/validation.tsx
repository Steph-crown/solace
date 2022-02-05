import * as yup from "yup";

// Regex to test password
export const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const ValidateRadiologistRegisterForm = yup.object().shape({
    fullName: yup.string().required("This field is required"),
    email: yup
        .string()
        .email("This is not a valid email")
        .required("This field is required"),
    phoneNumber: yup
        .number()
        .typeError("This should be a number")
        .min(8, "This should be a minimum of 8 characters")
        .required("This field is required"),
    role: yup.string().required("This field is required"),
    password: yup
        .string()
        .min(8)
        .typeError("Password should be at least 8 characters")
        .matches(
            passwordRegex,
            "Must contain at least an uppercase, symbol and number"
        )
        .required("This field is required"),
});
