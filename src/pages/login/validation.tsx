import * as yup from "yup";

// Regex to test password
export const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const LoginValidation = yup.object().shape({
    email: yup
        .string()
        .email("This is not a valid email")
        .required("This field is required"),

    type: yup.string(),
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
