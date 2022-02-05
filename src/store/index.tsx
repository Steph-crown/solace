import { configureStore } from "@reduxjs/toolkit";
import { solaceRadApi } from "../services";
import radiologistUserReducer from "./../slices/radiologist-user";

// Create redux store and configure redux devtools in the browser
export const store = configureStore({
    reducer: {
        // The solace rad api endpoints
        [solaceRadApi.reducerPath]: solaceRadApi.reducer,

        // Radiologist user object
        radiologistUser: radiologistUserReducer,
    },

    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(solaceRadApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
