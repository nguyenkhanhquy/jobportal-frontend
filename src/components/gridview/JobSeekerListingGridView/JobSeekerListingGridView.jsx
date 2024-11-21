import { useState } from "react";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import JobSeekerListingTable from "../../table/JobSeekerListingTable/JobSeekerListingTable";

const JobSeekerListingGridView = () => {
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
            title="DANH SÁCH ỨNG VIÊN"
            currentPage={currentPage}
            totalPages={totalPages}
            recordsPerPage={recordsPerPage}
            onPageChange={handlePageChange}
            onRecordsPerPageChange={handleRecordsPerPageChange}
            actions={<DataSearchBar placeholder="Tìm kiếm" onSearch={handleSearch} />}
        >
            <JobSeekerListingTable
                loading={false}
                jobSeekers={[
                    {
                        id: 1,
                        email: "user1@example.com",
                        fullName: "Nguyễn Văn A",
                        registrationDate: "2024-01-01",
                        active: true,
                        locked: false,
                    },
                    {
                        id: 2,
                        email: "user2@example.com",
                        fullName: "Trần Thị B",
                        registrationDate: "2024-01-02",
                        active: false,
                        locked: true,
                    },
                ]}
                currentPage={1}
                recordsPerPage={10}
                handleLockToggle={(id, newState) => console.log(`Toggle lock for user ${id}: ${newState}`)}
            />
        </GridViewLayout>
    );
};

export default JobSeekerListingGridView;
