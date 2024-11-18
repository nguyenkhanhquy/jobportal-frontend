import MainLayout from "../../layouts/MainLayout/MainLayout";
import AccountLayout from "../../layouts/AccountLayout/AccountLayout";
import AccountDetailsForm from "../../components/forms/AccountDetailsForm/AccountDetailsForm";
import CircularProgress from "@mui/material/CircularProgress";
import { getAuthUser } from "../../services/authService";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

const AccountDetailsPage = () => {
    const [loading, setLoading] = useState(true);
    const [accountData, setAccountData] = useState({});

    useEffect(() => {
        const fetchAuthProfile = async () => {
            setLoading(true);
            try {
                const data = await getAuthUser();
                setAccountData(data.result);
            } catch (error) {
                console.log("Failed to fetch auth profile: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthProfile();
    }, []);

    return (
        <MainLayout title="Tài khoản">
            <AccountLayout>
                {loading ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CircularProgress color="success" />
                    </div>
                ) : (
                    <AccountDetailsForm userDetails={accountData} />
                )}
            </AccountLayout>
        </MainLayout>
    );
};

export default AccountDetailsPage;
