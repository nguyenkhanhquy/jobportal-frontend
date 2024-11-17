import MainLayout from "../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import AppliedJobsGridView from "../../components/gridview/AppliedJobsGridView/AppliedJobsGridView";

const AppliedJobsPage = () => {
    return (
        <MainLayout title="Việc đã ứng tuyển">
            <AccountLayout>
                <AppliedJobsGridView />
            </AccountLayout>
        </MainLayout>
    );
};

export default AppliedJobsPage;
