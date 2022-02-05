import { FC } from "react";
import { IContactLinkProps, IName } from "./interface";
import {
    ContactLinkContainer,
    NameInitialsProfileIdentificationContainer,
} from "./style";

import { ReactComponent as ChatIcon } from "./../../assets/icons/chat.svg";

export const ContactLink: FC<IContactLinkProps> = ({
    name,
    region,
    country,
    profileImage,
    active,
}) => {
    return (
        <ContactLinkContainer active={active}>
            <div className="profile-image">
                {profileImage ? (
                    <img src={profileImage} alt={name.firstName} />
                ) : (
                    <NameInitialsProfileIdentification {...name} />
                )}
            </div>

            <div>
                <p>
                    <span>{name.firstName}</span> <span>{name.lastName}</span>
                </p>
                <small className="region">
                    {region}, {country}
                </small>
            </div>
            <ChatIcon />
        </ContactLinkContainer>
    );
};

// This is the custom profile identification for users without profile image, or when profile image is yet to be loaded for any reason
export const NameInitialsProfileIdentification: FC<IName> = ({
    firstName,
    lastName,
    colors,
}) => {
    return (
        <NameInitialsProfileIdentificationContainer {...colors}>
            {firstName[0]}
            {lastName[0]}
        </NameInitialsProfileIdentificationContainer>
    );
};
