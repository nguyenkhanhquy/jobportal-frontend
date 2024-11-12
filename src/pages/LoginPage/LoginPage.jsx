import LoginForm from "../../components/forms/LoginForm/LoginForm";
import Public_layout_cover from "/images/public_layout_cover.jpg";

const LoginPage = () => {
    return (
        <div className="flex h-screen">
            {/* Bên trái: Form đăng nhập chiếm 5/9 */}
            <div className="md:w-5/9 flex w-full flex-col items-center justify-center bg-white p-8">
                <div className="w-full max-w-md">
                    <LoginForm />
                </div>
            </div>

            {/* Bên phải: Hình ảnh minh họa chiếm 4/9 */}
            <div className="w-4/9 hidden h-full md:flex">
                <img src={Public_layout_cover} alt="Banner" className="h-full w-full object-cover" />
            </div>
        </div>
    );
};

export default LoginPage;
