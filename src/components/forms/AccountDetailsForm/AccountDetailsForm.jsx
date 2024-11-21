import PropTypes from "prop-types";

const AccountDetailsForm = ({ userDetails }) => {
    return (
        <div className="mx-auto max-w-lg p-6">
            <h2 className="mb-6 text-3xl font-bold text-green-800">THÔNG TIN TÀI KHOẢN</h2>

            {/* Id tài khoản */}
            <div className="mb-4 flex items-center">
                <label className="w-1/3 text-base font-bold text-gray-700">ID:</label>
                <div className="flex-1 bg-transparent p-2 text-gray-800">{userDetails.id}</div>
            </div>

            {/* Email */}
            <div className="mb-4 flex items-center">
                <label className="w-1/3 text-base font-bold text-gray-700">Email:</label>
                <div className="flex-1 bg-transparent p-2 text-gray-800">{userDetails.email}</div>
            </div>

            {/* Quyền truy cập */}
            <div className="mb-4 flex items-center">
                <label className="w-1/3 text-base font-bold text-gray-700">Quyền truy cập:</label>
                <div className="flex-1 bg-transparent p-2 text-gray-800">{userDetails.role}</div>
            </div>

            {/* Ngày tạo */}
            <div className="mb-4 flex items-center">
                <label className="w-1/3 text-base font-bold text-gray-700">Ngày tạo:</label>
                <div className="flex-1 bg-transparent p-2 text-gray-800">{userDetails.registrationDate}</div>
            </div>

            {/* Trạng thái */}
            <div className="mb-4 flex items-center">
                <label className="w-1/3 text-base font-bold text-gray-700">Trạng thái:</label>
                <div className={`flex-1 p-2 ${userDetails.active ? "text-green-700" : "text-red-700"}`}>
                    {userDetails.active ? "Đã kích hoạt" : "Chưa kích hoạt"}
                </div>
            </div>
        </div>
    );
};

// Định nghĩa kiểu dữ liệu của các props
AccountDetailsForm.propTypes = {
    userDetails: PropTypes.object,
};

export default AccountDetailsForm;
