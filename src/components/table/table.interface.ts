import { Data } from ".";

export interface ITableProps {
    data: any[];
    headers: HeadCell[];
}

interface HeadCell {
    disablePadding: boolean;
    id: any;
    label: string;
    numeric: boolean;
}

export interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: any;
    orderBy: string;
    rowCount: number;
}
