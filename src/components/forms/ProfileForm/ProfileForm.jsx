import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";

import { updateProfile } from "../../../services/jobSeekerService";
import { toast } from "react-toastify";

// Schema xác thực bằng Yup
const schema = yup.object().shape({
    fullName: yup.string().required("Vui lòng nhập họ và tên"),
    email: yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
    phone: yup
        .string()
        .matches(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số")
        .required("Vui lòng nhập số điện thoại"),
    dob: yup.date().required("Vui lòng chọn ngày sinh"),
    address: yup.string().required("Vui lòng nhập địa chỉ"),
    workExperience: yup.string().required("Vui lòng chọn kinh nghiệm làm việc"),
});

const ProfileForm = ({ userDetails }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm({
        defaultValues: userDetails,
        resolver: yupResolver(schema),
    });

    setValue("email", userDetails.user.email);

    // Xử lý khi submit form
    const onSubmit = async (dataForm) => {
        try {
            const data = await updateProfile(dataForm);

            if (!data.success) {
                if (data?.message) throw new Error(data.message);
                else throw new Error("Lỗi máy chủ, vui lòng thử lại sau!");
            }
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-3xl bg-gradient-to-br p-8">
            <h2 className="mb-8 text-3xl font-bold text-gray-800">Thông tin cá nhân</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Họ và tên */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Họ và tên</label>
                    <input
                        type="text"
                        {...register("fullName")}
                        className="mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none"
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.fullName?.message}</p>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        className="mt-1 w-full rounded-lg border bg-gray-100 p-2"
                        disabled
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.email?.message}</p>
                </div>

                {/* Số điện thoại */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Số điện thoại</label>
                    <input
                        type="text"
                        {...register("phone")}
                        className="mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none"
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.phone?.message}</p>
                </div>

                {/* Ngày sinh */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Ngày sinh</label>
                    <input
                        type="date"
                        {...register("dob")}
                        className="mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none"
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.dob?.message}</p>
                </div>

                {/* Địa chỉ */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700">Địa chỉ</label>
                    <input
                        type="text"
                        {...register("address")}
                        className="mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none"
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.address?.message}</p>
                </div>

                {/* Kinh nghiệm làm việc */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700">Kinh nghiệm làm việc</label>
                    <select
                        {...register("workExperience")}
                        className="mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none"
                    >
                        <option value="">Chọn kinh nghiệm</option>
                        <option value="Dưới 1 năm">Dưới 1 năm</option>
                        <option value="1 năm">1 năm</option>
                        <option value="2 năm">2 năm</option>
                        <option value="3 năm">3 năm</option>
                        <option value="4 năm">4 năm</option>
                        <option value="5 năm">5 năm</option>
                        <option value="Trên 5 năm">Trên 5 năm</option>
                    </select>
                    <p className="mt-1 text-xs text-red-600">{errors.workExperience?.message}</p>
                </div>
            </div>

            {/* Nút Lưu */}
            <button
                type="submit"
                className="mt-8 w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 focus:ring-4 focus:ring-green-300"
            >
                {isSubmitting ? "Đang lưu..." : "Lưu"}
            </button>
        </form>
    );
};

ProfileForm.propTypes = {
    userDetails: PropTypes.object,
};

export default ProfileForm;
