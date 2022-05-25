import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import calculatePaginationRange from "../../utils/calculatePaginationRange";

import { setCurrentPage } from "../../features/repositories/repositoriesSlice";

const DOTS = "...";

export const usePagination = ({ siblingCount = 1 }) => {
    const totalPages = useSelector((state) => state.repositories.totalPages);
    const currentPage = useSelector((state) => state.repositories.currentPage);
    const dispatch = useDispatch();

    const paginationRange = useMemo(() => {
        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPages) {
            return calculatePaginationRange(1, totalPages);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPages
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = calculatePaginationRange(1, leftItemCount);

            return [...leftRange, DOTS, totalPages];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = calculatePaginationRange(
                totalPages - rightItemCount + 1,
                totalPages
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = calculatePaginationRange(
                leftSiblingIndex,
                rightSiblingIndex
            );
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalPages, currentPage, siblingCount]);

    const onPreviousButtonClick = () => {
        dispatch(setCurrentPage(currentPage - 1));
    };
    const onNextButtonClick = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };
    const onPageButtonClick = (page) => {
        dispatch(setCurrentPage(page));
    };
    return {
        paginationRange,
        currentPage,
        previousButtonVisible: currentPage > 1,
        nextButtonVisible: currentPage < totalPages - 1,
        onPreviousButtonClick,
        onNextButtonClick,
        onPageButtonClick,
    };
};

export default usePagination;
