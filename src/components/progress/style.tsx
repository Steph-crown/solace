import styled from "styled-components";
import { IProgressProps } from "./interface";

export const ProgressContainer = styled.div<IProgressProps>`
    width: 100%;
    height: 12px;
    background: #e1e8ff;
    border-radius: 15px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: ${(props) => ((props.value - 1) / (props.max - 1)) * 100 + "%"};
        background-color: var(--blue);
        height: 12px;
        border-radius: 15px;
    }
`;
