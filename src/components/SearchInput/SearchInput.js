import { useRef } from "react";

import debounce from "../../utils/debounce";
import Input from "./SearchInput.style";

const SearchInput = ({ setInputValue }) => {
    const inputRef = useRef(null);

    const onInputChange = debounce(() => {
        const inputValue = inputRef && inputRef.current.value;
        setInputValue(inputValue);
    }, 300);

    return (
        <Input placeholder='Search' ref={inputRef} onChange={onInputChange} />
    );
};

export default SearchInput;
