import MainLayout from "../../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../../layouts/AccountLayout/AccountLayout";
import PostedJobsGridView from "../../../components/gridview/PostedJobsGridView/PostedJobsGridView";

const PostedJobsPage = () => {
    return (
        <MainLayout title="Danh sách bài đăng tuyển dụng">
            <AccountLayout>
                <PostedJobsGridView />
            </AccountLayout>
        </MainLayout>
    );
};

export default PostedJobsPage;
