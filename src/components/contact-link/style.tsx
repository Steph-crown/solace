import styled from "styled-components";
import { ICustomProfileColor } from "./interface";
export const ContactLinkContainer = styled.div<{ active?: boolean }>`
    display: flex;
    min-height: 2px;
    align-items: center;
    margin-bottom: 1.875em;
    justify-content: space-between;
    cursor: pointer;

    svg {
        transition: transform 1s ease;
    }

    &:hover {
        svg {
            transform: rotate(40deg);
        }
    }

    div.profile-image {
        position: relative;
        /* Adds a green dot to the profile image if the contact is currently active */
        &::before {
            content: "";
            width: ${({ active }) => (active ? "7px" : "unset")};
            height: ${({ active }) => (active ? "7px" : "unset")};
            background-color: ${({ active }) =>
                active ? "var(--success)" : "unset"};
            border-radius: 50%;
            position: absolute;
            top: -3px;
            right: -1.62px;
            border: ${({ active }) => (active ? "3px solid white" : "unset")};
        }
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 23px;
        /* identical to box height, or 164% */

        font-feature-settings: "salt" on;

        /* Text/Body/Light */

        color: #425466;
    }

    small.region {
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        /* identical to box height, or 167% */

        /* Text/Body/Muted */

        color: #718096;
        text-transform: none;
    }
`;

export const NameInitialsProfileIdentificationContainer = styled.div<ICustomProfileColor>`
    background-color: ${(props) => props.backColor};
    color: ${(props) => props.foreColor};
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
`;
