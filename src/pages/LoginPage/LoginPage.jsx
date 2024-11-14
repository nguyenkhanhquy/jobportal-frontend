import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import LoginForm from "../../components/forms/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <AuthLayout title={"Đăng nhập"}>
            <LoginForm />
        </AuthLayout>
    );
};

export default LoginPage;
