export interface IContactLinkProps {
    name: IName;
    region: string;
    country: string;

    // If the contact is active or not
    active?: boolean;

    // Profile picture of the contact. NOTE: If profile picture is null or undefined, we use the initials to form a profile identification.
    profileImage?: any;
}
export interface ICustomProfileColor {
    // COlors used in creating custom initials
    foreColor?: string;
    backColor?: string;
}

export interface IName {
    firstName: string;
    lastName: string;
    colors: ICustomProfileColor;
}
