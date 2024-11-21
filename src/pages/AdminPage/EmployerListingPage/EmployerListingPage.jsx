import MainLayout from "../../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../../layouts/AccountLayout/AccountLayout";
import EmployerListingGridView from "../../../components/gridview/EmployerListingGridView/EmployerListingGridView";

const EmployerListingPage = () => {
    return (
        <MainLayout title="Danh sách nhà tuyển dụng">
            <AccountLayout>
                <EmployerListingGridView />
            </AccountLayout>
        </MainLayout>
    );
};

export default EmployerListingPage;
