import PropTypes from "prop-types";
import ApplicationListTable from "../../table/ApplicationListTable/ApplicationListTable";
import CloseIcon from "@mui/icons-material/Close";

const ApplicationListModal = ({ isOpen, title, jobApplicationData, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-4xl rounded-lg bg-white shadow-lg">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4">
                    <h2 className="text-lg font-bold text-green-600">
                        Danh sách ứng tuyển: <span className="text-gray-900">{title}</span>
                    </h2>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 text-gray-500 hover:bg-gray-200"
                        aria-label="Close"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    <ApplicationListTable applications={jobApplicationData} />
                </div>

                {/* Footer */}
                <div className="flex justify-end border-t border-gray-300 px-6 py-4">
                    <button
                        onClick={onClose}
                        className="rounded-lg border border-green-700 px-4 py-3 text-sm font-medium text-green-600 hover:bg-green-50"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

ApplicationListModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    jobApplicationData: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ApplicationListModal;
