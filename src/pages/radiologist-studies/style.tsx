import styled from "styled-components";

export const RadiologistStudiesContainer = styled.div`
    background-color: var(--dashboard-bg);
    min-height: 100vh;

    background-color: var(--dashboard-bg);
    min-height: 100vh;
    padding: 2rem;

    .dashboard {
        &__banner {
            background-image: linear-gradient(225deg, #d665ff 0%, #4c6fff 100%);
            border-radius: 1.5rem;
            padding: 2.3rem 4.4rem;
            margin: 1rem auto;
            /* width: 90%; */
            max-width: 107.3rem;

            a {
                background: #ff92ae;
                border-radius: 5px;
                color: #f7fafc;
                padding: 1.2rem 1.8rem;
                width: max-content;
                display: block;
                margin-bottom: 1rem;
                font-size: 1.2rem;
            }
        }

        &__result {
            &-head {
                font-size: 2.8rem;
                font-weight: 600;
                margin-bottom: 1.1rem;
            }

            &-form {
                display: flex;
                align-items: center;
            }
        }

        &__form {
            display: flex;
            align-items: center;

            &-control {
                position: relative;
                width: 100%;
                margin-right: 2rem;
                flex: 3;
                margin-top: 1rem;
            }

            &-search {
                display: block;
                width: 100%;
                padding: 1.35rem 1rem 1.45rem 5rem;
                border-radius: 1rem;
                border: 0.1rem solid #e5e5e5;
                font-size: 1.5rem;

                &-icon {
                    position: absolute;
                    left: 1.5rem;
                    top: 2.6rem;
                    transform: translateY(-50%);
                }
            }

            &-select {
                max-width: 19.4rem;
                flex: 1.5;
                margin-right: 1rem;

                button {
                    /* margin-top: 0; */
                }
            }

            &-submit {
                padding: 1.45rem 1rem 1.55rem;
                margin-top: 1rem;
                max-width: 12rem;
                flex: 1;
                padding-left: 0.1rem;
                padding-right: 0.1rem;
            }
        }
    }
`;
