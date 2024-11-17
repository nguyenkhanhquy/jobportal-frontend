import MainLayout from "../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import UpdatePassWordForm from "../../components/forms/UpdatePasswordForm/UpdatePasswordForm";

const UpdatePasswordPage = () => {
    return (
        <MainLayout title="Đổi mật khẩu">
            <AccountLayout>
                <UpdatePassWordForm />
            </AccountLayout>
        </MainLayout>
    );
};

export default UpdatePasswordPage;
