import { IName } from "../contact-link/interface";

export interface IDashboardHeaderProps {
    // Title at the top nav
    headerText: string;

    // Specifies if there is an "upload exam" button on the header
    isUpload?: boolean;

    // Other content that is to be on the header
    otherHeaderContent?: any;

    profileImage?: any;

    name: IName;
    mobileMenuOpen?: boolean;
    setMobileMenuOpen?: any;
}
