import PropTypes from "prop-types";

const JobSeekerInfoModal = ({ isOpen, onClose, jobSeeker }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
                {/* Dynamic Title */}
                <h2 className="mb-6 border-b pb-2 text-2xl font-semibold text-gray-800">
                    Thông tin tài khoản: {jobSeeker.email || "Chưa cập nhật"}
                </h2>
                {/* Content Section */}
                <div className="space-y-4">
                    <div className="flex items-center">
                        <strong className="w-48 text-gray-600">Họ và tên:</strong>
                        <span>{jobSeeker.fullName || "Chưa cập nhật"}</span>
                    </div>
                    <div className="flex items-center">
                        <strong className="w-48 text-gray-600">Email:</strong>
                        <span>{jobSeeker.email || "Chưa cập nhật"}</span>
                    </div>
                    <div className="flex items-center">
                        <strong className="w-48 text-gray-600">Số điện thoại:</strong>
                        <span>{jobSeeker.phone || "Chưa cập nhật"}</span>
                    </div>
                    <div className="flex items-center">
                        <strong className="w-48 text-gray-600">Ngày sinh:</strong>
                        <span>{jobSeeker.dob || "Chưa cập nhật"}</span>
                    </div>
                    <div className="flex items-center">
                        <strong className="w-48 text-gray-600">Địa chỉ:</strong>
                        <span>{jobSeeker.address || "Chưa cập nhật"}</span>
                    </div>
                    <div className="flex items-center">
                        <strong className="w-48 text-gray-600">Kinh nghiệm làm việc:</strong>
                        <span>{jobSeeker.workExperience || "Chưa cập nhật"}</span>
                    </div>
                </div>
                {/* Footer Section */}
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="rounded bg-green-500 px-5 py-2 text-white shadow-md transition-all hover:bg-green-600"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

JobSeekerInfoModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    jobSeeker: PropTypes.object.isRequired,
};

export default JobSeekerInfoModal;
