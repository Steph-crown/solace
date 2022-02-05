import styled from "styled-components";

// Container for avatar component
export const AvatarCardContainer = styled.div`
    position: relative;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.03),
        0px 20px 80px -40px rgba(45, 50, 90, 0.1);
    border-radius: 22px;
    padding: 34px;
    background: white;
    width: 100%;
    height: 220px;
    justify-content: center;

    text-align: center;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    border: 0 solid var(--blue);
    border-width: 0;
    transition: border-width 0.2s ease-out;

    &:hover {
        border-width: 3px;
    }
    img {
        height: 180px;
        top: -25%;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
    }
    h6 {
        font-weight: 600 !important;
        font-size: 1.5em !important;
        line-height: 136.02% !important;
        color: #425466 !important;

        @media (max-width: 600px) {
            font-size: 1.2em;
        }
    }
`;
