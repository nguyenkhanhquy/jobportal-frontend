import MainLayout from "../../layouts/MainLayout/MainLayout";
import HomeSearchBar from "../../components/search/SearchBar/HomeSearchBar";
import SectionBackGround from "/images/SectionBackGround.jpg";

const HomePage = () => {
    return (
        <MainLayout title="Trang chủ">
            {/* Section chứa thanh tìm kiếm */}
            <div
                className="relative flex h-[400px] w-full items-center justify-center"
                style={{
                    backgroundImage: `url(${SectionBackGround})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative z-10 w-full max-w-5xl px-4">
                    <h2 className="mb-6 text-center text-2xl font-bold text-white">
                        Tìm kiếm công việc mơ ước của bạn
                    </h2>
                    <HomeSearchBar />
                </div>
            </div>

            {/* Nội dung khác */}
            <div className="container mx-auto py-8">
                <h1 className="text-center text-2xl font-semibold">Welcome to HomePage</h1>
            </div>
        </MainLayout>
    );
};

export default HomePage;
