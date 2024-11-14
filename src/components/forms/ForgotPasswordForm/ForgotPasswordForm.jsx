import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/images/logo.png";

const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Schema xác thực bằng Yup
const schema = yup.object().shape({
    email: yup.string().required("Vui lòng nhập email").matches(regexEmail, "Email không hợp lệ"),
});

const ForgotPasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
        reValidateMode: "onChange",
    });

    // Khởi tạo useNavigate để chuyển hướng
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);

        // Chuyển hướng sang trang Reset Password và truyền email qua URL
        navigate(`/reset-password?email=${encodeURIComponent(data.email)}`);
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full max-w-md bg-white p-8">
                {/* Logo và tiêu đề */}
                <div className="mb-4 flex items-center space-x-4">
                    <Link to="/">
                        <img src={Logo} alt="JobPortal" className="w-28" />
                    </Link>
                    <h2 className="text-2xl font-semibold text-green-600">Quên mật khẩu</h2>
                </div>
                <p className="text-gray-500">
                    Vui lòng nhập email đăng ký của bạn. Chúng tôi sẽ gửi hướng dẫn đổi mật khẩu tới email này.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    {/* Input Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            autoComplete="username"
                            {...register("email")}
                            placeholder="Nhập email của bạn"
                            className={`mt-1 block w-full rounded-md border px-4 py-2 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                errors.email ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* Button Tạo lại mật khẩu */}
                    <button
                        type="submit"
                        className="w-full rounded-md bg-green-600 px-4 py-2 font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Tạo lại mật khẩu
                    </button>
                </form>

                {/* Link quay lại đăng nhập và đăng ký tài khoản mới */}
                <div className="mt-6 flex justify-between text-sm text-gray-600">
                    <Link to="/login" className="text-green-600 hover:underline">
                        Quay lại đăng nhập
                    </Link>
                    <Link to="/register" className="text-green-600 hover:underline">
                        Đăng ký tài khoản mới
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
