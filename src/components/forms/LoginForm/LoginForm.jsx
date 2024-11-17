// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import { Email, Lock } from "@mui/icons-material";
import useAuth from "../../../hooks/useAuth";
import { login, getAuthUser } from "../../../services/authService";
import { setToken } from "../../../services/localStorageService";

const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Schema xác thực bằng Yup
const schema = yup.object().shape({
    email: yup.string().required("Vui lòng nhập email").matches(regexEmail, "Email không hợp lệ"),
    password: yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Vui lòng nhập mật khẩu"),
});

const LoginForm = () => {
    const { setUser, setIsAuthenticated } = useAuth();
    // const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched", // Kiểm tra lỗi khi người dùng chạm vào input
        reValidateMode: "onChange", // Kiểm tra lại lỗi khi người dùng thay đổi input
    });

    const onSubmit = async (formData) => {
        try {
            const data = await login(formData.email, formData.password);

            if (!data.success) {
                throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
            }

            setToken(data.result?.token);

            const dataUser = await getAuthUser(data.result?.token);
            setUser(dataUser?.result);

            setIsAuthenticated(true);
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full max-w-md bg-white p-8">
                {/* Logo và tiêu đề */}
                <div className="mb-4 flex items-center space-x-4">
                    <Link to="/">
                        <img src={Logo} alt="JobPortal" className="w-28" />
                    </Link>
                    <h2 className="text-2xl font-semibold text-green-600">Đăng nhập</h2>
                </div>
                <p className="text-gray-500">Chào mừng bạn đã quay trở lại</p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    {/* Input Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="relative">
                            <Email className="absolute left-3 top-1/2 -translate-y-1/2 transform text-green-600" />
                            <input
                                type="email"
                                autoComplete="username"
                                {...register("email")}
                                placeholder="Nhập email của bạn"
                                className={`mt-1 block w-full rounded-md border px-4 py-2 pl-12 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                    errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            />
                        </div>
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* Input Mật khẩu */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 transform text-green-600" />
                            <input
                                type="password"
                                autoComplete="current-password"
                                {...register("password")}
                                placeholder="Nhập mật khẩu"
                                className={`mt-1 block w-full rounded-md border px-4 py-2 pl-12 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                    errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                            />
                        </div>
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                    </div>

                    {/* Quên mật khẩu */}
                    <div className="mb-4 flex justify-end">
                        <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
                            Quên mật khẩu?
                        </Link>
                    </div>

                    {/* Button Đăng nhập */}
                    <button
                        type="submit"
                        className="w-full rounded-md bg-green-600 px-4 py-2 font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Đăng nhập
                    </button>
                </form>

                {/* Đăng ký tài khoản */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Bạn chưa có tài khoản?{" "}
                    <Link to="/register" className="font-semibold text-green-600 hover:underline">
                        Đăng ký ngay
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
