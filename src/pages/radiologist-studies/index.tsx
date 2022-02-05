import { FC } from "react";
import { RadiologistStudiesContainer } from "./style";
import { radiologistContacts } from "../../utils/consts";
import { DashboardContainer } from "../../components/dashboard-container";

import { radiologistDashboardNavLinks } from "../../utils/consts";
import { ReactComponent as Signal } from "./../../assets/icons/signal.svg";
import { ReactComponent as Search } from "./../../assets/icons/search.svg";
import { DashboardHeader } from "../../components/Dashboard/styles";
import { Link } from "react-router-dom";
import { Select } from "../../components/select";
import { ThemeButton } from "../../components/button";
import { TableComponent } from "../../components/table";
import { fakeStudies, headers } from "../../db/studies";
import { IStudies } from "../../db/studies.interface";
import { ReactComponent as Menu } from "./../../assets/icons/menu.svg";

export const RadiologistStudies: FC = () => {
    // Sets the active link as the dashboard home link
    const links = radiologistDashboardNavLinks;
    links[0].active = true;

    const headerBox = [
        { Icon: Signal, head: "Completed", value: 2_300 },
        { Icon: Signal, head: "Recent Cases", value: 20 },
        { Icon: Signal, head: "Pending", value: 23 },
        { Icon: Signal, head: "Incomplete", value: 57 },
    ];

    return (
        <DashboardContainer
            links={links}
            contacts={radiologistContacts}
            header={{
                headerText: "Recent Studies",
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
            <RadiologistStudiesContainer>
                {/* <DashboardHeader>
                    <ul>
                        {headerBox.map(({ Icon, head, value }) => (
                            <li key={head} className="box">
                                <figure className="box__icon">
                                    <Icon />
                                </figure>
                                <div>
                                    <p className="box__head">{head}</p>
                                    <p className="box__val">{value}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </DashboardHeader>
                <section className="dashboard__banner">
                    <Link to="/">BECOME A PARTNER</Link>
                    <p>
                        Refer a radiologist and get paid once they get hired by
                        a radiology center.
                    </p>
                    <figure>arrow</figure>
                </section> */}
                <section className="dashboard__result">
                    {/* <h2 className="dashboard__result-head">Recent Results</h2> */}
                    <form className="dashboard__form">
                        <div className="dashboard__form-control">
                            <input
                                className="dashboard__form-search"
                                type="search "
                                name="search"
                                id="search"
                                placeholder="Search for radiologist, country, city, expertise or experience"
                            />
                            <span className="dashboard__form-search-icon">
                                <Search />
                            </span>
                        </div>
                        <Select
                            className="dashboard__form-select"
                            handleChange={() => {}}
                            options={[]}
                            placeholder=""
                            label=""
                            selectedItem={undefined}
                        />
                        <ThemeButton
                            className="dashboard__form-submit"
                            disabled={false}
                            onClick={() => {}}
                            type="submit"
                        >
                            Submit
                        </ThemeButton>
                    </form>

                    <TableComponent
                        data={transformDataToCreateRowArray(fakeStudies)}
                        // data={fakeStudies}
                        headers={headers}
                    />

                    {/* view all button */}
                </section>
            </RadiologistStudiesContainer>
        </DashboardContainer>
    );
};

const transformDataToCreateRowArray = (data: IStudies[]) => {
    return data.map((item: IStudies) => {
        // CreateData;
        return {
            patientInfo: (
                <span>
                    <h6>{item.patientInfo.name}</h6>
                    <p className="sub">
                        {item.patientInfo.date.toDateString()}
                    </p>
                </span>
            ),
            description: (
                <span>
                    <h6>{item.description.acronym}</h6>
                    <p className="sub">{item.description.full}</p>
                </span>
            ),
            radiologyCenter: (
                <span>
                    <p className="body">{item.radiologyCenter}</p>
                </span>
            ),
            dateReceived: (
                <span>
                    <p className="body">{item.dateReceived.toDateString()}</p>
                </span>
            ),
            status: (
                <div
                    className={
                        "status " +
                        (item.status === 0
                            ? "incomplete"
                            : item.status === 1
                            ? "pending"
                            : "completed")
                    }
                >
                    {item.status === 0 ? (
                        <p>Incomplete</p>
                    ) : item.status === 1 ? (
                        <p>Pending</p>
                    ) : (
                        <p>Completed</p>
                    )}
                </div>
            ),
            options: (
                <div className="menu">
                    <Menu />
                </div>
            ),
        };
    });
};
