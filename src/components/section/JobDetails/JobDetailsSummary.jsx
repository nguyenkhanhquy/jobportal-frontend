import PropTypes from "prop-types";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CategoryIcon from "@mui/icons-material/Category";

const JobDetailsSummary = ({ jobPosition, salary, remote, type, field }) => {
    return (
        <div className="mx-auto mb-6 w-full max-w-5xl rounded-lg border bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-bold text-gray-800">Thông tin chung</h2>
            <div className="flex flex-col gap-4 text-gray-700">
                {/* Vị trí công việc */}
                <div className="flex items-center">
                    <WorkOutlineIcon className="mr-2 text-green-600" />
                    <span className="font-semibold">Vị trí:</span>
                    <span className="ml-2">{jobPosition}</span>
                </div>

                {/* Mức lương */}
                <div className="flex items-center">
                    <AttachMoneyIcon className="mr-2 text-green-600" />
                    <span className="font-semibold">Mức lương:</span>
                    <span className="ml-2">{salary}</span>
                </div>

                {/* Loại hình làm việc (Remote/On-site) */}
                <div className="flex items-center">
                    <LocationOnIcon className="mr-2 text-green-600" />
                    <span className="font-semibold">Loại hình:</span>
                    <span className="ml-2">{remote}</span>
                </div>

                {/* Loại hợp đồng */}
                <div className="flex items-center">
                    <BusinessCenterIcon className="mr-2 text-green-600" />
                    <span className="font-semibold">Loại hợp đồng:</span>
                    <span className="ml-2">{type}</span>
                </div>

                {/* Lĩnh vực */}
                <div className="flex items-center">
                    <CategoryIcon className="mr-2 text-green-600" />
                    <span className="font-semibold">Lĩnh vực:</span>
                    <span className="ml-2">{field || "Thông tin đang được cập nhật..."}</span>
                </div>
            </div>
        </div>
    );
};

JobDetailsSummary.propTypes = {
    jobPosition: PropTypes.string,
    salary: PropTypes.string,
    remote: PropTypes.string,
    type: PropTypes.string,
    field: PropTypes.string,
};

export default JobDetailsSummary;
