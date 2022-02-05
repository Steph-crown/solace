import { FC } from "react";
import { AvatarCardContainer } from "./style";

type avatarProps = {
    image: any;
    text: string;
};

// Avatar with text displayed on the onboarding screen on route "/register"
export const AvatarCard: FC<avatarProps> = ({ image, text }) => {
    return (
        <AvatarCardContainer>
            <img src={image} alt={text} />
            <h6>{text}</h6>
        </AvatarCardContainer>
    );
};
