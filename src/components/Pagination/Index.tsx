import { FC } from "react";
import { DOTS, PaginationData, usePagination } from "../../Hooks/usePagination";
import { StyledPagination } from "./styles";
import { ReactComponent as NextIcon } from "./../../assets/icons/next.svg";
import { ReactComponent as PrevIcon } from "./../../assets/icons/prev.svg";

interface IPagination extends PaginationData {
    onPageChange: (page: number) => void;
    className?: string;
}

export const Pagination: FC<IPagination> = ({
    onPageChange,
    totalNumberOfData,
    siblingCount = 1,
    currentPage,
    dataPerPage,
    className,
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalNumberOfData,
        siblingCount,
        dataPerPage,
    });

    if (currentPage === 0 || paginationRange!.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange![paginationRange!.length - 1];

    return (
        <StyledPagination>
            <li className={`pagination__item`}>
                <button
                    onClick={onPrevious}
                    className="pagination__item-prev"
                    disabled={currentPage === 1}
                >
                    <PrevIcon />
                    {/* prev */}
                </button>
            </li>
            {paginationRange!.map((pageNumber, i) => {
                if (pageNumber === DOTS) {
                    return (
                        <li className="pagination__item" key={i}>
                            <p className="pagination__item-dot">&#8230;</p>
                        </li>
                    );
                }

                return (
                    <li className={`pagination__item`} key={i}>
                        <button
                            onClick={() => onPageChange(pageNumber as number)}
                            className={`pagination__item-page ${
                                pageNumber === currentPage ? "active" : ""
                            }`}
                        >
                            {pageNumber}
                        </button>
                    </li>
                );
            })}
            <li className="pagination__item">
                <button
                    onClick={onNext}
                    className="pagination__item-next"
                    disabled={currentPage === lastPage}
                >
                    <NextIcon />
                    {/* next */}
                </button>
            </li>
        </StyledPagination>
    );
};
