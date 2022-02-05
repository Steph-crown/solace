import { IContactLinkProps } from "../../components/contact-link/interface";
import { ISideNavLinkProps } from "../../components/side-link/interface";
import { IDashboardHeaderProps } from "../dashboard-header/interface";

export interface IDashboardContainerProps {
    // Links on the side navigation bar
    links: ISideNavLinkProps[];

    // Contacts on the side navigation bar
    contacts: IContactLinkProps[];

    children: any;

    header: IDashboardHeaderProps;
}
