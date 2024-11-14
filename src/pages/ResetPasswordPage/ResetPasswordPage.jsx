import ResetPasswordForm from "../../components/forms/ResetPasswordForm/ResetPasswordForm";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";

const ResetPasswordPage = () => {
    return (
        <AuthLayout title={"Đặt lại mật khẩu"}>
            <ResetPasswordForm />
        </AuthLayout>
    );
};

export default ResetPasswordPage;
