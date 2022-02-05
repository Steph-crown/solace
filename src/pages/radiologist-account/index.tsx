import { FC } from "react";
import { radiologistDashboardNavLinks } from "../../utils/consts";
import { radiologistContacts } from "../../utils/consts";
import { DashboardContainer } from "../../components/dashboard-container";
import { RadiologistAccountContainer } from "./style";
export const RadiologistAccount: FC = () => {
    // Sets the active link as the dashboard home link
    const links = radiologistDashboardNavLinks;
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
            <RadiologistAccountContainer>Account</RadiologistAccountContainer>
        </DashboardContainer>
    );
};
