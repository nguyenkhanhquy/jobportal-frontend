import PropTypes from "prop-types";
import HomeSearchBar from "../../search/SearchBar/HomeSearchBar";
import SectionBackGround from "/images/SectionBackGround.jpg";

const SearchSection = ({ title }) => {
    return (
        <div
            className="relative flex h-[400px] w-full items-center justify-center"
            style={{
                backgroundImage: `url(${SectionBackGround})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay màu đen để tăng độ tương phản */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Nội dung bên trong section */}
            <div className="relative z-10 w-full max-w-5xl px-4">
                <h2 className="mb-6 text-center text-2xl font-bold text-white">{title}</h2>
                <HomeSearchBar />
            </div>
        </div>
    );
};

// Định nghĩa kiểu dữ liệu cho component
SearchSection.propTypes = {
    title: PropTypes.string,
};

export default SearchSection;
