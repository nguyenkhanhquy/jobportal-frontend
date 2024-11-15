import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePreviousClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-center gap-4 py-4 text-sm font-medium text-gray-700">
            {/* Nút Previous */}
            <button
                onClick={handlePreviousClick}
                className={`text-green-600 hover:underline ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
                disabled={currentPage === 1}
            >
                {"<"}
            </button>

            {/* Số trang */}
            <span>
                {currentPage} / {totalPages} trang
            </span>

            {/* Nút Next */}
            <button
                onClick={handleNextClick}
                className={`text-green-600 hover:underline ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
                disabled={currentPage === totalPages}
            >
                {">"}
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
