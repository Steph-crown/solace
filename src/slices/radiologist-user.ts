import { RootState } from "./../store/index";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
    authenticated: boolean;
    token: string;
    user: object;
}

const initialRadiologistUserState: IState = {
    authenticated: false,
    token: "",
    user: {},
};

// Radiologist user object state
export const radiologistUserSlice = createSlice({
    name: "radiologistUser",
    initialState: initialRadiologistUserState,
    reducers: {
        // This updates the radiologist token
        updateRadiologistToken: (state, action) => {
            state.token = action.payload;
        },

        // Updates radiologist profile
        updateRadiologistProfile: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { updateRadiologistProfile, updateRadiologistToken } =
    radiologistUserSlice.actions;

// select radiologist token
export const radiologistToken = (state: RootState) =>
    state.radiologistUser.token;

// select radiologist user object
export const radiologistUserObject = (state: RootState) =>
    state.radiologistUser.user;

export default radiologistUserSlice.reducer;
