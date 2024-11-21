import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import { formatDate } from "../../../utils/dateUtil";

const ApplicationListTable = ({ applications }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left text-base font-bold text-gray-600">
                            Ứng viên
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-base font-bold text-gray-600">
                            Ngày ứng tuyển
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-base font-bold text-gray-600">
                            Thư giới thiệu
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center text-base font-bold text-gray-600">
                            Xem CV
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((application, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 text-base text-gray-800">
                                {application.name || "Không rõ"}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-base text-gray-800">
                                {formatDate(application.applyDate) || "Không rõ"}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-base text-gray-800">
                                {application.coverLetter || "Không có thư giới thiệu"}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                <IconButton
                                    title="Xem CV"
                                    color="secondary"
                                    onClick={() => {
                                        if (application?.cv) {
                                            window.location.href = application.cv;
                                        } else {
                                            alert("Cv không tồn tại!");
                                        }
                                    }}
                                >
                                    <ContactPageOutlinedIcon className="text-green-600" />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

ApplicationListTable.propTypes = {
    applications: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            applyDate: PropTypes.string.isRequired,
            coverLetter: PropTypes.string,
            cvUrl: PropTypes.string,
        }),
    ).isRequired,
};

export default ApplicationListTable;
