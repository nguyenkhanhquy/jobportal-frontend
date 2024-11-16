import MainLayout from "../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import EmptyBox from "../../components/box/EmptyBox";

const SavedJobsPage = () => {
    return (
        <MainLayout title="Việc đã lưu">
            <AccountLayout>
                <h2 className="mb-4 text-2xl font-semibold">Công việc đã lưu</h2>
                <EmptyBox />
            </AccountLayout>
        </MainLayout>
    );
};

export default SavedJobsPage;
