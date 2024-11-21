import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import PostedJobsTable from "../../table/PostedJobsTable/PostedJobsTable.jsx";
import UpdateJobPostModal from "../../modals/UpdateJobPostModal/UpdateJobPostModal.jsx";
import ApplicationListModal from "../../modals/ApplicationListModal/ApplicationListModal.jsx";

import { getJobPostsByRecruiter, getJobPostById } from "../../../services/jobPostService.js";
import { getAllJobAppliedByPostId } from "../../../services/jobApplyService.js";

const PostedJobsGridView = () => {
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    const [postedJobPosts, setPostedJobPosts] = useState([]);

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJobPost, setSelectedJobPost] = useState(null); // Selected Job Data

    const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
    const [applicationJobTitle, setApplicationJobTitle] = useState(""); // Job Title for Applications Modal
    const [applications, setApplications] = useState([]); // Mock data for applications

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleRecordsPerPageChange = (value) => {
        setCurrentPage(1);
        setRecordsPerPage(value);
    };

    // Mở Modal
    const handleEditPostClick = async (jobId) => {
        const data = await getJobPostById(jobId);
        const job = data.result;
        if (job) {
            setSelectedJobPost(job);
            setIsModalOpen(true);
        }
    };

    // Đóng Modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJobPost(null);
    };

    // Lưu bài đăng đã chỉnh sửa
    const handleSaveChanges = (updatedJobPost) => {
        console.log("Cập nhật bài đăng:", updatedJobPost);
        setIsModalOpen(false);
    };

    // Mở modal danh sách ứng viên
    const handleViewApplicationsClick = async (jobId) => {
        const job = postedJobPosts.find((post) => post.id === jobId);
        if (job) {
            setApplicationJobTitle(job.title);
            // Lấy danh sách ứng viên từ API
            const data = await getAllJobAppliedByPostId(jobId);

            setApplications(data.result);
            setIsApplicationModalOpen(true);
        }
    };

    // Đóng modal danh sách ứng viên
    const handleCloseApplicationModal = () => {
        setIsApplicationModalOpen(false);
        setApplications([]);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getJobPostsByRecruiter(currentPage, recordsPerPage, search);
                if (!data.success) {
                    throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
                }
                setTotalPages(data.pageInfo.totalPages);
                setTotalRecords(data.pageInfo.totalElements);
                setPostedJobPosts(data.result);
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

    return (
        <>
            <GridViewLayout
                title="DANH SÁCH VIỆC LÀM ĐÃ ĐĂNG TUYỂN"
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
                <PostedJobsTable
                    loading={loading}
                    postedJobPosts={postedJobPosts}
                    currentPage={currentPage}
                    recordsPerPage={recordsPerPage}
                    handleViewApplicationsClick={handleViewApplicationsClick}
                    handleEditPostClick={handleEditPostClick} // Kích hoạt mở modal
                />
            </GridViewLayout>

            {/* Modal hiển thị form chỉnh sửa */}
            <UpdateJobPostModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                jobPostData={selectedJobPost}
                onSave={handleSaveChanges}
                setFlag={setFlag}
            />

            {/* Modal hiển thị danh sách ứng tuyển */}
            <ApplicationListModal
                isOpen={isApplicationModalOpen}
                title={applicationJobTitle}
                jobApplicationData={applications}
                onClose={handleCloseApplicationModal}
            />
        </>
    );
};

export default PostedJobsGridView;
