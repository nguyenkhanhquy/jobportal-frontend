import MainLayout from "../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import EmptyBox from "../../components/box/EmptyBox";

const UpdatePasswordPage = () => {
    return (
        <MainLayout title="Đổi mật khẩu">
            <AccountLayout>
                <h2 className="mb-4 text-2xl font-semibold">Đổi mật khẩu</h2>
                <EmptyBox />
            </AccountLayout>
        </MainLayout>
    );
};

export default UpdatePasswordPage;
