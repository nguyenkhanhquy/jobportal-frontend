import MainLayout from "../../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../../layouts/AccountLayout/AccountLayout";
import JobPostListingGridView from "../../../components/gridview/JobPostListingGridView/JobPostListingGridView";

const JobPostListingPage = () => {
    return (
        <MainLayout title="Danh sách bài đăng tuyển dụng">
            <AccountLayout>
                <JobPostListingGridView />
            </AccountLayout>
        </MainLayout>
    );
};

export default JobPostListingPage;
