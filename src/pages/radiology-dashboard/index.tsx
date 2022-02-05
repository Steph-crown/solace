import { FC } from "react";
import {
    radiologistContacts,
    radiologyDashboardNavLinks,
} from "../../utils/consts";
import { DashboardContainer } from "../../components/dashboard-container";
import { RadiologyDashboardContainer } from "./style";
export const RadiologyDashboard: FC = () => {
    // Sets the active link as the dashboard home link
    const links = radiologyDashboardNavLinks;
    links[0].active = true;

    return (
        <DashboardContainer
            links={links}
            contacts={radiologistContacts}
            header={{
                headerText: "Dashboard",
                isUpload: true,
                name: {
                    firstName: "Steph",
                    lastName: "Crown",
                    colors: {
                        foreColor: "white",
                        backColor: "#FF92AE",
                    },
                },
            }}
        >
            <RadiologyDashboardContainer>
                Dashboard - Radiology
            </RadiologyDashboardContainer>
        </DashboardContainer>
    );
};
