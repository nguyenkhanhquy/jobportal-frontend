import { Navigate, useLocation } from "react-router-dom";
import VerifyForm from "../../components/forms/VerifyForm/VerifyForm";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";

const VerifyPage = () => {
    const location = useLocation();

    const email = location.state?.email;

    return email ? (
        <AuthLayout title={"Xác thực tài khoản"}>
            <VerifyForm email={email} />
        </AuthLayout>
    ) : (
        <Navigate to="/" />
    );
};

export default VerifyPage;
