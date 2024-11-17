import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
// import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";

// Schema xác thực bằng Yup
const schema = yup.object().shape({
    otp: yup.string().matches(/^\d+$/, "Mã xác nhận chỉ chứa số").required("Vui lòng nhập mã xác nhận"),
});

const VerifyForm = ({ email }) => {
    // const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
    });

    // State cho đếm ngược
    const [countdown, setCountdown] = useState(300); // 5 phút = 300 giây

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    // Định dạng thời gian đếm ngược
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes} phút ${secs} giây`;
    };

    const handleResendOTP = () => {
        alert("Mã xác nhận đã được gửi lại!");
        setCountdown(300); // Reset thời gian đếm ngược
    };

    const onSubmit = (formData) => {
        console.log(formData);
        alert("Xác thực tài khoản thành công!");
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full max-w-md bg-white p-8">
                {/* Logo và tiêu đề */}
                <div className="mb-4 flex items-center space-x-4">
                    <Link to="/">
                        <img src={Logo} alt="JobPortal" className="w-28" />
                    </Link>
                    <h2 className="text-2xl font-semibold text-green-600">Xác thực tài khoản</h2>
                </div>
                <p className="text-gray-500">
                    Chúng tôi đã gửi mã xác nhận tới địa chỉ <span className="font-semibold">{email}</span>.
                    <br />
                    Vui lòng kiểm tra hộp thư đến hoặc hộp thư rác.
                </p>
                <p className="mt-2 text-sm text-red-600">
                    Mã xác nhận hết hạn sau: <span>{formatTime(countdown)}</span>
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    {/* Input Mã xác nhận */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Mã xác nhận</label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="\d*"
                                {...register("otp")}
                                placeholder="Nhập mã xác nhận"
                                className={`mt-1 block w-full rounded-md border px-4 py-2 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                    errors.otp ? "border-red-500" : "border-gray-300"
                                }`}
                            />
                            <button
                                type="button"
                                onClick={handleResendOTP}
                                className="ml-2 mt-1 w-36 rounded-md border border-green-600 bg-white px-4 py-2 text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                Gửi lại mã
                            </button>
                        </div>
                        {errors.otp && <p className="mt-1 text-sm text-red-500">{errors.otp.message}</p>}
                    </div>

                    {/* Button Đặt lại mật khẩu */}
                    <button
                        type="submit"
                        className="w-full rounded-md bg-green-600 px-4 py-2 font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Xác thực tài khoản
                    </button>
                </form>

                {/* Link đổi email */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    <Link to="/register" className="text-green-600 hover:underline">
                        Trở lại
                    </Link>
                </div>
            </div>
        </div>
    );
};

VerifyForm.propTypes = {
    email: PropTypes.string.isRequired,
};

export default VerifyForm;
