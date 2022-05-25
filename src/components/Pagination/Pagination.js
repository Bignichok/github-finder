import usePagination from "./usePagination";
import PaginationWrapper, {
    ControlButton,
    PageButton,
} from "./Pagination.style";

const Pagination = () => {
    const {
        paginationRange,
        currentPage,
        previousButtonVisible,
        nextButtonVisible,
        onPreviousButtonClick,
        onNextButtonClick,
        onPageButtonClick,
    } = usePagination({});

    if (paginationRange.length < 2) {
        return null;
    }
    return (
        <PaginationWrapper>
            {previousButtonVisible && (
                <ControlButton onClick={onPreviousButtonClick}>
                    Previous
                </ControlButton>
            )}
            {paginationRange.map((page, index) => (
                <PageButton
                    onClick={() => onPageButtonClick(page)}
                    key={`${page}-page-${index}`}
                    active={page === currentPage}
                    disabled={!Number.isInteger(page)}
                >
                    {page}
                </PageButton>
            ))}
            {nextButtonVisible && (
                <ControlButton onClick={onNextButtonClick}>Next</ControlButton>
            )}
        </PaginationWrapper>
    );
};

export default Pagination;
