import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { toast } from "react-toastify";
import { createJobPost } from "../../../../services/jobPostService";

// Định nghĩa schema validation bằng Yup
const schema = yup.object().shape({
    title: yup.string().required("Vui lòng nhập tiêu đề").max(150, "Tiêu đề không được vượt quá 150 ký tự"),
    jobPosition: yup.string().required("Vui lòng nhập vị trí tuyển dụng").max(100, "Không được vượt quá 100 ký tự"),
    salary: yup.string().required("Vui lòng nhập mức lương").max(100, "Không được vượt quá 100 ký tự"),
    quantity: yup
        .number()
        .typeError("Số lượng phải là một số")
        .positive("Số lượng phải lớn hơn 0")
        .integer("Số lượng phải là một số nguyên")
        .required("Vui lòng nhập số lượng tuyển dụng"),
    type: yup.string().required("Vui lòng chọn loại hợp đồng"),
    remote: yup.string().required("Vui lòng chọn hình thức làm việc"),
    description: yup.string().required("Vui lòng nhập mô tả công việc"),
    requirements: yup.string().required("Vui lòng nhập yêu cầu ứng viên"),
    benefits: yup.string().required("Vui lòng nhập quyền lợi"),
    address: yup.string().required("Vui lòng nhập địa điểm làm việc").max(150, "Không được vượt quá 150 ký tự"),
    expiryDate: yup
        .date()
        .typeError("Vui lòng nhập ngày hợp lệ")
        .required("Vui lòng nhập thời hạn ứng tuyển")
        .min(new Date(), "Thời hạn ứng tuyển phải lớn hơn ngày hiện tại"),
});

const CreateJobPostForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    // Xử lý khi submit form
    const onSubmit = async (dataForm) => {
        try {
            if (dataForm.expiryDate) {
                const expiryDate = new Date(dataForm.expiryDate);
                expiryDate.setDate(expiryDate.getDate() + 1); // Tăng thêm 1 ngày
                dataForm.expiryDate = expiryDate.toISOString().split("T")[0]; // Định dạng YYYY-MM-DD
            }
            const data = await createJobPost(dataForm);

            if (!data.success) {
                if (data?.message) throw new Error(data.message);
                else throw new Error("Lỗi máy chủ, vui lòng thử lại sau!");
            }
            reset();
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-3xl p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-700">Đăng bài tuyển dụng</h2>

            {/* Tiêu đề */}
            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Tiêu đề</label>
                <input
                    type="text"
                    {...register("title")}
                    className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${errors.title ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-green-500"}`}
                />
                <p className="mt-1 text-xs text-red-600">{errors.title?.message}</p>
            </div>

            {/* Vị trí tuyển dụng */}
            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Vị trí tuyển dụng</label>
                <input
                    type="text"
                    {...register("jobPosition")}
                    className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${errors.jobPosition ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-green-500"}`}
                />
                <p className="mt-1 text-xs text-red-600">{errors.jobPosition?.message}</p>
            </div>

            {/* Mức lương và Số lượng tuyển dụng cùng một hàng */}
            <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                    <label className="block text-sm font-semibold text-gray-700">Mức lương</label>
                    <input
                        type="text"
                        {...register("salary")}
                        className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${errors.salary ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-green-500"}`}
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.salary?.message}</p>
                </div>

                <div className="w-1/2">
                    <label className="block text-sm font-semibold text-gray-700">Số lượng tuyển dụng</label>
                    <input
                        type="number"
                        {...register("quantity")}
                        className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${errors.quantity ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-green-500"}`}
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.quantity?.message}</p>
                </div>
            </div>

            {/* Loại hợp đồng và Hình thức làm việc cùng một hàng */}
            <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                    <label className="block text-sm font-semibold text-gray-700">Loại hợp đồng</label>
                    <select
                        {...register("type")}
                        className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${errors.type ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-green-500"}`}
                    >
                        <option value="">Chọn loại hợp đồng</option>
                        <option value="Toàn thời gian">Toàn thời gian</option>
                        <option value="Bán thời gian">Bán thời gian</option>
                    </select>
                    <p className="mt-1 text-xs text-red-600">{errors.type?.message}</p>
                </div>

                <div className="w-1/2">
                    <label className="block text-sm font-semibold text-gray-700">Hình thức làm việc</label>
                    <select
                        {...register("remote")}
                        className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${errors.remote ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-green-500"}`}
                    >
                        <option value="">Chọn hình thức làm việc</option>
                        <option value="Trực tiếp">Trực tiếp</option>
                        <option value="Làm từ xa">Làm từ xa</option>
                        <option value="Làm việc kết hợp">Làm việc kết hợp</option>
                    </select>
                    <p className="mt-1 text-xs text-red-600">{errors.remote?.message}</p>
                </div>
            </div>

            {/* Mô tả công việc */}
            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Mô tả công việc</label>
                <textarea
                    {...register("description")}
                    className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${errors.description ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-green-500"}`}
                    rows="4"
                ></textarea>
                <p className="mt-1 text-xs text-red-600">{errors.description?.message}</p>
            </div>

            {/* Yêu cầu ứng viên */}
            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Yêu cầu ứng viên</label>
                <textarea
                    {...register("requirements")}
                    className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${errors.requirements ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-green-500"}`}
                    rows="4"
                ></textarea>
                <p className="mt-1 text-xs text-red-600">{errors.requirements?.message}</p>
            </div>

            {/* Quyền lợi */}
            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Quyền lợi</label>
                <textarea
                    {...register("benefits")}
                    className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${errors.benefits ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-green-500"}`}
                    rows="4"
                ></textarea>
                <p className="mt-1 text-xs text-red-600">{errors.benefits?.message}</p>
            </div>

            {/* Địa điểm làm việc */}
            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Địa điểm làm việc</label>
                <input
                    type="text"
                    {...register("address")}
                    className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${errors.address ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-green-500"}`}
                />
                <p className="mt-1 text-xs text-red-600">{errors.address?.message}</p>
            </div>

            {/* Thời hạn ứng tuyển */}
            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Thời hạn ứng tuyển</label>
                <input
                    type="date"
                    {...register("expiryDate")}
                    className={`mt-1 w-full rounded-lg border p-2 focus:outline-none ${errors.expiryDate ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-green-500"}`}
                />
                <p className="mt-1 text-xs text-red-600">{errors.expiryDate?.message}</p>
            </div>

            <button type="submit" className="mt-6 w-full rounded-lg bg-green-600 py-3 font-semibold text-white">
                {isSubmitting ? "Đang tạo bài đăng..." : "Tạo bài đăng"}
            </button>
        </form>
    );
};

export default CreateJobPostForm;
