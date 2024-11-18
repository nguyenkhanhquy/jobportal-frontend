import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";

// Schema xác thực bằng Yup
const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập họ và tên"),
    email: yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
    phone: yup
        .string()
        .matches(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số")
        .required("Vui lòng nhập số điện thoại"),
    dob: yup.date().required("Vui lòng chọn ngày sinh"),
    address: yup.string().required("Vui lòng nhập địa chỉ"),
    experience: yup.string().required("Vui lòng chọn kinh nghiệm làm việc"),
});

const ProfileForm = ({ userDetails }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: userDetails,
        resolver: yupResolver(schema),
    });

    // Xử lý khi submit form
    const onSubmit = (data) => {
        console.log("Data đã submit:", data);
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
                        {...register("name")}
                        className="mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none"
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.name?.message}</p>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Email liên hệ</label>
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
                        {...register("experience")}
                        className="mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none"
                    >
                        <option value="">Chọn kinh nghiệm</option>
                        <option value="Intern">Thực tập</option>
                        <option value="Looking for job">Đang tìm việc</option>
                        <option value="1 year">1 năm</option>
                        <option value="2 years">2 năm</option>
                        <option value="3 years">3 năm</option>
                        <option value="5 years">5 năm</option>
                    </select>
                    <p className="mt-1 text-xs text-red-600">{errors.experience?.message}</p>
                </div>
            </div>

            {/* Nút Lưu */}
            <button
                type="submit"
                className="mt-8 w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 focus:ring-4 focus:ring-green-300"
            >
                Lưu
            </button>
        </form>
    );
};

ProfileForm.propTypes = {
    userDetails: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string,
        dob: PropTypes.string,
        address: PropTypes.string,
        experience: PropTypes.string,
    }),
};

export default ProfileForm;
