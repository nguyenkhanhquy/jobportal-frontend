import PropTypes from "prop-types";

const EmployerListingModal = ({ isOpen, onClose, employer }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-xl">
                {/* Tiêu đề Modal */}
                <h2 className="mb-6 border-b pb-2 text-2xl font-semibold text-gray-800">
                    Thông tin tài khoản: {employer.email || "Chưa cập nhật"}
                </h2>
                {/* Nội dung Modal */}
                <div className="space-y-6">
                    {/* Thông tin công ty */}
                    <div>
                        <h3 className="mb-4 text-lg font-medium text-gray-700">Thông tin công ty</h3>
                        <div className="flex items-start gap-4">
                            {/* Logo */}
                            <div>
                                <img
                                    src={employer.companyLogo || "/images/logo.png"}
                                    alt="Company Logo"
                                    className="h-24 w-24 rounded border object-cover"
                                />
                            </div>
                            {/* Thông tin công ty */}
                            <div className="flex-1 space-y-2">
                                <div className="flex">
                                    <strong className="w-40 text-gray-600">Công ty:</strong>
                                    <span>{employer.companyName || "Chưa cập nhật"}</span>
                                </div>
                                <div className="flex">
                                    <strong className="w-40 text-gray-600">Website:</strong>
                                    <span>
                                        {employer.website ? (
                                            <a
                                                href={employer.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline"
                                            >
                                                {employer.website}
                                            </a>
                                        ) : (
                                            "Chưa cập nhật"
                                        )}
                                    </span>
                                </div>
                                <div className="flex">
                                    <strong className="w-40 text-gray-600">Địa chỉ:</strong>
                                    <span>{employer.companyAddress || "Chưa cập nhật"}</span>
                                </div>
                                <div className="flex">
                                    <strong className="w-40 text-gray-600">Mô tả:</strong>
                                    <span>{employer.description || "Chưa cập nhật"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Người đại diện */}
                    <div>
                        <h3 className="mb-4 text-lg font-medium text-gray-700">Người đại diện</h3>
                        <div className="space-y-2">
                            <div className="flex">
                                <strong className="w-40 text-gray-600">Họ và tên:</strong>
                                <span>{employer.name || "Chưa cập nhật"}</span>
                            </div>
                            <div className="flex">
                                <strong className="w-40 text-gray-600">Chức vụ:</strong>
                                <span>{employer.position || "Chưa cập nhật"}</span>
                            </div>
                            <div className="flex">
                                <strong className="w-40 text-gray-600">Email liên hệ:</strong>
                                <span>{employer.recruiterEmail || "Chưa cập nhật"}</span>
                            </div>
                            <div className="flex">
                                <strong className="w-40 text-gray-600">Số điện thoại:</strong>
                                <span>{employer.phone || "Chưa cập nhật"}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Nút đóng */}
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

EmployerListingModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    employer: PropTypes.shape({
        email: PropTypes.string,
        companyLogo: PropTypes.string,
        companyName: PropTypes.string,
        website: PropTypes.string,
        companyAddress: PropTypes.string,
        description: PropTypes.string,
        name: PropTypes.string,
        position: PropTypes.string,
        recruiterEmail: PropTypes.string,
        phone: PropTypes.string,
    }),
};

export default EmployerListingModal;
