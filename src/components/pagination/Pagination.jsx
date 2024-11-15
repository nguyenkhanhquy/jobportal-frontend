import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
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
        <div className="flex items-center justify-center gap-4 py-4 text-base font-medium text-gray-400">
            {/* Nút Previous */}
            <button
                onClick={handlePreviousClick}
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
                disabled={currentPage === 1}
            >
                <ChevronLeft />
            </button>

            {/* Số trang */}
            <span>
                <span className={"text-green-600"}>{currentPage}</span> / {totalPages} trang
            </span>

            {/* Nút Next */}
            <button
                onClick={handleNextClick}
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
                disabled={currentPage === totalPages}
            >
                <ChevronRight />
            </button>
        </div>
    );
};

CustomPagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default CustomPagination;
