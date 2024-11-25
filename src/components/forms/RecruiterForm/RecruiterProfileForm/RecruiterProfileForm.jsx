import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";

import { useState } from "react";
import { updateProfile } from "../../../../services/recruiterService";
import { uploadLogo } from "../../../../services/recruiterService";
import { toast } from "react-toastify";

// Regex email kiểm tra hợp lệ
const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Schema xác thực bằng Yup
const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập họ và tên"),
    position: yup.string().required("Vui lòng nhập chức vụ"),
    recruiterEmail: yup
        .string()
        .matches(regexEmail, "Email không hợp lệ")
        .required("Vui lòng nhập email người đại diện"),
    phone: yup
        .string()
        .matches(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số")
        .required("Vui lòng nhập số điện thoại"),
    companyName: yup.string().required("Vui lòng nhập tên công ty"),
    website: yup.string().url("Website không hợp lệ").required("Vui lòng nhập website"),
    companyAddress: yup.string().required("Vui lòng nhập địa chỉ công ty"),
    description: yup.string().required("Vui lòng nhập giới thiệu công ty"),
    companyLogo: yup.mixed().required("Vui lòng chọn logo công ty"),
});

const RecruiterProfileForm = ({ userDetails }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: userDetails,
        resolver: yupResolver(schema),
        mode: "onBlur", // Kiểm tra lỗi khi người dùng rời khỏi ô input
    });

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);

    // Xử lý khi submit form
    const onSubmit = async (dataForm) => {
        try {
            if (selectedFile) {
                const dataUpload = await uploadLogo(selectedFile);
                setValue("companyLogo", dataUpload.result);
            }

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
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-3xl p-8">
            <h2 className="mb-6 text-2xl font-bold text-green-700">HỒ SƠ NHÀ TUYỂN DỤNG</h2>

            {/* Thông tin người đại diện */}
            <h3 className="mb-4 text-lg font-semibold text-gray-700">Thông tin người đại diện</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Họ và tên</label>
                    <input
                        type="text"
                        {...register("name")}
                        className={`mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none ${
                            errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.name?.message}</p>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700">Chức vụ</label>
                    <input
                        type="text"
                        {...register("position")}
                        className={`mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none ${
                            errors.position ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.position?.message}</p>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700">Email người đại diện</label>
                    <input
                        type="email"
                        {...register("recruiterEmail")}
                        className={`mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none ${
                            errors.recruiterEmail ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.recruiterEmail?.message}</p>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700">Số điện thoại</label>
                    <input
                        type="text"
                        {...register("phone")}
                        className={`mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.phone?.message}</p>
                </div>
            </div>

            <h3 className="mb-4 mt-8 text-lg font-semibold text-gray-700">Thông tin công ty</h3>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Tên công ty</label>
                    <input
                        type="text"
                        {...register("companyName")}
                        className="mt-1 w-full rounded-lg border bg-gray-100 p-2"
                        disabled
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700">Website</label>
                    <input
                        type="text"
                        {...register("website")}
                        className={`mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none ${
                            errors.website ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.website?.message}</p>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700">Địa chỉ công ty</label>
                    <input
                        type="text"
                        {...register("companyAddress")}
                        className={`mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none ${
                            errors.companyAddress ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.companyAddress?.message}</p>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700">Giới thiệu công ty</label>
                    <textarea
                        {...register("description")}
                        className="mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none"
                        rows="4"
                    ></textarea>
                    <p className="mt-1 text-xs text-red-600">{errors.description?.message}</p>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700">Logo công ty</label>
                    <input
                        type="file"
                        {...register("companyLogo")}
                        className="mt-1 w-full rounded-lg border p-2 focus:border-green-500 focus:outline-none"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                if (file.size > 5000000) {
                                    toast.info("File quá lớn. Hãy chọn file nhỏ hơn 5MB.");
                                } else {
                                    const fileURL = URL.createObjectURL(file);
                                    setPreviewURL(fileURL);
                                    setSelectedFile(file);
                                }
                            }
                        }}
                    />
                    <p className="mt-1 text-xs text-red-600">{errors.companyLogo?.message}</p>

                    {/* Hiển thị preview */}
                    {previewURL && (
                        <div className="mt-2">
                            <img
                                src={previewURL}
                                alt="Logo preview"
                                className="h-auto max-w-[200px] rounded-lg border-2 border-black"
                            />
                        </div>
                    )}
                </div>
            </div>

            <button
                type="submit"
                className="mt-8 w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
            >
                {isSubmitting ? "Đang lưu..." : "Lưu"}
            </button>
        </form>
    );
};

RecruiterProfileForm.propTypes = {
    userDetails: PropTypes.object,
};

export default RecruiterProfileForm;
