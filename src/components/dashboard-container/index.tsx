import { FC, useRef, useState } from "react";
import { useOutsideAlerter } from "../../pages/hooks/outside-click";
import { DashboardHeader } from "../dashboard-header";
import { SideNav } from "../side-nav";
import { IDashboardContainerProps } from "./interface";
import { DashboardContainerStyle } from "./style";

export const DashboardContainer: FC<IDashboardContainerProps> = ({
    links,
    contacts,
    children,
    header,
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const wrapperRef = useRef(null);

    // Checks for outside clicks then closes dropdown
    useOutsideAlerter(wrapperRef, () => setMobileMenuOpen(false));

    return (
        <DashboardContainerStyle {...{ mobileMenuOpen }}>
            <div ref={wrapperRef}>
                <SideNav links={links} contacts={contacts} />
            </div>
            <div className="right">
                <DashboardHeader
                    {...header}
                    {...{ mobileMenuOpen, setMobileMenuOpen }}
                />
                {children}
            </div>

            {/* {header} */}
        </DashboardContainerStyle>
    );
};
