import { Box, Divider } from "@mui/material";
import PropTypes from "prop-types";
import GridViewHeaderLayout from "./GridViewHeaderLayout/GridViewHeaderLayout";
import DataPagination from "../../components/pagination/DataPagination";

const GridViewLayout = ({
    title,
    children,
    currentPage,
    totalPages,
    recordsPerPage,
    totalRecords,
    onPageChange,
    onRecordsPerPageChange,
    actions,
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
                width: "100%",
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
        >
            {/* Phần header */}
            <GridViewHeaderLayout title={title}>{actions}</GridViewHeaderLayout>

            {/* Phần content */}
            <Box
                sx={{
                    flexGrow: 1,
                    minHeight: 200, // Đặt chiều cao tối thiểu để giữ bố cục
                }}
            >
                {children}
            </Box>

            <Divider />
            {/* Phần pagination */}
            <DataPagination
                currentPage={currentPage}
                totalPages={totalPages}
                recordsPerPage={recordsPerPage}
                totalRecords={totalRecords}
                onPageChange={onPageChange}
                onRecordsPerPageChange={onRecordsPerPageChange}
            />
        </Box>
    );
};

GridViewLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    recordsPerPage: PropTypes.number.isRequired,
    totalRecords: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onRecordsPerPageChange: PropTypes.func.isRequired,
    actions: PropTypes.node, // Các nút hoặc input (tìm kiếm, xóa tất cả, etc.)
};

export default GridViewLayout;
