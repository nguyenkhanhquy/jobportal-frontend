import { useState } from "react";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import PostedJobsTable from "../../table/PostedJobsTable/PostedJobsTable.jsx";

const PostedJobsGridView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const totalPages = 20;

    const handlePageChange = (page) => setCurrentPage(page);
    const handleRecordsPerPageChange = (value) => setRecordsPerPage(value);

    // Hàm xử lý tìm kiếm
    const handleSearch = () => {
        console.log("Searching...");
    };

    return (
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
                postedJobPosts={[
                    {
                        id: "1",
                        title: "Backend Developer",
                        jobPosition: "Intern",
                        expiryDate: "2024-12-15",
                        applicationList: [{}, {}, {}],
                    },
                    {
                        id: "2",
                        title: "Frontend Developer",
                        jobPosition: "Full-Time",
                        expiryDate: "2024-12-20",
                        applicationList: [{}],
                    },
                ]}
                handleViewApplicationsClick={(jobId) => console.log(`View applications for job ${jobId}`)}
                handleEditPostClick={(jobId) => console.log(`Edit post for job ${jobId}`)}
            />
        </GridViewLayout>
    );
};

export default PostedJobsGridView;
