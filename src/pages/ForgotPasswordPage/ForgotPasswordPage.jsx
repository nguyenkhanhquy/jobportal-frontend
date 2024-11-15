import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import ForgotPassWorForm from "../../components/forms/ForgotPasswordForm/ForgotPasswordForm";

const ForgotPasswordPage = () => {
    return (
        <AuthLayout title={"Quên mật khẩu"}>
            <ForgotPassWorForm />
        </AuthLayout>
    );
};

export default ForgotPasswordPage;
