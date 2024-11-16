import MainLayout from "../../layouts/MainLayout/MainLayout";
import JobDetailsHeader from "../../components/section/JobDetails/JobDetailsHeader";
import JobDetailsBody from "../../components/section/JobDetails/JobDetailsBody";

const JobDetailsPage = () => {
    // Dữ liệu mẫu cho job
    const jobData = {
        logo: "https://cdn-new.topcv.vn/unsafe/150x/https://static.topcv.vn/company_logos/Gt6sWvWDXBqmPjwLL7CmKAvK5f31lbYe_1726107717____db1cc73322d3e4c29b7f5b7fdb1be9eb.png",
        title: "Kỹ Sư Môi Trường - Thu Nhập 40 - 60 triệu/Tháng, Cơ Hội Làm Việc Với Các Dự Án Quốc Tế",
        companyName: "TopCV - AVT: Cơ hội việc làm & Định cư lâu dài tại Đức",
        address:
            "Lầu 21, Centec Tower, 72-74 đường Nguyễn Thị Minh Khai, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh",
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
            "Được tham gia các dự án quốc tế và học hỏi từ chuyên gia.",
            "Bảo hiểm sức khỏe và các chế độ phúc lợi khác.",
        ],
        workingTime: "Thứ 2 - Thứ 6, 8:00 AM - 5:00 PM",
    };

    return (
        <MainLayout>
            <div className="flex flex-col items-center py-8">
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
                {/* Body của trang chi tiết công việc */}
                <JobDetailsBody jobData={jobData} />
            </div>
        </MainLayout>
    );
};

export default JobDetailsPage;
