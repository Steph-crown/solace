import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, RouteProps, useLocation } from "react-router";
import { useAppSelector } from "./Hooks/typed-hooks";
import {
    radiologistToken,
    radiologistUserObject,
    updateRadiologistProfile,
    updateRadiologistToken,
} from "./slices/radiologist-user";
import { getCookie } from "./utils/cookies";

export type ProtectedRouteProps = {
    // isAuthenticated: boolean;
    authenticationPath: string;
    redirectPath?: string;
    // setRedirectPath: (path: string) => void;
} & RouteProps;

export const ProtectedRouteForRadiologist = ({
    authenticationPath,
    redirectPath,
    ...routeProps
}: ProtectedRouteProps) => {
    const currentLocation = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    // Get radiologist cookie
    const gistCookie = getCookie("gist");
    const radiologistTokenFromState = useAppSelector(radiologistToken);
    // const radiologistUserObjectFromState = useAppSelector(
    //     radiologistUserObject
    // );

    const dispatch = useDispatch();

    useEffect(() => {
        // If there is token in state
        if (radiologistTokenFromState) {
            setIsAuthenticated(true);
        } else {
            // if token is in cookie
            if (gistCookie) {
                const parsedCookie = JSON.parse(gistCookie);
                // save user token to redux store
                dispatch(updateRadiologistToken(parsedCookie?.token));

                // save user object to redux store
                dispatch(updateRadiologistProfile(parsedCookie?.user));
                setIsAuthenticated(true);
            } else {
                // no token
                setIsAuthenticated(false);
            }
        }
        // if (!isAuthenticated) {
        //     setRedirectPath(currentLocation.pathname);
        // }
    }, [isAuthenticated, currentLocation]);

    if (isAuthenticated) {
        return <Route {...routeProps} />;
    } else {
        return (
            <Redirect
                to={{
                    pathname: isAuthenticated
                        ? redirectPath
                        : authenticationPath,
                }}
            />
        );
    }
};

// // Route protected for radiologist
// const ProtectedRouteForRadiologist: FC<{ component: any }> = ({
//     component: ComponentToRender,
//     ...otherProps
// }) => {
//     if (tk) {
//         // Update state
//         dispatch(updateTk(tk));
//         dispatch(updateUsr(usr));

//         return (
//             <Route
//                 exact
//                 path={otherProps.path}
//                 render={() => <ComponentToRender />}
//             />
//         );
//     } else
//         return (
//             <Redirect
//                 to={`/signin/0?redirectTo=${
//                     otherProps?.location.pathname +
//                         otherProps?.location.search || ""
//                 }`}
//             />
//         );
// };
