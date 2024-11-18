import MainLayout from "../../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../../layouts/AccountLayout/AccountLayout";

const CreateJobPostPage = () => {
    return (
        <MainLayout title="Tạo bài đăng tuyển dụng">
            <AccountLayout>
                {/* Thêm component CreateJobPostForm */}
                <h1>Form tạo bài đăng tuyển dụng</h1>
            </AccountLayout>
        </MainLayout>
    );
};

export default CreateJobPostPage;
