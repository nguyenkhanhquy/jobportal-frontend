import MainLayout from "../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import ProfileForm from "../../components/forms/ProfileForm/ProfileForm";
import { getAuthProfile } from "../../services/authService";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const ProfilePage = () => {
    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        const fetchAuthProfile = async () => {
            setLoading(true);
            try {
                const data = await getAuthProfile();
                setUserDetails(data.result);
            } catch (error) {
                console.log("Failed to fetch auth profile: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthProfile();
    }, []);

    return (
        <MainLayout title="Hồ sơ của tôi">
            <AccountLayout>
                {loading ? (
                    <div className="flex h-full items-center justify-center">
                        <CircularProgress color="success" />
                    </div>
                ) : (
                    <ProfileForm userDetails={userDetails} />
                )}
            </AccountLayout>
        </MainLayout>
    );
};

export default ProfilePage;
