// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import { Box, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import EmptyBox from "../../box/EmptyBox";
// import SavedJobsTable from "./StudentDataTable/SavedJobsTable";
import ConfirmModal from "../../modals/ConfirmModal/ConfirmModal";

// import { getAllSavedJobPosts, saveJobPost } from "../../../services/jobService";

const SavedJobsGridView = () => {
    // const [loading, setLoading] = useState(false);
    // const [flag, setFlag] = useState(false);
    // const [savedJobPosts, setSavedJobPosts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    // const [totalPages, setTotalPages] = useState(0);
    // const [totalRecords, setTotalRecords] = useState(0);
    const totalPages = 5;
    const totalRecords = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleRecordsPerPageChange = (value) => {
        setCurrentPage(1);
        setRecordsPerPage(value);
    };

    // const handleViewDetailsClick = (id) => {
    //     window.open(`/search/${id}`, "_blank");
    // };

    // const handleDeleteClick = async (id) => {
    //     try {
    //         const data = await saveJobPost(id);
    //         if (!data.success) {
    //             throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
    //         }
    //         toast.success(data.message);
    //     } catch (error) {
    //         toast.error(error.message);
    //     } finally {
    //         setFlag(!flag);
    //     }
    // };

    const [isConfirmModalOpen, setConfirmModalOpen] = useState(false); // Trạng thái mở Modal

    // Hàm xử lý mở/đóng Modal
    const handleOpenConfirmModal = () => setConfirmModalOpen(true);
    const handleCloseConfirmModal = () => setConfirmModalOpen(false);

    // Hàm xử lý khi xác nhận xóa tất cả
    const handleConfirmDeleteAll = () => {
        console.log("Xóa tất cả công việc đã lưu");
        handleCloseConfirmModal(); // Đóng Modal sau khi xác nhận
    };

    // useEffect(() => {
    //     const fetchSavedJobPosts = async () => {
    //         setLoading(true);
    //         try {
    //             const data = await getAllSavedJobPosts(currentPage, recordsPerPage, "");
    //             if (!data.success) {
    //                 throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
    //             }
    //             setTotalPages(data.pageInfo.totalPages);
    //             setTotalRecords(data.pageInfo.totalElements);
    //             setSavedJobPosts(data.result);
    //         } catch (error) {
    //             toast.error(error.message);
    //         } finally {
    //             setLoading(false);
    //             window.scrollTo({
    //                 top: 0,
    //                 behavior: "smooth",
    //             });
    //         }
    //     };

    //     fetchSavedJobPosts();
    // }, [currentPage, recordsPerPage, flag]);

    return (
        <GridViewLayout
            title="CÔNG VIỆC ĐÃ LƯU"
            currentPage={currentPage}
            totalPages={totalPages}
            recordsPerPage={recordsPerPage}
            totalRecords={totalRecords}
            onPageChange={handlePageChange}
            onRecordsPerPageChange={handleRecordsPerPageChange}
            actions={
                <Box sx={{ display: "flex", gap: 2 }}>
                    <DataSearchBar placeholder="Tìm kiếm" onSearch={() => console.log("Searching...")} />

                    {/* Nút Xóa tất cả */}
                    <Button
                        variant="contained"
                        startIcon={<Delete />}
                        onClick={handleOpenConfirmModal} // Mở Modal xác nhận
                        sx={{
                            padding: "5px 10px",
                            width: "50%",
                            minWidth: 130,
                            borderRadius: 2,
                            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                            bgcolor: "#16a34a",
                            color: "white",
                            "&:hover": {
                                bgcolor: "#15803d",
                            },
                            "&:active": {
                                boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                            },
                        }}
                    >
                        Xóa tất cả
                    </Button>
                </Box>
            }
        >
            <Box>
                {/* Nội dung danh sách công việc */}
                {/* <SavedJobsTable
                    loading={loading}
                    savedJobPosts={savedJobPosts}
                    handleViewDetailsClick={handleViewDetailsClick}
                    handleDeleteClick={handleDeleteClick}
                /> */}
                <EmptyBox />
            </Box>

            {/* Confirm Modal */}
            <ConfirmModal
                isOpen={isConfirmModalOpen}
                title="Xác nhận xóa tất cả"
                onConfirm={handleConfirmDeleteAll}
                onCancel={handleCloseConfirmModal}
            />
        </GridViewLayout>
    );
};

export default SavedJobsGridView;
