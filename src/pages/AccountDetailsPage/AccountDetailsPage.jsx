import MainLayout from "../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import AccountDetailsForm from "../../components/forms/AccountDetailsForm/AccountDetailsForm";

const accountData = {
    id: "123456",
    email: "user@example.com",
    role: "Admin",
    createdDate: "2024-11-18",
    active: true,
};

const AccountDetailsPage = () => {
    return (
        <MainLayout title="Tài khoản">
            <AccountLayout>
                <AccountDetailsForm userDetails={accountData} />
            </AccountLayout>
        </MainLayout>
    );
};

export default AccountDetailsPage;
