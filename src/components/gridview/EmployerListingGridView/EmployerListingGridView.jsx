import { useState } from "react";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import EmployerListingTable from "../../table/EmployerListingTable/EmployerListingTable";

const EmployerListingGridView = () => {
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
            title="DANH SÁCH NHÀ TUYỂN DỤNG"
            currentPage={currentPage}
            totalPages={totalPages}
            recordsPerPage={recordsPerPage}
            onPageChange={handlePageChange}
            onRecordsPerPageChange={handleRecordsPerPageChange}
            actions={<DataSearchBar placeholder="Tìm kiếm" onSearch={handleSearch} />}
        >
            <EmployerListingTable
                loading={false}
                employers={[
                    {
                        id: 1,
                        email: "user1@example.com",
                        companyName: "Công ty TNHH A",
                        name: "Nguyễn Văn A",
                        registrationDate: "2024-01-01",
                        active: true,
                        locked: false,
                    },
                    {
                        id: 2,
                        email: "user2@example.com",
                        companyName: "Công ty TNHH B",
                        name: "Trần Thị B",
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

export default EmployerListingGridView;
