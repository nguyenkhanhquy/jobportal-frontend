import PropTypes from "prop-types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const JobInfoTab = ({ description, requirements, benefits, address, workingTime }) => {
    return (
        <div className="mx-auto mt-4 w-[90%] max-w-4xl rounded-lg">
            {/* Mô tả công việc */}
            <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold text-green-700">Mô tả công việc</h3>
                <p className="text-gray-700">{description || "Thông tin đang được cập nhật..."}</p>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Yêu cầu ứng viên */}
            <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold text-green-700">Yêu cầu ứng viên</h3>
                <ul className="ml-6 list-disc text-gray-700">
                    {requirements && requirements.length > 0 ? (
                        requirements.map((item, index) => (
                            <li key={index} className="mb-2">
                                {item}
                            </li>
                        ))
                    ) : (
                        <p>Thông tin đang được cập nhật...</p>
                    )}
                </ul>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Quyền lợi */}
            <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold text-green-700">Quyền lợi</h3>
                <ul className="ml-6 list-disc text-gray-700">
                    {benefits && benefits.length > 0 ? (
                        benefits.map((item, index) => (
                            <li key={index} className="mb-2">
                                {item}
                            </li>
                        ))
                    ) : (
                        <p>Thông tin đang được cập nhật...</p>
                    )}
                </ul>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Thời gian làm việc */}
            <div className="flex items-start">
                <AccessTimeIcon className="mr-2 text-green-600" />
                <div>
                    <h3 className="mb-1 text-lg font-semibold text-green-700">Thời gian làm việc</h3>
                    <p className="text-gray-700">{workingTime || "Thông tin đang được cập nhật..."}</p>
                </div>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Địa điểm làm việc */}
            <div className="mb-6 flex items-start">
                <LocationOnIcon className="mr-2 text-green-600" />
                <div>
                    <h3 className="mb-1 text-lg font-semibold text-green-700">Địa điểm làm việc</h3>
                    <p className="text-gray-700">{address || "Thông tin đang được cập nhật..."}</p>
                </div>
            </div>
        </div>
    );
};

// Định nghĩa PropTypes để kiểm soát các kiểu dữ liệu truyền vào
JobInfoTab.propTypes = {
    description: PropTypes.string,
    requirements: PropTypes.arrayOf(PropTypes.string),
    benefits: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
    workingTime: PropTypes.string,
};

export default JobInfoTab;
