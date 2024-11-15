import MainLayout from "../../layouts/MainLayout/MainLayout";
import JobDetailsHeader from "../../components/section/JobDetails/JobDetailsHeader";

const JobDetailsPage = () => {
    return (
        <MainLayout>
            <div className="flex justify-center py-8">
                <div className="w-full max-w-7xl px-4">
                    <JobDetailsHeader
                        logo="https://cdn-new.topcv.vn/unsafe/150x/https://static.topcv.vn/company_logos/Gt6sWvWDXBqmPjwLL7CmKAvK5f31lbYe_1726107717____db1cc73322d3e4c29b7f5b7fdb1be9eb.png"
                        title="Kỹ Sư Môi Trường - Thu Nhập 40 - 60 triệu/Tháng, Cơ Hội Làm Việc Với Các Dự Án Quốc Tế"
                        companyName="TopCV - AVT: Cơ hội việc làm & Định cư lâu dài tại Đức"
                        address="Lầu 21, Centec Tower, 72-74 đường Nguyễn Thị Minh Khai, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh"
                        updatedDate="12/11/2024"
                        expiryDate="30/11/2024"
                        salary="40 - 60 triệu"
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default JobDetailsPage;
