import MainLayout from "../../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../../layouts/AccountLayout/AccountLayout";
import JobSeekerListingGridView from "../../../components/gridview/JobSeekerListingGridView/JobSeekerListingGridView";

const JobSeekerListingPage = () => {
    return (
        <MainLayout title="Danh sách ứng viên">
            <AccountLayout>
                <JobSeekerListingGridView />
            </AccountLayout>
        </MainLayout>
    );
};

export default JobSeekerListingPage;
