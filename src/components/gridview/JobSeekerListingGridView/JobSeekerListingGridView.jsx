import { useState, useEffect } from "react";
import GridViewLayout from "../../../layouts/GridViewLayout/GridViewLayout";
import DataSearchBar from "../../search/SearchBar/DataSearchBar";
import JobSeekerListingTable from "../../table/JobSeekerListingTable/JobSeekerListingTable";
import JobSeekerInfoModal from "../../modals/JobSeekerInfoModal/JobSeekerInfoModal";

import { getAllJobSeekers } from "../../../services/jobSeekerService";
import { lockUser } from "../../../services/userService";
import { toast } from "react-toastify";

const JobSeekerListingGridView = () => {
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    const [jobSeekers, setJobSeekers] = useState([]);

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedJobSeeker, setSelectedJobSeeker] = useState(null);

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
                const data = await getAllJobSeekers(currentPage, recordsPerPage, search);
                if (!data.success) {
                    throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
                }
                setTotalPages(data.pageInfo.totalPages);
                setTotalRecords(data.pageInfo.totalElements);
                setJobSeekers(data.result);
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

    const handleOpenModal = (jobSeeker) => {
        setSelectedJobSeeker(jobSeeker);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedJobSeeker(null);
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
                title="DANH SÁCH ỨNG VIÊN"
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
                <JobSeekerListingTable
                    loading={loading}
                    jobSeekers={jobSeekers}
                    currentPage={currentPage}
                    recordsPerPage={recordsPerPage}
                    handleLockToggle={handleLockToggle}
                    onViewDetails={handleOpenModal}
                />
            </GridViewLayout>
            <JobSeekerInfoModal isOpen={modalOpen} onClose={handleCloseModal} jobSeeker={selectedJobSeeker} />
        </>
    );
};

export default JobSeekerListingGridView;
