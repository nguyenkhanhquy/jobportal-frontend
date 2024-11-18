import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
import PropTypes from "prop-types";

const HomeJobCard = ({ job }) => {
    // State để quản lý trạng thái yêu thích
    const [isFavorite, setIsFavorite] = useState(false);

    // Toggle trạng thái yêu thích
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const handleCardClick = () => {
        window.open(`/search/${job.id}`, "_blank");
    };

    return (
        <div
            onClick={handleCardClick}
            className="flex w-[400px] cursor-pointer items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition duration-200 ease-in-out hover:border-green-500 hover:shadow-lg"
        >
            {/* Logo công ty */}
            <div className="flex-shrink-0">
                <img
                    src="https://res.cloudinary.com/dvutarxfu/image/upload/v1731772480/company/05542ff0-8101-4a55-9711-cb881d30e9f8/p1vau8pywwatddpbtewq.png" //{job.company.logo}
                    alt={job.company.name}
                    className="h-24 w-24 rounded-md border object-cover"
                />
            </div>

            {/* Thông tin công việc */}
            <div className="flex flex-1 flex-col pl-4">
                <h3 className="line-clamp-1 text-lg font-semibold text-gray-800 hover:text-green-600" title={job.title}>
                    {job.title}
                </h3>
                <p className="line-clamp-1 text-sm text-gray-500" title={job.company.name}>
                    {job.company.name}
                </p>

                {/* Thông tin lương, địa điểm và nút yêu thích */}
                <div className="mt-2 flex items-center gap-2">
                    <span className="rounded bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700">
                        {job.salary}
                    </span>
                    <span className="rounded bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700">{job.type}</span>

                    {/* Nút yêu thích */}
                    <button
                        onClick={toggleFavorite}
                        className="ml-auto p-2 text-green-500 hover:text-green-600 focus:outline-none"
                    >
                        {isFavorite ? <Favorite className="h-5 w-5" /> : <FavoriteBorder className="h-5 w-5" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

HomeJobCard.propTypes = {
    job: PropTypes.object.isRequired,
};

export default HomeJobCard;
