import styled from "styled-components";

export const StyledPagination = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;

    button {
        outline: 0;
        background-color: transparent;
    }

    button,
    p {
        display: block;
        font-weight: bold;
        margin: 0;
    }

    .pagination {
        &__item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            margin-bottom: 2rem;

            &:last-child {
                margin-right: 0;
            }

            &-page,
            &-dot,
            &-prev,
            &-next {
                border: 0.2rem solid #e2e8f0;
                padding: 0.4rem 1.4rem 0.5rem;
                border-radius: 0.4rem;
            }

            &-page {
                &.active {
                    color: #4c6fff;
                    border-color: #4c6fff;
                }
            }

            &-dot {
            }

            &-prev,
            &-next {
                color: #cbd5e0;

                &:disabled {
                    background-color: #718096;
                    color: #cbd5e0;
                    cursor: not-allowed;
                }
            }
        }
    }
`;
