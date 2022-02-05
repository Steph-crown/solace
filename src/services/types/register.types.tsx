// The data passed to the endpoint to register radiologist
export interface DataRadiologistRegister {
    fullName: string;
    email: string;
    phoneNumber: string;
    role: string;
    password: string;
}

// Interface for radiologist step1 form
export interface DataRadiologistStep1 {
    formData: FormData;
    userId: string;
}

export interface DataAddRadiologist {
    name: string;
    email: string;
    role: "radiologist";
}

export interface DataLogin {
    email: string;
    password: string;
    type: "user" | "org" | "";
}
