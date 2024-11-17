import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Schema xác thực bằng Yup
const schema = yup.object().shape({
    oldPassword: yup.string().required("Không được để trống").min(8, "Mật khẩu hiện tại phải dài ít nhất 8 ký tự"),
    newPassword: yup.string().required("Không được để trống").min(8, "Mật khẩu mới phải dài ít nhất 8 ký tự"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("newPassword"), null], "Xác nhận mật khẩu không khớp")
        .required("Không được để trống"),
});

const ChangePasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log("Dữ liệu đã submit:", data);
        alert("Đổi mật khẩu thành công");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-2xl space-y-4 rounded-lg p-6">
            <h2 className="mb-4 text-2xl font-semibold">Đổi Mật Khẩu</h2>

            {/* Mật khẩu hiện tại */}
            <div className="mb-4">
                <label htmlFor="oldPassword" className="mb-1 block font-semibold text-gray-700">
                    Mật khẩu hiện tại
                </label>
                <input
                    type="password"
                    id="oldPassword"
                    {...register("oldPassword")}
                    className={`w-full rounded-md border p-3 focus:border-green-500 focus:outline-none ${
                        errors.oldPassword ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.oldPassword && <p className="mt-1 text-sm text-red-600">{errors.oldPassword.message}</p>}
            </div>

            {/* Mật khẩu mới và Xác nhận mật khẩu mới */}
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="w-full md:w-1/2">
                    <label htmlFor="newPassword" className="mb-1 block font-semibold text-gray-700">
                        Mật khẩu mới
                    </label>
                    <input
                        type="password"
                        id="newPassword"
                        {...register("newPassword")}
                        className={`w-full rounded-md border p-3 focus:border-green-500 focus:outline-none ${
                            errors.newPassword ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.newPassword && <p className="mt-1 text-sm text-red-600">{errors.newPassword.message}</p>}
                </div>

                <div className="w-full md:w-1/2">
                    <label htmlFor="confirmPassword" className="mb-1 block font-semibold text-gray-700">
                        Xác nhận mật khẩu mới
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword")}
                        className={`w-full rounded-md border p-3 focus:border-green-500 focus:outline-none ${
                            errors.confirmPassword ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                    )}
                </div>
            </div>

            {/* Nút submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-green-600 px-4 py-2 text-lg font-semibold text-white hover:bg-green-700 disabled:opacity-50"
            >
                {isSubmitting ? "Đang xử lý..." : "Đổi mật khẩu"}
            </button>
        </form>
    );
};

export default ChangePasswordForm;
