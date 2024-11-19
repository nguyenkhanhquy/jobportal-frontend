import { useState } from "react";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import PostedJobsTable from "../../table/PostedJobsTable/PostedJobsTable.jsx";
import UpdateJobPostModal from "../../modals/UpdateJobPostModal/UpdateJobPostModal.jsx";

const PostedJobsGridView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJobPost, setSelectedJobPost] = useState(null); // Selected Job Data
    const totalPages = 20;

    const handlePageChange = (page) => setCurrentPage(page);
    const handleRecordsPerPageChange = (value) => setRecordsPerPage(value);

    // Hàm xử lý tìm kiếm
    const handleSearch = () => {
        console.log("Searching...");
    };

    // Mở Modal
    const handleEditPostClick = (jobId) => {
        const job = postedJobPosts.find((post) => post.id === jobId); // Tìm bài đăng cần sửa
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

    // Dữ liệu mẫu
    const postedJobPosts = [
        {
            id: "1",
            title: "Backend Developer",
            jobPosition: "Intern",
            expiryDate: "2024-12-31",
            applicationList: [{}, {}, {}],
            salary: "20-30 triệu",
            quantity: 5,
            type: "Toàn thời gian",
            remote: "Trực tiếp",
            description: "Lập trình và bảo trì hệ thống",
            requirements: "Có kinh nghiệm ReactJS",
            benefits: "Bảo hiểm, lương tháng 13",
            address: "Hà Nội",
        },
        {
            id: "2",
            title: "Frontend Developer",
            jobPosition: "Full-Time",
            expiryDate: "2024-12-20",
            applicationList: [{}],
            salary: "20-30 triệu",
            quantity: 5,
            type: "Toàn thời gian",
            remote: "Trực tiếp",
            description: "Lập trình và bảo trì hệ thống",
            requirements: "Có kinh nghiệm ReactJS",
            benefits: "Bảo hiểm, lương tháng 13",
            address: "Hà Nội",
        },
    ];

    return (
        <>
            <GridViewLayout
                title="DANH SÁCH VIỆC LÀM ĐÃ ĐĂNG TUYỂN"
                currentPage={currentPage}
                totalPages={totalPages}
                recordsPerPage={recordsPerPage}
                onPageChange={handlePageChange}
                onRecordsPerPageChange={handleRecordsPerPageChange}
                actions={<DataSearchBar placeholder="Tìm kiếm" onSearch={handleSearch} />}
            >
                <PostedJobsTable
                    loading={false}
                    postedJobPosts={postedJobPosts}
                    handleViewApplicationsClick={(jobId) => console.log(`View applications for job ${jobId}`)}
                    handleEditPostClick={handleEditPostClick} // Kích hoạt mở modal
                />
            </GridViewLayout>

            {/* Modal hiển thị form chỉnh sửa */}
            <UpdateJobPostModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                jobPostData={selectedJobPost}
                onSave={handleSaveChanges}
            />
        </>
    );
};

export default PostedJobsGridView;
