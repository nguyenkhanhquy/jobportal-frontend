import { useState, useEffect } from "react";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import JobPostListingTable from "../../table/JobPostListingTable/JobPostListingTable";
import JobPostInfoModal from "../../modals/JobPostInfoModal/JobPostInfoModal";

import { getAllJobPosts } from "../../../services/jobPostService";
import { toast } from "react-toastify";

const JobPostListingGridView = () => {
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    const [jobPosts, setJobPosts] = useState([]);

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedJobPost, setSelectedJobPost] = useState(null);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleRecordsPerPageChange = (value) => {
        setCurrentPage(1);
        setRecordsPerPage(value);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getAllJobPosts(currentPage, recordsPerPage, search);
                if (!data.success) {
                    throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
                }
                setTotalPages(data.pageInfo.totalPages);
                setTotalRecords(data.pageInfo.totalElements);
                setJobPosts(data.result);
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

        fetchData();
    }, [currentPage, recordsPerPage, flag, search]);

    const handleViewDetails = (post) => {
        setSelectedJobPost(post);
        setModalOpen(true);
    };

    const handleToggleVisibility = (id, hidden) => {
        console.log(`Bài đăng ${id}: ${hidden ? "Ẩn" : "Hiện"}`);
    };

    return (
        <>
            <GridViewLayout
                title="DANH SÁCH BÀI ĐĂNG TUYỂN DỤNG"
                currentPage={currentPage}
                totalPages={totalPages}
                recordsPerPage={recordsPerPage}
                totalRecords={totalRecords}
                onPageChange={handlePageChange}
                onRecordsPerPageChange={handleRecordsPerPageChange}
                actions={
                    <DataSearchBar
                        placeholder="Tìm kiếm"
                        onSearch={(searchText) => setSearch(searchText)}
                        query={search}
                    />
                }
            >
                <JobPostListingTable
                    loading={loading}
                    jobPosts={jobPosts}
                    currentPage={currentPage}
                    recordsPerPage={recordsPerPage}
                    handleViewDetails={handleViewDetails}
                    handleToggleVisibility={handleToggleVisibility}
                />
            </GridViewLayout>
            {/* Modal hiển thị thông tin chi tiết */}
            <JobPostInfoModal open={modalOpen} onClose={() => setModalOpen(false)} jobPost={selectedJobPost} />
        </>
    );
};

export default JobPostListingGridView;
