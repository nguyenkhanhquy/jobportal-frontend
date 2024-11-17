import MainLayout from "../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import EmptyBox from "../../components/box/EmptyBox";

const AppliedJobsPage = () => {
    return (
        <MainLayout title="Việc đã ứng tuyển">
            <AccountLayout>
                <h2 className="mb-4 text-2xl font-semibold">Công việc đã ứng tuyển</h2>
                <EmptyBox />
            </AccountLayout>
        </MainLayout>
    );
};

export default AppliedJobsPage;
