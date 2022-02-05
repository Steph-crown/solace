import { FC } from "react";
import { ISideNavLinkProps } from "./interface";
import { SideNavLinkContainer } from "./style";

export const SideNavLink: FC<ISideNavLinkProps> = ({
    active,
    path,
    name,
    Icon,
    unread,
}) => {
    return (
        <SideNavLinkContainer
            to={path}
            unread={unread}
            activeClassName="active"
        >
            <div>
                <Icon />
                {name}
            </div>
            {unread && <span className="unread">{unread}</span>}
        </SideNavLinkContainer>
    );
};
