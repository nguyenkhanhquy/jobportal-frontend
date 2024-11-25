import PropTypes from "prop-types";

const HomeJobCard = ({ job }) => {
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
                    src={job.company.logo}
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
                </div>
            </div>
        </div>
    );
};

HomeJobCard.propTypes = {
    job: PropTypes.object.isRequired,
};

export default HomeJobCard;
