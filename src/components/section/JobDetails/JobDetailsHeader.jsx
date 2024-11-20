import PropTypes from "prop-types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoneyTwoToneIcon from "@mui/icons-material/MoneyTwoTone";

import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import { saveJobPost } from "../../../services/jobPostService";
import JobApplicationModal from "../../modals/JobApplicationModal/JobApplicationModal";

const JobDetailHeader = ({ id, logo, title, companyName, address, updatedDate, expiryDate, salary, saved }) => {
    const { isAuthenticated } = useAuth();
    const [isSaved, setIsSaved] = useState(saved);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveJob = async () => {
        try {
            const data = await saveJobPost(id);
            if (!data.success) {
                throw new Error(data.message || "Lỗi máy chủ, vui lòng thử lại sau!");
            }
            setIsSaved((prev) => !prev);
            toast.success(data.message);
        } catch (error) {
            if (error.statusCode === 401) {
                toast.info("Vui lòng đăng nhập để lưu");
            } else {
                toast.error(error.message);
            }
        }
    };

    return (
        <div className="container mx-auto flex flex-col items-center gap-6 rounded-lg border bg-white p-4 shadow-lg sm:flex-row sm:flex-wrap">
            {/* Logo công ty */}
            <div className="max-w-[150px] flex-shrink-0">
                <img src={logo} alt={`${companyName} Logo`} className="h-36 w-36 rounded-lg object-cover" />
            </div>

            {/* Thông tin công việc */}
            <div className="flex flex-1 flex-col gap-2 overflow-hidden">
                {/* Tiêu đề và tên công ty */}
                <h1 className="line-clamp-2 break-words text-xl font-bold text-gray-800">{title}</h1>
                <p className="text-base font-medium text-gray-600">{companyName}</p>

                {/* Địa chỉ */}
                <div className="flex items-center gap-2 break-words text-base text-gray-500">
                    <LocationOnIcon fontSize="medium" />
                    <p>{address}</p>
                </div>

                {/* Ngày cập nhật và hết hạn cùng một dòng */}
                <div className="flex flex-wrap items-center gap-4 text-base text-gray-500">
                    <div className="flex items-center gap-1">
                        <CalendarTodayIcon fontSize="medium" />
                        <p>Cập nhật: {updatedDate}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <AccessTimeIcon fontSize="medium" />
                        <p>Hết hạn: {expiryDate}</p>
                    </div>
                </div>

                {/* Mức lương */}
                <div className="mt-2 flex items-center gap-2 text-base font-semibold text-gray-500">
                    <MoneyTwoToneIcon fontSize="medium" />
                    <p className="text-green-600">{salary}</p>
                </div>
            </div>

            {/* Các nút hành động */}
            <div className="flex w-full flex-col gap-3 sm:w-auto">
                {expiryDate > new Date().toISOString() ? (
                    <button
                        onClick={
                            isAuthenticated
                                ? () => setIsModalOpen(true)
                                : () => {
                                      toast.info("Vui lòng đăng nhập để ứng tuyển");
                                  }
                        }
                        className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                    >
                        Ứng tuyển ngay
                    </button>
                ) : (
                    <div className="w-full cursor-not-allowed rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white">
                        Hết hạn ứng tuyển
                    </div>
                )}

                <button
                    onClick={handleSaveJob}
                    className="w-full rounded-md border border-green-600 px-4 py-2 text-sm font-semibold text-green-600 hover:bg-green-100"
                >
                    {isSaved ? "Bỏ lưu việc làm" : "Lưu việc làm"}
                </button>
            </div>

            {/* Modal ứng tuyển */}
            {isModalOpen && (
                <JobApplicationModal
                    jobPostId={id} // Truyền id công việc vào modal
                    jobTitle={title} // Truyền tiêu đề công việc vào modal
                    onClose={() => setIsModalOpen(false)} // Đóng modal
                />
            )}
        </div>
    );
};

JobDetailHeader.propTypes = {
    id: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    updatedDate: PropTypes.string.isRequired,
    expiryDate: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    saved: PropTypes.bool.isRequired,
};

export default JobDetailHeader;
