import { FC, useState } from "react";
import { FlexContainer } from "../../../components/styled-components/flex-container";
import { UserTypeContainer } from "./style";
import { ReactComponent as Elipse } from "./../../../assets/images/elipse.svg";
import { ReactComponent as Comment } from "./../../../assets/images/comment.svg";
import logo from "./../../../assets/images/logo.png";
import doctor from "./../../../assets/images/doctor.svg";
import logoblue from "./../../../assets/images/logo-blue.png";
import { ReactComponent as Help } from "./../../../assets/icons/help.svg";
import { AvatarCard } from "../../../components/avatar-card";
import { Radio } from "../../../components/radio";
import { Link } from "react-router-dom";
import { ThemeButton } from "../../../components/button";
import { useHistory } from "react-router";

export const UserTypePage: FC = () => {
    const history = useHistory();
    const goNext = () => {
        // work parameter is to show if the radiologist works for a rad center. 1 means yes, 0 means no
        history.push(`/radiologist/register`);
    };
    const [selectedValue, setSelectedValue] = useState<string>("");
    return (
        <UserTypeContainer>
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
                    <div className="avatar-container">
                        {" "}
                        <AvatarCard image={doctor} text="" />
                    </div>
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

                    <form action="">
                        <h5>Do you work for a radiology center?</h5>
                        <Radio
                            {...{ selectedValue, setSelectedValue }}
                            name="user"
                            value="1"
                            label="Yes, I do"
                        ></Radio>
                        <Radio
                            {...{ selectedValue, setSelectedValue }}
                            name="user"
                            value="0"
                            label="No, I don't work for a radiology center"
                        ></Radio>
                        <div className="button">
                            <ThemeButton
                                onClick={goNext}
                                disabled={selectedValue === ""}
                            >
                                Next
                            </ThemeButton>
                        </div>
                    </form>
                    <footer>
                        <Link to="/help">
                            Need Help? <Help />
                        </Link>
                    </footer>
                </div>
            </FlexContainer>
        </UserTypeContainer>
    );
};
