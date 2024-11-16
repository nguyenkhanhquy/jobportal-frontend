import { Navigate, useLocation } from "react-router-dom";
import ResetPasswordForm from "../../components/forms/ResetPasswordForm/ResetPasswordForm";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";

const ResetPasswordPage = () => {
    const location = useLocation();

    const email = location.state?.email;

    return email ? (
        <AuthLayout title={"Đặt lại mật khẩu"}>
            <ResetPasswordForm email={email} />
        </AuthLayout>
    ) : (
        <Navigate to="/" />
    );
};

export default ResetPasswordPage;
