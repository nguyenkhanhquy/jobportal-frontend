import MainLayout from "../../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../../layouts/AccountLayout/AccountLayout";

const PostedJobsPage = () => {
    return (
        <MainLayout title="Danh sách bài đăng tuyển dụng">
            <AccountLayout>
                {/* Thêm component PostedJobsList */}
                <h1>Danh sách bài đăng tuyển dụng</h1>
            </AccountLayout>
        </MainLayout>
    );
};

export default PostedJobsPage;
