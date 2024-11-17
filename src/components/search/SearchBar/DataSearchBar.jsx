import { Box, TextField, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import PropTypes from "prop-types";

const DataSearchBar = ({ placeholder, onSearch }) => {
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
                        borderColor: "#1976d2", // Màu viền khi hover
                    },
                    ":focus-within": {
                        borderColor: "#1565c0", // Màu viền khi focus vào input
                    },
                }}
            >
                <TextField
                    placeholder={placeholder || "Tìm kiếm..."}
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
                        bgcolor: "#2e3090",
                        ":hover": {
                            bgcolor: "#1f2061",
                        },
                    }}
                    onClick={onSearch}
                >
                    <Search />
                </Button>
            </Box>
        </Box>
    );
};

DataSearchBar.propTypes = {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
};

export default DataSearchBar;
