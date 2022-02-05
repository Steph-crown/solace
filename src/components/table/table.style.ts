import styled from "styled-components";

export const TableStyle = styled.div`
    /* heaaders */
    .css-1ygcj2i-MuiTableCell-root {
        font-size: 1em;
        font-weight: 600;
        font-size: 10px;
        line-height: 16px;
        /* identical to box height, or 160% */

        /* display: flex;
        align-items: center; */
        letter-spacing: 0.06em;
        text-transform: uppercase;

        /* Table/Head/Text */

        color: #8492a6;
    }

    /* body */
    .css-177gid-MuiTableCell-root {
        text-align: left;
    }

    .css-11w94w9-MuiTableCell-root {
        padding: 16px;
    }

    /* Content of table from map */
    h6 {
        font-weight: 600;
        font-size: 14px;
        line-height: 23px;
        display: flex;
        align-items: center;
        font-feature-settings: "salt" on;
        color: #27272e;
    }

    .sub {
        font-weight: normal;
        font-size: 13px;
        line-height: 150%;
        /* identical to box height, or 19px */

        display: flex;
        align-items: center;

        color: #272833;

        opacity: 0.7;
    }

    .body {
        font-weight: normal;
        font-size: 14px;
        line-height: 23px;
        /* identical to box height, or 164% */

        display: flex;
        align-items: center;
        font-feature-settings: "salt" on;
        color: #27272e;
    }

    .menu {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
            background: #e1e8ff;
        }
    }

    /* Pagination */
    .css-pdct74-MuiTablePagination-selectLabel,
    .css-194a1fa-MuiSelect-select-MuiInputBase-input,
    .css-levciy-MuiTablePagination-displayedRows {
        font-size: 12px;
    }
    .status {
        border: 1px solid #8cdfb3;
        box-sizing: border-box;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6px 8px;

        p {
            font-weight: 600;
            font-size: 12px;
            line-height: 150%;
            /* identical to box height, or 18px */

            display: flex;
            align-items: center;
            text-transform: uppercase;

            color: #4aae8c;
        }

        &.incomplete {
            border-color: #f68e87;

            p {
                color: #cf4655;
            }
        }

        &.pending {
            border-color: #7895ff;

            p {
                color: #3754db;
            }
        }
    }
`;
