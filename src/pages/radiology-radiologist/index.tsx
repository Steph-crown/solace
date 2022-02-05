import { FC } from "react";
import {
    radiologistContacts,
    radiologyDashboardNavLinks,
} from "../../utils/consts";
import { DashboardContainer } from "../../components/dashboard-container";
import { RadiologyRadiologistsContainer } from "./style";
export const RadiologyRadiologists: FC = () => {
    // Sets the active link as the dashboard home link
    const links = radiologyDashboardNavLinks;
    links[0].active = true;

    return (
        <DashboardContainer
            links={links}
            contacts={radiologistContacts}
            header={{
                headerText: "Welcome, Jonathan Clinic",
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
            <RadiologyRadiologistsContainer>
                Radiologist - Radiology
            </RadiologyRadiologistsContainer>
        </DashboardContainer>
    );
};
