import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
import PropTypes from "prop-types";

const SearchJobCard = ({ logo, title, salary, companyName, address, type, updatedDate }) => {
    // State để quản lý trạng thái yêu thích
    const [isFavorite, setIsFavorite] = useState(false);

    // Toggle trạng thái yêu thích
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="flex w-full max-w-4xl rounded-2xl border border-green-200 bg-green-50 p-3 shadow-sm transition duration-200 ease-in-out hover:border-green-500 hover:shadow-md">
            {/* Logo công ty */}
            <div className="flex-shrink-0">
                <img src={logo} alt={companyName} className="h-32 w-32 rounded-md border bg-white object-cover" />
            </div>

            {/* Phần nội dung công việc */}
            <div className="flex flex-1 flex-col pl-4">
                {/* Thông tin công việc */}
                <div className="flex items-start justify-between">
                    {/* Tiêu đề và mức lương */}
                    <div className="flex-1">
                        <h3
                            className="line-clamp-2 pr-20 text-lg font-semibold text-gray-800 hover:text-green-600"
                            title={title}
                        >
                            {title}
                        </h3>
                    </div>
                    <span className="whitespace-nowrap text-sm font-medium text-green-600">{salary}</span>
                </div>

                {/* Tên công ty */}
                <p className="line-clamp-1 text-base text-gray-500" title={companyName}>
                    {companyName}
                </p>

                {/* Thông tin bổ sung: Địa điểm và kinh nghiệm */}
                <div className="mb-2 mt-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-3xl bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700">
                        {address}
                    </span>
                    <span className="rounded-3xl bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700">{type}</span>
                </div>

                {/* Thanh ngang (hr) chỉ bên nội dung */}
                <div className="w-full pr-4">
                    <hr className="border-gray-200" />
                </div>

                {/* Hàng chứa ngày cập nhật và nút yêu thích */}
                <div className="flex items-center justify-between">
                    {/* Ngày cập nhật */}
                    <p className="text-sm text-gray-400">Cập nhật: {updatedDate}</p>

                    {/* Nút yêu thích */}
                    <button
                        onClick={toggleFavorite}
                        className="pt-1 text-green-500 hover:text-green-600 focus:outline-none"
                    >
                        {isFavorite ? <Favorite className="h-6 w-6" /> : <FavoriteBorder className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Kiểm tra kiểu dữ liệu với PropTypes
SearchJobCard.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    updatedDate: PropTypes.string.isRequired,
};

export default SearchJobCard;
