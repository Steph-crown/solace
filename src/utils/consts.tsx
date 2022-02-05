import { ISideNavLinkProps } from "../components/side-link/interface";

import { ReactComponent as Dashboard } from "./../assets/icons/dashboard.svg";
import { ReactComponent as Account } from "./../assets/icons/account.svg";
import { ReactComponent as Logout } from "./../assets/icons/logout.svg";
import { ReactComponent as Message } from "./../assets/icons/messages.svg";
import { ReactComponent as Studies } from "./../assets/icons/studies.svg";
import { IContactLinkProps } from "../components/contact-link/interface";
export const radiologistDashboardNavLinks: ISideNavLinkProps[] = [
    { name: "Dashboard", Icon: Dashboard, path: "/radiologist/dashboard" },
    { name: "Studies", Icon: Studies, path: "/radiologist/studies" },
    {
        name: "Messages",
        Icon: Message,
        path: "/radiologist/messages",
        unread: 6,
    },
    { name: "Account", Icon: Account, path: "/radiologist/account" },
    { name: "Logout", Icon: Logout, path: "/logout" },
];

export const radiologyDashboardNavLinks: ISideNavLinkProps[] = [
    { name: "Dashboard", Icon: Dashboard, path: "/radiology/dashboard" },
    { name: "Radiologists", Icon: Studies, path: "/radiology/radiologists" },
    {
        name: "Messages",
        Icon: Message,
        path: "/radiology/messages",
        unread: 6,
    },
    { name: "Account", Icon: Account, path: "/radiology/account" },
    { name: "Logout", Icon: Logout, path: "/logout" },
];

export const radiologistContacts: IContactLinkProps[] = [
    {
        name: {
            firstName: "Anthony",
            lastName: "Clinic",
            colors: {
                foreColor: "white",
                backColor: "hsla(228, 100%, 65%, 1)",
            },
        },
        region: "Paris",
        country: "FR",
        active: true,
    },
    {
        name: {
            firstName: "Charles",
            lastName: "Hospital",
            colors: {
                foreColor: "hsla(16, 89%, 70%, 1)",
                backColor: "#FFEDE3",
            },
        },
        region: "Paris",
        country: "FR",
    },
    {
        name: {
            firstName: "Anthony",
            lastName: "Clinic",
            colors: {
                foreColor: "white",
                backColor: "hsla(228, 100%, 65%, 1)",
            },
        },
        region: "Paris",
        country: "FR",
    },
];
