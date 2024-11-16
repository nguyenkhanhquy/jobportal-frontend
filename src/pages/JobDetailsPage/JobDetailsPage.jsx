import MainLayout from "../../layouts/MainLayout/MainLayout";
import JobDetailsHeader from "../../components/section/JobDetails/JobDetailsHeader";
import JobDetailsBody from "../../components/section/JobDetails/JobDetailsBody";
import JobDetailsSummary from "../../components/section/JobDetails/JobDetailsSummary";

const JobDetailsPage = () => {
    // Dữ liệu mẫu cho công việc
    const jobData = {
        logo: "https://cdn-new.topcv.vn/unsafe/150x/https://static.topcv.vn/company_logos/Gt6sWvWDXBqmPjwLL7CmKAvK5f31lbYe_1726107717____db1cc73322d3e4c29b7f5b7fdb1be9eb.png",
        title: "Kỹ Sư Môi Trường - Thu Nhập 40 - 60 triệu/Tháng, Cơ Hội Làm Việc Với Các Dự Án Quốc Tế",
        companyName: "TopCV - AVT: Cơ hội việc làm & Định cư lâu dài tại Đức",
        address: "Lầu 21, Centec Tower, 72-74 đường Nguyễn Thị Minh Khai, Phường Võ Thị Sáu, Quận 3, TP Hồ Chí Minh",
        updatedDate: "12/11/2024",
        expiryDate: "30/11/2024",
        salary: "40 - 60 triệu",
        description: "Tham gia vào các dự án môi trường quốc tế, làm việc với các chuyên gia nước ngoài.",
        requirements: [
            "Tốt nghiệp Đại học chuyên ngành Môi trường.",
            "Có ít nhất 2 năm kinh nghiệm trong lĩnh vực môi trường.",
            "Khả năng giao tiếp tiếng Anh tốt.",
            "Kỹ năng làm việc nhóm và độc lập tốt.",
        ],
        benefits: [
            "Lương thưởng hấp dẫn theo năng lực.",
            "Cơ hội làm việc trong môi trường chuyên nghiệp.",
            "Bảo hiểm sức khỏe và các chế độ phúc lợi khác.",
        ],
        workingTime: "Thứ 2 - Thứ 6, 8:00 AM - 5:00 PM",
        jobPosition: "Kỹ Sư Môi Trường",
        remote: "On-site",
        type: "Full-time",
        field: "Môi trường & Công nghệ",
    };

    return (
        <MainLayout>
            {/* Header */}
            <div className="flex w-full justify-center bg-white pt-8">
                <div className="w-full max-w-7xl px-4">
                    <JobDetailsHeader
                        logo={jobData.logo}
                        title={jobData.title}
                        companyName={jobData.companyName}
                        address={jobData.address}
                        updatedDate={jobData.updatedDate}
                        expiryDate={jobData.expiryDate}
                        salary={jobData.salary}
                    />
                </div>
            </div>

            {/* Body và Summary theo hàng ngang (responsive) */}
            <div className="flex w-full justify-center bg-gray-50 py-8">
                <div className="flex w-full max-w-7xl flex-col gap-8 px-4 lg:flex-row">
                    {/* Body chiếm 7 phần trên màn hình lớn và full trên màn hình nhỏ */}
                    <div className="w-full lg:w-8/12">
                        <JobDetailsBody jobData={jobData} />
                    </div>

                    {/* Summary chiếm 3 phần trên màn hình lớn và full trên màn hình nhỏ */}
                    <div className="w-full lg:w-4/12">
                        <JobDetailsSummary
                            jobPosition={jobData.jobPosition}
                            salary={jobData.salary}
                            remote={jobData.remote}
                            type={jobData.type}
                            field={jobData.field}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default JobDetailsPage;
