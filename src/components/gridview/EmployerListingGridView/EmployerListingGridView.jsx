import { useState } from "react";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import EmptyBox from "../../box/EmptyBox";

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
            <EmptyBox />
        </GridViewLayout>
    );
};

export default EmployerListingGridView;
