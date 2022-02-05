import React from "react";

import { IStudies } from "../../db/studies.interface";
export const transformDataToCreateRowArray = (data: IStudies[]) => {
    return data.map((item: any) => {
        // CreateData;
        return {
            patientInfo: (
                <span>
                    <h6>{item.patientInfo.name}</h6>
                </span>
            ),
            description: 879,
            radiologyCenter: "ere",
            dateReceived: new Date(),
            status: 0,
        };
    });
};
