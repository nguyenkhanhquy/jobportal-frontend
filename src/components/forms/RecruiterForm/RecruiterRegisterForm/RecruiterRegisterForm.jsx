import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "/images/logo.png";
import { Email, Lock, Business, Visibility, VisibilityOff } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Schema xác thực bằng Yup
const schema = yup.object().shape({
    email: yup.string().required("Vui lòng nhập email").matches(regexEmail, "Email không hợp lệ"),
    password: yup.string().min(8, "Mật khẩu phải có ít nhất 8 ký tự").required("Vui lòng nhập mật khẩu"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Mật khẩu xác nhận không khớp")
        .required("Vui lòng nhập xác nhận mật khẩu"),
    company: yup.string().required("Vui lòng nhập tên công ty"),
    name: yup.string().required("Vui lòng nhập họ và tên người đại diện"),
    position: yup.string().required("Vui lòng nhập chức vụ"),
    phone: yup.string().required("Vui lòng nhập số điện thoại"),
    recruiterEmail: yup
        .string()
        .required("Vui lòng nhập email người đại diện")
        .matches(regexEmail, "Email không hợp lệ"),
});

const RecruiterRegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
        reValidateMode: "onChange",
    });

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isAgree, setIsAgree] = useState(true);

    const onSubmit = (formData) => {
        // Xử lý logic đăng ký ở đây
        console.log(formData);
        toast.success("Đăng ký thành công!");
        navigate("/login");
    };

    return (
        <div className="mt-52 flex h-screen items-center justify-center">
            <div className="w-full max-w-3xl bg-white py-8">
                {/* Logo và tiêu đề */}
                <div className="mb-2 flex items-center space-x-4">
                    <Link to="/">
                        <img src={Logo} alt="JobPortal" className="w-28" />
                    </Link>
                    <h2 className="text-2xl font-semibold text-green-600">Đăng ký tài khoản Nhà tuyển dụng</h2>
                </div>
                <p className="mb-4 text-gray-500">Đăng ký để trở thành nhà tuyển dụng tại JobPortal</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Thông tin tài khoản */}
                    <h3 className="text-lg font-semibold text-gray-900">Thông tin tài khoản *</h3>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="relative">
                            <Email className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" />
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="Nhập email"
                                className={`mt-1 block w-full rounded-md border px-4 py-2 pl-12 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                    errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            />
                        </div>
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>

                    {/* Mật khẩu và Nhập lại mật khẩu */}
                    <div className="flex gap-12">
                        {/* Mật khẩu */}
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password")}
                                    placeholder="Nhập mật khẩu"
                                    className={`mt-1 block w-full rounded-md border px-4 py-2 pl-12 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                        errors.password ? "border-red-500" : "border-gray-300"
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-green-600"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                        </div>

                        {/* Nhập lại mật khẩu */}
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Nhập lại mật khẩu</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    {...register("confirmPassword")}
                                    placeholder="Nhập lại mật khẩu"
                                    className={`mt-1 block w-full rounded-md border px-4 py-2 pl-12 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                        errors.confirmPassword ? "border-red-500" : "border-gray-300"
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-green-600"
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Thông tin nhà tuyển dụng */}
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">Thông tin nhà tuyển dụng *</h3>

                    {/* Tên công ty */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tên công ty</label>
                        <div className="relative">
                            <Business className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" />
                            <input
                                type="text"
                                {...register("company")}
                                placeholder="Nhập tên công ty"
                                className={`mt-1 block w-full rounded-md border px-4 py-2 pl-12 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                    errors.company ? "border-red-500" : "border-gray-300"
                                }`}
                            />
                        </div>
                        {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
                    </div>

                    {/* Họ và tên, Chức vụ */}
                    <div className="flex gap-12">
                        {/* Họ và tên */}
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Họ và tên người đại diện</label>
                            <div className="relative">
                                <PersonOutlineOutlinedIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" />
                                <input
                                    type="text"
                                    {...register("name")}
                                    placeholder="Nhập họ và tên"
                                    className={`mt-1 block w-full rounded-md border px-4 py-2 pl-12 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                        errors.name ? "border-red-500" : "border-gray-300"
                                    }`}
                                />
                            </div>
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                        </div>

                        {/* Chức vụ */}
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Chức vụ</label>
                            <div className="relative">
                                <BusinessCenterOutlinedIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" />
                                <input
                                    type="text"
                                    {...register("position")}
                                    placeholder="Nhập chức vụ"
                                    className={`mt-1 block w-full rounded-md border px-4 py-2 pl-12 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                        errors.position ? "border-red-500" : "border-gray-300"
                                    }`}
                                />
                            </div>
                            {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>}
                        </div>
                    </div>

                    {/* Số điện thoại, Email người đại diện */}
                    <div className="mt-4 flex gap-12">
                        {/* Số điện thoại */}
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                            <div className="relative">
                                <ContactPhoneOutlinedIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" />
                                <input
                                    type="text"
                                    {...register("phone")}
                                    placeholder="Nhập số điện thoại"
                                    className={`mt-1 block w-full rounded-md border px-4 py-2 pl-12 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                        errors.phone ? "border-red-500" : "border-gray-300"
                                    }`}
                                />
                            </div>
                            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                        </div>

                        {/* Email người đại diện */}
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Email người đại diện</label>
                            <div className="relative">
                                <ContactMailOutlinedIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" />
                                <input
                                    type="email"
                                    {...register("recruiterEmail")}
                                    placeholder="Nhập email người đại diện"
                                    className={`mt-1 block w-full rounded-md border px-4 py-2 pl-12 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-500 ${
                                        errors.recruiterEmail ? "border-red-500" : "border-gray-300"
                                    }`}
                                />
                            </div>
                            {errors.recruiterEmail && (
                                <p className="mt-1 text-sm text-red-600">{errors.recruiterEmail.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Checkbox Điều khoản */}
                    <div className="mb-4 flex items-start py-4">
                        <input
                            type="checkbox"
                            className="h-6 w-6 rounded border-gray-300 accent-green-600"
                            onChange={(e) => setIsAgree(e.target.checked)}
                            defaultChecked={true}
                        />
                        <label className="ml-2 text-base text-gray-700">
                            Tôi đã đọc và đồng ý với{" "}
                            <Link to="/terms" className="font-semibold text-green-600 hover:underline">
                                Điều khoản dịch vụ
                            </Link>{" "}
                            và{" "}
                            <Link to="/privacy" className="font-semibold text-green-600 hover:underline">
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
                <p className="mt-6 text-center text-base text-gray-600">
                    Đã có tài khoản?{" "}
                    <Link to="/login" className="font-semibold text-green-600 hover:underline">
                        Đăng nhập ngay
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RecruiterRegisterForm;
