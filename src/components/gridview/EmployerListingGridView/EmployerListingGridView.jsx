import { useState, useEffect } from "react";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import EmployerListingTable from "../../table/EmployerListingTable/EmployerListingTable";
import EmployerInfoModal from "../../modals/EmployerListingModal/EmployerInfoModal";

import { getAllRecruiters } from "../../../services/recruiterService";
import { lockUser } from "../../../services/userService";
import { toast } from "react-toastify";

const EmployerListingGridView = () => {
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    const [employers, setEmployers] = useState([]);

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEmployer, setSelectedEmployer] = useState(null);

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
                const data = await getAllRecruiters(currentPage, recordsPerPage, search);
                if (!data.success) {
                    throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
                }
                setTotalPages(data.pageInfo.totalPages);
                setTotalRecords(data.pageInfo.totalElements);
                setEmployers(data.result);
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

    // Hàm hiển thị modal chi tiết
    const handleViewDetails = (employer) => {
        setSelectedEmployer(employer);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedEmployer(null);
        setModalOpen(false);
    };

    const handleLockToggle = async (id) => {
        try {
            const data = await lockUser(id);
            if (!data.success) {
                throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
            }
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setFlag(!flag);
        }
    };

    return (
        <>
            <GridViewLayout
                title="DANH SÁCH NHÀ TUYỂN DỤNG"
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
                <EmployerListingTable
                    loading={loading}
                    employers={employers}
                    currentPage={currentPage}
                    recordsPerPage={recordsPerPage}
                    handleLockToggle={handleLockToggle}
                    onViewDetails={handleViewDetails}
                />
            </GridViewLayout>
            <EmployerInfoModal isOpen={modalOpen} onClose={handleCloseModal} employer={selectedEmployer} />
        </>
    );
};

export default EmployerListingGridView;
