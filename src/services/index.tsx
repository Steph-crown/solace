import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTE } from "../utils/api-domain";
import {
    DataAddRadiologist,
    DataRadiologistRegister,
    DataRadiologistStep1,
    DataLogin,
} from "./types/register.types";
import { DataAddSchedule } from "./types/schedule.types";

export const solaceRadApi = createApi({
    // slice name we'll use to identify the reducer
    reducerPath: "solaceRadApi",

    //base url
    baseQuery: fetchBaseQuery({
        baseUrl: API_ROUTE,
    }),

    // list of endpoints
    endpoints: (builder) => ({
        registerRadiologist: builder.mutation<any, DataRadiologistRegister>({
            query: (data) => ({
                url: "user/register",
                method: "POST",
                body: data,
            }),
        }),
        postRadiologistStep1: builder.mutation<any, DataRadiologistStep1>({
            query: (data) => ({
                url: `user/${data.userId}`,
                method: "PUT",
                body: data.formData,
            }),
        }),
        addSchedule: builder.mutation<any, DataAddSchedule>({
            query: (data) => ({
                url: `user/${data.userId}`,
                method: "POST",
                body: data.schedule,
            }),
        }),
        deleteSchedule: builder.mutation<any, DataAddSchedule>({
            query: (data) => ({
                url: `user/${data.userId}`,
                method: "DELETE",
                body: data.schedule,
            }),
        }),
        // Add a radiologist
        addRadiologist: builder.mutation<any, DataAddRadiologist>({
            query: (data) => ({
                url: `auth/invite/user`,
                method: "POST",
                body: data,
            }),
        }),
        // Login
        // Add a radiologist
        login: builder.mutation<any, DataLogin>({
            query: (data) => ({
                url: `auth/login`,
                method: "POST",
                body: data,
            }),
        }),
    }),
});

// Exporting the endpoints
export const {
    useRegisterRadiologistMutation,
    usePostRadiologistStep1Mutation,
    useAddScheduleMutation,
    useDeleteScheduleMutation,
    useAddRadiologistMutation,
    useLoginMutation,
} = solaceRadApi;
