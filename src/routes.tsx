import { FC, useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { PaginationExample } from "./components/Pagination/Example";
import { HomePage } from "./pages/home";
import { Onboarding } from "./pages/onboard";
import { RadiologistAccount } from "./pages/radiologist-account";
import { RadiologistDashboard } from "./pages/radiologist-dashboard";
import { RadiologistMessages } from "./pages/radiologist-messages";
import { RadiologistStudies } from "./pages/radiologist-studies";
import { DepStep1 } from "./pages/radiologist/dep-step-1";
import { DepStep2 } from "./pages/radiologist/dep-step-2";
import { DeptStep3 } from "./pages/radiologist/dep-step-3";
import DeptStep3Add from "./pages/radiologist/dep-step-3/DeptStep3Add";
import { DeptStep4 } from "./pages/radiologist/dep-step-4";
import { DeptStep5 } from "./pages/radiologist/dep-step-5";
import { NoDepStep1 } from "./pages/radiologist/no-dep-step-1";
import { NoDepStep2 } from "./pages/radiologist/no-dep-step-2";
import { RegisterRadiologist } from "./pages/radiologist/register";
import { UserTypePage } from "./pages/radiologist/user-type";
import { RadiologyAccount } from "./pages/radiology-account";
import { RadiologyDashboard } from "./pages/radiology-dashboard";
import { RadiologistDeptStep1 } from "./pages/radiology-department/Step-1/Index";
import { RadiologistDeptStep2 } from "./pages/radiology-department/Step-2/Index";
import { RadiologistDeptStep3 } from "./pages/radiology-department/Step-3/Index";
import { RadiologistDeptStep4 } from "./pages/radiology-department/Step-4/Index";
import { RadiologistDeptStep5 } from "./pages/radiology-department/Step-5/Index";
import { RadiologyMessages } from "./pages/radiology-messages";
import { RadiologyRadiologists } from "./pages/radiology-radiologist";
import { getCookie } from "./utils/cookies";
import {
    radiologistToken,
    radiologistUserObject,
} from "./slices/radiologist-user";
import { useAppSelector } from "./Hooks/typed-hooks";
import {
    ProtectedRouteForRadiologist,
    ProtectedRouteProps,
} from "./protected-route";
import { Login } from "./pages/login";

export const Pages: FC = () => {
    // const defaultProtectedRouteProps: ProtectedRouteProps = {
    //     authenticationPath: "/login",
    //     redirectPath: "",
    //     // setRedirectPath: setRedirectPath,
    // };
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route
                        exact
                        path="/register"
                        render={() => <Onboarding />}
                    />

                    {/* Routes with /radiologist is for radiologist */}
                    <Route
                        exact
                        path="/radiologist/user-type"
                        render={() => <UserTypePage />}
                    />
                    <Route
                        exact
                        path="/radiologist/register"
                        render={() => <RegisterRadiologist />}
                    />
                    {/* ragistration step 1 (radiologist in a department) */}
                    <ProtectedRouteForRadiologist
                        exact
                        path="/radiologist/register/dep-1"
                        render={() => <DepStep1 />}
                        authenticationPath="/radiologist/register"
                        // redirectPath=""
                    />
                    {/* ragistration step 2 (radiologist in a department) */}
                    <ProtectedRouteForRadiologist
                        exact
                        path="/radiologist/register/dep-2"
                        render={() => <DepStep2 />}
                        authenticationPath="/radiologist/register"
                    />

                    {/* registration step 3 (invite radiologist) */}
                    <ProtectedRouteForRadiologist
                        exact
                        path="/radiologist/register/dep-3"
                        render={() => <DeptStep3 />}
                        authenticationPath="/radiologist/register"
                    />

                    {/* registration step 3 (form to invite radiologist) */}
                    <ProtectedRouteForRadiologist
                        exact
                        path="/radiologist/register/dep-3/add"
                        render={() => <DeptStep3Add />}
                        authenticationPath="/radiologist/register"
                    />

                    {/* registration step 4 (invite colleagues) */}
                    <ProtectedRouteForRadiologist
                        exact
                        path="/radiologist/register/dep-4"
                        render={() => <DeptStep4 />}
                        authenticationPath="/radiologist/register"
                    />

                    {/*registration step 5 (success) */}
                    <ProtectedRouteForRadiologist
                        exact
                        path="/radiologist/register/dep-5"
                        render={() => <DeptStep5 />}
                        authenticationPath="/radiologist/register"
                    />

                    {/* ragistration step 1 (radiologist not in a department) */}
                    <Route
                        exact
                        path="/radiologist/register/no-dep-1"
                        render={() => <NoDepStep1 />}
                    />
                    {/* ragistration step 2 (radiologist not in a department) */}
                    <Route
                        exact
                        path="/radiologist/register/no-dep-2"
                        render={() => <NoDepStep2 />}
                    />

                    {/* Radiologist dashboard - Home */}
                    <Route
                        exact
                        path="/radiologist/dashboard"
                        render={() => <RadiologistDashboard />}
                    />

                    {/* Radiologist dashboard - Studies */}
                    <Route
                        exact
                        path="/radiologist/studies"
                        render={() => <RadiologistStudies />}
                    />

                    {/* Radiologist dashboard - Messages */}
                    <Route
                        exact
                        path="/radiologist/messages"
                        render={() => <RadiologistMessages />}
                    />

                    {/* Radiologist dashboard - Account */}
                    <Route
                        exact
                        path="/radiologist/account"
                        render={() => <RadiologistAccount />}
                    />

                    {/* Routes with /radiology is for radiology department */}

                    {/* initial registration */}
                    <Route
                        exact
                        path="/radiology/register"
                        render={() => <RadiologistDeptStep1 />}
                    />

                    {/* invite radiologist */}
                    <Route
                        exact
                        path="/radiology/register/step-2"
                        render={() => <RadiologistDeptStep2 />}
                    />

                    {/* form to invite radiologist */}
                    <Route
                        exact
                        path="/radiology/register/step-3"
                        render={() => <RadiologistDeptStep3 />}
                    />

                    {/* form to add diagnostic center */}
                    <Route
                        exact
                        path="/radiology/register/step-4"
                        render={() => <RadiologistDeptStep4 />}
                    />

                    {/* success */}
                    <Route
                        exact
                        path="/radiology/register/step-5"
                        render={() => <RadiologistDeptStep5 />}
                    />

                    {/* testing pagination */}
                    <Route
                        exact
                        path="/pagination"
                        render={() => <PaginationExample />}
                    />

                    {/* Login */}
                    <Route exact path="/login" render={() => <Login />} />

                    {/* Radiology dashboard - Home */}
                    <Route
                        exact
                        path="/radiology/dashboard"
                        render={() => <RadiologyDashboard />}
                    />

                    {/* Radiology dashboard - Radiologist */}
                    <Route
                        exact
                        path="/radiology/radiologists"
                        render={() => <RadiologyRadiologists />}
                    />

                    {/* Radiology dashboard - Messages */}
                    <Route
                        exact
                        path="/radiology/messages"
                        render={() => <RadiologyMessages />}
                    />

                    {/* Radiology dashboard - Messages */}
                    <Route
                        exact
                        path="/radiology/account"
                        render={() => <RadiologyAccount />}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
