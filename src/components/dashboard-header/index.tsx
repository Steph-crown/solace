import { FC } from "react";
import { IDashboardHeaderProps } from "./interface";
import { DashboardHeaderContainer } from "./style";
import { ReactComponent as UploadIcon } from "./../../assets/icons/thick-upload.svg";
import { ReactComponent as NotificationIcon } from "./../../assets/icons/notification.svg";
import { NameInitialsProfileIdentification } from "../contact-link";

export const DashboardHeader: FC<IDashboardHeaderProps> = ({
    headerText,
    otherHeaderContent,
    isUpload,
    profileImage,
    name,
    mobileMenuOpen,
    setMobileMenuOpen,
}) => {
    return (
        <DashboardHeaderContainer>
            <div className="flex">
                <div
                    className="mobile-menu"
                    onClick={() => setMobileMenuOpen((prev: any) => !prev)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="first">
                    <h1>{headerText}</h1>
                    {otherHeaderContent}
                </div>
            </div>

            <div className="second">
                {isUpload && (
                    <button className="upload">
                        <UploadIcon /> <span> Upload exam</span>
                    </button>
                )}
                <NotificationIcon className="notification" />
                <div className="profile-image">
                    {profileImage ? (
                        <img src={profileImage} alt={name.firstName} />
                    ) : (
                        <NameInitialsProfileIdentification {...name} />
                    )}
                </div>{" "}
            </div>
        </DashboardHeaderContainer>
    );
};
