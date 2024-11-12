import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";

const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Schema xác thực bằng Yup
const schema = yup.object().shape({
    fullName: yup.string().required("Vui lòng nhập họ và tên"),
    email: yup.string().required("Vui lòng nhập email").matches(regexEmail, "Email không hợp lệ"),
    password: yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Vui lòng nhập mật khẩu"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Mật khẩu xác nhận không khớp")
        .required("Vui lòng nhập xác nhận mật khẩu"),
});

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
        reValidateMode: "onChange",
    });

    const [isAgree, setIsAgree] = useState(true);

    const onSubmit = (data) => {
        console.log(data);
        alert("Đăng ký thành công!");
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full max-w-md bg-white p-8">
                {/* Logo và tiêu đề */}
                <div className="mb-4 flex items-center space-x-4">
                    <img src={Logo} alt="JobPortal" className="w-28" />
                    <h2 className="text-2xl font-semibold text-green-600">Đăng ký</h2>
                </div>
                <p className="text-gray-500">Chào mừng bạn đến với JobPortal</p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    {/* Input Họ và Tên */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Họ và Tên</label>
                        <input
                            type="text"
                            {...register("fullName")}
                            placeholder="Nhập họ và tên của bạn"
                            className={`mt-1 block w-full rounded-md border px-4 py-2 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                errors.fullName ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>}
                    </div>

                    {/* Input Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="Nhập email của bạn"
                            autoComplete="username"
                            className={`mt-1 block w-full rounded-md border px-4 py-2 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                errors.email ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* Input Mật khẩu */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                        <input
                            type="password"
                            {...register("password")}
                            placeholder="Nhập mật khẩu"
                            autoComplete="new-password"
                            className={`mt-1 block w-full rounded-md border px-4 py-2 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                errors.password ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                    </div>

                    {/* Input Xác nhận mật khẩu */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            {...register("confirmPassword")}
                            placeholder="Nhập lại mật khẩu"
                            autoComplete="new-password"
                            className={`mt-1 block w-full rounded-md border px-4 py-2 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                errors.confirmPassword ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    {/* Checkbox Điều khoản */}
                    <div className="mb-4 flex items-start">
                        <input
                            type="checkbox"
                            className="h-6 w-6 rounded border-gray-300 accent-green-600"
                            onChange={(e) => setIsAgree(e.target.checked)}
                            defaultChecked={true}
                        />
                        <label className="ml-2 text-sm text-gray-700">
                            Tôi đã đọc và đồng ý với{" "}
                            <Link to="/terms" className="text-green-600 hover:underline">
                                Điều khoản dịch vụ
                            </Link>{" "}
                            và{" "}
                            <Link to="/privacy" className="text-green-600 hover:underline">
                                Chính sách bảo mật
                            </Link>{" "}
                            của JobPortal
                        </label>
                    </div>

                    {/* Button Đăng ký */}
                    <button
                        type="submit"
                        disabled={!isAgree}
                        className={`w-full rounded-md px-4 py-2 font-semibold text-white shadow focus:outline-none focus:ring-2 focus:ring-green-500 ${
                            isAgree ? "bg-green-600 hover:bg-green-700" : "cursor-not-allowed bg-gray-300"
                        }`}
                    >
                        Đăng ký
                    </button>
                </form>

                {/* Đăng nhập tài khoản */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Bạn đã có tài khoản?{" "}
                    <Link to="/login" className="font-semibold text-green-600 hover:underline">
                        Đăng nhập ngay
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
