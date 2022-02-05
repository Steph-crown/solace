import { FC } from "react";
import {
    radiologistContacts,
    radiologyDashboardNavLinks,
} from "../../utils/consts";
import { DashboardContainer } from "../../components/dashboard-container";
import { RadiologyAccountContainer } from "./style";
export const RadiologyAccount: FC = () => {
    // Sets the active link as the dashboard home link
    const links = radiologyDashboardNavLinks;
    links[0].active = true;

    return (
        <DashboardContainer
            links={links}
            contacts={radiologistContacts}
            header={{
                headerText: "Account",
                isUpload: false,
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
            <RadiologyAccountContainer>
                Account - Radiology
            </RadiologyAccountContainer>
        </DashboardContainer>
    );
};
