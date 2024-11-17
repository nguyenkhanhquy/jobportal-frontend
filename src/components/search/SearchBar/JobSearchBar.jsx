import { useState } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";

const JobSearchBar = ({ onSearch, query }) => {
    const [searchText, setSearchText] = useState(query || "");

    // Hàm xử lý khi người dùng nhập vào input
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    // Hàm xử lý khi nhấn nút tìm kiếm
    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <div className="sticky top-0 z-50 mx-auto flex w-full bg-[#19734e] p-2">
            <div className="mx-auto flex w-full max-w-4xl items-center p-2">
                {/* Ô input tìm kiếm với icon bên trong */}
                <div className="relative flex-1">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Nhập vị trí công việc..."
                        value={searchText}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-10 py-2 text-sm focus:border-green-500 focus:outline-none"
                    />
                </div>
                {/* Nút tìm kiếm */}
                <button
                    onClick={handleSearch}
                    className="ml-2 rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 focus:outline-none"
                >
                    Tìm kiếm
                </button>
            </div>
        </div>
    );
};

JobSearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    query: PropTypes.string,
};

export default JobSearchBar;
