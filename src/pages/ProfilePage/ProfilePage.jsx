import MainLayout from "../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import EmptyBox from "../../components/box/EmptyBox";

const ProfilePage = () => {
    return (
        <MainLayout title="Hồ sơ của tôi">
            <AccountLayout>
                <h2 className="mb-4 text-2xl font-semibold">Hồ Sơ Của Tôi</h2>
                <EmptyBox />
            </AccountLayout>
        </MainLayout>
    );
};

export default ProfilePage;
