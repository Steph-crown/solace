import * as yup from "yup";

export const ValidateRadiologistStep1Form = yup.object().shape({
    fullName: yup.string().required(),
    phoneNumber: yup.string().required(),
    org: yup.string(),
    state: yup.string(),
    country: yup.string(),
    address: yup.string(),
    workingHours: yup.string(),
    qualification: yup.string(),
    sosSp: yup.string(),
    sosLp: yup.string(),
    yoe: yup.string().required("This field is required"),
    role: yup.string(),
    specialites: yup.string(),
    document: yup.object(),
    website: yup.string(),
});
