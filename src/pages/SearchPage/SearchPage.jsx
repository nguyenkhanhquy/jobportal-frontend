import MainLayout from "../../layouts/MainLayout/MainLayout";
import JobSearchBar from "../../components/search/SearchBar/JobSearchBar";
import SearchJobCard from "../../components/card/JobCard/SearchJobCard";
import CustomPagination from "../../components/pagination/Pagination";
import { useState } from "react";

const SearchPage = () => {
    // Mảng công việc mẫu
    const jobData = [
        {
            id: 1,
            logo: "https://cdn-new.topcv.vn/unsafe/150x/https://static.topcv.vn/company_logos/Gt6sWvWDXBqmPjwLL7CmKAvK5f31lbYe_1726107717____db1cc73322d3e4c29b7f5b7fdb1be9eb.png",
            title: "Nhân Viên Bếp Bánh Làm Việc Tại Đức, Thu Nhập 70 - 90tr/Tháng, Cơ Hội Định Cư & Bảo Lãnh Gia Đình Sau 3 Năm - Du Học Nghề Đức",
            salary: "70 - 90 triệu",
            companyName: "TopCV - AVT: Cơ hội việc làm & Định cư lâu dài tại Đức",
            location: "Hồ Chí Minh",
            experience: "2 năm",
            updatedDate: "12/11/2024",
        },
        {
            id: 2,
            logo: "https://cdn-new.topcv.vn/unsafe/150x/https://static.topcv.vn/company_logos/Gt6sWvWDXBqmPjwLL7CmKAvK5f31lbYe_1726107717____db1cc73322d3e4c29b7f5b7fdb1be9eb.png",
            title: "Nhân Viên Quản Lý Kho Bãi, Thu Nhập 30 - 50tr/Tháng, Cơ Hội Thăng Tiến Cao",
            salary: "30 - 50 triệu",
            companyName: "TopCV - AVT: Cơ hội việc làm & Định cư lâu dài tại Đức",
            location: "Hà Nội",
            experience: "3 năm",
            updatedDate: "10/11/2024",
        },
        {
            id: 3,
            logo: "https://cdn-new.topcv.vn/unsafe/150x/https://static.topcv.vn/company_logos/Gt6sWvWDXBqmPjwLL7CmKAvK5f31lbYe_1726107717____db1cc73322d3e4c29b7f5b7fdb1be9eb.png",
            title: "Kỹ Sư Môi Trường - Thu Nhập 40 - 60 triệu/Tháng, Cơ Hội Làm Việc Với Các Dự Án Quốc Tế",
            salary: "40 - 60 triệu",
            companyName: "TopCV - AVT: Cơ hội việc làm & Định cư lâu dài tại Đức",
            location: "Đà Nẵng",
            experience: "5 năm",
            updatedDate: "08/11/2024",
        },
        {
            id: 4,
            logo: "https://cdn-new.topcv.vn/unsafe/150x/https://static.topcv.vn/company_logos/Gt6sWvWDXBqmPjwLL7CmKAvK5f31lbYe_1726107717____db1cc73322d3e4c29b7f5b7fdb1be9eb.png",
            title: "Nhân Viên Bếp Bánh Làm Việc Tại Đức, Thu Nhập 70 - 90tr/Tháng, Cơ Hội Định Cư & Bảo Lãnh Gia Đình Sau 3 Năm - Du Học Nghề Đức",
            salary: "70 - 90 triệu",
            companyName: "TopCV - AVT: Cơ hội việc làm & Định cư lâu dài tại Đức",
            location: "Hồ Chí Minh",
            experience: "2 năm",
            updatedDate: "12/11/2024",
        },
        {
            id: 5,
            logo: "https://cdn-new.topcv.vn/unsafe/150x/https://static.topcv.vn/company_logos/Gt6sWvWDXBqmPjwLL7CmKAvK5f31lbYe_1726107717____db1cc73322d3e4c29b7f5b7fdb1be9eb.png",
            title: "Nhân Viên Quản Lý Kho Bãi, Thu Nhập 30 - 50tr/Tháng, Cơ Hội Thăng Tiến Cao",
            salary: "30 - 50 triệu",
            companyName: "TopCV - AVT: Cơ hội việc làm & Định cư lâu dài tại Đức",
            location: "Hà Nội",
            experience: "3 năm",
            updatedDate: "10/11/2024",
        },
    ];

    const jobsPerPage = 3; // Số lượng công việc hiển thị mỗi trang
    const totalPages = Math.ceil(jobData.length / jobsPerPage); // Tổng số trang

    // State quản lý trang hiện tại
    const [currentPage, setCurrentPage] = useState(1);

    // Tính toán công việc hiển thị cho trang hiện tại
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

    // Hàm xử lý khi thay đổi trang
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <MainLayout>
            <JobSearchBar />
            <div className="container mx-auto flex justify-center py-4">
                {/* Lặp qua mảng công việc và hiển thị từng job card theo chiều dọc */}
                <div className="flex flex-col gap-4">
                    {currentJobs.map((job) => (
                        <div key={job.id}>
                            <SearchJobCard
                                logo={job.logo}
                                title={job.title}
                                salary={job.salary}
                                companyName={job.companyName}
                                location={job.location}
                                experience={job.experience}
                                updatedDate={job.updatedDate}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </MainLayout>
    );
};

export default SearchPage;
