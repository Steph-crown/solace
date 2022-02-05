import { useMemo } from "react";

export interface PaginationData {
    totalNumberOfData: number; // total number of data available from source
    dataPerPage: number; // maximum data that is visible in a single page
    currentPage: number;
    siblingCount?: number; // min number of page buttons to be shown on each side of the current page button
}

export const DOTS = "...";

const range = (start: number, end: number): number[] => {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => i + start);
};

export const usePagination = ({
    totalNumberOfData,
    dataPerPage,
    currentPage,
    siblingCount = 1,
}: PaginationData) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalNumberOfData / dataPerPage);

        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;

        /*
        If the number of pages is less than the page numbers we want to show in our paginationComponent,
        we return the range [1..totalPageCount]
        */
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        /*
        We do not want to show dots if there is only one position left after/before the left/right page count
        as that would lead to a change if our Pagination component size which we do not want
        */
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalNumberOfData, dataPerPage, siblingCount, currentPage]);

    return paginationRange;
};
