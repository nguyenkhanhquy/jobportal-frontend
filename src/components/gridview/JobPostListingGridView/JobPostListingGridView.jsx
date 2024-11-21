import { useState } from "react";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import JobPostListingTable from "../../table/JobPostListingTable/JobPostListingTable";
import JobPostInfoModal from "../../modals/JobPostInfoModal/JobPostInfoModal";

const JobPostListingGridView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [selectedJobPost, setSelectedJobPost] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const totalPages = 20;

    const handlePageChange = (page) => setCurrentPage(page);
    const handleRecordsPerPageChange = (value) => setRecordsPerPage(value);

    // Hàm xử lý tìm kiếm
    const handleSearch = () => {
        console.log("Searching...");
    };

    const jobPosts = [
        {
            id: 1,
            title: "Frontend Developer",
            companyName: "Công ty A",
            jobPosition: "Lập trình viên Frontend",
            salary: "15-20 triệu",
            quantity: 3,
            type: "Toàn thời gian",
            remote: false,
            description: "Phát triển giao diện web...",
            requirements: "Thành thạo ReactJS, JavaScript...",
            benefits: "Bảo hiểm, nghỉ phép, lương tháng 13...",
            address: "Hà Nội, Việt Nam",
            expiryDate: "2024-12-31",
            createdDate: "2024-01-10",
            hidden: false,
        },
        {
            id: 2,
            title: "Backend Developer",
            companyName: "Công ty B",
            jobPosition: "Lập trình viên Backend",
            salary: "20-25 triệu",
            quantity: 2,
            type: "Toàn thời gian",
            remote: true,
            description: "Xây dựng API và xử lý server...",
            requirements: "Thành thạo NodeJS, MongoDB...",
            benefits: "Làm việc từ xa, hỗ trợ thiết bị...",
            address: "Đà Nẵng, Việt Nam",
            expiryDate: "2024-12-15",
            createdDate: "2024-01-15",
            hidden: true,
        },
    ];

    const handleViewDetails = (id) => {
        const selectedPost = jobPosts.find((post) => post.id === id);
        setSelectedJobPost(selectedPost);
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
                onPageChange={handlePageChange}
                onRecordsPerPageChange={handleRecordsPerPageChange}
                actions={<DataSearchBar placeholder="Tìm kiếm" onSearch={handleSearch} />}
            >
                <JobPostListingTable
                    loading={false}
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
