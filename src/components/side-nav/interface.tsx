import { IContactLinkProps } from "../contact-link/interface";
import { ISideNavLinkProps } from "../side-link/interface";

export interface ISideNavProps {
    links: ISideNavLinkProps[];
    contacts: IContactLinkProps[];
}
