import { Box, TextField, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import PropTypes from "prop-types";

import { useState } from "react";

const DataSearchBar = ({ placeholder, query, onSearch }) => {
    const [searchText, setSearchText] = useState(query || "");

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: 400,
            }}
        >
            {/* Ô tìm kiếm */}
            <Box
                sx={{
                    display: "flex",
                    flexGrow: 1,
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "2px solid #ccc", // Viền mặc định
                    transition: "border-color 0.3s", // Hiệu ứng mượt khi đổi màu
                    ":hover": {
                        borderColor: "#16a34a", // Màu viền khi hover
                    },
                    ":focus-within": {
                        borderColor: "#16a34a", // Màu viền khi focus vào input
                    },
                }}
            >
                <TextField
                    placeholder={placeholder || "Tìm kiếm..."}
                    onChange={handleSearchChange}
                    size="small"
                    fullWidth
                    variant="outlined"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 0,
                            paddingRight: 0,
                            border: "none",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "& .MuiOutlinedInput-input": {
                            padding: "8px 12px",
                        },
                    }}
                />
                {/* Nút tìm kiếm */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        minWidth: "40px",
                        borderRadius: 0,
                        padding: "6px 14px",
                        bgcolor: "#16a34a",
                        ":hover": {
                            bgcolor: "#15803d",
                        },
                    }}
                    onClick={handleSearch}
                >
                    <Search />
                </Button>
            </Box>
        </Box>
    );
};

DataSearchBar.propTypes = {
    placeholder: PropTypes.string,
    query: PropTypes.string,
    onSearch: PropTypes.func,
};

export default DataSearchBar;
