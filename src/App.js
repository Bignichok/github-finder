import { useState } from "react";

import RepositoriesList from "./features/repositories/RepositoriesList";
import SearchInput from "./components/SearchInput/SearchInput";
import Pagination from "./components/Pagination/Pagination";

import ContentHolder from "./App.style";

const App = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <ContentHolder>
            <SearchInput setInputValue={setInputValue} />
            <RepositoriesList inputValue={inputValue} />
            <Pagination />
        </ContentHolder>
    );
};

export default App;
