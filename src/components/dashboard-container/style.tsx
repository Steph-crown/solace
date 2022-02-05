import styled from "styled-components";

export const DashboardContainerStyle = styled.div<{ mobileMenuOpen: boolean }>`
    display: flex;

    div.right {
        width: calc(100% - 15.8em);
    }
    position: relative;
    section.side-nav {
        transition: left 1s ease, box-shadow 1s ease;
        position: relative;
        left: 0;
    }

    @media (max-width: 900px) {
        div.right {
            width: 100%;
        }
        section.side-nav {
            position: absolute;
            left: ${({ mobileMenuOpen }) =>
                mobileMenuOpen ? " 0" : "-15.8em"};
            box-shadow: ${({ mobileMenuOpen }) =>
                mobileMenuOpen ? " 0 5px 20px rgb(0 0 0 / 20%)" : "0"};
        }
    }
`;
