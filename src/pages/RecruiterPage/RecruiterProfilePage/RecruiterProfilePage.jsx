import MainLayout from "../../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../../layouts/AccountLayout/AccountLayout";
import RecruiterProfileForm from "../../../components/forms/RecruiterForm/RecruiterProfileForm/RecruiterProfileForm";

const RecruiterProfilePage = () => {
    // Dữ liệu mẫu
    const mockData = {
        name: "Nguyễn Văn A",
        position: "Giám đốc",
        recruiterEmail: "nguyenvana@company.com",
        phone: "0912345678",
        companyName: "Công ty TNHH ABC",
        website: "https://www.abc.com",
        companyAddress: "123 Đường ABC, Quận 1, TP.HCM",
        description: "Công ty TNHH ABC là một trong những công ty hàng đầu trong lĩnh vực công nghệ thông tin.",
        companyLogo: null,
    };

    return (
        <MainLayout title="Hồ sơ của tôi">
            <AccountLayout>
                {/* Truyền mockData vào RecruiterProfileForm */}
                <RecruiterProfileForm userDetails={mockData} />
            </AccountLayout>
        </MainLayout>
    );
};

export default RecruiterProfilePage;
