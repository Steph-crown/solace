import { FC } from "react";
import { SideNavContainer } from "./style";
import logoblue from "./../../assets/images/logo-blue.png";
import { ISideNavProps } from "./interface";
import { SideNavLink } from "../side-link";
import { Link } from "react-router-dom";
import { ContactLink } from "../contact-link";

export const SideNav: FC<ISideNavProps> = ({ links, contacts }) => {
    return (
        <SideNavContainer>
            <Link to="/">
                <img src={logoblue} alt="Solace Rad" className="logo" />
            </Link>

            <nav>
                {links.map((link) => (
                    <SideNavLink {...link} key={link.name} />
                ))}
            </nav>
            <div className="contacts">
                <small className="header">
                    RECENT CONTACTS{" "}
                    <span className="unread">{contacts.length}</span>
                </small>
                <section>
                    {contacts.map((contact) => (
                        <ContactLink {...contact} key={contact.region} />
                    ))}
                </section>
            </div>
        </SideNavContainer>
    );
};
