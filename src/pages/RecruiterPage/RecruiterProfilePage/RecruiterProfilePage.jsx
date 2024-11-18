import MainLayout from "../../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../../layouts/AccountLayout/AccountLayout";
import RecruiterProfileForm from "../../../components/forms/RecruiterForm/RecruiterProfileForm/RecruiterProfileForm";

import { getAuthProfile } from "../../../services/authService";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const RecruiterProfilePage = () => {
    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState({
        name: "",
        position: "",
        recruiterEmail: "",
        phone: "",
        companyName: "",
        website: "",
        companyAddress: "",
        description: "",
        companyLogo: "",
    });

    useEffect(() => {
        const fetchAuthProfile = async () => {
            setLoading(true);
            try {
                const data = await getAuthProfile();
                setUserDetails({
                    name: data.result.name,
                    position: data.result.position,
                    recruiterEmail: data.result.recruiterEmail,
                    phone: data.result.phone,
                    companyName: data.result.company.name,
                    website: data.result.company.website,
                    companyAddress: data.result.company.address,
                    description: data.result.company.description,
                    companyLogo: data.result.company.logo,
                });
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
                    <RecruiterProfileForm userDetails={userDetails} />
                )}
            </AccountLayout>
        </MainLayout>
    );
};

export default RecruiterProfilePage;
