export const getRangeOfData = (
    data: any[],
    currentPage: number,
    dataPerPage: number
): any[] =>
    data.slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage);
