import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../../components/Spinner/Spinner";
import usePrevious from "../../hooks/usePrevious";

import { fetchRepositories, setCurrentPage } from "./repositoriesSlice";
import RepositoriesListItem from "./RepositoriesListItem";
import RepositoriesListWrapper from "./RepositoriesList.style";

const RepositoriesList = ({ inputValue }) => {
    const repositories = useSelector((state) => state.repositories.entities);
    const isLoading = useSelector((state) => state.repositories.isLoading);
    const currentPage = useSelector((state) => state.repositories.currentPage);
    const dispatch = useDispatch();

    const searchValue = inputValue || "react";
    const prevSearchValue = usePrevious(searchValue);

    useEffect(() => {
        if (prevSearchValue !== searchValue && currentPage !== 1) {
            dispatch(setCurrentPage(1));
        } else {
            dispatch(
                fetchRepositories({
                    searchValue,
                    page: currentPage,
                })
            );
        }
    }, [inputValue, currentPage]);

    useEffect(() => {
        if (!isLoading && window.pageYOffset > 0) {
            window.scrollTo({ top: 0 });
        }
    }, [isLoading]);

    if (!isLoading && !repositories.length) {
        return `Sorry, your search '${inputValue}' did not match any results.`;
    }

    return (
        <RepositoriesListWrapper>
            {isLoading ? (
                <Spinner />
            ) : (
                repositories.map((repository) => (
                    <RepositoriesListItem {...repository} key={repository.id} />
                ))
            )}
            {}
        </RepositoriesListWrapper>
    );
};

RepositoriesList.defaultProps = {
    inputValue: "react",
};

export default RepositoriesList;
