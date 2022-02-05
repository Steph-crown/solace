import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideNavLinkContainer = styled(NavLink)<{ unread?: number }>`
    display: block;

    font-weight: 600;
    font-size: 0.875em;
    line-height: 17px;

    color: #425466;
    display: flex;
    min-height: 2px;
    align-items: center;
    padding: 18px 24px;
    border-radius: 0 5px 5px 0;

    justify-content: ${({ unread }) =>
        unread ? "space-between" : "flex-start"};

    svg {
        margin-right: 20px;
    }

    & > div {
        display: flex;
        min-height: 2px;
        align-items: center;
    }

    &:hover {
        background-color: #ebefff;
    }

    &.active {
        color: var(--blue);
        position: relative;

        &::before {
            content: "";
            position: absolute;
            height: 80%;
            width: 2px;
            background-color: var(--blue);
            left: 0;
            top: 0;
            bottom: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    span.unread {
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        color: var(--blue);
        background: #e1e8ff;
        display: block;
        height: 19px;
        width: 28px;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
