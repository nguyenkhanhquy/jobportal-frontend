import MainLayout from "../../layouts/MainLayout/MainLayout";
import JobSearchBar from "../../components/search/SearchBar/JobSearchBar";
import SearchJobCard from "../../components/card/JobCard/SearchJobCard";
import CustomPagination from "../../components/pagination/Pagination";
import SortBar from "../../components/search/SortBar/SortBar";
import EmptyBox from "../../components/box/EmptyBox";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

import { getAllJobPosts } from "../../services/jobPostService";

const SearchPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [jobPosts, setJobPosts] = useState([]);

    const [query, setQuery] = useState(location.state?.query || "");
    const [sort, setSort] = useState("default");

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);

    useEffect(() => {
        if (location.state?.query) {
            navigate(location.pathname, { replace: true, state: { ...location.state, query: undefined } });
        }
    }, [location, navigate]);

    useEffect(() => {
        const fetchJobPosts = async () => {
            setLoading(true);
            try {
                const data = await getAllJobPosts(currentPage, recordsPerPage, query, sort);
                if (!data.success) {
                    throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
                }
                setTotalPages(data.pageInfo.totalPages);
                setTotalRecords(data.pageInfo.totalElements);
                setJobPosts(data.result);
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

        fetchJobPosts();
    }, [currentPage, recordsPerPage, query, sort]);

    // Hàm xử lý khi thay đổi trang
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <MainLayout>
            <JobSearchBar
                onSearch={(searchText) => {
                    setCurrentPage(1);
                    setQuery(searchText);
                }}
                query={query}
            />
            <SortBar totalRecords={totalRecords} sortOption={sort} onSortChange={setSort} />

            {loading ? (
                <div className="flex min-h-[200px] items-center justify-center py-4">
                    <CircularProgress color="success" />
                </div>
            ) : (
                <div className="container mx-auto flex min-h-[200px] justify-center py-4">
                    {jobPosts.length === 0 ? (
                        <EmptyBox />
                    ) : (
                        /* Lặp qua mảng công việc và hiển thị từng job card theo chiều dọc */
                        <div className="flex flex-col gap-4">
                            {jobPosts.map((job) => (
                                <div key={job.id}>
                                    <SearchJobCard
                                        id={job.id}
                                        logo={job.company.logo}
                                        title={job.title}
                                        salary={job.salary}
                                        companyName={job.company.name}
                                        address={job.address}
                                        remote={job.remote}
                                        type={job.type}
                                        updatedDate={job.updatedDate}
                                        saved={job.saved}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Pagination */}
            <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </MainLayout>
    );
};

export default SearchPage;
