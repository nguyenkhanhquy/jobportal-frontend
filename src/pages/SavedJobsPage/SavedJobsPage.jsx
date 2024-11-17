import MainLayout from "../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import SavedJobsGridView from "../../components/gridview/SavedJobsGridView/SavedJobsGridView";

const SavedJobsPage = () => {
    return (
        <MainLayout title="Việc đã lưu">
            <AccountLayout>
                <SavedJobsGridView />
            </AccountLayout>
        </MainLayout>
    );
};

export default SavedJobsPage;
