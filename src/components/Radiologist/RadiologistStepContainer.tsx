import { FC } from "react";
import { RegisterRadiologistContainer } from "../../pages/radiologist/register/style";
import { FlexContainer } from "../styled-components/flex-container";
import { ReactComponent as Elipse } from "./../../assets/images/elipse.svg";
import { ReactComponent as Comment } from "./../../assets/images/comment.svg";
import logo from "./../../assets/images/logo.png";
import logoblue from "./../../assets/images/logo-blue.png";
import RadiologistHeader, {
    RadiologistHeaderProps,
} from "../RadiologistHeader";

type IProps = Pick<RadiologistHeaderProps, "handleSkipStep" | "step">;

interface IRadiologistStepContainer extends IProps {
    showStep?: boolean;
    total_steps?: number;
    step: number;
}

export const RadiologistStepContainer: FC<IRadiologistStepContainer> = ({
    showStep = true,
    step,
    total_steps = 5,
    handleSkipStep,
    children,
}) => {
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
                        <a href="/" className="mobile-logo">
                            <img
                                src={logoblue}
                                alt="Solace Rad"
                                className="logo"
                            />
                        </a>
                    </div>
                    {showStep && (
                        <RadiologistHeader
                            step={step as number}
                            total_steps={total_steps}
                            handleSkipStep={handleSkipStep}
                        />
                    )}
                    {children}
                </div>
            </FlexContainer>
        </RegisterRadiologistContainer>
    );
};
