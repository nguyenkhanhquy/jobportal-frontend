import PropTypes from "prop-types";
import { useState } from "react";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder = "Tìm kiếm công việc..." }) => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearch = () => {
        navigate("/search", { state: { query: searchText } });
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="relative mx-auto w-full max-w-5xl">
            <input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="w-full rounded-full border border-gray-300 px-6 py-3 pr-28 text-lg shadow-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none"
            >
                <Search className="mr-2" />
                <span className="font-semibold">Tìm kiếm</span>
            </button>
        </div>
    );
};

SearchBar.propTypes = {
    placeholder: PropTypes.string,
};

export default SearchBar;
