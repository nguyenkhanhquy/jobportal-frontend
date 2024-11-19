import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import AppliedJobsTable from "../../table/AppliedJobsTable/AppliedJobsTable";

import { toast } from "react-toastify";
import { getAllJobApplied } from "../../../services/jobApplyService";

const AppliedJobsGridView = () => {
    const [loading, setLoading] = useState(false);
    const [appliedJobPosts, setAppliedJobPosts] = useState([]);

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleRecordsPerPageChange = (value) => {
        setCurrentPage(1);
        setRecordsPerPage(value);
    };

    const handleViewDetailsClick = (id) => {
        window.open(`/search/${id}`, "_blank");
    };

    useEffect(() => {
        const fetchSavedJobPosts = async () => {
            setLoading(true);
            try {
                const data = await getAllJobApplied(currentPage, recordsPerPage, search);
                if (!data.success) {
                    throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
                }
                setTotalPages(data.pageInfo.totalPages);
                setTotalRecords(data.pageInfo.totalElements);
                setAppliedJobPosts(data.result);
            } catch (error) {
                toast.error(error.message);
            } finally {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                setLoading(false);
            }
        };

        fetchSavedJobPosts();
    }, [currentPage, recordsPerPage, search]);

    return (
        <GridViewLayout
            title="CÔNG VIỆC ỨNG TUYỂN"
            currentPage={currentPage}
            totalPages={totalPages}
            recordsPerPage={recordsPerPage}
            totalRecords={totalRecords}
            onPageChange={handlePageChange}
            onRecordsPerPageChange={handleRecordsPerPageChange}
            actions={
                <DataSearchBar placeholder="Tìm kiếm" onSearch={(searchText) => setSearch(searchText)} query={search} />
            }
        >
            <Box>
                {/* Nội dung danh sách công việc */}
                <AppliedJobsTable
                    loading={loading}
                    appliedJobPosts={appliedJobPosts}
                    handleViewDetailsClick={handleViewDetailsClick}
                />
            </Box>
        </GridViewLayout>
    );
};

export default AppliedJobsGridView;
