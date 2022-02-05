import { FC, useEffect } from "react";
import { FlexContainer } from "../../components/styled-components/flex-container";
import { OnboardingContainer } from "./style";
import logo from "./../../assets/images/logo.png";
import logoblue from "./../../assets/images/logo-blue.png";

import doctor from "./../../assets/images/doctor.svg";

import hospital from "./../../assets/images/hospital.svg";
import { ReactComponent as Elipse } from "./../../assets/images/elipse.svg";
import { ReactComponent as Comment } from "./../../assets/images/comment.svg";
import { AvatarCard } from "../../components/avatar-card";
import { ReactComponent as Help } from "../../assets/icons/help.svg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

// Onboarding page at route "/register"
export const Onboarding: FC = () => {
    // This scrolls the page to the top onload.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const history = useHistory();
    return (
        <OnboardingContainer>
            <FlexContainer>
                <div className="left">
                    <Elipse className="abs-el" />
                    <Comment className="abs-com" />
                    <a href="/">
                        <img src={logo} alt="Solace Rad" className="logo" />
                    </a>
                    <h1>I see it's your first time here.</h1>
                    <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eget quis egestas elit cursus magnis nisl risus sed
                        amet.
                    </h6>
                </div>
                <div className="right">
                    <div className="sm">
                        {" "}
                        <a href="/">
                            <img
                                src={logoblue}
                                alt="Solace Rad"
                                className="logo"
                            />
                        </a>
                    </div>
                    <h1>Select User type</h1>
                    <p>
                        Please select what describes you best so you can have a
                        tailored experience.
                    </p>
                    <div className="flex">
                        <div
                            onClick={() => {
                                history.push("/radiology/register");
                            }}
                        >
                            {" "}
                            <AvatarCard
                                image={hospital}
                                text="Radiology Center"
                            />
                        </div>

                        <div
                            onClick={() => {
                                history.push("/radiologist/register?work=1");
                            }}
                        >
                            {" "}
                            <AvatarCard image={doctor} text="Radiologist" />
                        </div>
                    </div>
                    <footer>
                        <Link to="/help">
                            Need Help? <Help />
                        </Link>
                    </footer>
                </div>
            </FlexContainer>
        </OnboardingContainer>
    );
};
