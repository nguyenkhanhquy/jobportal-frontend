import PropTypes from "prop-types";

const SortBar = ({ totalRecords, sortOption, onSortChange }) => {
    return (
        <div className="sticky top-14 flex items-center bg-[#19734e] p-1">
            <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
                {/* Hiển thị số lượng công việc */}
                <p className="text-lg font-medium text-white">
                    <span className="font-semibold text-white">{totalRecords}</span> việc phù hợp
                </p>

                {/* Phần sắp xếp */}
                <div className="flex items-center space-x-3">
                    <label className="text-sm font-medium text-white">Sắp xếp theo:</label>
                    <div className="relative">
                        <select
                            value={sortOption}
                            onChange={(e) => onSortChange(e.target.value)}
                            className="w-[200px] appearance-none rounded-lg border border-gray-300 bg-gray-50 py-2 pl-4 pr-10 text-gray-700 shadow-sm transition-all duration-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            <option value="default">Mặc định</option>
                            <option value="latest">Việc làm mới nhất</option>
                            <option value="oldest">Việc làm cũ nhất</option>
                            <option value="recentUpdate">Cập nhật gần nhất</option>
                        </select>
                        {/* Icon dropdown */}
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SortBar.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    sortOption: PropTypes.string.isRequired,
    onSortChange: PropTypes.func.isRequired,
};

export default SortBar;
