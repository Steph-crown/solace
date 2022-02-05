import { FC } from "react";
import { FlexContainer } from "../../../components/styled-components/flex-container";
import { ReactComponent as Elipse } from "./../../../assets/images/elipse.svg";
import { ReactComponent as Comment } from "./../../../assets/images/comment.svg";
import logo from "./../../../assets/images/logo.png";
import logoblue from "./../../../assets/images/logo-blue.png";
// import { ReactComponent as Help } from "./../../../assets/icons/help.svg";
// import { Link } from "react-router-dom";
import { ThemeButton } from "../../../components/button";
import { InputGroup } from "../../../components/input-group";
import { InputFlex } from "../../../components/styled-components/input-flex";
import { useHistory } from "react-router";
import { useQuery } from "../../hooks/use-query";
import { RegisterRadiologistContainer } from "../register/style";

// Step 1 for not in  a department
export const NoDepStep1: FC = () => {
    const history = useHistory();
    const work = useQuery("work");
    const submitForm = () => {
        // works in a company
        if (work === "0") {
            history.push(`/radiologist/register/no-dep-2`);
        }
    };

    return (
        <RegisterRadiologistContainer>
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
                    <h1>Add your colleagues</h1>
                    <p>Send an invitation to your team.</p>

                    <form action="">
                        <InputFlex>
                            <InputGroup
                                label="Name"
                                placeholder="Enter full name"
                                name="name"
                                value={""}
                                width="48%"
                            />
                            <InputGroup
                                label="Email address"
                                placeholder="Enter their email name"
                                name="email"
                                value={""}
                                width="48%"
                            />
                            <InputGroup
                                label="Role"
                                placeholder="Specialities"
                                name="phone"
                                value={""}
                                width="100%"
                            />
                        </InputFlex>

                        <div className="button">
                            <ThemeButton
                            // onClick={submitForm}
                            // disabled={selectedValue === ""}
                            >
                                Add to list
                            </ThemeButton>
                        </div>
                        <div className="button">
                            <ThemeButton
                                onClick={submitForm}
                                // disabled={selectedValue === ""}
                            >
                                Skip this step
                            </ThemeButton>
                        </div>
                    </form>
                </div>
            </FlexContainer>
        </RegisterRadiologistContainer>
    );
};
