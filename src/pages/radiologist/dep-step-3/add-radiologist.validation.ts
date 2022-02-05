import * as yup from "yup";

export const addRadiologistValidation = yup.object().shape({
    name: yup.string().required("This field is required"),
    email: yup
        .string()
        .email("This is not a valid email")
        .required("This field is required"),
});
