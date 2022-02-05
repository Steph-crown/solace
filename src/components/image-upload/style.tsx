import styled from "styled-components";
import Upload from "./../../assets/icons/upload.svg";

export const FileUploadContainer = styled.label`
    width: 100%;
    display: block;
    margin: 1em 0;
    input {
        display: none;
    }
    @media (max-width: 500px) {
        width: 100%;
        margin: 0.8em 0;
    }
    small {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #425466;
    }

    small.error {
        color: var(--error);
        display: inline-block;
        margin-top: 8px;
    }

    div.file-upload {
        background: rgba(235, 242, 250, 1);
        width: 100%;
        height: 110px;
        margin-top: 8px;
        border-radius: 15px;
        border: 1px dashed #7895ff;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        cursor: pointer;

        &:hover {
            border-style: solid;
        }
        p {
            font-weight: 600;
            font-size: 16px;
            line-height: 25px;
            /* identical to box height, or 156% */

            /* Text/Body/Muted */

            color: #718096;
            margin-top: 8px;
        }
    }
`;

export const UploadedFilesContainer = styled.div`
    display: block;
    /* .file-display-container {
        position: fixed;
        width: 805px;
    } */

    .file-status-bar {
        width: 100%;
        vertical-align: top;
        margin: 2em 0;
        position: relative;
        /* line-height: 50px; */
        /* height: 50px; */
        min-height: 2px;
        align-items: center;
        display: flex;
        justify-content: flex-start;
        /* flex-wrap: wrap; */
    }

    .file-status-bar > div {
        overflow: hidden;
    }

    .file-type {
        display: inline-block !important;
        position: absolute;
        font-size: 12px;
        font-weight: 700;
        line-height: 13px;
        /* margin-top: 25px; */
        bottom: 0;
        padding: 0 4px;
        border-radius: 2px;
        box-shadow: 1px 1px 2px #abc;
        color: #fff;
        background: #0080c8;
        text-transform: uppercase;
    }

    .file-name {
        display: inline-block;
        vertical-align: top;
        margin-left: 12px;
        color: var(--blue);
    }

    .file-error {
        display: inline-block;
        vertical-align: top;
        margin-left: 12px;
        color: #9aa9bb;
    }

    .file-error-message {
        color: var(--error);
        margin-left: 12px;
    }

    .file-type-logo {
        width: 32px;
        height: 32px;
        background: url(${Upload}) no-repeat center center;
        background-size: 100%;
        position: relative;
    }

    .file-size {
        display: inline-block;
        vertical-align: top;
        color: var(--success);
        margin-left: 10px;
        margin-right: 5px;
        margin-left: 10px;
        color: #444242;
        font-weight: 700;
        font-size: 14px;
    }

    .file-remove {
        /* position: absolute; */
        top: 20px;
        right: 10px;
        line-height: 15px;
        cursor: pointer;
        color: var(--error);
        margin-left: 12px;
        border-radius: 50%;
        padding: 4px;
        cursor: pointer;
        transition: 1s;

        &:hover {
            background: #f0f0f0;
        }
        svg {
            height: 20px;
        }
    }

    div.flex {
        display: flex;
        min-height: 2px;
        align-items: center;
        flex-wrap: wrap;
        max-width: 70%;

        span {
            display: block;
        }
    }

    margin: 1em 0;
    margin-top: -1em;

    @media (max-width: 500px) {
        width: 100%;
        margin: 0.8em 0;
        margin-top: -0.8em;
    }
`;
