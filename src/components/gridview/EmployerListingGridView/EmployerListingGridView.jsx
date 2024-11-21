import { useState } from "react";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import EmployerListingTable from "../../table/EmployerListingTable/EmployerListingTable";
import EmployerListingModal from "../../modals/EmployerListingModal/EmployerListingModal";

const EmployerListingGridView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const totalPages = 20;

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEmployer, setSelectedEmployer] = useState(null);

    const handlePageChange = (page) => setCurrentPage(page);
    const handleRecordsPerPageChange = (value) => setRecordsPerPage(value);

    // Hàm xử lý tìm kiếm
    const handleSearch = () => {
        console.log("Searching...");
    };

    // Hàm hiển thị modal chi tiết
    const handleViewDetails = (employer) => {
        setSelectedEmployer(employer);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedEmployer(null);
        setModalOpen(false);
    };

    return (
        <>
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
                            companyLogo: "/path/to/logo1.png",
                            companyName: "Công ty TNHH A",
                            name: "Nguyễn Văn A",
                            position: "Giám đốc",
                            recruiterEmail: "contact@companyA.com",
                            phone: "0901234567",
                            website: "https://www.companyA.com",
                            companyAddress: "123 Đường A, Quận 1, TP. HCM",
                            description: "Công ty A chuyên về công nghệ.",
                        },
                        {
                            id: 2,
                            email: "user2@example.com",
                            companyLogo: "/path/to/logo2.png",
                            companyName: "Công ty TNHH B",
                            name: "Trần Thị B",
                            position: "Quản lý nhân sự",
                            recruiterEmail: "contact@companyB.com",
                            phone: "0909876543",
                            website: "https://www.companyB.com",
                            companyAddress: "456 Đường B, Quận 2, TP. HCM",
                            description: "Công ty B chuyên về tài chính.",
                        },
                    ]}
                    currentPage={1}
                    recordsPerPage={10}
                    handleLockToggle={(id, newState) => console.log(`Toggle lock for user ${id}: ${newState}`)}
                    onViewDetails={handleViewDetails}
                />
            </GridViewLayout>
            <EmployerListingModal isOpen={modalOpen} onClose={handleCloseModal} employer={selectedEmployer} />
        </>
    );
};

export default EmployerListingGridView;
