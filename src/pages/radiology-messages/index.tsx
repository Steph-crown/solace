import { FC } from "react";
import {
    radiologistContacts,
    radiologyDashboardNavLinks,
} from "../../utils/consts";
import { DashboardContainer } from "../../components/dashboard-container";
import { RadiologyMessagesContainer } from "./style";
export const RadiologyMessages: FC = () => {
    // Sets the active link as the dashboard home link
    const links = radiologyDashboardNavLinks;
    links[0].active = true;

    return (
        <DashboardContainer
            links={links}
            contacts={radiologistContacts}
            header={{
                headerText: "Messages",
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
            <RadiologyMessagesContainer>
                Messages - Radiology
            </RadiologyMessagesContainer>
        </DashboardContainer>
    );
};
