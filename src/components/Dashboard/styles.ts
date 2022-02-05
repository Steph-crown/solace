import styled from "styled-components";

export const DashboardHeader = styled.header`
    /* padding: 2rem 4rem 0rem; */

    ul {
        display: flex;
        align-items: center;
        /* justify-content: space-around; */
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 1rem;
        box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
            0px 3px 8px -1px rgba(50, 50, 71, 0.05);
        padding: 2.4rem;
        margin-bottom: 2rem;

        &:nth-child(1) {
            figure {
                background-color: #ffeef1;
                color: #ff92ae;
            }
        }
        &:nth-child(2) {
            figure {
                background-color: #e1e8ff;
                color: #4c6fff;
            }
        }
        &:nth-child(3) {
            figure {
                background-color: #ffede3;
                color: #f7936f;
            }
        }
        &:nth-child(4) {
            figure {
                background-color: #deffee;
                color: #66cb9f;
            }
        }

        &__icon {
            margin-right: 1.6rem;
            border-radius: 0.8rem;
            padding: 1.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__head {
            color: #718096;
            font-weight: bold;
            font-size: 1.2rem;
        }

        &__val {
            font-size: 2rem;
            color: #16192c;
            font-weight: 600;
        }
    }
`;

export const StyledBox = styled.div``;
