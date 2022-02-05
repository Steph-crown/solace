import { FC } from "react";
import { FlexContainer } from "../../components/styled-components/flex-container";
import { RegisterRadiologistContainer } from "../radiologist/register/style";

import { ReactComponent as Elipse } from "./../../assets/images/elipse.svg";
import { ReactComponent as Comment } from "./../../assets/images/comment.svg";
import logo from "./../../assets/images/logo.png";
import logoblue from "./../../assets/images/logo-blue.png";

export const LoginContainer: FC = ({ children }) => {
    return (
        <RegisterRadiologistContainer>
            <FlexContainer>
                <div className="left">
                    <Elipse className="abs-el" />
                    <Comment className="abs-com" />
                    <a href="/">
                        <img src={logo} alt="Solace Rad" className="logo" />
                    </a>
                    <h1>Let's get amazing results today.</h1>
                    <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eget quis egestas elit cursus magnis nisl risus sed
                        amet.
                    </h6>
                </div>
                <div className="right">
                    <div className="sm">
                        {" "}
                        <a href="/" className="mobile-logo">
                            <img
                                src={logoblue}
                                alt="Solace Rad"
                                className="logo"
                            />
                        </a>
                    </div>

                    {children}
                </div>
            </FlexContainer>
        </RegisterRadiologistContainer>
    );
};
