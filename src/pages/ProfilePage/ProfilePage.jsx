import MainLayout from "../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import ProfileForm from "../../components/forms/ProfileForm/ProfileForm";

const userDetails = {
    name: "Nguyen Van A",
    email: "user@example.com",
    phone: "0123456789",
    dob: "1990-01-01",
    address: "123 Đường ABC, Thành phố XYZ",
    experience: "2 years",
};

const ProfilePage = () => {
    return (
        <MainLayout title="Hồ sơ của tôi">
            <AccountLayout>
                <ProfileForm userDetails={userDetails} />
            </AccountLayout>
        </MainLayout>
    );
};

export default ProfilePage;
